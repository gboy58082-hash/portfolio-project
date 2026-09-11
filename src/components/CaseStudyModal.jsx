import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Target, BarChart2, Layers, Compass, Zap, Shield, Sparkles } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.fullCaseStudy;

  const tabs = [
    { id: 'overview', label: '1. Overview & Problem' },
    { id: 'strategy', label: '2. Funnel & Strategy' },
    { id: 'creative', label: '3. Creative & Targeting' },
    { id: 'analytics', label: '4. Analytics & KPIs' },
    { id: 'learnings', label: '5. Key Learnings' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem 2rem',
          background: 'rgba(8, 12, 20, 0.96)',
          border: '1px solid var(--border-cyan-glow)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.15)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)',
            zIndex: 10,
          }}
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge-pill badge-cyan" style={{ fontSize: '0.75rem' }}>
              PROJECT {project.number} • CASE STUDY
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {project.period}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: '#ffffff', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.4rem' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 600 }}>
            {project.tagline}
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.6rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'transparent'}`,
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition-smooth)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="glass-panel" style={{ padding: '1.75rem', background: 'rgba(16, 22, 36, 0.6)' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  THE PROBLEM & STRATEGIC CHALLENGE
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7 }}>
                  {cs.problem}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <Target size={18} color="var(--accent-cyan)" />
                    <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Project Objective</h5>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {project.objective}
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <Compass size={18} color="var(--accent-blue)" />
                    <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>Target Audience & Intent</h5>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {cs.targetAudience}
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Audience & Competitive Research
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {cs.research}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: FUNNEL & STRATEGY */}
          {activeTab === 'strategy' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                  CONVERSION FUNNEL ARCHITECTURE
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cs.funnel.map((f, i) => (
                    <div
                      key={f.stage}
                      style={{
                        padding: '1.25rem 1.5rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(14, 20, 34, 0.8)',
                        borderLeft: '4px solid var(--accent-cyan)',
                        borderTop: '1px solid var(--border-subtle)',
                        borderRight: '1px solid var(--border-subtle)',
                        borderBottom: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                          STAGE 0{i + 1}
                        </span>
                        <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem' }}>
                          {f.stage}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {f.tactic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Campaign Budget & Network Structure
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {cs.campaignStructure}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CREATIVE & TARGETING */}
          {activeTab === 'creative' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                  <h5 style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                    Creative Asset Strategy
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {cs.creativeStrategy}
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                  <h5 style={{ color: 'var(--accent-blue)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                    Keyword & Search Intent Strategy
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {cs.keywordStrategy}
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Paid Media Execution & Bid Management
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {cs.paidMediaStrategy}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ANALYTICS & KPIS */}
          {activeTab === 'analytics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(12, 17, 28, 0.6)' }}>
                <h5 style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Tracking Infrastructure & Attribution (GA4 + GTM)
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {cs.analytics}
                </p>
              </div>

              <div>
                <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                  PROJECT PERFORMANCE KPIS
                </h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {project.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(10, 15, 24, 0.8)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>
                        {kpi.label}
                      </div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
                        {kpi.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {kpi.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: LEARNINGS & BLUEPRINT */}
          {activeTab === 'learnings' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="glass-panel" style={{ padding: '1.75rem', background: 'rgba(16, 22, 36, 0.6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <Sparkles size={18} color="var(--accent-cyan)" />
                  <h5 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700 }}>Key Qualitative Learnings</h5>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                  {cs.learnings}
                </p>
              </div>

              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.05))',
                  border: '1px solid var(--border-cyan-glow)',
                }}
              >
                <h5 style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', fontFamily: 'var(--font-display)' }}>
                  Final Strategy Takeaway
                </h5>
                <p style={{ color: '#f1f5f9', fontSize: '0.98rem', lineHeight: 1.7, fontWeight: 500 }}>
                  {cs.finalStrategy}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.82rem' }}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
