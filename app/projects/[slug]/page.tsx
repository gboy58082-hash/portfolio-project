import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/ui/Footer';
import CaseStudy from '@/components/projects/CaseStudy';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${project.title} | Anshu Portfolio`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO SELECTED WORK</span>
        </Link>

        {/* Case Study Header */}
        <div className="pb-10 border-b border-white/10 mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-bold">
              PROJECT {project.number}
            </span>
            <span>•</span>
            <span className="text-slate-400">{project.category}</span>
            <span>•</span>
            <span className="text-slate-400">{project.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 font-sans leading-tight">
            {project.title}
          </h1>

          <p className="text-cyan-400 font-mono text-base sm:text-lg font-semibold mb-6">
            {project.tagline}
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Case Study Deep-Dive */}
        <CaseStudy project={project} />

        {/* Bottom Navigation */}
        <div className="pt-16 border-t border-white/10 mt-16 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-mono font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
          >
            <span>DISCUSS THIS STRATEGY →</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
