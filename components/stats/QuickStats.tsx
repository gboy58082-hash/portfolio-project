import React from 'react';
import GlassCard from '../ui/GlassCard';

export default function QuickStats() {
  const stats = [
    {
      value: "20+",
      unit: "MONTHS",
      label: "Creative Production Experience",
      subtext: "Studio Camera & Lighting Setup"
    },
    {
      value: "70+",
      unit: "SHOOTS",
      label: "E-Commerce Shoots",
      subtext: "Commercial Product Productions"
    },
    {
      value: "20+",
      unit: "SHOOTS",
      label: "Model Shoots",
      subtext: "Fashion & Commercial Sets"
    },
    {
      value: "5",
      unit: "BLUEPRINTS",
      label: "Digital Marketing Projects",
      subtext: "SEO, Ads, CRO & Strategy"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GlassCard className="p-6 sm:p-8" glow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((item, idx) => (
            <div key={item.label} className={`${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
                  {item.value}
                </span>
                <span className="font-mono text-xs text-cyan-400 font-bold">
                  {item.unit}
                </span>
              </div>
              <div className="font-sans font-bold text-slate-200 text-sm mt-1">
                {item.label}
              </div>
              <div className="font-mono text-[11px] text-slate-500 mt-0.5">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
