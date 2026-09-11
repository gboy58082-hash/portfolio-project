'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, FileText, Star } from 'lucide-react';
import MobileMenu from './MobileMenu';

function YoutubeIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
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
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'WORK', href: '/#projects' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'CREDENTIALS', href: '/#education' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[900] transition-all duration-300">
        {/* RDR2 Top Utility Micro-Bar */}
        <div className="bg-[#050404] border-b border-[#241717] py-1 px-4 sm:px-8 text-xs font-mono flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="text-[#e51b24] font-black uppercase tracking-wider flex items-center gap-1">
              <Star size={11} className="fill-[#e51b24]" />
              PERFORMANCE MARKETING // DIGITAL GROWTH LAB
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs uppercase tracking-widest text-white/90 font-medium">
            <span className="text-[#e51b24] font-bold">&bull; AVAILABLE FOR HIRE</span>
            <span className="text-zinc-600">|</span>
            <span>NEW DELHI, INDIA</span>
            <span className="text-zinc-600">|</span>
            <a
              href="https://youtube.com/@nextgenmarketing-q1b?si=jjW4_LqNbZthXP5K"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e51b24] transition-colors flex items-center gap-1.5"
            >
              <YoutubeIcon size={13} />
              <span>YOUTUBE ↗</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="https://www.instagram.com/nextgen.marketing__011?stkn=MWY1OHE5ZGpmOHJ3dA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e51b24] transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon size={13} />
              <span>INSTAGRAM ↗</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e51b24] transition-colors"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        {/* Main Rockstar-Style Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'py-2.5 bg-[#0a0707]/95 backdrop-blur-md border-b border-[#e51b24]/20 shadow-2xl'
              : 'py-4 bg-[#0a0707]/80 backdrop-blur-sm border-b border-white/[0.06]'
          }`}
        >
          <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
            {/* RDR2-Inspired Logo */}
            <Link href="/#home" className="group flex items-center gap-2">
              <div className="flex items-center">
                <span className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl text-white tracking-widest uppercase leading-none">
                  ANSHU
                </span>
                <span className="ml-1.5 px-1.5 py-0.5 rounded bg-[#e51b24] text-white font-black text-xs font-mono tracking-normal">
                  PRO
                </span>
              </div>
            </Link>

            {/* Center Navigation Links with Red Active Underline */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('/#', '');
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-mono text-xs font-bold tracking-widest transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#e51b24]'
                        : 'text-[#ded9d2] hover:text-[#e51b24]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e51b24] shadow-[0_0_8px_#e51b24]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#1c1414] hover:bg-[#2e1a1b] border border-[#e51b24]/30 text-xs font-mono font-bold tracking-wider text-[#ded9d2] hover:text-[#e51b24] transition-all cursor-pointer"
                >
                  <FileText size={12} className="text-[#e51b24]" />
                  <span>RESUME</span>
                </button>
              )}

              <Link
                href="/#contact"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded bg-[#e51b24] hover:bg-[#ff2a34] text-white font-mono text-xs font-bold tracking-wider shadow-[0_2px_12px_rgba(229,27,36,0.4)] transition-all cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ChevronRight size={14} />
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded bg-[#1a1212] border border-[#e51b24]/30 text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onOpenResume={onOpenResume}
      />
    </>
  );
}
