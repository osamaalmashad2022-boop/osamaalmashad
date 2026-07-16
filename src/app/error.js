'use client';
import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="error-title">Something went wrong</h2>
        <p className="error-description">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="error-actions">
          <button onClick={reset} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-outline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
