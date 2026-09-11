'use client';

import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  id?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  id
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] hover:scale-105 active:scale-95',
    secondary:
      'bg-white/[0.04] text-white border border-white/20 px-6 py-3 backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:scale-105 active:scale-95',
    ghost:
      'bg-transparent text-slate-300 hover:text-cyan-400 px-4 py-2 hover:bg-white/[0.04]'
  };

  const transformStyle = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
  };

  if (href) {
    return (
      <a
        id={id}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
