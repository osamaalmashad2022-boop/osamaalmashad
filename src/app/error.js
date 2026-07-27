'use client';
import { useEffect } from 'react';
import Link from 'next/link';

// Detect if error was caused by Google Translate DOM manipulation
function isGoogleTranslateError(error) {
  const message = error?.message || '';
  return (
    message.includes('removeChild') ||
    message.includes('insertBefore') ||
    message.includes('The node to be removed is not a child of this node') ||
    message.includes('NotFoundError')
  );
}

export default function Error({ error, reset }) {
  useEffect(() => {
    // If it's a Google Translate error, try to auto-recover
    if (isGoogleTranslateError(error)) {
      console.warn(
        '[Error Boundary] Caught Google Translate DOM error — auto-recovering...',
        error?.message
      );
      // Small delay then reset to give the DOM time to stabilize
      const timer = setTimeout(() => {
        reset();
      }, 100);
      return () => clearTimeout(timer);
    }

    // Log non-translate errors
    console.error('[Error Boundary]', error);
  }, [error, reset]);

  // Don't show error UI for Google Translate errors (auto-recovering)
  if (isGoogleTranslateError(error)) {
    return null;
  }

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
