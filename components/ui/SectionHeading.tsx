import React from 'react';
import { Star } from 'lucide-react';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-5xl'}`}>
      <div className={`inline-flex items-center gap-2 text-[#e51b24] font-mono text-xs uppercase tracking-[0.25em] font-bold mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <Star size={12} className="fill-[#e51b24] text-[#e51b24]" />
        <span>{label}</span>
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-white leading-[1.05] mb-4 font-['Bebas_Neue',sans-serif] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
        {title} {highlight && <span className="text-[#e51b24] drop-shadow-[0_0_20px_rgba(229,27,36,0.5)]">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="text-white text-base sm:text-lg leading-relaxed font-sans font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
