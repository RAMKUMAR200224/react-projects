import React from "react";
import "./Footer.css";
 
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Column 1: Abstract */}
        <div className="footer-col">
          <h4 className="footer-heading">Abstract</h4>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Branches</a>
        </div>
 
        {/* Column 2: Resources */}
        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Blog</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Help Center</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Release Notes</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Status</a>
        </div>
 
        {/* Column 3: Community */}
        <div className="footer-col">
          <h4 className="footer-heading">Community</h4>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Twitter</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>LinkedIn</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Facebook</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Dribbble</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Podcast</a>
        </div>
 
        {/* Column 4: Company */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>About Us</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Careers</a>
          <a href="#" className="footer-link" onClick={e => e.preventDefault()}>Legal</a>
          <div className="footer-contact">
            <span className="footer-contact-label">Contact Us</span>
            <a href="mailto:info@abstract.com" className="footer-link">info@abstract.com</a>
          </div>
        </div>
 
        {/* Column 5: Logo + Copyright */}
        <div className="footer-col footer-col-logo">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#1a1a1a" />
              <text x="6" y="23" fontSize="18" fontWeight="bold" fill="white">a</text>
            </svg>
          </div>
          <p className="footer-copy">
            © Copyright 2022<br />
            Abstract Studio Design, Inc.<br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}