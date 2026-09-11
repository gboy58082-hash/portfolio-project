import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://anshu-growth.dev'),
  title: 'Anshu — Digital Marketing Portfolio | SEO, Paid Media & Growth',
  description:
    'Professional portfolio of Anshu, a digital marketing professional focused on SEO, paid media, social media, analytics and e-commerce growth.',
  keywords: [
    'Anshu',
    'Digital Marketer',
    'Performance Marketing',
    'SEO',
    'SEM',
    'Paid Media',
    'Social Media Growth',
    'E-commerce Growth',
    'GA4',
    'Google Ads',
    'Creative Production',
    'New Delhi'
  ],
  authors: [{ name: 'Anshu' }],
  openGraph: {
    title: 'Anshu — Digital Marketing Portfolio | SEO, Paid Media & Growth',
    description: 'Turning Digital Strategies Into Growth. Performance Marketing, SEO, Paid Media, Analytics & Studio Production.',
    url: 'https://anshu-growth.dev',
    siteName: 'ANSHU / DIGITAL GROWTH LAB',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Anshu Digital Marketing Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anshu — Digital Marketing Portfolio | SEO, Paid Media & Growth',
    description: 'Digital Marketer focused on performance, consumer journeys, funnel optimization, and creative production.',
    images: ['/favicon.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel:wght@700;800;900&family=Oswald:wght@500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#050505] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
