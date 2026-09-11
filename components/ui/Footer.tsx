'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, ArrowUp, Star, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenResume?: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-[#050304] border-t border-[#261818] pt-4 sm:pt-5 pb-0 text-left">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Branding matching the giant RDR2 Footer Title */}
        <div className="pb-4 border-b border-[#261818] flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl text-white tracking-wider uppercase">
                ANSHU
              </span>
              <span className="px-2 py-0.5 rounded bg-[#e51b24] text-white font-black text-sm tracking-tighter">
                PRO
              </span>
            </div>
            <p className="font-mono text-xs text-[#e51b24] font-bold tracking-[0.25em] uppercase mt-1">
              DIGITAL GROWTH LAB &bull; CREATIVE PRODUCTION
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#e51b24] tracking-widest uppercase transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* 4 Columns Grid + Rating Box matching RDR2 Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 py-4 sm:py-5 border-b border-[#261818]">
          {/* ESRB-Inspired Professional Rating Box */}
          <div className="lg:col-span-3">
            <div className="p-4 rounded border-2 border-white/20 bg-[#0d0909] flex gap-3.5 max-w-xs">
              <div className="w-12 h-14 bg-white text-black font-['Bebas_Neue',sans-serif] text-4xl font-normal flex items-center justify-center border-r border-black shrink-0 tracking-wider">
                PRO
              </div>
              <div className="text-xs font-mono text-white leading-tight flex flex-col justify-center space-y-1 font-medium">
                <div className="font-bold uppercase text-[#e51b24] tracking-wider">
                  VERIFIED SPECIALIST
                </div>
                <div>Paid Media &bull; Google Ads</div>
                <div>Technical Organic SEO</div>
                <div>20+ Mo. Studio Production</div>
              </div>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Oswald','Bebas_Neue',sans-serif] text-sm font-bold text-white uppercase tracking-wider">
              PORTFOLIO
            </h4>
            <ul className="space-y-2 text-xs font-mono text-white/90 font-medium">
              <li><Link href="/#home" className="hover:text-[#e51b24] transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[#e51b24] transition-colors">The Story</Link></li>
              <li><Link href="/#experience" className="hover:text-[#e51b24] transition-colors">Experience</Link></li>
              <li><Link href="/#projects" className="hover:text-[#e51b24] transition-colors">Selected Work</Link></li>
              <li><Link href="/#skills" className="hover:text-[#e51b24] transition-colors">Stack & Tools</Link></li>
            </ul>
          </div>

          {/* Column 2: Credentials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Oswald','Bebas_Neue',sans-serif] text-sm font-bold text-white uppercase tracking-wider">
              CREDENTIALS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-white/90 font-medium">
              <li>Colorful Clouds India (20+ Mo.)</li>
              <li>BCA &bull; MDU Rohtak (2021–2026)</li>
              <li>Internshala Digital Marketing</li>
              <li>70+ E-Commerce Shoots Staged</li>
              {onOpenResume && (
                <li>
                  <button onClick={onOpenResume} className="text-[#e51b24] font-bold hover:underline cursor-pointer">
                    Download Official Resume PDF &rarr;
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Direct Inquiry matching RDR2 Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-['Oswald','Bebas_Neue',sans-serif] text-sm font-bold text-white uppercase tracking-wider">
              DIRECT INQUIRY
            </h4>
            <p className="text-xs text-white leading-relaxed font-sans font-medium">
              Open to performance marketing, paid acquisition, and growth executive roles.
            </p>

            <form onSubmit={handleSubmit} className="flex items-center gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                autoComplete="email"
                suppressHydrationWarning
                className="w-full bg-[#140c0d] border border-[#261818] focus:border-[#e51b24] text-xs font-mono text-white px-3.5 py-2.5 outline-none rounded-l transition-colors placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className="bg-[#e51b24] hover:bg-[#ff2a34] text-white px-4 py-2.5 rounded-r transition-colors cursor-pointer"
                aria-label="Submit inquiry"
              >
                <Send size={14} />
              </button>
            </form>
            {subscribed && (
              <span className="text-xs font-mono text-[#e51b24] font-bold block">
                Thank you! Message forwarded.
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rockstar-style Monogram */}
        <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/80 font-medium">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:maxgamer7642@gmail.com" className="hover:text-[#e51b24] transition-colors">maxgamer7642@gmail.com</a>
            <span>+91 9667461227</span>
            <span>New Delhi, India</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <a
              href="https://youtube.com/@nextgenmarketing-q1b?si=jjW4_LqNbZthXP5K"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e51b24] transition-colors inline-flex items-center gap-1.5"
            >
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e51b24]">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
              </svg>
              <span>YouTube ↗</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e51b24] transition-colors">LinkedIn ↗</a>
            <a
              href="https://www.instagram.com/nextgen.marketing__011?stkn=MWY1OHE5ZGpmOHJ3dA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e51b24] transition-colors inline-flex items-center gap-1.5"
            >
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e51b24]">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram ↗</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>&copy; 2026 portfolio</span>
            <div className="w-6 h-6 rounded bg-[#e51b24] text-black font-black flex items-center justify-center text-xs font-['Bebas_Neue',sans-serif]">
              A*
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Centered Bottom Bar at the absolute end of the page */}
      <div className="mt-6 py-4 border-t-2 border-[#e51b24]/40 bg-[#000000] text-center w-full relative z-30 shadow-2xl">
        <p className="font-mono text-sm sm:text-base text-white font-black tracking-widest uppercase">
          &copy; 2026 portfolio
        </p>
      </div>
    </footer>
  );
}
