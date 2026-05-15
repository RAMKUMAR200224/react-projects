import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Backstage Talks © 2024</p>
      </div>

      <div className="footer-center">
        <p>Designed with React</p>
      </div>

      <div className="footer-right">
        <a href="/">Instagram</a>
        <a href="/">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;