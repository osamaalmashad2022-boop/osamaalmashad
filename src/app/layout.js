import './globals.css';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  AUTHOR_NAME,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_ALT,
  GOOGLE_SITE_VERIFICATION,
  BING_SITE_VERIFICATION,
} from '@/constants/seo';
import { Inter, JetBrains_Mono, Changa, Tajawal } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const changa = Changa({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-changa',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: SITE_TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en': SITE_URL,
      'ar': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    bingbot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION || undefined,
    other: BING_SITE_VERIFICATION ? {
      'msvalidate.01': [BING_SITE_VERIFICATION],
    } : undefined,
  },
  category: 'technology',
};

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedLang = localStorage.getItem('portfolio-lang');
                if (savedLang === 'en' || savedLang === 'ar') {
                  document.documentElement.lang = savedLang;
                  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
                }
              } catch (e) {}
            `,
          }}
        />
        <meta name="format-detection" content="telephone=no" />

        {/* Bilingual SEO — Arabic name meta tags for search engines */}
        <meta name="author" content="Osama Ayman Almashad | أسامة أيمن المشد" />

        {/* Arabic-specific Open Graph */}
        <meta property="og:locale:alternate" content="ar_EG" />

        {/* Geo tags — helps with local/regional search */}
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Damietta, Egypt" />
        <meta name="geo.position" content="31.4175;31.8144" />
        <meta name="ICBM" content="31.4175, 31.8144" />

        {/* Dublin Core metadata — strengthens identity signals */}
        <meta name="DC.title" content="Osama Almashad | أسامة المشد — Entrepreneur & Web Developer" />
        <meta name="DC.creator" content="Osama Ayman Almashad" />
        <meta name="DC.subject" content="Web Development, EdTech, Frontend, Portfolio" />
        <meta name="DC.language" content="en,ar" />
        <meta name="DC.type" content="InteractiveResource" />

        {/* Extra SEO — catch alternate spelling searches */}
        <meta name="subject" content="Osama Ayman Almashad Portfolio — أسامة أيمن المشد" />
        <meta name="classification" content="Portfolio, Web Development, EdTech" />
        <meta name="url" content="https://osamaalmashad.tech" />
        <meta name="identifier-URL" content="https://osamaalmashad.tech" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${changa.variable} ${tajawal.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
