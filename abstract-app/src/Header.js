import React from "react";
import "./Header.css";
 
export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="white" />
            <text x="4" y="17" fontSize="14" fontWeight="bold" fill="black">a</text>
          </svg>
          <span className="logo-text">Abstract</span>
        </div>
        <div className="divider">|</div>
        <span className="help-text">Help Center</span>
      </div>
      <div className="header-right">
        <button className="btn-submit">Submit a request</button>
        <button className="btn-signin">Sign in</button>
      </div>
    </header>
  );
}
 