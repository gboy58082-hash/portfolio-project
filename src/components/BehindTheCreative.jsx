import React, { useState } from 'react';
import { Camera, Sun, Sliders, Film, ArrowRight, Aperture, Check, Sparkles, Video } from 'lucide-react';

export default function BehindTheCreative() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      stage: "Production",
      tagline: "Physical Studio Mastery",
      desc: "Staging cinema camera systems, configuring follow-focus rigs, and engineering high-key and moody rim lighting setups.",
      metric: "70+ E-Commerce & 20+ Model Shoots",
      icon: <Camera size={20} color="#00f2fe" />
    },
    {
      stage: "Creative",
      tagline: "Visual Storytelling Asset",
      desc: "Capturing authentic product textures, angles, and human lifestyle interactions tailored for commercial appeal.",
      metric: "High-Resolution Commercial Quality",
      icon: <Aperture size={20} color="#4facfe" />
    },
    {
      stage: "Content",
      tagline: "High-Retention Formatting",
      desc: "Editing high-impact short-form reels, interactive carousels, and typography hooks via Adobe Suite & CapCut.",
      metric: "Hook-Tested Ad Assets",
      icon: <Film size={20} color="#6366f1" />
    },
    {
      stage: "Campaign",
      tagline: "Strategic Paid Distribution",
      desc: "Deploying multi-tier campaigns in Google Ads & Meta Ads Manager with precision audience and keyword targeting.",
      metric: "Full-Funnel TOFU • MOFU • BOFU",
      icon: <Sliders size={20} color="#a855f7" />
    },
    {
      stage: "Audience",
      tagline: "Engaged Customer Journeys",
      desc: "Capturing high-intent search queries and social platform users through tailored value propositions.",
      metric: "Segmented Intent Audiences",
      icon: <Sun size={20} color="#38bdf8" />
    },
    {
      stage: "Conversion",
      tagline: "Measurable Bottom-Line ROI",
      desc: "Optimizing checkout funnels, tracking GA4 key events, and maximizing customer acquisition efficiency.",
      metric: "Validated Analytics Attribution",
      icon: <Check size={20} color="#10b981" />
    }
  ];

  const studioGear = [
    {
      title: "Cinema Camera Systems",
      detail: "Professional setup, sensor exposure calibration, white balancing, and high-framerate capture for product b-roll.",
      tag: "Capture"
    },
    {
      title: "Follow-Focus Rigs",
      detail: "Precision mechanical & wireless follow-focus operation ensuring razor-sharp subject isolation during movement.",
      tag: "Optics"
    },
    {
      title: "3-Point Studio Lighting",
      detail: "Configuring key, fill, hair, and background rim lights with softboxes, grids, and diffusers for commercial fidelity.",
      tag: "Lighting"
    },
    {
      title: "E-Commerce & Product Staging",
      detail: "Managing turntable rigs, product alignment, clean backgrounds, and reflective surface light control.",
      tag: "Staging"
    },
    {
      title: "Model & Fashion Direction",
      detail: "Lighting and camera staging for dynamic human poses, garment textures, and movement on studio sets.",
      tag: "Fashion"
    },
    {
      title: "Production Crew Workflow",
      detail: "Safe equipment staging, cable management, battery rotation, and rapid lens swapping in fast-paced commercial shoots.",
      tag: "Operations"
    }
  ];

  return (
    <section id="creative" className="section-container" style={{ position: 'relative' }}>
      {/* Background Studio Light Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <div className="section-tag mono-tag">
          <span className="dot" />
          <span>THE UNFAIR ADVANTAGE</span>
        </div>
        <h2 className="section-title">
          Behind The <span className="gradient-text">Creative</span>
        </h2>
        <p className="section-subtitle">
          “Before digital marketing, I worked hands-on in professional studio, fashion, model and e-commerce production environments.”
        </p>
      </div>

      {/* Main Feature Banner */}
      <div
        className="glass-panel"
        style={{
          padding: '2.5rem 2rem',
          marginBottom: '3.5rem',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          background: 'linear-gradient(135deg, rgba(14, 21, 35, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <div className="badge-pill badge-cyan" style={{ marginBottom: '0.5rem' }}>
              <Video size={14} />
              <span>THE PRODUCTION-TO-PERFORMANCE DIFFERENCE</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 700 }}>
              Why Creative Production Fuels Better Marketing ROAS
            </h3>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>20+</span> Months Set Experience •{' '}
            <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>70+</span> Shoots Managed
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '900px' }}>
          Most digital marketers rely on generic stock assets or third-party creatives that they cannot control or optimize. Having spent nearly two years as a Cameraman Assistant at Colorful Clouds India rigging cinema gear, lighting setups, and directing technical workflow for 70+ e-commerce shoots and 20+ fashion shoots, I know how an asset is created from the glass of the lens all the way to the conversion button in the user's feed.
        </p>
      </div>

      {/* Interactive Production to Marketing Conversion Pipeline */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="mono-tag" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem' }}>
            INTERACTIVE PRODUCTION-TO-CONVERSION PIPELINE
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            CLICK ANY STAGE TO INSPECT
          </span>
        </div>

        {/* Stepper Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.6rem',
            marginBottom: '1.5rem',
          }}
        >
          {pipelineSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.stage}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.4rem',
                  padding: '1rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'rgba(16, 22, 36, 0.5)',
                  border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-smooth)',
                  boxShadow: isActive ? 'var(--glow-cyan)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  {step.icon}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                    0{idx + 1}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>
                  {step.stage}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            border: '1px solid var(--border-cyan-glow)',
            background: 'rgba(14, 20, 33, 0.9)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                STAGE 0{activeStep + 1} OF 06
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                {pipelineSteps[activeStep].tagline}
              </span>
            </div>
            <h4 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: 800 }}>
              {pipelineSteps[activeStep].stage}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              {pipelineSteps[activeStep].desc}
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(9, 13, 22, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'right',
            }}
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
              PROVEN EXECUTION METRIC
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--accent-cyan)' }}>
              {pipelineSteps[activeStep].metric}
            </div>
          </div>
        </div>
      </div>

      {/* Hands-On Studio Gear & Competencies */}
      <div>
        <span className="mono-tag" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem', display: 'block', marginBottom: '1.25rem' }}>
          STUDIO GEAR & TECHNICAL RIGGING CAPABILITIES
        </span>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {studioGear.map((item) => (
            <div
              key={item.title}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(12, 17, 28, 0.65)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                    {item.title}
                  </h5>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
