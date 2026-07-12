'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useAnimatedCounter } from '@/hooks/useIntersectionObserver';

const icons = ['🎓', '💼', '😊', '☕'];

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
              icon={icons[index]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
