import "./Content.css";

function Content() {
  return (
    <main className="content">

      <section className="hero">
        <h1>Try Pulse free for 30 days.</h1>

        <p>
          Monitor your cash flow and manage your business finances
          with an easy and powerful solution.
        </p>
      </section>

      <section className="cards">

        <div className="card">
          <h2>Basic Plan</h2>

          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="basic"
          />

          <p>$29 per month</p>

          <button>Get Started</button>
        </div>

        <div className="card featured">
          <h2>Small Business</h2>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
            alt="business"
          />

          <p>$59 per month</p>

          <button>Sign Up Now</button>
        </div>

        <div className="card">
          <h2>Premium Plan</h2>

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="premium"
          />

          <p>$89 per month</p>

          <button>Try Premium</button>
        </div>

      </section>
    </main>
  );
}

export default Content;