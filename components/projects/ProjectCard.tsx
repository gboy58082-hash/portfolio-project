'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import GlassCard from '../ui/GlassCard';
import { ArrowRight, Layers, Target, Compass, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card-interactive transition-all duration-300 hover:-translate-y-1"
    >
      <GlassCard
        className={`p-8 sm:p-10 border-white/10 ${
          isHovered ? 'border-cyan-400/40 shadow-[0_20px_50px_rgba(0,242,254,0.15)] bg-white/[0.05]' : ''
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-black text-cyan-400">
              {project.number}
            </span>
            <span className="text-slate-600">/</span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-mono text-[11px] text-cyan-400 font-semibold">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-xs text-slate-500">{project.date}</span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-sans tracking-tight">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-cyan-400 font-semibold mb-4 tracking-wider">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tools Badges */}
        <div className="mb-8">
          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
            TOOLS DEPLOYED
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-bold hover:text-white transition-colors cursor-pointer group"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href={`/projects/${project.slug}`}
            className="text-slate-500 hover:text-slate-300 text-xs font-mono underline"
          >
            Standalone URL ↗
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
