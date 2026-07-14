'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

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
            {t.footer.builtWith}{' '}
            <Image
              src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f49a.png"
              alt="💚"
              width={18}
              height={18}
              unoptimized
              className="footer-emoji heart-emoji"
            />{' '}
            {t.footer.by}{' '}
            <Image
              src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f339.png"
              alt="🌹"
              width={18}
              height={18}
              unoptimized
              className="footer-emoji rose-emoji"
            />
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
