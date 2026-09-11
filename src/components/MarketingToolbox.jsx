import React, { useState } from 'react';
import {
  Target, BarChart3, Tag, Layers, Share2, Briefcase, Search,
  Compass, Palette, PenTool, Video, Globe, Layout, LineChart,
  Cpu, Mail, Table, FileSpreadsheet, Sparkles
} from 'lucide-react';
import { toolboxData } from '../data/toolboxData';

export default function MarketingToolbox() {
  const [selectedTool, setSelectedTool] = useState(toolboxData[0]);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Paid Advertising', 'Analytics & Tracking', 'SEO & Intelligence', 'Creative Production', 'Web & CMS', 'Data & Modeling'];

  const getToolIcon = (iconKey) => {
    switch (iconKey) {
      case 'Target': return <Target size={22} />;
      case 'BarChart3': return <BarChart3 size={22} />;
      case 'Tag': return <Tag size={22} />;
      case 'Layers': return <Layers size={22} />;
      case 'Share2': return <Share2 size={22} />;
      case 'Briefcase': return <Briefcase size={22} />;
      case 'Search': return <Search size={22} />;
      case 'Compass': return <Compass size={22} />;
      case 'Palette': return <Palette size={22} />;
      case 'PenTool': return <PenTool size={22} />;
      case 'Video': return <Video size={22} />;
      case 'Globe': return <Globe size={22} />;
      case 'Layout': return <Layout size={22} />;
      case 'LineChart': return <LineChart size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'Mail': return <Mail size={22} />;
      case 'Table': return <Table size={22} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const filteredTools =
    activeFilter === 'All'
      ? toolboxData
      : toolboxData.filter((t) => t.category === activeFilter);

  return (
    <section id="toolbox" className="section-container">
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>PRODUCTION STACK</span>
        </div>
        <h2 className="section-title">
          Marketing <span className="gradient-text">Toolbox</span>
        </h2>
        <p className="section-subtitle">
          Industry-standard ad networks, tracking infrastructure, enterprise SEO crawlers, creative design suites, and financial modeling tools.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(16, 22, 36, 0.5)',
                border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Tools + Live Selected Inspector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Tool Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '1rem',
          }}
        >
          {filteredTools.map((tool) => {
            const isSelected = selectedTool?.id === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                onMouseEnter={() => setSelectedTool(tool)}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.25rem 0.75rem',
                  gap: '0.75rem',
                  background: isSelected ? 'rgba(0, 242, 254, 0.14)' : 'rgba(12, 17, 28, 0.7)',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  boxShadow: isSelected ? 'var(--glow-cyan)' : 'none',
                  cursor: 'pointer',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  style={{
                    color: isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {getToolIcon(tool.iconKey)}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {tool.name}
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tool.level}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Tool Details Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2.25rem',
            border: '1px solid var(--border-cyan-glow)',
            background: 'linear-gradient(145deg, rgba(16, 24, 40, 0.95), rgba(8, 12, 20, 0.98))',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), var(--glow-cyan)',
            position: 'sticky',
            top: '6rem',
          }}
        >
          {selectedTool && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(0, 242, 254, 0.12)',
                    border: '1px solid var(--border-cyan-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {getToolIcon(selectedTool.iconKey)}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {selectedTool.category}
                  </div>
                  <h4 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800 }}>
                    {selectedTool.name}
                  </h4>
                </div>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 10, 16, 0.8)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Primary Use Cases & Real Campaign Execution:
                </div>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {selectedTool.useCase}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem' }}>
                <span className="badge-pill badge-cyan">
                  Proficiency: {selectedTool.level}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Active in Workflows
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
