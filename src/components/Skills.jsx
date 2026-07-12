'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function SkillBar({ name, level, delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="skill-item" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${isVisible ? 'animated' : ''}`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.skills.sectionSubtitle}</span>
          <h2 className="section-title">{t.skills.sectionTitle}</h2>
        </div>

        <div className="skills-container">
          {t.skills.categories.map((category, catIndex) => (
            <div key={catIndex} className="glass-card skill-category reveal" style={{ transitionDelay: `${catIndex * 0.1}s` }}>
              <h4>{category.name}</h4>
              {category.items.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  delay={skillIndex * 0.05}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
