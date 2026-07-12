'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.about.sectionSubtitle}</span>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
        </div>

        <div className="about-content">
          <div className="about-text reveal-left">
            <h3>{t.about.title}</h3>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-info">
              <div className="about-info-item">
                <div className="label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="about-icon school-icon">
                    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M9 17h6" />
                  </svg>
                </div>
                <div className="value">{t.about.university}</div>
              </div>
              <div className="about-info-item">
                <div className="label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="about-icon book-icon">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5V4.5z" />
                  </svg>
                </div>
                <div className="value">{t.about.department}</div>
              </div>
              <div className="about-info-item">
                <div className="label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="about-icon computer-icon">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="value">{t.about.major}</div>
              </div>
              <div className="about-info-item">
                <div className="label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="about-icon graduation-icon">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className="value">{t.about.year}</div>
              </div>
            </div>
          </div>

          <div className="about-visual reveal-right">
            <div className="about-stats">
              <div className="about-stat-card">
                <div className="about-stat-number">{t.about.stats.experience}</div>
                <div className="about-stat-label">{t.about.stats.experienceLabel}</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number">{t.about.stats.certificates}</div>
                <div className="about-stat-label">{t.about.stats.certificatesLabel}</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number">{t.about.stats.projects}</div>
                <div className="about-stat-label">{t.about.stats.projectsLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
