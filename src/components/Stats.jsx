'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useAnimatedCounter } from '@/hooks/useIntersectionObserver';

const statIcons = [
  // Certificates (Index 0)
  <svg key="cert" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="stat-svg-icon cert-icon">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>,
  // Projects (Index 1)
  <svg key="proj" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="stat-svg-icon project-icon">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,
  // Happy Clients (Index 2)
  <svg key="smile" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="stat-svg-icon smile-icon">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>,
  // Coffee Cups (Index 3)
  <svg key="coffee" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="stat-svg-icon coffee-icon">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
];

function StatItem({ number, suffix, label, icon, delay }) {
  const [ref, count] = useAnimatedCounter(number, 2000);

  return (
    <div ref={ref} className="stat-item reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {t.stats.items.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              icon={statIcons[index]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
