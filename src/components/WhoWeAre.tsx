import React, { useEffect, useRef } from 'react';
import './WhoWeAre.css';
import { useLanguage } from '../context/LanguageContext';

const WhoWeAre: React.FC = () => {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="who-we-are-page container">
      <header className="page-header reveal fade-down">
        <h1>{t('about.subtitle')}</h1>
        <p className="welcome-text">{t('about.welcome')}</p>
      </header>

      <div className="content-grid">
        <section className="main-description">
          <p className="reveal fade-left">{t('about.p1')}</p>
          <p className="reveal fade-left" style={{ animationDelay: '0.1s' }}>{t('about.p2')}</p>
          <p className="reveal fade-left" style={{ animationDelay: '0.2s' }}>{t('about.p3')}</p>
        </section>

        <section className="specialized-areas reveal fade-up">
          <h2 className="section-title">{t('about.listTitle')}</h2>
          <ul className="areas-list">
            {(['item1','item2','item3','item4','item5'] as const).map((item, i) => (
              <li key={item} className="reveal fade-left" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="area-bullet">▸</span>
                <div>
                  <strong>{t(`about.${item}`).split(' ').slice(0, item === 'item2' ? 4 : 3).join(' ')}</strong>
                  {' '}{t(`about.${item}`).split(' ').slice(item === 'item2' ? 4 : 3).join(' ')}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="page-footer-content reveal fade-up">
        <p className="footer-p1">{t('about.footer1')}</p>
        <p className="footer-p2">{t('about.footer2')}</p>
      </footer>
    </div>
  );
};

export default WhoWeAre;
