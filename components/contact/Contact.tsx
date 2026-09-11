'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ChevronRight, Star } from 'lucide-react';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('maxgamer7642@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:maxgamer7642@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
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
                DIRECT CHANNELS
              </h3>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#e51b24] font-bold uppercase tracking-wider">EMAIL ADDRESS</div>
                    <a
                      href="mailto:maxgamer7642@gmail.com"
                      className="text-sm font-mono text-white font-medium hover:text-[#e51b24] transition-colors"
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
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#e51b24] font-bold uppercase tracking-wider">PHONE / WHATSAPP</div>
                    <a
                      href="tel:+919667461227"
                      className="text-sm font-mono text-white font-medium hover:text-[#e51b24] transition-colors"
                    >
                      +91 9667461227
                    </a>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#e51b24] bg-[#e51b24]/15 px-2.5 py-1 rounded border border-[#e51b24]/40 font-bold">
                  AVAILABLE
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#140c0d] border border-[#261818]">
                <div className="w-10 h-10 rounded-lg bg-[#1f1012] border border-[#e51b24]/40 flex items-center justify-center text-[#e51b24]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#e51b24] font-bold uppercase tracking-wider">BASE LOCATION</div>
                  <div className="text-sm font-mono text-white font-medium">New Delhi, India</div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-6 border-t border-[#261818] flex items-center justify-between">
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
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors"
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
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors"
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
                  className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-4 py-3 rounded outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rdr-btn-primary justify-center cursor-pointer mt-2"
              >
                <span>TRANSMIT INQUIRY</span>
                <ChevronRight size={16} />
              </button>
            </form>

            {formSent && (
              <div className="mt-4 p-3 rounded bg-[#1f1012] border border-[#e51b24]/40 flex items-center gap-2 text-xs font-mono text-[#e51b24]">
                <CheckCircle2 size={14} />
                <span>Default mail client triggered. Ready to send!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
