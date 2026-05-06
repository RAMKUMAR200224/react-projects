import React, { useState } from "react";
import "./Content.css";
 
const cards = [
  {
    id: 1,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="20" cy="22" r="8" fill="#c8b8a2" />
        <circle cx="32" cy="18" r="10" fill="#a89070" />
        <circle cx="38" cy="28" r="7" fill="#c8b8a2" opacity="0.8" />
        <line x1="18" y1="22" x2="38" y2="28" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="26" y1="20" x2="22" y2="32" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Branches",
    description: "Abstract Branches lets you manage, version, and document your designs in one place.",
    link: "#",
  },
  {
    id: 2,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="22" cy="22" r="11" fill="#b0bec5" />
        <circle cx="36" cy="22" r="11" fill="#90a4ae" />
        <circle cx="29" cy="36" r="9" fill="#78909c" opacity="0.85" />
      </svg>
    ),
    title: "Manage your account",
    description: "Configure your account settings, such as your email, profile details, and password.",
    link: "#",
  },
  {
    id: 3,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="8" y="10" width="26" height="20" rx="4" fill="#b0c4de" />
        <rect x="12" y="26" width="28" height="20" rx="4" fill="#7090c0" opacity="0.85" />
        <path d="M20 18 L28 18 M20 22 L26 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Manage organizations, teams, and projects",
    description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
    link: "#",
  },
  {
    id: 4,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="16" fill="#f0c040" />
        <text x="20" y="35" fontSize="18" fill="#a07800">$</text>
      </svg>
    ),
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    link: "#",
  },
  {
    id: 5,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <ellipse cx="22" cy="32" rx="10" ry="14" fill="#e8c870" transform="rotate(-30 22 32)" />
        <circle cx="32" cy="22" r="8" fill="#c8a040" />
        <circle cx="34" cy="20" r="4" fill="#f0d080" />
      </svg>
    ),
    title: "Authenticate to Abstract",
    description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    link: "#",
  },
  {
    id: 6,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="10" y="14" width="36" height="26" rx="6" fill="#d0d8e8" />
        <circle cx="20" cy="27" r="2.5" fill="#6080a0" />
        <circle cx="28" cy="27" r="2.5" fill="#6080a0" />
        <circle cx="36" cy="27" r="2.5" fill="#6080a0" />
        <path d="M28 40 L28 46 L18 40" fill="#d0d8e8" />
      </svg>
    ),
    title: "Abstract support",
    description: "Get in touch with a human.",
    link: "#",
  },
];
 
export default function Content() {
  const [searchValue, setSearchValue] = useState("");
 
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      alert(`Searching for: "${searchValue}"`);
    }
  };
 
  return (
    <main className="content">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">How can we help?</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search-btn" type="submit" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M10 4L15 9L10 14" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </section>
 
      {/* Cards Grid */}
      <section className="cards-section">
        <div className="cards-grid">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-desc">{card.description}</p>
                <a href={card.link} className="card-link" onClick={(e) => e.preventDefault()}>
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}