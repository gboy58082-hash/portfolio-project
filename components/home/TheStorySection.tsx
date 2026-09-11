'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Star } from 'lucide-react';

export default function TheStorySection() {
  return (
    <section id="about" className="relative py-24 bg-[#080506] overflow-hidden border-b border-[#261818]">
      {/* Background Red Halo */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#e51b24]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Story Typography & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Red Subtitle matching "THE STORY" */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black tracking-[0.25em] text-[#e51b24] uppercase">
                THE CORE ADVANTAGE
              </span>
            </div>

            {/* Massive Headline matching "LOYALTY. HONOR. REDEMPTION." */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-wide text-white uppercase leading-[0.92] font-['Bebas_Neue',sans-serif] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              CREATIVE. <br />
              STRATEGY. <br />
              <span className="text-[#e51b24] drop-shadow-[0_0_35px_rgba(229,27,36,0.6)]">CONVERSION.</span>
            </h2>

            {/* Narrative Body Copy - High Contrast, Crystal Clear Sentences */}
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl font-sans font-medium">
              Most digital marketers only look at ad dashboards. Having spent 20+ months on commercial sets at Colorful Clouds India rigging cinema cameras, configuring follow-focus systems, and setting up 3-point studio lighting for 70+ e-commerce shoots and 20+ model shoots, I understand the visual physics that capture consumer attention and turn impressions into revenue.
            </p>

            <p className="text-[#ded8cf] text-sm sm:text-base leading-relaxed max-w-xl font-sans font-normal">
              I bridge this creative discipline with quantitative performance marketing: full-funnel Google Ads expansion, Meta Ads pacing, GA4 event tracking, and conversion rate optimization.
            </p>

            {/* Red Action Button */}
            <div className="pt-2">
              <Link
                href="/#experience"
                className="rdr-btn-primary group text-sm"
              >
                <span>EXPLORE THE JOURNEY</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Studio Setup Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-xl xl:max-w-[560px] rounded-2xl bg-gradient-to-b from-[#241213] via-[#140b0c] to-[#0a0607] border-2 border-[#e51b24]/50 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_60px_rgba(229,27,36,0.3)] overflow-hidden text-left">
              {/* Crimson Backlight Glow */}
              <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#e51b24]/30 rounded-full blur-3xl pointer-events-none" />

              {/* Top Card Bar */}
              <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider relative z-10 border-b border-white/15 pb-3 mb-4">
                <span className="text-[#e51b24] flex items-center gap-1.5 font-black">
                  <Star size={13} className="fill-[#e51b24]" />
                  PRODUCTION RIGGING
                </span>
                <span className="text-white font-semibold">COLORFUL CLOUDS INDIA</span>
              </div>

              {/* Header Title directly above the Photo */}
              <div className="relative z-10 text-center mb-4 pb-3 border-b border-white/15">
                <h4 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-white uppercase tracking-wider leading-none drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                  FROM CAMERA TO CAMPAIGN
                </h4>
                <p className="font-mono text-xs text-[#e51b24] mt-1.5 font-bold tracking-widest uppercase">
                  STUDIO CRAFT &bull; ALGORITHMIC SCALE
                </p>
              </div>

              {/* User Studio Photo Addition */}
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-[#e51b24]/60 shadow-[0_0_30px_rgba(229,27,36,0.35)] bg-[#f8f9fa] group">
                <img
                  src="/images/studio-setup.jpg"
                  alt="Studio Camera, 3-Point Lighting, and Softbox Rigging Setup"
                  className="w-full h-72 sm:h-80 md:h-96 object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
              </div>

              {/* Bottom Feature Badges - High Contrast */}
              <div className="relative z-10 pt-4 mt-3 border-t border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                  <CheckCircle2 size={14} className="text-[#e51b24] shrink-0" />
                  <span>Follow-Focus & 4K Cinema Camera Exposure</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                  <CheckCircle2 size={14} className="text-[#e51b24] shrink-0" />
                  <span>3-Point Key, Fill & Rim Light Softbox Rigs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                  <CheckCircle2 size={14} className="text-[#e51b24] shrink-0" />
                  <span>70+ E-Commerce Product Turntable Staging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
