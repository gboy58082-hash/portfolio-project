'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  Star,
  Loader2,
  AlertCircle,
} from 'lucide-react';

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('maxgamer7642@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit message.');
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Transmission failed. Please check your details or email directly.'
      );
    }
  };

  return (
    <section id="contact" className="pt-16 pb-12 bg-[#0c0809] border-b border-[#261818]">
      <SectionHeading
        label="DISPATCH & INQUIRY"
        title="LET'S BUILD SOMETHING"
        highlight="THAT PERFORMS."
        subtitle="Open to opportunities in Performance Marketing, SEO, Paid Media, Social Media, and E-commerce Growth."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Direct Channels */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-8 rounded-xl bg-[#0f0a0b] border border-[#e51b24]/50 shadow-2xl text-left">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#261818]">
              <Star size={14} className="fill-[#e51b24] text-[#e51b24]" />
              <h3 className="text-2xl font-bold text-white uppercase font-['Oswald','Bebas_Neue',sans-serif] tracking-wide">
                DIRECT CHANNELS & SOCIALS
              </h3>
            </div>

            <div className="space-y-3.5">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">EMAIL ADDRESS</div>
                    <a
                      href="mailto:maxgamer7642@gmail.com"
                      className="text-xs sm:text-sm font-mono text-white font-medium hover:text-[#e51b24] transition-colors"
                    >
                      maxgamer7642@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-[#0a0707] border border-[#261818] text-white hover:text-[#e51b24] transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check size={14} className="text-[#e51b24]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">PHONE / WHATSAPP</div>
                    <a
                      href="tel:+919667461227"
                      className="text-xs sm:text-sm font-mono text-white font-medium hover:text-[#e51b24] transition-colors"
                    >
                      +91 9667461227
                    </a>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#e51b24] bg-[#e51b24]/15 px-2.5 py-1 rounded border border-[#e51b24]/40 font-bold">
                  AVAILABLE
                </span>
              </div>

              {/* YouTube Channel */}
              <a
                href="https://youtube.com/@nextgenmarketing-q1b?si=jjW4_LqNbZthXP5K"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24] group-hover:scale-105 transition-transform">
                    <YoutubeIcon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">YOUTUBE CHANNEL</div>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium group-hover:text-[#e51b24] transition-colors">
                      @NextGenMarketing &bull; Video Case Studies
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-[#e51b24] transition-colors">↗</span>
              </a>

              {/* LinkedIn Profile */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24] group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">LINKEDIN NETWORK</div>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium group-hover:text-[#e51b24] transition-colors">
                      Professional Dossier & Insights
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-[#e51b24] transition-colors">↗</span>
              </a>

              {/* Instagram Profile */}
              <a
                href="https://www.instagram.com/nextgen.marketing__011?stkn=MWY1OHE5ZGpmOHJ3dA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#140c0d] border border-[#261818] hover:border-[#e51b24]/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24] group-hover:scale-105 transition-transform">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">INSTAGRAM PROFILE</div>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium group-hover:text-[#e51b24] transition-colors">
                      @nextgen.marketing__011 &bull; Behind The Scenes & Creative Shoots
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-[#e51b24] transition-colors">↗</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#e51b24] font-bold uppercase tracking-wider">BASE LOCATION</div>
                  <div className="text-xs sm:text-sm font-mono text-white font-medium">New Delhi, India</div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-6 pt-5 border-t border-[#261818] flex items-center justify-between">
              <span className="text-xs font-mono text-white font-medium">Need a formal CV?</span>
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="font-mono text-xs font-bold text-[#e51b24] hover:underline cursor-pointer"
                >
                  View ATS Resume Modal &rarr;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-xl bg-[#0f0a0b] border border-[#261818] shadow-2xl text-left">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#261818]">
              <Star size={14} className="fill-[#e51b24] text-[#e51b24]" />
              <h3 className="text-2xl font-bold text-white uppercase font-['Oswald','Bebas_Neue',sans-serif] tracking-wide">
                SEND AN INQUIRY
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-white uppercase tracking-wider block mb-1.5 font-bold">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  suppressHydrationWarning
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-base sm:text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-white uppercase tracking-wider block mb-1.5 font-bold">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  suppressHydrationWarning
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-base sm:text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-white uppercase tracking-wider block mb-1.5 font-bold">
                  PROJECT OR ROLE BRIEF
                </label>
                <textarea
                  required
                  rows={4}
                  suppressHydrationWarning
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the campaign, agency role, or e-commerce store..."
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-base sm:text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rdr-btn-primary justify-center cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>TRANSMITTING INQUIRY...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT INQUIRY</span>
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 p-3.5 rounded bg-[#1f1012] border border-[#e51b24]/60 flex items-center gap-2.5 text-xs font-mono text-white animate-in fade-in">
                <CheckCircle2 size={16} className="text-[#e51b24] shrink-0" />
                <span>Inquiry successfully transmitted! I will respond to your email shortly.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3.5 rounded bg-[#2a0f12] border border-red-500/60 flex items-center gap-2.5 text-xs font-mono text-red-200 animate-in fade-in">
                <AlertCircle size={16} className="text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
