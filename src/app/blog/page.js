'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogListingPage() {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(t.blog.items.map(item => item.category))];

  const filteredItems = t.blog.items.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <div className="section-header reveal revealed" style={{ marginBottom: '40px' }}>
        <span className="section-subtitle">{t.blog.sectionSubtitle}</span>
        <h2 className="section-title">{t.blog.sectionTitle}</h2>
        <p className="blog-coming-soon-desc" style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '0.95rem', maxWidth: '600px' }}>
          {t.blog.comingSoonDesc}
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="blog-controls" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', backdropFilter: 'blur(10px)' }}>
        
        {/* Category Filter */}
        <div className="blog-categories" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`tech-tag ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              style={{
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--cyan)' : 'var(--border-light)',
                background: selectedCategory === cat ? 'rgba(0, 245, 212, 0.1)' : 'transparent',
                color: selectedCategory === cat ? 'var(--cyan)' : 'var(--text-muted)',
                fontWeight: '600',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat === 'All' ? (isRTL ? 'الكل' : 'All') : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="blog-search" style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <input
            type="text"
            placeholder={isRTL ? 'ابحث عن المقالات...' : 'Search articles...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px',
              paddingInlineEnd: '40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              background: 'rgba(10, 10, 15, 0.8)',
              color: '#fff',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color var(--transition-fast)'
            }}
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="18"
            height="18"
            style={{
              position: 'absolute',
              top: '50%',
              [isRTL ? 'left' : 'right']: '16px',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              pointerEvents: 'none'
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="blog-grid">
        {filteredItems.map((article, index) => {
          const hasContent = !!article.content;
          const articleUrl = hasContent ? `/blog/${article.slug}` : '#';

          return (
            <div
              key={index}
              className={`glass-card blog-card reveal revealed ${hasContent ? 'clickable' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
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
                  <Link href={articleUrl} className="blog-read-more">
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

        {filteredItems.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <p>{isRTL ? 'لم يتم العثور على مقالات تطابق بحثك.' : 'No articles found matching your criteria.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
