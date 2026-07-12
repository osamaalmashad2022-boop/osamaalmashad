'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function BlogPostClient({ slug }) {
  const { t, isRTL } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  // Find article
  const article = t.blog.items.find(item => item.slug === slug);

  // Scroll Progress Tracker for entire viewport
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '120px 24px', color: 'var(--text-muted)' }}>
        <h2>{isRTL ? 'المقال غير موجود' : 'Article Not Found'}</h2>
        <p style={{ margin: '16px 0 24px 0' }}>
          {isRTL ? 'عذراً، المقال الذي تبحث عنه غير موجود أو تم نقله.' : 'Sorry, the article you are looking for does not exist or has been moved.'}
        </p>
        <Link href="/blog" className="btn btn-primary">
          {isRTL ? 'العودة للمدونة' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  // Copy Link Share Functionality
  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="blog-page-container">
      {/* Viewport Reading Progress Bar */}
      <div 
        className="viewport-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Link href="/blog" className="back-btn">
          {isRTL ? '← الرجوع للمدونة' : '← Back to Blog'}
        </Link>
        
        <button 
          className={`blog-share-btn ${copied ? 'copied' : ''}`}
          onClick={handleShare}
          style={{ cursor: 'pointer' }}
          aria-label="Share article link"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742a3.001 3.001 0 110 2.516m0-2.516a3.001 3.001 0 113.486 4.756m-3.486-2.24a3.001 3.001 0 113.486-4.757" />
            )}
          </svg>
          <span>{copied ? t.blog.copied : t.blog.share}</span>
        </button>
      </div>

      {/* Hero Image */}
      {article.image && (
        <div className="blog-modal-image-wrapper stagger-item" style={{ '--item-index': 1, borderRadius: 'var(--radius-lg)', boxShadow: '0 8px 30px rgba(0, 245, 212, 0.1)' }}>
          <img src={article.image} alt={article.title} className="blog-modal-image" />
          <div className="blog-modal-image-overlay"></div>
        </div>
      )}

      {/* Main Article Content */}
      <article ref={contentRef}>
        <div className="blog-modal-header-info stagger-item" style={{ '--item-index': 2, padding: 0 }}>
          <span className="blog-modal-category">{article.category}</span>
          <div className="blog-modal-meta-row">
            <span>{article.date}</span>
            <span className="separator">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h1 className="blog-modal-title stagger-item" style={{ '--item-index': 3, padding: '16px 0', fontSize: '2.4rem' }}>
          {article.title}
        </h1>
        
        <div className="blog-modal-text-content stagger-item" style={{ '--item-index': 4, padding: 0 }}>
          {article.content ? (
            article.content.map((block, i) => {
              if (block.type === 'paragraph') {
                const textWithBold = block.text.split('**').map((chunk, index) => {
                  return index % 2 === 1 ? <strong key={index}>{chunk}</strong> : chunk;
                });
                return <p key={i} className="blog-modal-p">{textWithBold}</p>;
              } else if (block.type === 'heading') {
                return <h2 key={i} className="blog-modal-h4">{block.text}</h2>;
              } else if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="blog-modal-blockquote">
                    <p>{block.text}</p>
                  </blockquote>
                );
              } else if (block.type === 'list') {
                return (
                  <ul key={i} className="blog-modal-list">
                    {block.items.map((item, idx) => {
                      const itemWithBold = item.split('**').map((chunk, index) => {
                        return index % 2 === 1 ? <strong key={index}>{chunk}</strong> : chunk;
                      });
                      return <li key={idx} className="blog-modal-li">{itemWithBold}</li>;
                    })}
                  </ul>
                );
              }
              return null;
            })
          ) : (
            <p className="blog-modal-p">{article.excerpt}</p>
          )}
        </div>
      </article>
    </div>
  );
}
