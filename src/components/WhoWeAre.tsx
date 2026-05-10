import React from 'react';
import './WhoWeAre.css';
import { useLanguage } from '../context/LanguageContext';

const WhoWeAre: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="who-we-are-page container animate-fade-in-up">
      <header className="page-header">
        <h1>{t('about.subtitle')}</h1>
        <p className="welcome-text">{t('about.welcome')}</p>
      </header>

      <div className="content-grid">
        <section className="main-description">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </section>

        <section className="specialized-areas">
          <h2 className="section-title">{t('about.listTitle')}</h2>
          <ul className="areas-list">
            <li>• {t('about.item1')}</li>
            <li>• {t('about.item2')}</li>
            <li>• {t('about.item3')}</li>
            <li>• {t('about.item4')}</li>
            <li>• {t('about.item5')}</li>
          </ul>
        </section>
      </div>

      <footer className="page-footer-content">
        <p className="footer-p1">{t('about.footer1')}</p>
        <p className="footer-p2">{t('about.footer2')}</p>
      </footer>
    </div>
  );
};

export default WhoWeAre;
