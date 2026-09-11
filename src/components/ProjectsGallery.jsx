import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, CheckCircle2, TrendingUp, Filter, Sparkles, BarChart3, Target, Compass } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsGallery({ onSelectProject }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="section-title">
          Digital Marketing <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Comprehensive full-funnel strategies, CRO architectures, ₹10L ad spend models, and technical SEO frameworks.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projectsData.map((project) => {
          const isHovered = hoveredCard === project.id;

          return (
            <div
              key={project.id}
              className="glass-panel glass-panel-interactive"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '2.5rem 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                background: isHovered ? 'rgba(20, 28, 48, 0.85)' : 'rgba(14, 20, 34, 0.7)',
                borderColor: isHovered ? 'var(--border-cyan-glow)' : 'var(--border-subtle)',
                transform: isHovered ? 'translateY(-4px)' : 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Left Column: Project Meta, Strategy & Tools */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {project.number}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>/</span>
                  <span className="badge-pill badge-cyan" style={{ fontSize: '0.75rem' }}>
                    {project.period}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.channels.join(' • ')}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800, lineHeight: 1.25 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                  {project.tagline}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Objective:
                    </span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginTop: '0.2rem' }}>
                      {project.objective}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Strategy:
                    </span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginTop: '0.2rem' }}>
                      {project.strategy}
                    </p>
                  </div>
                </div>

                {/* Tools Badges */}
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Tools Deployed:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {project.tools.map((tool) => (
                      <span key={tool} className="badge-pill" style={{ fontSize: '0.74rem' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Case Study Button */}
                <div style={{ marginTop: '0.5rem' }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn-primary"
                    style={{ padding: '0.8rem 1.5rem', fontSize: '0.85rem' }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Custom 3D & Interactive Visual Mockup */}
              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(9, 13, 22, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* 1. Social Media Visualizer */}
                {project.id === 'social-media-growth' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        3D CAMPAIGN REACH & RETENTION
                      </span>
                      <span className="badge-pill" style={{ fontSize: '0.7rem' }}>META + LINKEDIN</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>TOFU Brand Reach (Reels & Carousels)</span>
                          <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>45% Budget</span>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, #00f2fe, #4facfe)' }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>MOFU Consideration (Authority Posts)</span>
                          <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>35% Budget</span>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '35%', height: '100%', background: 'linear-gradient(90deg, #4facfe, #6366f1)' }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>BOFU Conversion (Retargeting Ads)</span>
                          <span style={{ color: '#10b981', fontWeight: 600 }}>20% Budget</span>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '20%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Google Merchandise Store Conversion Funnel */}
                {project.id === 'conversion-funnel-cro' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        GOOGLE MERCHANDISE STORE CONVERSION FUNNEL
                      </span>
                      <span className="badge-pill" style={{ fontSize: '0.7rem' }}>GA4 EXPLORATION</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                      {[
                        { step: '1. Awareness', detail: 'SEO & Google Ads Search Traffic', width: '100%', color: '#00f2fe' },
                        { step: '2. Acquisition', detail: 'Targeted Landing Page Entry', width: '82%', color: '#4facfe' },
                        { step: '3. Engagement', detail: 'Interactive Category & Item View', width: '64%', color: '#6366f1' },
                        { step: '4. Conversion', detail: 'Optimized 3-Step Checkout Flow', width: '46%', color: '#a855f7' },
                        { step: '5. Retention', detail: 'Automated Post-Purchase Nurture', width: '32%', color: '#10b981' }
                      ].map((item) => (
                        <div
                          key={item.step}
                          style={{
                            padding: '0.55rem 0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(16, 23, 38, 0.8)',
                            borderLeft: `3px solid ${item.color}`,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#ffffff', fontWeight: 600 }}>
                            {item.step}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {item.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. 360 Marketing Ecosystem */}
                {project.id === 'digital-marketing-blueprint' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        360° OMNICHANNEL MARKETING ECOSYSTEM
                      </span>
                      <span className="badge-pill" style={{ fontSize: '0.7rem' }}>CROSS-CHANNEL SYNERGY</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
                      {[
                        { title: 'SEO & Organic', role: 'Compounds Long-Term Discovery', color: '#00f2fe' },
                        { title: 'Paid Search & Meta', role: 'Immediate High-Intent Capture', color: '#4facfe' },
                        { title: 'Email Nurture (Brevo)', role: 'Maximizes Customer Lifetime Value', color: '#a855f7' },
                        { title: 'Budget Modeling', role: 'Dynamic Weekly Excel Reallocation', color: '#10b981' }
                      ].map((card) => (
                        <div
                          key={card.title}
                          style={{
                            padding: '0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(16, 22, 36, 0.6)',
                            border: `1px solid ${card.color}33`,
                          }}
                        >
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: card.color, marginBottom: '0.2rem' }}>
                            {card.title}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {card.role}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Google Ads ₹10 Lakh Dashboard */}
                {project.id === 'driving-results-google-ads' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        GOOGLE ADS REGIONAL EXPANSION ARCHITECTURE
                      </span>
                      <span className="badge-pill badge-cyan" style={{ fontSize: '0.7rem' }}>₹10 LAKH PLANNED</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'rgba(16, 23, 38, 0.7)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Core Search (STAGs)</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>₹5,00,000</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)' }}>50% Budget • Lead Gen</div>
                      </div>
                      <div style={{ padding: '0.75rem', background: 'rgba(16, 23, 38, 0.7)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Performance Max</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>₹2,50,000</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--accent-blue)' }}>25% Budget • Cross-Network</div>
                      </div>
                      <div style={{ padding: '0.75rem', background: 'rgba(16, 23, 38, 0.7)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Display & Video</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>₹1,50,000</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--accent-indigo)' }}>15% Budget • Saturation</div>
                      </div>
                      <div style={{ padding: '0.75rem', background: 'rgba(16, 23, 38, 0.7)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Retargeting & Exper.</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>₹1,00,000</div>
                        <div style={{ fontSize: '0.68rem', color: '#10b981' }}>10% Budget • GA4 Audiences</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Building Brand Presence SEO Journey */}
                {project.id === 'building-brand-presence' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        ORGANIC SEO GROWTH JOURNEY
                      </span>
                      <span className="badge-pill" style={{ fontSize: '0.7rem' }}>90-DAY ROADMAP</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                      {['Website', 'SEO', 'Rankings', 'Traffic', 'Leads', 'Growth'].map((step, idx) => (
                        <React.Fragment key={step}>
                          <div
                            style={{
                              padding: '0.45rem 0.65rem',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(0, 242, 254, 0.08)',
                              border: '1px solid rgba(0, 242, 254, 0.25)',
                              color: '#ffffff',
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                            }}
                          >
                            {step}
                          </div>
                          {idx < 5 && <span style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project KPI Highlights */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                    {project.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          {kpi.label}
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                          {kpi.value}
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                          {kpi.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
