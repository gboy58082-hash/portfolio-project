'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { educationList, certificationInfo } from '@/data/experience';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-wrapper border-b border-[#261818]">
      <SectionHeading
        label="ACADEMIC & TRAINING DOSSIER"
        title="CREDENTIALS"
        highlight="& FOUNDATION."
        subtitle="Formal computer applications foundation combined with intensive, verified digital marketing specializations."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Foundation */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#1f1012] border border-[#e51b24]/30 flex items-center justify-center text-[#e51b24]">
              <GraduationCap size={16} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              FORMAL EDUCATION TIMELINE
            </span>
          </div>

          <div className="space-y-3">
            {educationList.map((edu) => (
              <div key={edu.degree} className="p-5 rounded-xl bg-[#0f0a0b] border border-[#261818] hover:border-[#e51b24]/50 transition-all text-left">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                  <span className="font-mono text-xs text-[#e51b24] font-bold tracking-wider">
                    {edu.period}
                  </span>
                  {edu.board && (
                    <span className="font-mono text-xs text-white/80 font-semibold">
                      {edu.board}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-['Oswald','Bebas_Neue',sans-serif] uppercase tracking-wide mb-1">
                  {edu.degree}
                </h3>

                <div className="text-xs font-semibold text-white/90 mb-2 font-mono">
                  {edu.institution}
                </div>

                <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Internshala Certified Training */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#1f1012] border border-[#e51b24]/30 flex items-center justify-center text-[#e51b24]">
              <Award size={16} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              SPECIALIZED TRAINING
            </span>
          </div>

          <div className="p-6 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/50 shadow-xl text-left">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#261818] mb-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={14} className="text-[#e51b24]" />
                  <span className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">
                    VERIFIED CURRICULUM
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-['Oswald','Bebas_Neue',sans-serif] uppercase tracking-wide">
                  {certificationInfo.title}
                </h3>
                <div className="text-xs text-white font-semibold mt-1 font-mono">
                  {certificationInfo.provider} &bull; <span className="text-[#e51b24]">{certificationInfo.period}</span>
                </div>
              </div>

              <div className="px-3 py-1 rounded bg-[#e51b24]/20 border border-[#e51b24]/50 font-mono text-[11px] text-[#e51b24] font-bold flex items-center gap-1 shrink-0">
                <CheckCircle2 size={12} />
                <span>{certificationInfo.status}</span>
              </div>
            </div>

            {/* 7 Modules List */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#e51b24] font-bold block mb-2">
                ★ 7 INTENSIVE APPLIED MODULES:
              </span>

              <div className="grid sm:grid-cols-2 gap-2">
                {certificationInfo.modules.map((mod, i) => (
                  <div
                    key={mod.title}
                    className="p-3 rounded-lg bg-[#140c0d] border border-[#261818] text-left hover:border-[#e51b24]/40 transition-colors"
                  >
                    <div className="font-mono text-xs text-[#e51b24] font-bold">
                      0{i + 1} &bull; {mod.title}
                    </div>
                    <p className="text-white text-xs leading-relaxed mt-1 font-sans font-medium">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
