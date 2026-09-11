import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/ui/Footer';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Selected Projects | Anshu — Digital Marketing',
  description: 'Explore full-funnel digital marketing case studies, conversion rate optimization, Google Ads models, and technical SEO frameworks by Anshu.'
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO LAB OVERVIEW</span>
        </Link>

        <SectionHeading
          label="PORTFOLIO ARCHIVE"
          title="SELECTED"
          highlight="CASE STUDIES."
          subtitle="Comprehensive project documentation spanning paid acquisition, analytics architecture, conversion funnels, and organic visibility."
        />

        <div className="grid gap-8 mt-12">
          {projects.map((proj) => (
            <GlassCard key={proj.id} className="p-8 sm:p-10 border-white/10 hover:border-cyan-400/40">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-cyan-400">
                    {proj.number}
                  </span>
                  <span className="text-slate-600">/</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-mono text-xs text-cyan-300">
                    {proj.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-500">{proj.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 font-sans">
                {proj.title}
              </h2>
              <p className="font-mono text-xs text-cyan-400 font-semibold mb-4">
                {proj.tagline}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {proj.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10 flex-wrap gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-bold hover:text-white"
                >
                  <span>READ IMMERSIVE CASE STUDY</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
