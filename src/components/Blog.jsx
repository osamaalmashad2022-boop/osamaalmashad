'use client';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

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
          {t.blog.items.map((article, index) => {
            const hasContent = !!article.content;
            const articleUrl = hasContent ? `/blog/${article.slug}` : '#';
            return (
              <div
                key={index}
                className={`glass-card blog-card reveal ${hasContent ? 'clickable' : ''}`}
                style={{ 
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div className="blog-image">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span className="blog-coming-soon">{t.blog.comingSoon}</span>
                  )}
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-category">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  {hasContent ? (
                    <Link href={articleUrl} className="blog-read-more stretched-link">
                      {t.blog.readMore} →
                    </Link>
                  ) : (
                    <span className="blog-coming-soon" style={{ fontSize: '0.8rem', display: 'block', marginTop: '12px' }}>
                      {t.blog.comingSoon}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
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



