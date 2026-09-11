'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { workExperience } from '@/data/experience';
import { Video, Calendar, MapPin, CheckCircle2, Camera, Sun, Film, Sparkles, Sliders, Users, Layers, Zap, Star, Box, SlidersHorizontal } from 'lucide-react';

const StudioScene = dynamic(() => import('../creative/StudioScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] rounded-2xl bg-[#0f0a0b] border border-[#e51b24]/30 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-[#e51b24] border-t-transparent animate-spin" />
    </div>
  ),
});

export default function Experience() {
  const exp = workExperience[0];
  const [activeStage, setActiveStage] = useState(0);
  const [show3DRig, setShow3DRig] = useState(false);

  const pipeline = [
    { title: "Camera", subtitle: "Cinema Setup", icon: <Camera size={16} />, detail: "Sensor calibration, exposure control, follow-focus rigs, and cinematic 4K capture." },
    { title: "Lighting", subtitle: "Studio Rigging", icon: <Sun size={16} />, detail: "3-point key, fill, and rim lighting with softboxes and diffusers tailored to product textures." },
    { title: "Content", subtitle: "Raw Footage", icon: <Film size={16} />, detail: "High-resolution commercial product b-roll and fashion movement assets." },
    { title: "Creative", subtitle: "Visual Hook", icon: <Sparkles size={16} />, detail: "Transforming raw studio footage into scroll-stopping short-form reels and carousels." },
    { title: "Campaign", subtitle: "Paid Pacing", icon: <Sliders size={16} />, detail: "Deploying high-intent ad sets in Meta Ads & Google Ads with precision targeting." },
    { title: "Audience", subtitle: "Segmentation", icon: <Users size={16} />, detail: "Connecting compelling visuals to high-intent consumers and lookalike audiences." },
    { title: "Conversion", subtitle: "Attributed ROI", icon: <CheckCircle2 size={16} />, detail: "Frictionless checkout completion and GA4 tracked key events." }
  ];

  return (
    <section id="experience" className="section-wrapper border-b border-[#261818]">
      <SectionHeading
        label="EXPERIENCE & CREATIVE DISCIPLINE"
        title="FROM CAMERA"
        highlight="TO CAMPAIGN."
        subtitle="20+ months hands-on commercial studio production at Colorful Clouds India, bridging physical camera and lighting physics with analytical digital acquisition."
      />

      {/* Main Experience Grid: Role Details + 2D Studio Staging Deck */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
        {/* Left Column: Role Details & Core Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="p-7 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/30 h-full flex flex-col justify-between shadow-xl">
            <div>
              {/* Role Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#261818] mb-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#1f1012] border border-[#e51b24]/50 flex items-center justify-center text-[#e51b24] shadow-[0_0_15px_rgba(229,27,36,0.2)] shrink-0">
                    <Video size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-white font-['Bebas_Neue',sans-serif] uppercase tracking-wide">
                      {exp.role}
                    </h3>
                    <div className="text-[#e51b24] font-bold font-mono text-xs uppercase tracking-wider mt-0.5">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#e51b24]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#e51b24]" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#e51b24]/20 border border-[#e51b24]/40 text-[#e51b24] font-bold text-[10px]">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {exp.metrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-[#140c0d] border border-[#261818] text-center">
                    <div className="text-3xl font-normal text-[#e51b24] font-['Bebas_Neue',sans-serif] tracking-wider">{m.value}</div>
                    <div className="font-mono text-[10px] text-white uppercase tracking-wider mt-0.5 font-semibold">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-2.5">
                {exp.responsibilities.slice(0, 3).map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-white text-xs sm:text-sm leading-relaxed font-medium">
                    <CheckCircle2 size={16} className="text-[#e51b24] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean 2D Studio Staging & Rigging Deck */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="p-7 rounded-xl bg-[#0f0a0b] border border-[#261818] h-full flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#261818] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1f1012] border border-[#e51b24]/30 flex items-center justify-center text-[#e51b24]">
                    <Layers size={16} />
                  </div>
                  <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                    STUDIO RIGGING SUITE
                  </span>
                </div>

                {/* 2D / 3D Mode Toggle */}
                <div className="flex items-center gap-1 bg-[#0a0707] p-1 rounded-lg border border-[#e51b24]/40">
                  <button
                    onClick={() => setShow3DRig(false)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                      !show3DRig
                        ? 'bg-[#e51b24] text-white shadow-[0_0_10px_rgba(229,27,36,0.8)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <SlidersHorizontal size={11} />
                    <span>SPECS</span>
                  </button>
                  <button
                    onClick={() => setShow3DRig(true)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                      show3DRig
                        ? 'bg-[#e51b24] text-white shadow-[0_0_10px_rgba(229,27,36,0.8)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Box size={11} />
                    <span>3D RIG</span>
                  </button>
                </div>
              </div>

              {show3DRig ? (
                /* Interactive 3D Studio Canvas */
                <div className="mb-4">
                  <StudioScene />
                  <div className="mt-2 text-center">
                    <span className="font-mono text-[10px] text-[#e51b24] uppercase tracking-wider">
                      ★ INTERACTIVE 3D CAM &amp; LIGHTING SETUP &bull; ROTATES WITH SCENE ★
                    </span>
                  </div>
                </div>
              ) : (
                /* 3 Core Production Capabilities Cards */
                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/40 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-white mb-1">
                      <Camera size={14} className="text-[#e51b24]" />
                      <span>CINEMA CAMERA & OPTICAL RIGGING</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      Follow-focus gearing, matte box filtration, prime lenses, and 4K exposure calibration for dynamic e-commerce movement.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/40 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-white mb-1">
                      <Sun size={14} className="text-[#e51b24]" />
                      <span>3-POINT STUDIO LIGHTING ARCHITECTURE</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      Key, fill, and rim light softboxes configured with honeycombs and diffusers to highlight product contours and garment textures.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/40 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-white mb-1">
                      <Zap size={14} className="text-[#e51b24]" />
                      <span>COMMERCIAL STAGING & TURNTABLE STAGES</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      70+ e-commerce turntable product shoots and 20+ fashion model shoot environments managed from prep to final footage handoff.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Gear Tags */}
            <div className="pt-4 border-t border-[#261818]">
              <span className="font-mono text-xs text-white uppercase tracking-wider block mb-2 font-bold">
                RIGGING & GEAR DEPLOYED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exp.gearStaging.map((gear) => (
                  <span
                    key={gear}
                    className="px-2.5 py-1 rounded bg-[#140c0d] border border-[#261818] text-xs font-mono text-white font-medium"
                  >
                    {gear}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Step Transition Pipeline: Camera -> Conversion */}
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e51b24] font-bold">
            ★ THE 7-STAGE CREATIVE-TO-CONVERSION PIPELINE
          </span>
          <span className="text-xs font-mono text-white/80 font-medium">
            CLICK ANY STAGE TO INSPECT
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {pipeline.map((item, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#241012] border-[#e51b24] text-white shadow-[0_0_15px_rgba(229,27,36,0.35)]'
                    : 'bg-[#0f0a0b] border-[#261818] text-white hover:border-[#e51b24]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={isSelected ? 'text-[#e51b24]' : 'text-white/70'}>
                    {item.icon}
                  </span>
                  <span className="font-mono text-[10px] text-white/70 font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <div className="font-bold text-xs text-white uppercase tracking-wide">{item.title}</div>
                <div className="text-[10px] font-mono text-[#ded8cf] font-medium">{item.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/40 flex items-center justify-between flex-wrap gap-3">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-mono text-[#e51b24] font-bold mb-1 uppercase tracking-wider">
              STAGE 0{activeStage + 1} DEEP-DIVE: {pipeline[activeStage].title.toUpperCase()}
            </div>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
              {pipeline[activeStage].detail}
            </p>
          </div>
          <div className="px-3 py-1 rounded bg-[#1f1012] border border-[#e51b24]/40 font-mono text-xs text-[#e51b24] font-bold">
            Stage {activeStage + 1} of 7
          </div>
        </div>
      </div>
    </section>
  );
}
