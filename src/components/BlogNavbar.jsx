'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function BlogNavbar() {
  const { t, toggleLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#home', label: t.nav.home },
    { href: '/#about', label: t.nav.about },
    { href: '/#services', label: t.nav.services },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#skills', label: t.nav.skills },
    { href: '/#certifications', label: t.nav.certifications },
    { href: '/blog', label: t.nav.blog, isActive: true },
    { href: '/#contact', label: t.nav.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          {'<OA />'}
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={item.isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            {t.nav.langToggle}
          </button>
          <Link href="/#contact" className="btn btn-primary navbar-hire-btn">
            {t.nav.hireMe}
          </Link>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
