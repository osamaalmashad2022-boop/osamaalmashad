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
                <div className="label">🏫</div>
                <div className="value">{t.about.university}</div>
              </div>
              <div className="about-info-item">
                <div className="label">📚</div>
                <div className="value">{t.about.department}</div>
              </div>
              <div className="about-info-item">
                <div className="label">💻</div>
                <div className="value">{t.about.major}</div>
              </div>
              <div className="about-info-item">
                <div className="label">🎓</div>
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
