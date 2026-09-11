import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { educationData, certificationData } from '../data/timelineData';

export default function Education() {
  return (
    <section id="education" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>ACADEMIC FOUNDATION & SPECIALIZATION</span>
        </div>
        <h2 className="section-title">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Formal computing degree paired with intensive industry digital marketing specialization across search, social, paid media, and analytics.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
        }}
      >
        {/* Left: Minimal 3D Academic Timeline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.12)',
                border: '1px solid var(--border-cyan-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
              }}
            >
              <GraduationCap size={18} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700 }}>
              Academic Degrees
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
            {/* Connecting Vertical Track */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: '19px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan), rgba(99, 102, 241, 0.2))',
                zIndex: 1,
              }}
            />

            {educationData.map((edu, idx) => (
              <div
                key={edu.degree}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Node Dot */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--glow-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Content Glass Card */}
                <div
                  className="glass-panel"
                  style={{
                    flex: 1,
                    padding: '1.5rem',
                    background: 'rgba(12, 17, 28, 0.7)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>
                      {edu.degree}
                    </h4>
                    <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem' }}>
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </div>

                  {edu.field && (
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Stream / Specialization: {edu.field}
                    </div>
                  )}

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {edu.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Premium Glass Certifications Showcase */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(79, 172, 254, 0.12)',
                border: '1px solid var(--border-blue-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
              }}
            >
              <Award size={18} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700 }}>
              Specialized Training
            </h3>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              border: '1px solid var(--border-cyan-glow)',
              background: 'linear-gradient(135deg, rgba(16, 24, 40, 0.9) 0%, rgba(9, 13, 22, 0.95) 100%)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={18} color="var(--accent-cyan)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {certificationData.provider.toUpperCase()} SPECIALIZATION
                  </span>
                </div>
                <h4 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 800 }}>
                  {certificationData.title}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {certificationData.period} • {certificationData.mode}
                </div>
              </div>

              <div
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <CheckCircle2 size={13} />
                <span>{certificationData.status}</span>
              </div>
            </div>

            {/* 7 Curriculum Modules */}
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.85rem' }}>
                Curriculum Modules Covered:
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {certificationData.modules.map((mod, i) => (
                  <div
                    key={mod.title}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.6)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, marginTop: '0.1rem' }}>
                      0{i + 1}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                        {mod.title}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                        {mod.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
