'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { Camera, Sun, Film, Sparkles, Sliders, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const StudioScene = dynamic(() => import('./StudioScene'), { ssr: false });

export default function CreativeProduction() {
  const [activeStage, setActiveStage] = useState(0);

  const pipeline = [
    { title: "Camera", subtitle: "Cinema Setup", icon: <Camera size={18} />, detail: "Sensor calibration, exposure control, follow-focus rigs, and cinematic 4K capture." },
    { title: "Lighting", subtitle: "Studio Rigging", icon: <Sun size={18} />, detail: "3-point key, fill, and rim lighting with softboxes and diffusers tailored to product textures." },
    { title: "Content", subtitle: "Raw Footage", icon: <Film size={18} />, detail: "High-resolution commercial product b-roll and fashion movement assets." },
    { title: "Creative", subtitle: "Visual Hook", icon: <Sparkles size={18} />, detail: "Transforming raw studio footage into scroll-stopping short-form reels and carousels." },
    { title: "Campaign", subtitle: "Paid Pacing", icon: <Sliders size={18} />, detail: "Deploying high-intent ad sets in Meta Ads & Google Ads with precision targeting." },
    { title: "Audience", subtitle: "Segmentation", icon: <Users size={18} />, detail: "Connecting compelling visuals to high-intent consumers and lookalike audiences." },
    { title: "Conversion", subtitle: "Attributed ROI", icon: <CheckCircle2 size={18} />, detail: "Frictionless checkout completion and GA4 tracked key events." }
  ];

  return (
    <section id="creative" className="section-wrapper">
      <SectionHeading
        label="THE CORE DIFFERENTIATOR"
        title="I DON'T JUST UNDERSTAND MARKETING."
        highlight="I UNDERSTAND THE CREATIVE PROCESS BEHIND IT."
        subtitle="“My background in professional production gives me hands-on understanding of cameras, lighting, visual composition and commercial content environments—skills that complement digital marketing and creative campaign execution.”"
      />

      <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
        {/* 3D Studio Canvas */}
        <div className="lg:col-span-7">
          <StudioScene />
        </div>

        {/* Tactical Explanation */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-8 border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-3 font-sans">
              From Camera Rigging to Campaign Scaling
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Most digital marketers only look at ad account dashboards without understanding how visual assets are produced. Having managed equipment staging for 70+ e-commerce shoots and 20+ model shoots at Colorful Clouds India, I know the physics of light, framing, and pacing that turn ordinary product footage into high-converting commercial ad assets.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>COLORFUL CLOUDS INDIA</span>
              <span>20+ MONTHS ON SET</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* 7-Step Transition Pipeline */}
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
            THE 7-STAGE CREATIVE-TO-CONVERSION TRANSITION
          </span>
          <span className="text-xs font-mono text-slate-500">
            CLICK ANY STAGE TO INSPECT
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {pipeline.map((item, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,242,254,0.2)] scale-105'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={isSelected ? 'text-cyan-400' : 'text-slate-500'}>
                    {item.icon}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <div className="font-bold text-sm text-white">{item.title}</div>
                <div className="text-[10px] font-mono text-slate-400">{item.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <GlassCard className="p-6 border-cyan-500/30 flex items-center justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
              STAGE 0{activeStage + 1} DEEP-DIVE: {pipeline[activeStage].title.toUpperCase()}
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {pipeline[activeStage].detail}
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
            Pipeline Transition {activeStage + 1} of 7
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
