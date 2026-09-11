'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded?: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFading(true);
            setTimeout(() => {
              if (onLoaded) onLoaded();
            }, 500);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoaded]);

  if (fading && progress >= 100) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4 max-w-md w-full">
        {/* Logo Monogram */}
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 mx-auto mb-6 flex items-center justify-center shadow-[0_0_25px_rgba(0,242,254,0.3)]">
          <span className="font-mono font-black text-xl text-cyan-400">A</span>
        </div>

        {/* Center Title */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-white mb-2 font-sans">
          ANSHU
        </h1>
        <p className="font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-8">
          DIGITAL GROWTH SYSTEM
        </p>

        {/* Loading Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>INITIALIZING EXPERIENCE</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-100 ease-out shadow-[0_0_15px_#00f2fe]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
