'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-glitch" data-text="404">404</div>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-description">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary">
            ← Back to Home
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Visit Blog
          </Link>
        </div>
      </div>

      {/* Floating particles decoration */}
      <div className="not-found-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="not-found-particle" style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
}
