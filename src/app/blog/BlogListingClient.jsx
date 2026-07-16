'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import BlogCard from '@/components/BlogCard';

export default function BlogListingPage() {
  const { lang, t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory('All');
  }, [lang]);

  const categories = ['All', ...new Set(t.blog.items.map(item => item.category))];

  const filteredItems = t.blog.items.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container blog-page-container">
      <div className="section-header reveal revealed blog-page-header">
        <span className="section-subtitle">{t.blog.sectionSubtitle}</span>
        <h2 className="section-title">{t.blog.sectionTitle}</h2>
        <p className="blog-coming-soon-desc">
          {t.blog.comingSoonDesc}
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="blog-controls">
        
        {/* Category Filter */}
        <div className="blog-categories">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`tech-tag blog-category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? (isRTL ? 'الكل' : 'All') : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="blog-search">
          <input
            type="text"
            className="blog-search-input"
            placeholder={isRTL ? 'ابحث عن المقالات...' : 'Search articles...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="blog-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="18"
            height="18"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="blog-grid">
        {filteredItems.map((article, index) => (
          <BlogCard
            key={index}
            article={article}
            t={t}
            className="revealed"
            style={{ transitionDelay: `${index * 0.1}s` }}
          />
        ))}

        {filteredItems.length === 0 && (
          <div className="blog-no-items">
            <p>{isRTL ? 'لم يتم العثور على مقالات تطابق بحثك.' : 'No articles found matching your criteria.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
