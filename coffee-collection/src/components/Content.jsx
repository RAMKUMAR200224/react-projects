import React, { useState } from 'react';
import './Content.css';
 
/* ── Coffee data ── */
const coffees = [
  {
    id: 1,
    name: 'Cappuccino',
    price: '$5.20',
    rating: 4.7,
    votes: 65,
    popular: true,
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
    category: 'all',
  },
  {
    id: 2,
    name: 'House Coffee',
    price: '$3.50',
    rating: 4.85,
    votes: 14,
    popular: true,
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
    category: 'available',
  },
  {
    id: 3,
    name: 'Espresso',
    price: '$2.50',
    rating: 4.9,
    votes: 55,
    popular: false,
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
    category: 'available',
  },
  {
    id: 4,
    name: 'Coffee Latte',
    price: '$4.50',
    rating: 5.0,
    votes: 23,
    popular: false,
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80',
    category: 'available',
  },
  {
    id: 5,
    name: 'Chocolate Coffee',
    price: '$4.00',
    rating: 4.65,
    votes: 122,
    popular: false,
    soldOut: true,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80',
    category: 'all',
  },
  {
    id: 6,
    name: 'Valentine Special',
    price: '$5.50',
    rating: null,
    votes: 0,
    popular: false,
    soldOut: false,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
    category: 'all',
  },
];
 
/* ── Star component ── */
function Stars({ rating }) {
  if (!rating) {
    return (
      <span className="stars stars--empty">
        <svg className="star-icon star-icon--empty" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 1l2.39 4.84L18 6.73l-4 3.9.94 5.5L10 13.27l-4.94 2.86L6 10.63 2 6.73l5.61-.89L10 1z" />
        </svg>
        <span className="stars__label stars__label--empty">No ratings</span>
      </span>
    );
  }
  return (
    <span className="stars">
      <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1l2.39 4.84L18 6.73l-4 3.9.94 5.5L10 13.27l-4.94 2.86L6 10.63 2 6.73l5.61-.89L10 1z" />
      </svg>
      <span className="stars__score">{rating}</span>
      <span className="stars__votes">({votes_fmt(rating)})</span>
    </span>
  );
}
 
/* tiny helper so we can pass votes from card */
function StarRating({ rating, votes }) {
  if (!rating) {
    return (
      <span className="stars stars--empty">
        <svg className="star-icon star-icon--empty" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 1l2.39 4.84L18 6.73l-4 3.9.94 5.5L10 13.27l-4.94 2.86L6 10.63 2 6.73l5.61-.89L10 1z" />
        </svg>
        <span className="stars__label stars__label--empty">No ratings</span>
      </span>
    );
  }
  return (
    <span className="stars">
      <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1l2.39 4.84L18 6.73l-4 3.9.94 5.5L10 13.27l-4.94 2.86L6 10.63 2 6.73l5.61-.89L10 1z" />
      </svg>
      <span className="stars__score">{rating}</span>
      <span className="stars__votes">({votes} votes)</span>
    </span>
  );
}
 
function votes_fmt(n) { return n; }
 
/* ── Card component ── */
function CoffeeCard({ coffee }) {
  return (
    <div className="card">
      <div className="card__img-wrap">
        {coffee.popular && <span className="card__badge card__badge--popular">Popular</span>}
        <img
          src={coffee.image}
          alt={coffee.name}
          className="card__img"
          loading="lazy"
        />
      </div>
      <div className="card__body">
        <div className="card__title-row">
          <h3 className="card__name">{coffee.name}</h3>
          <span className="card__price">{coffee.price}</span>
        </div>
        <div className="card__meta-row">
          <StarRating rating={coffee.rating} votes={coffee.votes} />
          {coffee.soldOut && <span className="card__sold-out">Sold out</span>}
        </div>
      </div>
    </div>
  );
}
 
/* ── Main Content ── */
function Content() {
  const [activeTab, setActiveTab] = useState('all');
 
  const filtered = activeTab === 'all'
    ? coffees
    : coffees.filter(c => c.category === 'available' && !c.soldOut);
 
  return (
    <section className="content" id="collection">
      {/* Hero bg strip */}
      <div className="content__hero">
        <div className="content__hero-img" />
        <div className="content__hero-overlay" />
      </div>
 
      <div className="content__container">
        {/* Section header */}
        <div className="content__header">
          <h2 className="content__title">Our Collection</h2>
          <p className="content__subtitle">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
 
          {/* Filter tabs */}
          <div className="content__tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`content__tab ${activeTab === 'all' ? 'content__tab--active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Products
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'available'}
              className={`content__tab ${activeTab === 'available' ? 'content__tab--active' : ''}`}
              onClick={() => setActiveTab('available')}
            >
              Available Now
            </button>
          </div>
        </div>
 
        {/* Product grid */}
        <div className="content__grid">
          {filtered.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Content;