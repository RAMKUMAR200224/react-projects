import './Content.css';

function Content() {
  return (
    <div className="content">

      <section className="hero">
        <h1>Plans & Pricing</h1>
        <p>Choose the perfect plan for your business.</p>
      </section>

      <section className="pricing">

        <div className="card">
          <h2>Workflow</h2>
          <h1>$19</h1>
          <p>/MONTH</p>

          <ul>
            <li>Unlimited Clients & Projects</li>
            <li>Proposals</li>
            <li>Contracts</li>
            <li>Invoices & Payments</li>
            <li>Client CRM</li>
          </ul>

          <button>START FREE</button>
        </div>

        <div className="card popular">
          <div className="badge">MOST POPULAR</div>

          <h2>Workflow Plus</h2>
          <h1>$29</h1>
          <p>/MONTH</p>

          <ul>
            <li>Everything in Workflow</li>
            <li>Client Forms</li>
            <li>Automation</li>
            <li>Client Portal</li>
            <li>Priority Support</li>
          </ul>

          <button>START FREE</button>
        </div>

      </section>

      <section className="addons">
        <h2>Super charge your work with add-ons</h2>

        <div className="addon-box">
          <div>
            <h3>Collaborators</h3>
            <p>Invite other users for limited access.</p>
          </div>

          <span>Free</span>
        </div>

        <div className="addon-box">
          <div>
            <h3>Partners</h3>
            <p>Company management access.</p>
          </div>

          <span>$9/month</span>
        </div>

        <div className="addon-box">
          <div>
            <h3>Bonsai Tax</h3>
            <p>Track expenses and taxes easily.</p>
          </div>

          <span>$10/month</span>
        </div>
      </section>

      <section className="banner">
        <div>
          <h2>It’s your business.</h2>
          <h2>We’re here to help it grow.</h2>
        </div>

        <button>START FREE</button>
      </section>

      <section className="image-section">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="team"
        />
      </section>

    </div>
  );
}

export default Content;