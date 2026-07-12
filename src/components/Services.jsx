'use client';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  palette: '🎨',
  code: '💻',
  cart: '🛒',
  education: '📚',
  lightbulb: '💡',
  globe: '🌐',
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.services.sectionSubtitle}</span>
          <h2 className="section-title">{t.services.sectionTitle}</h2>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="glass-card service-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {iconMap[service.icon] || '⚡'}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
