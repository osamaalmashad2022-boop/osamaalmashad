'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for page content to be ready
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 1800);

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
