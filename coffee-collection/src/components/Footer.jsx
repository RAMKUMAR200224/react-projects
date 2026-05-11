import React from 'react';
import './Footer.css';
 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
 
        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">☕</span>
            <span className="footer__logo-text">BrewHouse</span>
          </div>
          <p className="footer__tagline">
            Small-batch roasted coffees from around the world. Shipped fresh to your door every week.
          </p>
          <div className="footer__socials">
            <a href="#instagram" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#twitter" className="footer__social-link" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#facebook" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
 
        {/* Links column */}
        <div className="footer__col">
          <h4 className="footer__col-title">Menu</h4>
          <ul className="footer__links">
            <li><a href="#espresso">Espresso</a></li>
            <li><a href="#cappuccino">Cappuccino</a></li>
            <li><a href="#latte">Coffee Latte</a></li>
            <li><a href="#house">House Coffee</a></li>
            <li><a href="#specials">Specials</a></li>
          </ul>
        </div>
 
        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <ul className="footer__links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
 
        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <ul className="footer__links">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
 
      <div className="footer__bottom">
        <span className="footer__copy">© 2025 BrewHouse Coffee. All rights reserved.</span>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;