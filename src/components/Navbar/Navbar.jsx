import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img src="/logo.png" alt="FixIt Logo" />
      </Link>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/smart-help">Smart Help</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <button
        className="nav-btn"
        onClick={() => navigate("/booking")}
      >
        Book Service
      </button>

    </nav>
  );
}

export default Navbar;