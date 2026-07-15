'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { t, toggleLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'certifications', 'blog', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <div 
        className={`mobile-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(false)} 
      />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
            {'<OA />'}
          </a>

          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-only-actions">
              <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
                {t.nav.langToggle}
              </button>
              <a
                href="#contact"
                className="btn btn-primary navbar-hire-btn"
                onClick={(e) => handleNavClick(e, 'contact')}
                style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}
              >
                {t.nav.hireMe}
              </a>
            </div>
          </div>

          <div className="navbar-actions">
            <div className="desktop-only-actions">
              <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
                {t.nav.langToggle}
              </button>
              <a
                href="#contact"
                className="btn btn-primary navbar-hire-btn"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                {t.nav.hireMe}
              </a>
            </div>
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
    </>
  );
}
