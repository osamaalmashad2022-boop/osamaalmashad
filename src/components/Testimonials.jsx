'use client';
import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const items = t.testimonials.items;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.testimonials.sectionSubtitle}</span>
          <h2 className="section-title">{t.testimonials.sectionTitle}</h2>
        </div>

        <div className="testimonials-carousel reveal">
          <div className="glass-card testimonial-card">
            <div className="testimonial-text">
              {items[current].text}
            </div>
            <div className="testimonial-author">
              <span className="testimonial-name">{items[current].name}</span>
              <span className="testimonial-role">{items[current].role}</span>
              <div className="testimonial-stars">
                {'★'.repeat(items[current].rating)}
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
