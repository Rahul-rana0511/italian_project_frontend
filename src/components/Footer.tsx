import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about">
            <p className="footer-desc">
              Our knowledgeable staff will be happy to answer all your questions and needs.
              Contact your nearest office or contact us.
            </p>
            <p className="footer-legal-small">
              Gruppo Europa agencies are managed by independent entrepreneurial affiliates who operate under the Gruppo Europa brand under a franchising agreement. Gruppo Europa provides support services to businesses and individuals.
            </p>
          </div>
          
          <div className="footer-col contact">
            <h4 className="footer-title">Contact Us</h4>
            <p>Telephone: 0522 1723060</p>
            <p>Email: info@gruppoeuropa.net</p>
            <p>Office: Via G. Battista Pergolesi 2/A 20124 Milan</p>
            
            <div className="social-icons">
              <a href="#" className="social-icon facebook" title="Facebook">f</a>
              <a href="#" className="social-icon twitter" title="Twitter">t</a>
              <a href="#" className="social-icon youtube" title="YouTube">y</a>
            </div>
          </div>
          
          <div className="footer-col links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Migrants</a></li>
              <li><a href="#">Travelers</a></li>
              <li><a href="#">Families</a></li>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Loans and financing</a></li>
              <li><a href="#">Other Services</a></li>
            </ul>
          </div>
          
          <div className="footer-col certification">
            <h4 className="footer-title">Certifications</h4>
            <div className="cert-placeholders">
              <div className="cert-box"></div>
              <div className="cert-box"></div>
              <div className="cert-box"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bottom-bar">
        <div className="container">
          <p className="legal-text">
            Gruppo Europa srl Sole Shareholder (subject to management and coordination: Extrabanca SpA) - VAT number 10232730969 - Share capital €100,000 fully paid-up - REA-MI 2515624 - Privacy policy<br />
            Gruppo Europa srl, an insurance intermediary registered under letter E of the RUI (Italian Register of Insurance Intermediaries) under no. E000597090<br />
            Reserved Area - Website created by DICE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
