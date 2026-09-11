import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/ui/Footer';
import Contact from '@/components/contact/Contact';

export const metadata = {
  title: 'Contact | Anshu — Digital Marketing',
  description: 'Connect with Anshu for Digital Marketing, Performance Marketing, SEO, Paid Media, and E-commerce Growth opportunities.'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />

      <main className="pt-24 pb-12">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
