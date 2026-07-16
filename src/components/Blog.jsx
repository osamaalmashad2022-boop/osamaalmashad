'use client';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import BlogCard from './BlogCard';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.blog.sectionSubtitle}</span>
          <h2 className="section-title">{t.blog.sectionTitle}</h2>
        </div>

        <div className="blog-grid">
          {t.blog.items.map((article, index) => (
            <BlogCard
              key={index}
              article={article}
              t={t}
              style={{ transitionDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>

        {/* View All Articles Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Link href="/blog" className="btn btn-outline reveal" style={{ cursor: 'pointer' }}>
            {t.blog.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}



