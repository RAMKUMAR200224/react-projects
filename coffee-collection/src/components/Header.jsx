import React, { useState } from 'react';
import './Header.css';
 
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <div className="header__logo">
          <span className="header__logo-icon">☕</span>
          <span className="header__logo-text">BrewHouse</span>
        </div>
 
        {/* Desktop Nav */}
        <nav className="header__nav">
          <a href="#collection" className="header__nav-link">Collection</a>
          <a href="#about" className="header__nav-link">About</a>
          <a href="#menu" className="header__nav-link">Menu</a>
          <a href="#contact" className="header__nav-link">Contact</a>
        </nav>
 
        {/* Actions */}
        <div className="header__actions">
          <button className="header__cart-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="header__cart-count">3</span>
          </button>
          <button className="header__order-btn">Order Now</button>
        </div>
 
        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
 
      {/* Mobile Menu */}
      <nav className={`header__mobile-nav ${menuOpen ? 'header__mobile-nav--open' : ''}`}>
        <a href="#collection" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Collection</a>
        <a href="#about" className="header__mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#menu" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Menu</a>
        <a href="#contact" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="header__order-btn header__order-btn--mobile">Order Now</button>
      </nav>
    </header>
  );
}
 
export default Header;
 