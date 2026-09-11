import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `ANSHU
Digital Marketer & Creative Producer
Email: maxgamer7642@gmail.com | Phone: +91 9667461227 | Location: New Delhi

CAREER OBJECTIVE
Motivated digital marketer passionate about brand strategy and online consumer journeys, seeking to apply funnel optimization, email marketing, and paid campaign execution for an innovative e-commerce brand.

WORK EXPERIENCE
Cameraman Assistant (Jul 2024 - Apr 2026)
Colorful Clouds India, OKHLA, New Delhi
- 20+ months of hands-on experience in studio, fashion, model, and e-commerce production, specializing in camera setup, studio lighting, and equipment staging.
- Proficient in cinema camera systems, follow-focus rigs, and professional lighting equipment, supporting high-quality fashion and commercial productions.
- Managed production equipment for 70+ e-commerce shoots and 20+ model shoots, ensuring efficient setup, operation, and smooth on-set workflow.
- Skilled in designing, rigging, and configuring studio lighting setups for model and product photography while maintaining consistent visual quality and production standards.

PROJECTS
1. Strategy, Growth & Engagement for Social Media (Jul 2026 - Aug 2026)
   - Executed a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives that consistently achieved target reach, engagement, and conversion KPIs.
   - Tools Used: Meta Ads Manager, Meta Business Suite, LinkedIn Campaign Manager, Canva, Adobe Suite, CapCut, Meta/LinkedIn Insights, Google Analytics, Buffer/Hootsuite.

2. Conversion Funnel Optimization (Aug 2026)
   - Built an integrated e-commerce growth strategy for the Google Merchandise Store using GA4 analytics, SEO, paid ads, CRO, and email nurture sequences to maximize acquisition and conversions.
   - Tools Used: Google Analytics 4 (GA4), Google Tag Manager, Google Ads, Ahrefs.

3. Digital Marketing Blueprint (Aug 2026)
   - Executed a 360° digital marketing strategy across SEO, Paid Ads, Social Media, and Email Marketing, combining custom creative assets with budget optimization to drive ROI and brand growth.
   - Tools Used: Google Analytics 4 (GA4), Meta Ads Manager, Google Ads, SEMrush, Brevo, Canva, Meta Business Suite, MS Excel/Google Sheets.

4. Driving Results with Google Ads (Jun 2026 - Jul 2026)
   - Devised a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.
   - Tools Used: Google Ads (Keyword Planner & Editor), Google Trends, SEMrush, Google Analytics 4 (GA4), Google Tag Manager, Canva.

5. Building Brand Presence (Mar 2026)
   - Designed an SEO-compliant WordPress website and created a 3-month organic SEO roadmap using keyword research, backlinks, and analytics to drive sustainable traffic growth.
   - Tools & Plugins Used: WordPress, Elementor, Yoast SEO/Rank Math, WP Rocket, Site Kit by Google, GA4, Google Search Console, Ahrefs/SEMrush, Screaming Frog.

SKILLS
- English Proficiency (Written), WordPress, Search Engine Optimization (SEO)
- Google AdWords, Social Media Marketing, Content Writing
- Canva, Facebook Ads, Problem Solving
- Teamwork, Digital Marketing, Generative AI Tools
- Search Engine Marketing (SEM), Market research, Blogging

EDUCATION
- Bachelor of Computer Applications (BCA), Arts (2021 - 2026) - MDU Rohtak
- Senior Secondary (XII), CBSE Arts (2020) - Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND
- Secondary (X), CBSE (2018) - Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND

TRAININGS / CERTIFICATIONS
- Digital Marketing (Mar 2026 - Present) - Internshala, Virtual
  Modules: Marketing Fundamentals, Website Building & Ranking, Search Engine Marketing, Social Media Organic, Paid Social Media Marketing, Lead Engage Sell in Marketing, Google Analytics.
`;
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Anshu_Digital_Marketing_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.5rem 2rem',
          background: '#090d16',
          border: '1px solid var(--border-cyan-glow)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), var(--glow-cyan)',
        }}
      >
        {/* Header Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge-pill badge-cyan">ATS-READY RESUME</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              VERIFIED OFFICIAL CREDENTIALS
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.78rem' }}
              title="Print or Save to PDF"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="btn-primary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.78rem' }}
              title="Download text format"
            >
              <Download size={14} />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div
          id="printable-resume-area"
          style={{
            background: '#0d1322',
            padding: '2.5rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#f1f5f9',
            lineHeight: 1.6,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '2px solid rgba(0, 242, 254, 0.3)', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              ANSHU
            </h1>
            <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.6rem' }}>
              Digital Marketer & Creative Production Specialist
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={13} color="var(--accent-cyan)" /> maxgamer7642@gmail.com
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={13} color="var(--accent-cyan)" /> +91 9667461227
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} color="var(--accent-cyan)" /> New Delhi
              </span>
            </div>
          </div>

          {/* Objective */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              CAREER OBJECTIVE
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
              Motivated digital marketer passionate about brand strategy and online consumer journeys, seeking to apply funnel optimization, email marketing, and paid campaign execution for an innovative e-commerce brand.
            </p>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              WORK EXPERIENCE
            </h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>Cameraman Assistant</strong>
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>Jul 2024 – Apr 2026</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '0.6rem', fontStyle: 'italic' }}>
                Colorful Clouds India, OKHLA, New Delhi
              </div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>20+ months of hands-on experience in studio, fashion, model, and e-commerce production, specializing in camera setup, studio lighting, and equipment staging.</li>
                <li>Proficient in cinema camera systems, follow-focus rigs, and professional lighting equipment, supporting high-quality fashion and commercial productions.</li>
                <li>Managed production equipment for 70+ e-commerce shoots and 20+ model shoots, ensuring efficient setup, operation, and smooth on-set workflow.</li>
                <li>Skilled in designing, rigging, and configuring studio lighting setups for model and product photography while maintaining consistent visual quality and production standards.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              FEATURED PROJECTS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Strategy, Growth & Engagement for Social Media</strong>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>Jul 2026 – Aug 2026</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  Executed a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives that consistently achieved target reach, engagement, and conversion KPIs.
                </p>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  <strong>Tools:</strong> Meta Ads Manager, Meta Business Suite, LinkedIn Campaign Manager, Canva, Adobe Suite, CapCut, Meta/LinkedIn Insights, GA4, Buffer/Hootsuite.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Conversion Funnel Optimization (Google Merchandise Store)</strong>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>Aug 2026</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  Built an integrated e-commerce growth strategy using GA4 analytics, SEO, paid ads, CRO, and email nurture sequences to maximize acquisition and conversions.
                </p>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  <strong>Tools:</strong> Google Analytics 4 (GA4), Google Tag Manager, Google Ads, Ahrefs.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Driving Results with Google Ads</strong>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>Jun 2026 – Jul 2026</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  Devised a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.
                </p>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  <strong>Tools:</strong> Google Ads (Keyword Planner & Editor), Google Trends, SEMrush, GA4, GTM, Canva.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  EDUCATION
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div>
                    <strong>Bachelor of Computer Applications (BCA)</strong> (2021 – 2026)
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>MDU Rohtak</div>
                  </div>
                  <div>
                    <strong>Senior Secondary (XII) CBSE — Arts</strong> (2020)
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND</div>
                  </div>
                  <div>
                    <strong>Secondary (X) CBSE</strong> (2018)
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  CERTIFICATIONS
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#cbd5e1' }}>
                  <strong>Digital Marketing Specialization</strong>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                    Internshala (Mar 2026 – Present)
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                    Marketing Fundamentals, Website Building & Ranking, Search Engine Marketing, Social Media Organic, Paid Social Media Marketing, Lead Engage Sell in Marketing, Google Analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print CSS */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume-area, #printable-resume-area * {
            visibility: visible;
          }
          #printable-resume-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            padding: 0 !important;
            border: none !important;
          }
          #printable-resume-area h1, 
          #printable-resume-area h2, 
          #printable-resume-area h3, 
          #printable-resume-area strong {
            color: black !important;
          }
          #printable-resume-area p, 
          #printable-resume-area li, 
          #printable-resume-area span {
            color: #333333 !important;
          }
        }
      `}</style>
    </div>
  );
}
