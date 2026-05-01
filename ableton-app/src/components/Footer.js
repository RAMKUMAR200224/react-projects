import React, { useState } from 'react';
import './Footer.css';

const footerColumns = [
  {
    heading: 'Education',
    links: [
      'Offers for Students and Teachers',
      'Ableton for the Classroom',
      'Ableton for Colleges and Universities',
    ],
  },
  {
    heading: 'Sign Up to Our Newsletter',
    isNewsletter: true,
  },
  {
    heading: 'Community',
    links: ['Find Ableton User Groups', 'Find Certified Training', 'Become a Certified Trainer'],
  },
  {
    heading: 'Distributors',
    links: ['Find Distributors', 'Try Push in Store'],
  },
];

const bottomLinks = [
  'Legal Info',
  'Privacy Policy',
  'Cookie Settings',
  'Imprint',
  'Press Resources',
  'Site Map',
];

const socialLinks = [
  { name: 'Twitter / X', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Instagram', href: '#' },
];

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      
      <div className="footer__top">
        <div className="footer__logo">Ableton</div>
        <div className="footer__social">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.href} className="footer__social-link">
              {s.name}
            </a>
          ))}
        </div>
      </div>

      
      <div className="footer__columns">
        {footerColumns.map((col, i) => (
          <div key={i} className="footer__col">
            <h4 className="footer__col-heading">{col.heading}</h4>
            {col.isNewsletter ? (
              <form className="footer__newsletter" onSubmit={handleSubscribe}>
                <p className="footer__newsletter-text">
                  Enter your email address to stay up to date with the latest
                  offers, tutorials, downloads, surveys and more.
                </p>
                <div className="footer__newsletter-row">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="footer__newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer__newsletter-btn">
                    Sign up
                  </button>
                </div>
              </form>
            ) : (
              <ul className="footer__link-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      
      <div className="footer__language">
        <span className="footer__language-label">Language and Location</span>
        <select className="footer__language-select">
          <option>English</option>
          <option>Deutsch</option>
          <option>Français</option>
          <option>日本語</option>
        </select>
      </div>

      
      <div className="footer__bottom">
        <a href="#" className="footer__bottom-logo">Ableton</a>
        <div className="footer__bottom-links">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="footer__bottom-link">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
