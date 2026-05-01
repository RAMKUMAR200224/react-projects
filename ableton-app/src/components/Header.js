import React, { useState } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Live', href: '#' },
  { label: 'Push', href: '#' },
  { label: 'Link', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'Packs', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'About Us', href: '#', active: true },
];

const rightLinks = [
  { label: 'Try Live for free', href: '#', highlight: true },
  { label: 'Account', href: '#' },
  { label: 'Login', href: '#' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        
        <a href="#" className="header__logo">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="16" fontFamily="'Source Sans 3', sans-serif" fontWeight="700" fontSize="18" fill="#000" letterSpacing="1">Ableton</text>
          </svg>
        </a>

        
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header__nav-link${link.active ? ' header__nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        
        <div className="header__right">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header__right-link${link.highlight ? ' header__right-link--highlight' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        
        <button
          className="header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      
      {menuOpen && (
        <div className="header__mobile-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__mobile-link">
              {link.label}
            </a>
          ))}
          <hr />
          {rightLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__mobile-link">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
