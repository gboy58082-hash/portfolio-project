'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import dynamic from 'next/dynamic';
import { Star, ShieldCheck, Sparkles, Box, UserCheck, Eye } from 'lucide-react';

const Credential3DCanvas = dynamic(() => import('./Credential3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-[#e51b24] border-t-transparent animate-spin" />
    </div>
  ),
});

export default function VerifiedCredentialCard() {
  const [viewMode, setViewMode] = useState<'profile' | '3d'>('profile');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full max-w-lg xl:max-w-[560px] lg:ml-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? '20px' : '0px'})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl bg-gradient-to-b from-[#1c1213] via-[#120b0c] to-[#0a0707] border-2 border-[#e51b24]/50 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_60px_rgba(229,27,36,0.3)] overflow-hidden text-left group w-full"
      >
        {/* Dynamic Holographic Glare Sheen */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(229, 27, 36, 0.25) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Ambient Red Halo Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#e51b24]/25 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Top Badge Bar */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="flex items-center justify-between text-xs font-mono font-bold tracking-wider relative z-20 pb-3 border-b border-white/10 mb-3"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e51b24] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e51b24]"></span>
            </span>
            <span className="text-[#e51b24] flex items-center gap-1 font-black text-sm tracking-widest drop-shadow-[0_0_10px_rgba(229,27,36,0.8)]">
              <Star size={14} className="fill-[#e51b24]" />
              VERIFIED CREDENTIAL
            </span>
          </div>

          {/* 3D Interactive Toggle Button */}
          <div className="flex items-center gap-1 bg-[#0a0707] p-1 rounded-lg border border-[#e51b24]/40">
            <button
              onClick={() => setViewMode('profile')}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === 'profile'
                  ? 'bg-[#e51b24] text-white shadow-[0_0_10px_rgba(229,27,36,0.8)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Show Photo Dossier"
            >
              <UserCheck size={11} />
              <span>PHOTO</span>
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                viewMode === '3d'
                  ? 'bg-[#e51b24] text-white shadow-[0_0_10px_rgba(229,27,36,0.8)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Show Interactive 3D Seal"
            >
              <Box size={11} />
              <span>3D SEAL</span>
            </button>
          </div>
        </div>

        {/* Center Visual Area: Dual Mode (3D Interactive Seal or Photo Dossier with 3D Holographic Frame) */}
        <div
          style={{ transform: 'translateZ(35px)' }}
          className="relative z-20 flex flex-col items-center py-2 min-h-[260px] justify-center"
        >
          {viewMode === '3d' ? (
            /* Interactive 3D WebGL Three.js Seal */
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#140a0b] to-[#080506] border border-[#e51b24]/60 shadow-[0_0_35px_rgba(229,27,36,0.4)] flex items-center justify-center">
              <Credential3DCanvas hovered={isHovered} />
              <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
                <span className="font-mono text-[9px] text-[#e51b24] uppercase tracking-widest bg-black/80 px-2.5 py-1 rounded-full border border-[#e51b24]/40 font-bold">
                  3D HOLOGRAPHIC SEAL &bull; INTERACTIVE
                </span>
              </div>
            </div>
          ) : (
            /* Photo Dossier with 3D Holographic Framing & Ambient Mini 3D Badge */
            <div
              suppressHydrationWarning
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-[#e51b24]/70 shadow-[0_0_40px_rgba(229,27,36,0.45)] mb-3.5 bg-[#0a0707] group"
            >
              <img
                suppressHydrationWarning
                src="/images/anshu-profile.jpg"
                alt="Anshu - Verified Digital Marketing Specialist"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* 3D Holographic Scanning Overlay Line */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#e51b24]/20 to-transparent animate-pulse" />

              {/* 3D Corner Targeting Reticles */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#e51b24]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#e51b24]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#e51b24]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#e51b24]" />

              {/* Live 3D Badge Watermark */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 border border-[#e51b24] text-[9px] font-mono text-[#e51b24] font-black flex items-center gap-1">
                <Box size={10} className="text-[#e51b24] animate-spin" />
                <span>3D VERIFIED</span>
              </div>
            </div>
          )}

          <h3 className="font-['Bebas_Neue',sans-serif] text-4xl sm:text-5xl tracking-wider text-white uppercase leading-none mt-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            ANSHU
          </h3>
          <p className="font-mono text-xs text-[#e51b24] font-bold tracking-widest uppercase mt-1 flex items-center gap-1.5">
            <span>PERFORMANCE</span>
            <span className="text-white/40">&bull;</span>
            <span>SEO</span>
            <span className="text-white/40">&bull;</span>
            <span>PAID MEDIA</span>
          </p>
        </div>

        {/* Bottom Metrics Pill with 3D Depth */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="grid grid-cols-3 gap-2 pt-3.5 mt-2 border-t border-white/20 text-center relative z-20"
        >
          <div className="p-2 rounded-lg bg-[#140c0d]/80 border border-[#261818] hover:border-[#e51b24]/50 transition-colors">
            <div className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-wider">20+</div>
            <div className="font-mono text-[10px] text-white uppercase tracking-wider font-semibold">Months Exp</div>
          </div>
          <div className="p-2 rounded-lg bg-[#1a0f11]/90 border border-[#e51b24]/40 hover:border-[#e51b24] transition-colors shadow-[0_0_15px_rgba(229,27,36,0.2)]">
            <div className="font-['Bebas_Neue',sans-serif] text-2xl text-[#e51b24] tracking-wider">70+</div>
            <div className="font-mono text-[10px] text-[#e51b24] uppercase tracking-wider font-bold">Shoots</div>
          </div>
          <div className="p-2 rounded-lg bg-[#140c0d]/80 border border-[#261818] hover:border-[#e51b24]/50 transition-colors">
            <div className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-wider">5</div>
            <div className="font-mono text-[10px] text-white uppercase tracking-wider font-semibold">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}
