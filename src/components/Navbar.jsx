import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🚀</span>
          <span className="brand-text">SaroX Tech</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tools" className="nav-link">Tools</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>

        <Link to="/tools" className="cta-button">Get Started</Link>
      </div>
    </nav>
  );
}
