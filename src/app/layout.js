import './globals.css';

export const metadata = {
  title: 'Osama Almashad | Frontend Developer & UI/UX Expert',
  description: 'Professional portfolio of Osama Ayman Almashad - Frontend Developer, UI/UX Expert, and EdTech Specialist. Crafting stunning digital experiences with clean code and beautiful design.',
  keywords: 'frontend developer, UI/UX designer, portfolio, web design, Egypt, EdTech, Osama Almashad',
  authors: [{ name: 'Osama Ayman Almashad' }],
  openGraph: {
    title: 'Osama Almashad | Frontend Developer & UI/UX Expert',
    description: 'Crafting stunning digital experiences that blend beautiful design with powerful code.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
