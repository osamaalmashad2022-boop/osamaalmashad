'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);
  const items = t.testimonials.items;
  const touchRef = useRef({ startX: 0, startY: 0 });
  const cardRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleManualInteraction = (action) => {
    setIsPaused(true);
    action();
  };

  // Touch / Swipe support
  const handleTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchRef.current.startX;
    const deltaY = e.changedTouches[0].clientY - touchRef.current.startY;

    // Only swipe if horizontal movement > vertical movement and > threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        if (isRTL) next();
        else prev();
      } else {
        if (isRTL) prev();
        else next();
      }
    }
  };

  // Generate initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .substring(0, 2);
  };

  // Generate consistent, aesthetic gradient badge
  const getAvatarGradient = (name) => {
    const gradients = [
      'linear-gradient(135deg, rgba(0, 245, 212, 0.25), rgba(0, 180, 255, 0.2))',
      'linear-gradient(135deg, rgba(162, 155, 254, 0.25), rgba(108, 92, 231, 0.2))',
      'linear-gradient(135deg, rgba(0, 245, 212, 0.25), rgba(57, 255, 20, 0.15))',
      'linear-gradient(135deg, rgba(255, 107, 107, 0.25), rgba(255, 159, 67, 0.2))',
      'linear-gradient(135deg, rgba(72, 219, 251, 0.25), rgba(10, 189, 227, 0.2))',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <section className="section" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.testimonials.sectionSubtitle}</span>
          <h2 className="section-title">{t.testimonials.sectionTitle}</h2>
        </div>

        <div
          className="testimonials-carousel reveal"
          onTouchStart={(e) => {
            setIsPaused(true);
            handleTouchStart(e);
          }}
          onTouchEnd={(e) => {
            handleTouchEnd(e);
            setIsPaused(false);
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          ref={cardRef}
          aria-live="polite"
        >
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={() => handleManualInteraction(prev)}
            aria-label={isRTL ? "الشهادة السابقة" : "Previous testimonial"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d={isRTL ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
            </svg>
          </button>

          <div className="glass-card testimonial-card">
            {/* Top Quote Badge */}
            <div className="testimonial-quote-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="testimonial-text">
              {items[current].text}
            </p>

            {/* Author and Rating Section */}
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: getAvatarGradient(items[current].name) }}
              >
                <span>{getInitials(items[current].name)}</span>
              </div>
              <div className="testimonial-author-info">
                <span className="testimonial-name">{items[current].name}</span>
                <span className="testimonial-role">{items[current].role}</span>
              </div>
              <div className="testimonial-stars" aria-label={`${items[current].rating} / 5`}>
                {Array.from({ length: items[current].rating }).map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={() => handleManualInteraction(next)}
            aria-label={isRTL ? "الشهادة التالية" : "Next testimonial"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d={isRTL ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
            </svg>
          </button>

          <div className="carousel-dots">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => handleManualInteraction(() => setCurrent(index))}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
