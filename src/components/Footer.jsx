'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">{t.footer.copyright}</p>
          <p className="footer-built">
            {t.footer.builtWith} <span className="footer-heart">💚</span> {t.footer.by}
          </p>
          <button
            onClick={scrollToTop}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            aria-label="Scroll to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
