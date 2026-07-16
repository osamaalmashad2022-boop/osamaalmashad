'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Certifications() {
  const { t } = useLanguage();
  const [modalCert, setModalCert] = useState(null);
  const previouslyFocusedElement = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalCert) {
      previouslyFocusedElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalCert(null);
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
        if (previouslyFocusedElement.current) {
          previouslyFocusedElement.current.focus();
        }
      };
    }
  }, [modalCert]);

  const openModal = (cert) => {
    if (cert.file) setModalCert(cert);
  };

  const closeModal = () => setModalCert(null);

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">{t.certifications.sectionSubtitle}</span>
          <h2 className="section-title">{t.certifications.sectionTitle}</h2>
        </div>

        <div className="certifications-timeline">
          {t.certifications.items.map((cert, index) => (
            <div key={index} className="cert-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="cert-dot" />
              <div className="cert-card glass-card">
                <h4>{cert.title}</h4>
                <span className="cert-date-mobile">{cert.date}</span>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                {cert.modules && (
                  <div className="cert-modules">
                    {cert.modules.map((mod, i) => (
                      <span key={i} className="cert-module-tag">{mod}</span>
                    ))}
                  </div>
                )}
                {cert.file && (
                  <button className="cert-view-btn" onClick={() => openModal(cert)}>
                    {t.certifications.viewCertificate} →
                  </button>
                )}
              </div>
              <div className="cert-date-side">
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <div className={`modal-overlay ${modalCert ? 'active' : ''}`} onClick={closeModal}>
        <div 
          className="modal-content" 
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          ref={modalRef}
        >
          <div className="modal-header">
            <h4>{modalCert?.title}</h4>
            <button className="modal-close" onClick={closeModal}>✕</button>
          </div>
          <div className="modal-body" style={{ maxHeight: 'calc(85vh - 70px)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', paddingBottom: '32px' }}>
            {modalCert?.file && (
              <>
                <Image
                  src={`/certificates/${modalCert.file}`}
                  alt={modalCert.title}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
                <div style={{ textAlign: 'center' }}>
                  <a
                    href={`/certificates/${modalCert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'inline-flex' }}
                  >
                    {t.certifications.viewCertificate} ↗
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
