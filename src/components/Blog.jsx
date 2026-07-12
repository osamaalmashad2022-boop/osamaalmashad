'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Blog() {
  const { t, isRTL } = useLanguage();
  const router = useRouter();

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
                onClick={hasContent ? () => router.push(articleUrl) : undefined}
              >
                <div className="blog-image">
                  {article.image ? (
                    <img 
                      src={article.image} 
                      alt={article.title} 
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
                    <Link href={articleUrl} className="blog-read-more" onClick={(e) => e.stopPropagation()}>
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



