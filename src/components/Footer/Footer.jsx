import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
       
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/logo.png" alt="FixIt Logo" />
            
          </div>
          <p>Trusted home services at your doorstep.</p>
        </div>

      
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/smart-help">Smart Help</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>+91 9816223161</p>
          <p>support@fixit.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        @ 2026 FixIt. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
