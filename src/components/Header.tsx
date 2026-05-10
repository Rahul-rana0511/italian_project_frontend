import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'about',
    'immigration',
    'caf',
    'training',
    'business',
    'insurance',
    'indianConsulate',
    'visas',
    'other'
  ];

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-text">{t('topBar.story')}</span>
            <a href="#" className="top-bar-link">{t('topBar.more')}</a>
          </div>
          <div className="top-bar-right">
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <Link to="/" className="logo-container">
            <img src="/logo.svg" alt="AMEI Logo" className="logo-image" />
          </Link>
          
          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              {categories.map((cat) => (
                <li key={cat} className={`nav-item ${cat !== 'about' ? 'has-dropdown' : ''}`}>
                  {cat === 'about' ? (
                    <Link to="/chi-siamo" className="nav-link">
                      {t(`nav.${cat}`)}
                    </Link>
                  ) : (
                    <>
                      <a href="#" className="nav-link">
                        {t(`nav.${cat}`)}
                        <span className="dropdown-arrow">▼</span>
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdown-header">
                          {t(`nav.${cat}`)}
                        </div>
                        <ul className="dropdown-list">
                          {t(`services.${cat}`) && t(`services.${cat}`).map((item: string, idx: number) => (
                            <li key={idx}>
                              <a href="#" className="dropdown-link">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
