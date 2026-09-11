import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles, Send } from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'creative', 'experience', 'projects', 'skills', 'toolbox', 'education', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Creative', href: '#creative' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Toolbox', href: '#toolbox' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 2rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'var(--bg-glass-nav)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(79, 172, 254, 0.05) 100%)',
              border: '1px solid var(--border-cyan-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--glow-cyan)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>
              A
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.04em' }}>
              ANSHU <span style={{ color: 'var(--accent-cyan)', fontWeight: 400 }}>/ DIGITAL</span>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
              GROWTH & PRODUCTION
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'rgba(16, 22, 36, 0.65)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '0.35rem 0.6rem',
            backdropFilter: 'blur(12px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'var(--transition-smooth)',
                  background: isActive ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                  border: isActive ? '1px solid var(--border-cyan-glow)' : '1px solid transparent',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenResume}
            className="btn-secondary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.78rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
            }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{
              display: 'none',
              padding: '0.55rem 1.15rem',
              fontSize: '0.78rem',
              borderRadius: 'var(--radius-full)',
            }}
            id="nav-connect-btn"
          >
            <span>Connect</span>
            <ChevronRight size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'rgba(16, 22, 36, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '1rem',
            right: '1rem',
            background: 'rgba(9, 13, 22, 0.96)',
            border: '1px solid var(--border-cyan-glow)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            marginTop: '0.5rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease-out forwards',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-primary)',
                background: activeSection === link.href.substring(1) ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="var(--accent-cyan)" opacity={0.6} />
            </a>
          ))}

          <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
            >
              <Send size={16} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}

      {/* Media query helper styles */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-connect-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
