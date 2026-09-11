import React from 'react';
import { ArrowDown, Eye, FileText, Send, Sparkles, TrendingUp, Compass, Target } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* 3D WebGL Canvas Layer */}
      <Hero3DCanvas />

      {/* Hero Foreground Content */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1000px',
        }}
      >
        {/* Availability / Status Badge */}
        <div
          className="badge-pill badge-cyan"
          style={{
            marginBottom: '1.5rem',
            padding: '0.45rem 1rem',
            fontSize: '0.8rem',
            boxShadow: 'var(--glow-cyan)',
          }}
        >
          <span className="dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
          <span>OPEN TO HIGH-GROWTH MARKETING & PERFORMANCE ROLES</span>
        </div>

        {/* Candidate Name */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span
            className="mono-tag"
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Digital Marketer & Creative Producer
          </span>
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginTop: '0.25rem',
            }}
          >
            <span className="gradient-metallic">ANSHU</span>
          </h1>
        </div>

        {/* Main Headline */}
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            maxWidth: '850px',
          }}
          className="gradient-text"
        >
          “Turning Digital Strategies Into Growth.”
        </h2>

        {/* Subheadline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          {['Digital Marketing', 'SEO', 'Paid Media', 'Social Media', 'Analytics'].map((spec, i) => (
            <React.Fragment key={spec}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                {spec}
              </span>
              {i < 4 && <span style={{ color: 'var(--text-muted)' }}>•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Professional Statement */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          Digital Marketer focused on performance, consumer journeys, funnel optimization, creative strategy, and measurable growth. Bridging high-end studio production with analytical paid customer acquisition.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <a href="#projects" className="btn-primary" id="hero-view-work">
            <Eye size={16} />
            <span>View My Work</span>
          </a>

          <button onClick={onOpenResume} className="btn-secondary" id="hero-download-resume">
            <FileText size={16} />
            <span>Download Resume</span>
          </button>

          <a href="#contact" className="btn-secondary" id="hero-connect">
            <Send size={16} />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Live KPI Quick Grid */}
        <div
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '920px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--border-medium)',
            background: 'rgba(12, 17, 28, 0.75)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid var(--border-cyan-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
              }}
            >
              <TrendingUp size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                20+ Months
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Production & Marketing
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(79, 172, 254, 0.1)',
                border: '1px solid var(--border-blue-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
              }}
            >
              <Target size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                70+ Shoots
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                E-Commerce & Fashion
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-indigo)',
              }}
            >
              <Compass size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                Full-Funnel
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                GA4, GAds, Meta & SEO
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-emerald)',
              }}
            >
              <Sparkles size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                Internshala
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Digital Marketing Spec.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          transition: 'var(--transition-smooth)',
          zIndex: 10,
        }}
        className="scroll-indicator"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} color="var(--accent-cyan)" className="animate-float" />
      </a>
    </section>
  );
}
