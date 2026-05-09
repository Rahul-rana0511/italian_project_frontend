import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <span className="top-bar-text">Start your business with us and write your story!</span>
            <a href="#" className="top-bar-link">Find out more</a>
          </div>
          <div className="top-bar-content">
            <span className="top-bar-text">Find the location closest to you</span>
            <a href="#" className="top-bar-link">Go to the page</a>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="logo-container">
            <div className="logo-main">MOVING PEOPLE</div>
            <div className="logo-sub">bridging international boundaries</div>
            <div className="logo-brand">
              by <span className="brand-name">Gruppo Europa</span>
            </div>
          </div>
          
          <nav className="main-nav">
            <ul className="nav-menu">
              <li><a href="#" className="nav-link active">WHO WE ARE</a></li>
              <li><a href="#" className="nav-link">MIGRANTS</a></li>
              <li><a href="#" className="nav-link">TRAVELERS</a></li>
              <li><a href="#" className="nav-link">FAMILIES</a></li>
              <li><a href="#" className="nav-link">COMPANIES</a></li>
              <li><a href="#" className="nav-link">LOANS AND FINANCING</a></li>
              <li><a href="#" className="nav-link">OTHER SERVICES</a></li>
            </ul>
            <div className="mobile-menu-toggle">
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
