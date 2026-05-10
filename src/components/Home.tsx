import React from 'react';
import '../App.css';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero-corporate">
        <div className="container">
          <h1 className="animate-fade-in-up">
            WE HELP COMPANIES WITH THE PROCEDURES FOR FOREIGN AND TRAVELLING PERSONNEL
          </h1>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our services for COMPANIES
          </p>
        </div>
      </section>

      <main className="container main-content">
        <section className="services-grid">
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">🇮🇹</div>
            <h3>Sartorial Excellence</h3>
            <p>Immerse yourself in the world of fine Italian tailoring, where every stitch tells a story of heritage and precision.</p>
            <a href="#" className="read-more">Learn More</a>
          </div>
          
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="card-icon">🍷</div>
            <h3>Culinary Artistry</h3>
            <p>Taste the essence of the Mediterranean with our curated selection of regional delicacies and artisanal flavors.</p>
            <a href="#" className="read-more">Learn More</a>
          </div>
          
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="card-icon">🏛️</div>
            <h3>Architectural Legacy</h3>
            <p>Explore the stunning villas and historic piazzas that have inspired generations of designers and thinkers.</p>
            <a href="#" className="read-more">Learn More</a>
          </div>
        </section>

        <section className="cta-section animate-fade-in-up">
          <div className="glass-panel">
            <h2>Ready to start your journey?</h2>
            <p>Our experts are here to guide you through every step of your international transition.</p>
            <button className="cta-button">Contact an Expert</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
