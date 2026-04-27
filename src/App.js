import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-box">
                <span className="logo-text">LOGO</span>
              </div>
            </div>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#about" className="nav-link">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-background">
            <div className="hero-shape shape-1"></div>
            <div className="hero-shape shape-2"></div>
            <div className="hero-shape shape-3"></div>
            <div className="hero-image"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="hero-title-word">Kids</span>
                <span className="hero-title-subtitle">TOYS & GAMES STORE</span>
              </h1>
              <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="container">
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for toys and games..." 
                aria-label="Search"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <button className="btn btn-primary btn-large">
              BUY NOW
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Kids Toys & Games Store. All rights reserved.</p>
        <p>Generated from Figma design</p>
      </footer>
    </div>
  );
}

export default App;