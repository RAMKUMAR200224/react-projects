import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">bonsai</div>

      <nav className="nav">
        <a href="/">Product</a>
        <a href="/">Templates</a>
        <a href="/">Pricing</a>
        <a href="/">Reviews</a>
      </nav>

      <div className="buttons">
        <button className="login-btn">LOG IN</button>
        <button className="start-btn">START FREE</button>
      </div>
    </header>
  );
}

export default Header;