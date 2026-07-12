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
} from '@/constants/seo';

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
  alternates: {
    canonical: SITE_URL,
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
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
  other: {
    'google-site-verification': GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />

        {/* Bilingual SEO — Arabic name meta tags for search engines */}
        <meta name="author" content="Osama Ayman Almashad | أسامة أيمن المشد" />
        <meta name="subject" content="Portfolio of Osama Almashad — أسامة المشد" />
        <meta name="abstract" content="الموقع الرسمي لأسامة أيمن المشد — مطور واجهات أمامية وخبير تجربة مستخدم. Official portfolio of Osama Almashad — Frontend Developer & UI/UX Expert." />
        <meta name="classification" content="Portfolio, Web Development, UI/UX Design" />
        <meta name="language" content="en, ar" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Arabic-specific Open Graph */}
        <meta property="og:locale:alternate" content="ar_EG" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Google Fonts — Performance optimized */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
