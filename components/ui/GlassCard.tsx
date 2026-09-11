import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glow?: boolean;
  interactive?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  style,
  glow = false,
  interactive = true,
}: GlassCardProps) {
  return (
    <div
      style={style}
      className={`
        relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
        transition-all duration-300 ease-out
        ${interactive ? 'hover:bg-white/[0.05] hover:border-cyan-500/30 hover:shadow-[0_15px_35px_-10px_rgba(0,242,254,0.12)]' : ''}
        ${glow ? 'shadow-[0_0_30px_rgba(0,242,254,0.15)] border-cyan-500/30' : 'shadow-2xl shadow-black/60'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
