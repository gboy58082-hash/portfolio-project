import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 7, 11, 0.95)',
        padding: '1.75rem 1.5rem 1.25rem 1.5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#ffffff' }}>
                ANSHU <span style={{ color: 'var(--accent-cyan)', fontWeight: 400 }}>/ DIGITAL</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '420px', lineHeight: 1.5 }}>
              Digital Marketing & Creative Production Command Center. Focused on performance, consumer journeys, and measurable business growth.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Home</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>About</a>
            <a href="#creative" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Creative</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Projects</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Skills</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '0.6rem 1rem', fontSize: '0.78rem', borderRadius: 'var(--radius-full)' }}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            © 2026 portfolio
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
            <span>Open to Performance, SEO & Growth Marketing Roles</span>
          </div>
        </div>
      </div>

      {/* Dedicated Centered Bottom Bar */}
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem 0',
          borderTop: '2px solid rgba(229, 27, 36, 0.4)',
          background: '#000000',
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 30,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.9rem',
            color: '#ffffff',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          © 2026 portfolio
        </p>
      </div>
    </footer>
  );
}
