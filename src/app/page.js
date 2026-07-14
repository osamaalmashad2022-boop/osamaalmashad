import JsonLd from '@/components/JsonLd';
import HomePage from './HomePage';

export default function Home() {
  return (
    <>
      {/* Structured Data — Server-rendered for SEO crawlers */}
      <JsonLd />

      {/* Client-side interactive content */}
      <HomePage />
    </>
  );
}
