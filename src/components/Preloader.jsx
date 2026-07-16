'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolio-preloader-shown');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasVisited || prefersReducedMotion) {
      const skipTimer = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(skipTimer);
    }

    sessionStorage.setItem('portfolio-preloader-shown', 'true');

    // Wait for page content to be ready
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <span className="preloader-bracket">&lt;</span>
          <span className="preloader-text">OA</span>
          <span className="preloader-bracket"> /&gt;</span>
        </div>
        <div className="preloader-line">
          <div className="preloader-line-fill" />
        </div>
      </div>
    </div>
  );
}
