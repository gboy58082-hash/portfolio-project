'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { toolsData, ToolItem } from '@/data/tools';
import { Target, BarChart3, Search, Video, Globe, Table, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MarketingToolbox() {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(toolsData[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Paid Media', 'Analytics', 'SEO', 'Creative', 'Web', 'Data'];

  const filteredTools =
    activeCategory === 'All'
      ? toolsData
      : toolsData.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" className="section-wrapper">
      <SectionHeading
        label="THE DIGITAL WORKSPACE"
        title="MARKETING"
        highlight="TOOLBOX."
        subtitle="18 core platforms across paid search, analytics tracking, technical SEO auditing, visual creation, and financial budgeting."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                  : 'bg-white/[0.03] border border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 18 Tools Badges Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
          {filteredTools.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                onMouseEnter={() => setSelectedTool(tool)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)] scale-102'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tool.badgeColor }} />
                  <span className="font-mono text-[10px] text-slate-500 uppercase">{tool.category}</span>
                </div>
                <div className="font-sans font-black text-white text-base tracking-tight mb-1">
                  {tool.name}
                </div>
                <div className="font-mono text-[11px] text-cyan-400 font-semibold">
                  {tool.proficiency}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Tool Inspector */}
        <div className="lg:col-span-4 sticky top-28">
          <GlassCard className="p-8 border-cyan-500/30" glow>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
              <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest font-bold">
                TOOL SPECIFICATIONS
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedTool.badgeColor }} />
                  <h4 className="text-2xl font-black text-white font-sans">
                    {selectedTool.name}
                  </h4>
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Category: {selectedTool.category}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-semibold">
                  PRIMARY CAMPAIGN WORKFLOW:
                </span>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {selectedTool.useCase}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-cyan-400 font-bold">READY FOR DEPLOYMENT</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
