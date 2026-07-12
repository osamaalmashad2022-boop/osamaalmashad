'use client';
import { LanguageProvider } from '@/context/LanguageContext';
import BlogNavbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';

export default function BlogLayout({ children }) {
  return (
    <LanguageProvider>
      <BlogNavbar />
      <main style={{ minHeight: '85vh', paddingTop: '100px' }}>
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
