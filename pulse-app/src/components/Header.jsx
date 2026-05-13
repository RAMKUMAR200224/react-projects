import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">pulse</div>

      <nav>
        <a href="#">Features</a>
        <a href="#">Stories</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>

        <button>Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;