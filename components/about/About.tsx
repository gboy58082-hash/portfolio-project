'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { Target, Video, Layers, BarChart2, Compass, Sparkles } from 'lucide-react';

export default function About() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const pillars = [
    { title: "SEO", icon: <Compass size={16} className="text-cyan-400" />, desc: "Technical crawl audits, keyword difficulty research, high-ranking content architectures." },
    { title: "PAID MEDIA", icon: <Target size={16} className="text-blue-400" />, desc: "Google Ads, Meta Ads Manager, precision keyword intent and target ROAS bid pacing." },
    { title: "SOCIAL MEDIA", icon: <Layers size={16} className="text-indigo-400" />, desc: "Full-funnel organic and paid reach across Instagram, Facebook, and LinkedIn." },
    { title: "ANALYTICS", icon: <BarChart2 size={16} className="text-cyan-400" />, desc: "Custom GA4 funnel explorations, GTM event tagging, and multi-touch attribution." },
    { title: "E-COMMERCE", icon: <Sparkles size={16} className="text-emerald-400" />, desc: "Conversion Rate Optimization (CRO), cart friction removal, and lifecycle nurture." },
    { title: "CREATIVE STRATEGY", icon: <Video size={16} className="text-purple-400" />, desc: "Direct-response video scripting, commercial lighting setup, and hook-testing." },
  ];

  return (
    <section id="about" className="section-wrapper">
      <SectionHeading
        label="01 / ABOUT"
        title="CREATIVE THINKING."
        highlight="DATA-DRIVEN MARKETING."
        subtitle="Bridging physical studio camera and lighting craftsmanship with quantitative customer acquisition engines."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Professional Text */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-8 border-cyan-500/20 bg-white/[0.04]">
            <p className="text-xl sm:text-2xl text-slate-100 font-medium leading-relaxed mb-6 font-sans">
              “I'm a motivated digital marketing professional passionate about brand strategy, online consumer journeys, funnel optimization, email marketing, paid campaigns and e-commerce growth.”
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              With 20+ months of on-set experience rigging cinema camera systems and configuring studio lighting for 70+ e-commerce shoots and 20+ fashion shoots at Colorful Clouds India, I bring a rare edge to growth marketing: I know how commercial visual assets are staged and shot, and how to deploy them through paid algorithms to maximize audience conversion.
            </p>
          </GlassCard>

          {/* Pillars Grid */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block">
              CORE STRATEGIC PILLARS
            </span>
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  onMouseEnter={() => setActiveHighlight(item.title)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeHighlight === item.title
                      ? 'bg-cyan-500/10 border-cyan-400/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <span className="font-mono text-xs font-bold tracking-wider text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />

            {/* Futuristic Profile Card */}
            <GlassCard className="relative z-10 p-8 text-center flex flex-col items-center justify-center max-w-xs w-full aspect-square border-cyan-500/40 shadow-[0_0_40px_rgba(0,242,254,0.15)]">
              {/* Inner Monogram */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 border border-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(0,242,254,0.3)]">
                <span className="font-mono font-black text-3xl text-cyan-400">A</span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-1 font-sans">
                ANSHU
              </h3>
              <p className="font-mono text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-4">
                DIGITAL MARKETER
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {['PERFORMANCE', 'SEO', 'PAID MEDIA', 'STUDIO RIGGING'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-[11px] font-mono text-slate-500">
                New Delhi, India • 20+ Mo. Experience
              </span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
