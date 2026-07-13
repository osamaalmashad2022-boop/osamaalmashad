import JsonLd from '@/components/JsonLd';
import HomePage from './HomePage';

export default function Home() {
  return (
    <>
      {/* Structured Data — Server-rendered for SEO crawlers */}
      <JsonLd />

      {/* Hidden SEO content for search engines (visually hidden, accessible to crawlers) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
      >
        <h2>Osama Almashad — أسامة المشد</h2>
        <p>Osama Ayman Almashad — أسامة أيمن المشد — Entrepreneur & Web Developer — رائد أعمال ومطور ويب</p>
        <p>Osama Ayman — أسامة أيمن — Almashad — المشد — أسامة — Osama</p>
        <p>EdTech Specialist — Entrepreneur — Founder of Donatella — رائد أعمال — مؤسس دوناتيلا — تكنولوجيا تعليم</p>
        <p>Damietta University — جامعة دمياط — Faculty of Education — كلية التربية</p>
      </div>

      {/* Client-side interactive content */}
      <HomePage />
    </>
  );
}
