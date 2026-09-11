'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';
import { ChevronRight, ChevronLeft, Star, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-16 pb-12 bg-[#080506] border-b border-[#261818]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header matching "LATEST TRAILERS & MEDIA" */}
        <div className="flex items-center justify-between pb-6 border-b border-[#261818] mb-8">
          <div className="flex items-center gap-3">
            <span className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-white uppercase tracking-wider">
              LATEST CASE STUDIES & WORK
            </span>
          </div>

          <Link
            href="/projects"
            className="font-mono text-xs font-bold tracking-widest text-[#e51b24] hover:text-[#ff3b44] uppercase flex items-center gap-1 group"
          >
            <span>VIEW ALL ({projects.length})</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid matching the 4 Media Trailers in RDR2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer flex flex-col text-left"
            >
              {/* Thumbnail Container with Project Image & Case Study Trigger */}
              <div className="relative aspect-[16/10] rounded bg-[#140c0d] border border-[#261818] group-hover:border-[#e51b24] transition-all overflow-hidden flex items-center justify-center shadow-lg">
                {/* Project Showcase Image */}
                {proj.image && (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                )}

                {/* Atmospheric Dark & Red Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080506] via-[#080506]/40 to-transparent group-hover:from-[#140608]/90 group-hover:via-[#1f090c]/40 transition-colors duration-300" />

                {/* Project Number Watermark */}
                <span className="absolute top-2 left-3 z-10 font-['Bebas_Neue',sans-serif] text-4xl text-white/40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-[#e51b24] transition-colors">
                  {proj.number}
                </span>

                {/* Bottom Red Glow on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e51b24] transition-colors z-10 shadow-[0_0_8px_#e51b24]" />
              </div>

              {/* Title & Tag matching Trailer format */}
              <div className="mt-3.5 space-y-1">
                <h3 className="font-['Oswald','Bebas_Neue',sans-serif] text-base sm:text-lg font-bold text-white group-hover:text-[#e51b24] transition-colors uppercase tracking-wide leading-snug line-clamp-2">
                  {proj.title}
                </h3>
                <div className="font-mono text-[10px] font-bold text-[#e51b24] tracking-widest uppercase flex items-center gap-2">
                  <span>CASE STUDY</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-[#a69e94]">{proj.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
