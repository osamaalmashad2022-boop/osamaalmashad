'use client';

import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function ScrollRevealInit() {
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [lang]);

  return null;
}

function LanguageTransitionWrapper({ children }) {
  const { lang } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    if (lang !== currentLang) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentLang(lang);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [lang, currentLang]);

  return (
    <div className={`lang-transition ${isTransitioning ? 'lang-transitioning' : ''}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <Preloader />
      <ScrollRevealInit />
      <Navbar />
      <LanguageTransitionWrapper>
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Certifications />
          <Stats />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LanguageTransitionWrapper>
    </LanguageProvider>
  );
}
