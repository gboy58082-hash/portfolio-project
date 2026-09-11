'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/projects';
import CaseStudy from './CaseStudy';
import { X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[950] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl shadow-cyan-500/10"
      >
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
              PROJECT {project.number} • IMMERSIVE CASE STUDY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans mt-1">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            >
              <span>Full Page</span>
              <ArrowUpRight size={13} />
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Case Study Full Content */}
        <CaseStudy project={project} />

        {/* Footer */}
        <div className="flex justify-end pt-8 border-t border-white/10 mt-10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-xs font-semibold cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
