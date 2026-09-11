import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { certificationInfo } from '@/data/experience';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <SectionHeading
        label="06 / TRAINING"
        title="SPECIALIZED"
        highlight="CERTIFICATION."
        subtitle="7 intensive digital marketing modules verified through Internshala training."
      />

      <GlassCard className="p-8 sm:p-12 border-cyan-500/30" glow>
        <div className="flex flex-wrap items-start justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)] shrink-0">
              <Award size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={16} className="text-cyan-400" />
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
                  VERIFIED TRAINING
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
                {certificationInfo.title}
              </h3>
              <div className="text-base text-slate-300 font-semibold mt-0.5">
                {certificationInfo.provider} • <span className="font-mono text-cyan-400 text-xs">{certificationInfo.period}</span>
              </div>
            </div>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={13} />
            <span>{certificationInfo.status}</span>
          </div>
        </div>

        {/* 7 Modules Grid */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold block">
            INTENSIVE CURRICULUM MODULES
          </span>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {certificationInfo.modules.map((mod, i) => (
              <div
                key={mod.title}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-colors"
              >
                <div className="font-mono text-[10px] text-cyan-400 font-bold mb-1">
                  MODULE 0{i + 1}
                </div>
                <div className="font-sans font-bold text-sm text-white mb-1.5">
                  {mod.title}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
