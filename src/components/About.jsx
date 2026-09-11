import React, { useState } from 'react';
import { Sparkles, Layers, Target, Compass, Video, BarChart2, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeOrbSkill, setActiveOrbSkill] = useState(null);

  const floatingBadges = [
    { label: "SEO", color: "#00f2fe", pos: "top: 6%; left: 14%;" },
    { label: "Google Ads", color: "#4facfe", pos: "top: 10%; right: 10%;" },
    { label: "Meta Ads", color: "#6366f1", pos: "top: 38%; right: -2%;" },
    { label: "GA4", color: "#00f2fe", pos: "bottom: 24%; right: 8%;" },
    { label: "SEM", color: "#38bdf8", pos: "bottom: 8%; right: 26%;" },
    { label: "Social Media", color: "#a855f7", pos: "bottom: 12%; left: 10%;" },
    { label: "WordPress", color: "#10b981", pos: "top: 50%; left: -4%;" },
    { label: "Canva", color: "#f43f5e", pos: "top: 26%; left: 2%;" },
    { label: "Content Marketing", color: "#eab308", pos: "bottom: 34%; left: 14%;" },
    { label: "Generative AI", color: "#8b5cf6", pos: "top: 76%; right: 16%;" }
  ];

  const corePillars = [
    { title: "Digital Marketing", icon: <Target size={18} color="#00f2fe" />, desc: "Full-funnel audience acquisition & customer lifetime value expansion." },
    { title: "Creative Production", icon: <Video size={18} color="#4facfe" />, desc: "20+ months hands-on studio camera and lighting mastery on set." },
    { title: "Visual Storytelling", icon: <Layers size={18} color="#a855f7" />, desc: "Transforming brand narratives into high-converting hook-driven creatives." },
    { title: "Analytics & Tracking", icon: <BarChart2 size={18} color="#6366f1" />, desc: "Custom GA4 exploration funnels, event tracking, and attribution models." },
    { title: "Performance Marketing", icon: <Compass size={18} color="#10b981" />, desc: "Scale campaigns with target ROAS, bid pacing, and CPA minimization." },
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>PROFILE & PHILOSOPHY</span>
        </div>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Bridging physical commercial production and analytical digital performance to architect scalable customer acquisition engines.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Left: Interactive 3D Profile & Orbiting Badges */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glowing Ambient Halo */}
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.18) 0%, rgba(79, 172, 254, 0.05) 50%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          {/* Central 3D Marketing Command Sphere */}
          <div
            className="glass-panel"
            style={{
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'linear-gradient(145deg, rgba(16, 25, 42, 0.95), rgba(7, 10, 16, 0.98))',
              border: '2px solid rgba(0, 242, 254, 0.3)',
              boxShadow: '0 0 50px rgba(0, 242, 254, 0.2), inset 0 0 30px rgba(0, 242, 254, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '1.5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(99, 102, 241, 0.2))',
                border: '1px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                color: 'var(--accent-cyan)',
              }}
            >
              <Sparkles size={28} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#ffffff' }}>
              ANSHU
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan)', letterSpacing: '0.12em' }}>
              GROWTH MARKETER
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
              New Delhi • 20+ Mo. Rig Edge
            </span>
          </div>

          {/* Concentric Decorative Rings */}
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              border: '1px dashed rgba(0, 242, 254, 0.25)',
              pointerEvents: 'none',
              animation: 'spin 40s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              pointerEvents: 'none',
            }}
          />

          {/* Floating Skill Badges */}
          {floatingBadges.map((badge, idx) => (
            <div
              key={badge.label}
              onMouseEnter={() => setActiveOrbSkill(badge.label)}
              onMouseLeave={() => setActiveOrbSkill(null)}
              className="badge-pill"
              style={{
                position: 'absolute',
                ...Object.fromEntries(
                  badge.pos.split(';').filter(Boolean).map((s) => s.split(':').map((v) => v.trim()))
                ),
                color: activeOrbSkill === badge.label ? '#ffffff' : 'var(--text-primary)',
                background: activeOrbSkill === badge.label ? 'rgba(16, 22, 36, 0.95)' : 'rgba(10, 14, 23, 0.8)',
                border: `1px solid ${activeOrbSkill === badge.label ? badge.color : 'rgba(255, 255, 255, 0.1)'}`,
                boxShadow: activeOrbSkill === badge.label ? `0 0 16px ${badge.color}` : '0 4px 12px rgba(0,0,0,0.5)',
                cursor: 'pointer',
                zIndex: 5,
                transform: activeOrbSkill === badge.label ? 'scale(1.12)' : 'scale(1)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: badge.color }} />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Right: Professional Introduction & Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              background: 'rgba(14, 19, 32, 0.8)',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.7,
                color: '#f1f5f9',
                fontWeight: 500,
                marginBottom: '1.25rem',
              }}
            >
              “I'm a motivated digital marketing professional passionate about brand strategy, online consumer journeys, funnel optimization, email marketing, paid campaigns and e-commerce growth.”
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              With a background spanning 20+ months managing commercial studio camera rigs and lighting setups, I bring a distinct advantage to performance marketing: I know how to produce scroll-stopping visual assets that feed high-converting paid ad algorithms.
            </p>
          </div>

          {/* Core Combination Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span className="mono-tag" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
              THE CORE 5-PILLAR FOUNDATION
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
              {corePillars.map((p) => (
                <div
                  key={p.title}
                  className="glass-panel"
                  style={{
                    padding: '1rem 1.15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    background: 'rgba(12, 16, 26, 0.6)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {p.icon}
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                      {p.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
