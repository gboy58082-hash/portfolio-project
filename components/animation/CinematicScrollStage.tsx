'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Star } from 'lucide-react';

const TOTAL_FRAMES = 300;

export default function CinematicScrollStage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [frame1Ready, setFrame1Ready] = useState(false);
  const [activeFrameNum, setActiveFrameNum] = useState(1);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const animFrameIdRef = useRef<number | null>(null);

  const getFramePath = (idx: number) => {
    const num = Math.min(Math.max(Math.round(idx), 1), TOTAL_FRAMES);
    return `/frames/ezgif-frame-${String(num).padStart(3, '0')}.jpg`;
  };

  const drawToCanvas = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

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

  // 1. Preload frame 1 immediately so there is zero wait time
  useEffect(() => {
    const f1 = new Image();
    f1.src = getFramePath(1);
    f1.onload = () => {
      imagesRef.current.set(1, f1);
      setFrame1Ready(true);
      drawToCanvas(f1);
    };

    // 2. Preload all remaining frames progressively
    let active = true;
    const preloadAll = async () => {
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (!active) break;
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (active) imagesRef.current.set(i, img);
        };
      }
    };

    preloadAll();

    return () => {
      active = false;
    };
  }, []);

  // 3. Scroll event listener & continuous LERP loop
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.12;

      const targetIdx = Math.min(
        Math.max(Math.round(currentFrameRef.current), 1),
        TOTAL_FRAMES
      );

      setActiveFrameNum(targetIdx);

      // Find target frame or closest loaded frame
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
        drawToCanvas(frame);
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      const targetIdx = Math.round(currentFrameRef.current);
      const img = imagesRef.current.get(targetIdx) || imagesRef.current.get(1);
      if (img) drawToCanvas(img);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="cinematic-experience"
      className="relative w-full h-[380vh] bg-[#080606] border-b border-[#261818]"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
        />

        {/* Cinematic Vignette Overlays for Seamless Blending */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080606] via-transparent to-[#080606]/80" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(8,6,6,0.85)_100%)]" />

        {/* Cinematic Minimal Stage HUD */}
        <div className="absolute top-24 left-6 sm:left-12 pointer-events-none z-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-black tracking-[0.25em] text-[#e51b24] uppercase flex items-center gap-1.5">
              <Star size={12} className="fill-[#e51b24]" />
              CINEMATIC SCROLL EXPERIENCE
            </span>
          </div>
          <h2 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider leading-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.95)]">
            ALGORITHMIC <span className="text-[#e51b24]">VISION.</span>
          </h2>
          <p className="font-mono text-xs text-[#ded8cf] mt-1 font-semibold tracking-wider uppercase">
            300-FRAME INTERACTIVE SCROLL ANIMATION
          </p>
        </div>

        {/* Frame Tracker Pill Bottom Left */}
        <div className="absolute bottom-8 left-6 sm:left-12 pointer-events-none z-10">
          <div className="px-3.5 py-1.5 rounded-full bg-black/70 border border-[#e51b24]/40 font-mono text-xs text-white backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e51b24] animate-pulse" />
            <span className="text-white/80">FRAME</span>
            <span className="text-[#e51b24] font-bold">{String(activeFrameNum).padStart(3, '0')}</span>
            <span className="text-white/40">/ 300</span>
          </div>
        </div>

        {/* Scroll Hint Bottom Center */}
        <div className="absolute bottom-8 right-6 sm:right-12 pointer-events-none z-10 flex items-center gap-2 text-xs font-mono text-white/80">
          <span>SCROLL TO SCRUB ANIMATION</span>
          <ChevronDown size={16} className="text-[#e51b24] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
