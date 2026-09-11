import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://anshu-portfolio-snowy.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Anshu — Digital Marketing Specialist & Performance SEO Expert | Growth & Paid Media',
  description:
    'Top-rated Digital Marketing Specialist & Performance Marketer based in New Delhi. Expert in SEO, Google Ads, Meta Ads, E-commerce Scaling, Paid Media ROI, Conversion Funnel Optimization, and GA4 Data Analytics.',
  keywords: [
    'Digital Marketing Specialist',
    'Performance Marketing Expert',
    'Best SEO Specialist Delhi',
    'Digital Marketing Portfolio',
    'SEO Expert India',
    'Google Ads Specialist',
    'Meta Ads Expert',
    'E-commerce Growth Marketing',
    'Paid Media Strategist',
    'Conversion Rate Optimization CRO',
    'Social Media Marketing Expert',
    'Lead Generation Specialist',
    'GA4 Web Analytics Expert',
    'Digital Marketing Consultant New Delhi',
    'Anshu Portfolio',
    'Anshu Digital Marketing',
    'Growth Marketer India'
  ],
  authors: [{ name: 'Anshu', url: siteUrl }],
  creator: 'Anshu',
  publisher: 'Anshu',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Anshu — Digital Marketing Specialist & Performance SEO Expert',
    description:
      'Turning Digital Strategies Into Scalable Growth. Specializing in SEO, Paid Media, Meta & Google Ads, Conversion Funnel Optimization, and Creative Studio Production.',
    url: siteUrl,
    siteName: 'ANSHU / DIGITAL GROWTH LAB',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Anshu Digital Marketing & SEO Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anshu — Digital Marketing Specialist & Performance SEO Expert',
    description:
      'Digital Marketer focused on Performance Marketing, SEO, Google & Meta Ads, Funnel Optimization, and E-commerce Scaling.',
    images: ['/favicon.svg'],
    creator: '@AnshuMarketing',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'googlea948694ece471cc3',
  },
  category: 'Digital Marketing & SEO',
};

export const viewport: Viewport = {
  themeColor: '#0c0809',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD Structured Data Schema for Search Engines (Google Knowledge Graph & Rich Snippets)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Anshu',
      jobTitle: 'Digital Marketing Specialist & Performance SEO Expert',
      url: siteUrl,
      email: 'mailto:maxgamer7642@gmail.com',
      telephone: '+919667461227',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressCountry: 'India',
      },
      sameAs: [
        'https://youtube.com/@nextgenmarketing-q1b?si=jjW4_LqNbZthXP5K',
        'https://linkedin.com',
        'https://github.com/gboy58082-hash',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'MDU Rohtak',
        department: 'Bachelor of Computer Applications (BCA)',
      },
      knowsAbout: [
        'Digital Marketing',
        'Search Engine Optimization (SEO)',
        'Performance Marketing',
        'Search Engine Marketing (SEM)',
        'Google Ads',
        'Meta Ads (Facebook & Instagram)',
        'Conversion Rate Optimization (CRO)',
        'E-commerce Growth',
        'Google Analytics 4 (GA4)',
        'Content Strategy',
        'Social Media Growth',
        'GeeksforGeeks Web Architecture & Computer Applications Fundamentals',
        'Link Building & Organic Authority',
        'Brand Mentions & Digital PR',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: 'Anshu — Digital Growth Lab',
      url: siteUrl,
      priceRange: '$$',
      telephone: '+919667461227',
      email: 'maxgamer7642@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressCountry: 'India',
      },
      founder: {
        '@id': `${siteUrl}/#person`,
      },
      description:
        'Professional digital marketing and SEO services including organic search ranking, paid advertising management, performance scaling, and conversion funnel optimization.',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Anshu Digital Marketing Portfolio',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="bg-[#050505] text-slate-100 antialiased selection:bg-[#e51b24]/30 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
