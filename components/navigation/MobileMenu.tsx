'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, FileText, Mail, Phone, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  onOpenResume?: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  onOpenResume,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[890] lg:hidden bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-300">
      {/* Navigation Links */}
      <div className="space-y-4">
        <span className="font-mono text-[11px] text-[#e51b24] uppercase tracking-widest block mb-4">
          NAVIGATION
        </span>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="block text-3xl font-extrabold text-white hover:text-[#e51b24] transition-colors py-2 border-b border-white/5 font-['Bebas_Neue',sans-serif] tracking-wider uppercase"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Quick Action & Contact */}
      <div className="space-y-4 pt-6 border-t border-white/10">
        <div className="flex gap-3">
          {onOpenResume && (
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-[#e51b24]/30 text-white font-mono text-xs font-semibold hover:border-[#e51b24] transition-colors cursor-pointer"
            >
              <FileText size={15} className="text-[#e51b24]" />
              <span>RESUME</span>
            </button>
          )}

          <Link
            href="/#contact"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#e51b24] hover:bg-[#ff2a34] text-white font-mono text-xs font-bold transition-all shadow-[0_2px_12px_rgba(229,27,36,0.4)]"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="text-xs font-mono text-zinc-400 space-y-1 pt-2">
          <div className="flex items-center gap-2 text-zinc-300">
            <Mail size={12} className="text-[#e51b24]" />
            <span>maxgamer7642@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Phone size={12} className="text-[#e51b24]" />
            <span>+91 9667461227 • New Delhi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
