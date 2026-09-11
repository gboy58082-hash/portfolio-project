import React, { useState } from 'react';
import { Sparkles, Layers, Target, Compass, Video, Globe, Users, ArrowRight } from 'lucide-react';
import { skillsCategories, constellationNodes } from '../data/skillsData';

export default function SkillsConstellation() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSkill, setActiveSkill] = useState(skillsCategories[0].skills[0]);

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'performance': return <Target size={16} />;
      case 'organic': return <Compass size={16} />;
      case 'analytics': return <Layers size={16} />;
      case 'creative': return <Video size={16} />;
      case 'web': return <Globe size={16} />;
      default: return <Users size={16} />;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>INTERACTIVE CAPABILITY MATRIX</span>
        </div>
        <h2 className="section-title">
          Skills <span className="gradient-text">Constellation</span>
        </h2>
        <p className="section-subtitle">
          Explore verified digital marketing capabilities, data analytics tools, and creative studio rigging disciplines. Hover or click any skill to inspect context.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem',
        }}
      >
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '0.55rem 1.15rem',
            borderRadius: 'var(--radius-full)',
            background: selectedCategory === 'all' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(16, 22, 36, 0.6)',
            border: `1px solid ${selectedCategory === 'all' ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
            color: selectedCategory === 'all' ? '#ffffff' : 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            boxShadow: selectedCategory === 'all' ? 'var(--glow-cyan)' : 'none',
          }}
        >
          All Disciplines
        </button>

        {skillsCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(16, 22, 36, 0.6)',
                border: `1px solid ${isSelected ? cat.color : 'var(--border-subtle)'}`,
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                boxShadow: isSelected ? `0 0 15px ${cat.color}44` : 'none',
              }}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Categories & Live Inspector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {/* Left: Skill Clusters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                background: 'rgba(12, 17, 28, 0.7)',
                borderLeft: `4px solid ${cat.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: cat.color }}>{getCategoryIcon(cat.id)}</span>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                  {cat.name}
                </h3>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {cat.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => {
                  const isActive = activeSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => setActiveSkill(skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        background: isActive ? 'rgba(0, 242, 254, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${isActive ? cat.color : 'rgba(255, 255, 255, 0.08)'}`,
                        color: isActive ? '#ffffff' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        transition: 'var(--transition-smooth)',
                        boxShadow: isActive ? `0 0 12px ${cat.color}55` : 'none',
                      }}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Live Interactive Inspector Card */}
        <div style={{ position: 'sticky', top: '6rem', height: 'fit-content' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              border: '1px solid var(--border-cyan-glow)',
              background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.95), rgba(9, 13, 22, 0.98))',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), var(--glow-cyan)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
              <span className="mono-tag" style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>
                LIVE SKILL INSPECTOR
              </span>
            </div>

            {activeSkill ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 800 }}>
                      {activeSkill.name}
                    </h4>
                    <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem' }}>
                      {activeSkill.level}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    {activeSkill.desc}
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(6, 10, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    Implemented in Project:
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.95rem' }}>
                    <span>{activeSkill.relatedProject}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Hover over or click any skill badge to inspect real campaign application.
                  </span>
                </div>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>Hover over a skill node to view details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
