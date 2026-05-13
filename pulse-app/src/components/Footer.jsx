import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h2>pulse</h2>

        <button>Start Your Free Trial</button>
      </div>

      <div className="footer-links">

        <div>
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Stories</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;