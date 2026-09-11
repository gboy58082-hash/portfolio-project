import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Video, Zap, Aperture, Layers, Sparkles } from 'lucide-react';
import { experienceData } from '../data/timelineData';

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>CAREER TRACK RECORD</span>
        </div>
        <h2 className="section-title">
          Commercial <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Proven on-set execution across high-volume commercial, e-commerce, and fashion productions.
        </p>
      </div>

      {/* Main Experience Card with 3D Futuristic Timeline Styling */}
      <div
        className="glass-panel"
        style={{
          padding: '2.5rem',
          border: '1px solid var(--border-cyan-glow)',
          background: 'linear-gradient(145deg, rgba(16, 23, 38, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Ambient Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            opacity: 0.03,
            pointerEvents: 'none',
          }}
        >
          <Aperture size={360} />
        </div>

        {/* Experience Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.25rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: '1px solid var(--border-cyan-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                }}
              >
                <Video size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800, lineHeight: 1.2 }}>
                  {exp.role}
                </h3>
                <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {exp.company}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={14} color="var(--accent-cyan)" />
                {exp.period}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={14} color="var(--accent-cyan)" />
                {exp.location}
              </span>
              <span className="badge-pill badge-cyan" style={{ fontSize: '0.75rem' }}>
                {exp.duration}
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 242, 254, 0.06)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              textAlign: 'right',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>
              CORE SPECIALIZATION
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
              Studio, Fashion & E-Commerce Rigging
            </span>
          </div>
        </div>

        {/* Quantifiable Production Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {exp.productionMetrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(10, 15, 24, 0.7)',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: 'var(--accent-cyan)' }}>
                {m.count}
              </div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Bullet Points */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
            KEY RESPONSIBILITIES & ON-SET WORKFLOWS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {exp.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ marginTop: '0.2rem', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                  <CheckCircle2 size={18} />
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {h}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gear Stack & Equipment Staging */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(7, 10, 16, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <Zap size={16} color="var(--accent-cyan)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>
              VERIFIED TECHNICAL RIGGING SKILLS
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {exp.gearExpertise.map((gear) => (
              <span key={gear} className="badge-pill" style={{ fontSize: '0.78rem' }}>
                {gear}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
