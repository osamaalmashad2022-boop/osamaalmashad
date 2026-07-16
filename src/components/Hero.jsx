'use client';
import { useLanguage } from '@/context/LanguageContext';
import ParticleBackground from './ParticleBackground';
import TypingAnimation from './TypingAnimation';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <ParticleBackground />

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{t.hero.name}</h1>
          <TypingAnimation strings={t.hero.roles} speed={80} deleteSpeed={40} pauseTime={2000} />
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              {t.hero.cta1}
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              {t.hero.cta2}
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-glow" />
          <div className="hero-image-container">
            <Image
              src="/images/profile.png"
              alt={t.hero.name}
              width={320}
              height={320}
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 30%', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      <button className="hero-scroll-indicator" onClick={() => scrollTo('about')} style={{ cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit', padding: 0 }}>
        <span>{t.hero.scrollDown}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
