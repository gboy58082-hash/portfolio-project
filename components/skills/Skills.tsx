'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillNode from './SkillNode';
import { skillCategories, Skill } from '@/data/skills';
import { toolsData, ToolItem } from '@/data/tools';
import { ArrowRight, Sparkles, CheckCircle2, Wrench, Cpu, Star } from 'lucide-react';

export default function Skills() {
  const [viewMode, setViewMode] = useState<'domains' | 'tools'>('domains');

  // Domain skills state
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillCategories[0].skills[0]);

  // Toolbox state
  const [selectedTool, setSelectedTool] = useState<ToolItem>(toolsData[0]);
  const [toolCategory, setToolCategory] = useState<string>('All');

  const domainCategories = ['ALL', ...skillCategories.map((c) => c.name)];
  const displayedDomainCategories =
    activeCategory === 'ALL'
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeCategory);

  const toolCategories = ['All', 'Paid Media', 'Analytics', 'SEO', 'Creative', 'Web', 'Data'];
  const filteredTools =
    toolCategory === 'All'
      ? toolsData
      : toolsData.filter((t) => t.category === toolCategory);

  return (
    <section id="skills" className="section-wrapper border-b border-[#261818]">
      <SectionHeading
        label="CAPABILITIES & ARSENAL"
        title="THE MARKETING"
        highlight="COMMAND LAB."
        subtitle="A unified digital marketing ecosystem: 6 core strategy pillars and 18 operational platforms spanning paid media, technical SEO, GA4 analytics, and creative scripting."
      />

      {/* Main Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded bg-[#0f0a0b] border border-[#261818]">
          <button
            onClick={() => setViewMode('domains')}
            className={`flex items-center gap-2 px-5 py-2 rounded font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              viewMode === 'domains'
                ? 'bg-[#e51b24] text-white shadow-[0_0_15px_rgba(229,27,36,0.4)]'
                : 'text-[#a69e94] hover:text-white'
            }`}
          >
            <Cpu size={14} />
            <span>STRATEGIC DOMAINS (6 PILLARS)</span>
          </button>

          <button
            onClick={() => setViewMode('tools')}
            className={`flex items-center gap-2 px-5 py-2 rounded font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              viewMode === 'tools'
                ? 'bg-[#e51b24] text-white shadow-[0_0_15px_rgba(229,27,36,0.4)]'
                : 'text-[#a69e94] hover:text-white'
            }`}
          >
            <Wrench size={14} />
            <span>MARKETING TOOLBOX (18 TOOLS)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: STRATEGIC DOMAINS */}
      {viewMode === 'domains' && (
        <div>
          {/* Domain Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {domainCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#e51b24] text-white shadow-[0_0_15px_rgba(229,27,36,0.4)]'
                      : 'bg-[#0f0a0b] border border-[#261818] text-[#ded8cf] hover:border-[#e51b24] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Skills Matrix & Inspector */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Skill Nodes Clusters */}
            <div className="lg:col-span-7 space-y-4">
              {displayedDomainCategories.map((cat) => (
                <div key={cat.id} className="p-5 sm:p-6 rounded-xl bg-[#0f0a0b] border border-[#261818] border-l-4 text-left" style={{ borderLeftColor: '#e51b24' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-['Oswald','Bebas_Neue',sans-serif] text-xl font-bold text-white uppercase tracking-wide">
                      {cat.name}
                    </h3>
                    <span className="font-mono text-[10px] text-[#e51b24] uppercase tracking-wider font-bold">
                      {cat.skills.length} Capabilities
                    </span>
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 font-sans font-medium">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1 rounded font-mono text-xs transition-all cursor-pointer ${
                          selectedSkill.id === skill.id
                            ? 'bg-[#e51b24] text-white font-bold shadow-[0_0_10px_#e51b24]'
                            : 'bg-[#140c0d] border border-[#261818] text-white font-medium hover:border-[#e51b24]/60'
                        }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Live Skill Inspector */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="p-6 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/50 shadow-2xl text-left">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#261818]">
                  <Star size={14} className="fill-[#e51b24] text-[#e51b24]" />
                  <span className="font-mono text-[10px] text-[#e51b24] uppercase tracking-widest font-bold">
                    CAPABILITY DOSSIER
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h4 className="text-2xl sm:text-3xl font-normal text-white font-['Bebas_Neue',sans-serif] uppercase tracking-wide">
                        {selectedSkill.name}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded bg-[#e51b24]/20 border border-[#e51b24]/50 font-mono text-[10px] text-[#e51b24] font-bold">
                        {selectedSkill.level}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-white/90 uppercase font-semibold">
                      {selectedSkill.category}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#140c0d] border border-[#261818] text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {selectedSkill.description}
                  </div>

                  {/* Related Projects */}
                  <div>
                    <span className="font-mono text-xs text-[#e51b24] uppercase tracking-wider block mb-2 font-bold">
                      APPLIED IN PROJECTS:
                    </span>
                    <div className="space-y-1.5">
                      {selectedSkill.relatedProjects.map((p) => (
                        <div key={p} className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                          <ArrowRight size={12} className="text-[#e51b24] shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <span className="font-mono text-xs text-[#e51b24] uppercase tracking-wider block mb-2 font-bold">
                      ASSOCIATED TOOLS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.toolsUsed.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 rounded bg-[#140c0d] border border-[#261818] text-xs font-mono text-white font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MARKETING TOOLBOX */}
      {viewMode === 'tools' && (
        <div>
          {/* Tool Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {toolCategories.map((cat) => {
              const isSelected = toolCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setToolCategory(cat)}
                  className={`px-3.5 py-1.5 rounded font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#e51b24] text-white shadow-[0_0_15px_rgba(229,27,36,0.4)]'
                      : 'bg-[#0f0a0b] border border-[#261818] text-[#ded8cf] hover:border-[#e51b24] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 18 Tools Badges Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredTools.map((tool) => {
                const isSelected = selectedTool.id === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    onMouseEnter={() => setSelectedTool(tool)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1c1011] border-[#e51b24] shadow-[0_0_15px_rgba(229,27,36,0.3)] scale-[1.02]'
                        : 'bg-[#0f0a0b] border-[#261818] hover:border-[#e51b24]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#e51b24]" />
                      <span className="font-mono text-[10px] text-white/80 font-bold uppercase">{tool.category}</span>
                    </div>
                    <div className="font-['Oswald','Bebas_Neue',sans-serif] text-white text-lg font-bold tracking-wide mb-0.5 uppercase">
                      {tool.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold">
                      {tool.proficiency}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Tool Inspector */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="p-6 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/50 shadow-2xl text-left">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#261818]">
                  <Star size={14} className="fill-[#e51b24] text-[#e51b24]" />
                  <span className="font-mono text-[10px] text-[#e51b24] uppercase tracking-widest font-bold">
                    PLATFORM SPECIFICATION
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-normal text-white font-['Bebas_Neue',sans-serif] uppercase tracking-wide">
                      {selectedTool.name}
                    </h4>
                    <div className="font-mono text-xs text-white/90 uppercase tracking-wider font-semibold">
                      Category: {selectedTool.category}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#140c0d] border border-[#261818]">
                    <span className="font-mono text-xs text-[#e51b24] uppercase tracking-wider block mb-1 font-bold">
                      CAMPAIGN APPLICATION:
                    </span>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {selectedTool.useCase}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#261818] text-xs font-mono">
                    <span className="text-white/80 font-semibold">STATUS:</span>
                    <span className="text-[#e51b24] font-bold">READY TO DEPLOY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
