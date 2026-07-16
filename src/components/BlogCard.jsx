import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ article, t, className = '', style = {} }) {
  const hasContent = !!article.content;
  const articleUrl = hasContent ? `/blog/${article.slug}` : '#';

  return (
    <div
      className={`glass-card blog-card reveal ${hasContent ? 'clickable' : ''} ${className}`}
      style={style}
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
}
