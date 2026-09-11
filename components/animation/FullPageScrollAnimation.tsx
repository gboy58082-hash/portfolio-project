'use client';

import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;

export default function FullPageScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
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

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
      // Cover fit centered
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

  // Preload frame 1 immediately, then load remaining frames in small non-blocking batches
  useEffect(() => {
    const f1 = new Image();
    f1.src = getFramePath(1);
    f1.onload = () => {
      imagesRef.current.set(1, f1);
      drawFrame(f1);
    };

    let active = true;
    let nextIdx = 2;

    const loadNextBatch = () => {
      if (!active || nextIdx > TOTAL_FRAMES) return;
      const end = Math.min(nextIdx + 12, TOTAL_FRAMES);

      for (let i = nextIdx; i <= end; i++) {
        const frameIdx = i;
        const img = new Image();
        img.src = getFramePath(frameIdx);
        img.onload = () => {
          if (active) imagesRef.current.set(frameIdx, img);
        };
      }

      nextIdx = end + 1;
      if (nextIdx <= TOTAL_FRAMES) {
        setTimeout(loadNextBatch, 25);
      }
    };

    const timer = setTimeout(loadNextBatch, 50);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  // Track scroll position across the entire page (0 to docHeight) with silky LERP damping
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS+ inertia damping loop
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.12;

      const targetIdx = Math.min(
        Math.max(Math.round(currentFrameRef.current), 1),
        TOTAL_FRAMES
      );

      const images = imagesRef.current;
      let frame = images.get(targetIdx);

      // Graceful fallback to nearest available buffered frame
      if (!frame) {
        for (let o = 1; o < 35; o++) {
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
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden pointer-events-none">
      {/* 300-Frame Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />

      {/* Atmospheric Vignette & Contrast Overlay: ensures 100% legibility of all content */}
      <div className="absolute inset-0 bg-[#080606]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080606]/40 via-transparent to-[#080606]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(8,6,6,0.85)_100%)] pointer-events-none" />
    </div>
  );
}
