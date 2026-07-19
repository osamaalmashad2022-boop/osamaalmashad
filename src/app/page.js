import JsonLd from '@/components/JsonLd';
import HomePage from './HomePage';
import {
  AUTHOR_NAME,
  AUTHOR_NAME_AR,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_AR,
  SOCIAL_LINKS,
} from '@/constants/seo';

// Server-rendered SEO content visible to crawlers even without JS
function NoscriptSEO() {
  return (
    <noscript>
      <div
        style={{
          padding: '40px 20px',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'system-ui, sans-serif',
          lineHeight: '1.8',
          color: '#e0e0e0',
          backgroundColor: '#0a0a0f',
        }}
      >
        <h1>{AUTHOR_NAME} | {AUTHOR_NAME_AR}</h1>
        <h2>Entrepreneur &amp; Web Developer | رائد أعمال ومطور ويب</h2>

        <p>{SITE_DESCRIPTION}</p>
        <p>{SITE_DESCRIPTION_AR}</p>

        <h3>About | عن أسامة</h3>
        <p>
          Osama Ayman Almashad (also known as Osama Elmeshad / أسامة أيمن المشد / أسامه المشد)
          is an entrepreneur and frontend web developer from Damietta, Egypt.
          He is the founder of Donatella and specializes in building stunning web experiences
          using React, Next.js, and modern frontend technologies.
          He holds a degree in Educational Technology from Damietta University,
          Faculty of Education (Class of 2026).
        </p>
        <p>
          أسامة أيمن المشد — رائد أعمال ومطور ويب من دمياط، مصر.
          مؤسس دوناتيلا ومتخصص في بناء تجارب رقمية مبهرة باستخدام React و Next.js.
          حاصل على بكالوريوس تكنولوجيا التعليم من كلية التربية، جامعة دمياط.
        </p>

        <h3>Services | الخدمات</h3>
        <ul>
          <li>UI/UX Design — تصميم واجهات المستخدم</li>
          <li>Frontend Development (React, Next.js) — تطوير الواجهات الأمامية</li>
          <li>E-Commerce Solutions — حلول التجارة الإلكترونية</li>
          <li>EdTech Platforms — منصات تكنولوجيا التعليم</li>
          <li>Portfolio Websites — مواقع البورتفوليو</li>
          <li>Digital Consulting — الاستشارات الرقمية</li>
        </ul>

        <h3>Featured Project | مشروع مميز</h3>
        <p>
          <strong>Nexora Platform (منصة نيكسورا)</strong> — An innovative learning platform
          for digital resource production, powered by an AI Agent. Graduation project from
          Damietta University.
        </p>

        <h3>Contact | التواصل</h3>
        <ul>
          <li>Website: <a href={SITE_URL}>{SITE_URL}</a></li>
          <li>LinkedIn: <a href={SOCIAL_LINKS.linkedin}>Osama Almashad on LinkedIn</a></li>
          <li>Facebook: <a href={SOCIAL_LINKS.facebook}>Osama Almashad on Facebook</a></li>
          <li>YouTube: <a href={SOCIAL_LINKS.youtube}>Osama Almashad on YouTube</a></li>
          <li>WhatsApp: <a href={SOCIAL_LINKS.whatsapp}>Contact via WhatsApp</a></li>
        </ul>

        <h3>Skills | المهارات</h3>
        <p>
          React, Next.js, JavaScript, HTML5, CSS3, TailwindCSS, UI/UX Design,
          Responsive Design, Three.js, Unity 3D, Educational Technology,
          Instructional Design, AI in Education.
        </p>

        <h3>Certifications | الشهادات</h3>
        <ul>
          <li>ICDL-Base — International Computer Driving License</li>
          <li>Educational Technology Specialization — Edraak</li>
          <li>Mathematics in Buying and Selling — Edraak</li>
          <li>Personal Financial Planning — Edraak</li>
          <li>Time Management — Variance</li>
          <li>Computer Course Level 1 — M3aarf</li>
        </ul>
      </div>
    </noscript>
  );
}

// Server-rendered hidden semantic content for SEO crawlers
// This is visually hidden but accessible to search engine crawlers
function SemanticSEOContent() {
  return (
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
      <h2>Osama Ayman Almashad — أسامة أيمن المشد</h2>
      <p>
        Also known as: Osama Elmeshad, Osama Al Mashad, Osama El Meshad,
        Usama Almashad, أسامه المشد, اسامة المشد, اسامه ايمن المشد.
      </p>
      <p>
        Entrepreneur, Frontend Web Developer, and Educational Technology Specialist
        from Damietta University, Egypt. Founder of Donatella.
        Building modern web applications with React and Next.js.
      </p>
      <p>
        رائد أعمال ومطور واجهات أمامية ومتخصص تكنولوجيا تعليم من جامعة دمياط، مصر.
        مؤسس دوناتيلا. يبني تطبيقات ويب حديثة باستخدام React و Next.js.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Structured Data — Server-rendered for SEO crawlers */}
      <JsonLd />

      {/* SEO fallback content for crawlers without JS */}
      <NoscriptSEO />

      {/* Hidden semantic content for search engines */}
      <SemanticSEOContent />

      {/* Client-side interactive content */}
      <HomePage />
    </>
  );
}
