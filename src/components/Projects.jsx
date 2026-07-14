'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Projects() {
  const { t } = useLanguage();
  const { featured, items } = t.projects;
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.projects.sectionSubtitle}</span>
          <h2 className="section-title">{t.projects.sectionTitle}</h2>
        </div>

        {/* Featured Project */}
        <div className="project-featured reveal">
          <div className="glass-card featured-card">
            <div className="featured-info">
              <span className="featured-tag">{featured.tag}</span>
              <h3>{featured.title}</h3>
              <p className="subtitle">{featured.subtitle}</p>
              <p className="description">{featured.description}</p>
              <div className="featured-tech">
                {featured.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="featured-links">
                <button 
                  onClick={() => setActiveVideoId(featured.youtubeId)} 
                  className="btn btn-primary"
                >
                  {t.projects.viewLive} →
                </button>
                <a 
                  href="https://youtube.com/@osospiracy5468" 
                  className="btn btn-outline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t.projects.viewCode}
                </a>
              </div>
            </div>
            <div 
              className="featured-image" 
              onClick={() => setActiveVideoId(featured.youtubeId)}
              style={{ cursor: 'pointer' }}
            >
              <Image 
                src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`} 
                alt={featured.title} 
                width={800}
                height={450}
                unoptimized
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="play-button-overlay">
                <div className="play-icon-glow">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {items.map((project, index) => (
            <div
              key={index}
              className="glass-card project-card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div 
                className="project-image" 
                onClick={() => setActiveVideoId(project.youtubeId)}
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src={`https://img.youtube.com/vi/${project.youtubeId}/mqdefault.jpg`} 
                  alt={project.title} 
                  width={320}
                  height={180}
                  unoptimized
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="play-button-overlay-small">
                  <div className="play-icon-glow-small">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="project-overlay">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveVideoId(project.youtubeId); }} 
                    className="btn btn-primary" 
                    style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                  >
                    {t.projects.viewLive}
                  </button>
                  <a 
                    href="https://youtube.com/@osospiracy5468" 
                    className="btn btn-outline" 
                    style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.projects.viewCode}
                  </a>
                </div>
              </div>
              <div className="project-card-body">
                <span className="project-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideoId && (
        <div className="video-modal-overlay" onClick={() => setActiveVideoId(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideoId(null)}>×</button>
            <div className="video-iframe-container">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
