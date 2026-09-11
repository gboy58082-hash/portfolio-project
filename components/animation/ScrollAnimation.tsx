'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 300;

export default function ScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [frame1Ready, setFrame1Ready] = useState(false);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const animFrameIdRef = useRef<number | null>(null);

  const getFramePath = (idx: number) => {
    const num = Math.min(Math.max(Math.round(idx), 1), TOTAL_FRAMES);
    return `/frames/ezgif-frame-${String(num).padStart(3, '0')}.jpg`;
  };

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#080606';
    ctx.fillRect(0, 0, width, height);

    if (img.naturalWidth && img.naturalHeight) {
      const hRatio = width / img.naturalWidth;
      const vRatio = height / img.naturalHeight;
      const ratio = Math.max(hRatio, vRatio);

      const drawW = img.naturalWidth * ratio;
      const drawH = img.naturalHeight * ratio;
      const drawX = (width - drawW) / 2;
      const drawY = (height - drawH) / 2;

      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, drawX, drawY, drawW, drawH);
    }
    ctx.restore();
  };

  // Preload frame 1 immediately, then preload remaining
  useEffect(() => {
    const f1 = new Image();
    f1.src = getFramePath(1);
    f1.onload = () => {
      imagesRef.current.set(1, f1);
      setFrame1Ready(true);
      drawFrame(f1);
    };

    let active = true;
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (active) imagesRef.current.set(i, img);
      };
    }

    return () => {
      active = false;
    };
  }, []);

  // Scroll event & LERP animation loop
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.12;

      const targetIdx = Math.min(
        Math.max(Math.round(currentFrameRef.current), 1),
        TOTAL_FRAMES
      );

      const images = imagesRef.current;
      let frame = images.get(targetIdx);
      if (!frame) {
        for (let o = 1; o < 25; o++) {
          if (images.has(targetIdx - o)) {
            frame = images.get(targetIdx - o);
            break;
          }
          if (images.has(targetIdx + o)) {
            frame = images.get(targetIdx + o);
            break;
          }
        }
      }

      if (frame && frame.complete && frame.naturalWidth > 0) {
        drawFrame(frame);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    const handleResize = () => {
      const targetIdx = Math.round(currentFrameRef.current);
      const img = imagesRef.current.get(targetIdx) || imagesRef.current.get(1);
      if (img) drawFrame(img);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    <div className="relative bg-black text-white selection:bg-transparent">
      {/* Fixed Fullscreen Canvas */}
      <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black flex items-center justify-center pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Smooth Scroll Track Height: 500vh ensures smooth scrubbing */}
      <div className="relative z-10 h-[500vh] w-full pointer-events-none" />
    </div>
  );
}
