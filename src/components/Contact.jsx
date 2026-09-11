import React, { useState } from 'react';
import { Mail, Phone, MapPin, FileText, Send, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

function LinkedInIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', roleType: 'Performance Marketing', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('maxgamer7642@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '1.5rem' }}>
      <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
        <div className="section-tag mono-tag" style={{ justifyContent: 'center' }}>
          <span className="dot" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="section-title">
          “Let's Build Something <span className="gradient-text">That Performs.”</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Open to opportunities in Digital Marketing, Performance Marketing, SEO, Paid Media, Social Media and E-commerce Growth.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Left: Direct Contact Details & Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              border: '1px solid var(--border-cyan-glow)',
              background: 'linear-gradient(145deg, rgba(16, 24, 40, 0.85) 0%, rgba(9, 13, 22, 0.95) 100%)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, marginBottom: '1.25rem' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email item */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', background: 'rgba(8, 12, 20, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 242, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>EMAIL ADDRESS</div>
                    <a href="mailto:maxgamer7642@gmail.com" style={{ color: '#ffffff', fontSize: '0.92rem', textDecoration: 'none', fontWeight: 600 }}>
                      maxgamer7642@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.4rem',
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone item */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', background: 'rgba(8, 12, 20, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(79, 172, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DIRECT PHONE / WHATSAPP</div>
                    <a href="tel:+919667461227" style={{ color: '#ffffff', fontSize: '0.92rem', textDecoration: 'none', fontWeight: 600 }}>
                      +91 9667461227
                    </a>
                  </div>
                </div>
              </div>

              {/* Location item */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.85rem 1rem', background: 'rgba(8, 12, 20, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-indigo)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                    <div style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 600 }}>New Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.75rem' }}>
              <a
                href="mailto:maxgamer7642@gmail.com?subject=Opportunity%20Discussion%20-%20Digital%20Marketing"
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Mail size={16} />
                <span>Email Me Directly</span>
              </a>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.75rem' }}
                >
                  <LinkedInIcon size={16} color="#00f2fe" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="btn-secondary"
                  style={{ padding: '0.75rem' }}
                >
                  <FileText size={16} color="#4facfe" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Dispatch Form */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            background: 'rgba(12, 17, 28, 0.75)',
            border: '1px solid var(--border-medium)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Sparkles size={18} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
              Send a Direct Inquiry
            </h3>
          </div>

          {formSubmitted ? (
            <div
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <CheckCircle2 size={42} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Inquiry Logged Successfully!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                Thank you, {formData.name || 'there'}! Your message has been noted. You can also reach me directly at <strong>maxgamer7642@gmail.com</strong>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="btn-secondary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 9, 15, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 9, 15, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Role or Project Interest
                </label>
                <select
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 9, 15, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                >
                  <option value="Performance Marketing">Performance Marketing Executive</option>
                  <option value="SEO / SEM Growth">SEO & SEM Specialist</option>
                  <option value="Paid Media / Meta & Google Ads">Paid Media (Meta / Google Ads)</option>
                  <option value="Social Media Growth">Social Media Growth & Strategy</option>
                  <option value="Creative Production & Content">Creative Studio Production + Marketing</option>
                  <option value="Other Growth Opportunity">Other Opportunity</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Project Brief or Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your team, campaign goals, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 9, 15, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '0.85rem' }}>
                <Send size={16} />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
