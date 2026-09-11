'use client';

import React from 'react';
import { Skill } from '@/data/skills';

interface SkillNodeProps {
  skill: Skill;
  isActive: boolean;
  onSelect: (skill: Skill) => void;
  accentColor: string;
}

export default function SkillNode({
  skill,
  isActive,
  onSelect,
  accentColor,
}: SkillNodeProps) {
  return (
    <button
      onClick={() => onSelect(skill)}
      onMouseEnter={() => onSelect(skill)}
      className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider border transition-all duration-300 cursor-pointer select-none ${
        isActive
          ? 'bg-cyan-500/20 text-white border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.3)] scale-105'
          : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
      }`}
      style={{
        borderColor: isActive ? accentColor : undefined,
      }}
    >
      {skill.name}
    </button>
  );
}
