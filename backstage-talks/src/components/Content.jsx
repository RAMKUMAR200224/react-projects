import './Content.css';

function Content() {
  return (
    <main className="content">

      {/* LEFT SIDE */}
      <div className="left-section">
        <p>
          Backstage Talks is a magazine of casual, but in depth
          dialogues on design and business. Our decisions shape
          and influence this complex world—to have a chance to
          make the right ones, we need to talk.
        </p>

        <div className="bottom-links">
          <p>© 2024 Published by Studio Milk</p>

          <a href="/">Privacy Policy</a>
        </div>
      </div>

      {/* CENTER */}
      <div className="center-section">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
          alt="Magazine Cover"
        />

        <h2>Issue #5</h2>

        <a href="/" className="buy-link">
          BUY HERE
        </a>

        <p>
          or in <span>selected stores</span>.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">
        <a href="/">Issue #5</a>
        <a href="/">Issue #4</a>
        <a href="/">Issue #3</a>
        <a href="/">Issue #2</a>
        <a href="/">Issue #1</a>
      </div>

    </main>
  );
}

export default Content;