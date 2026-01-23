import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Better Software Faster
          </h1>
          <p className="hero-subtitle">
            Discover powerful tools and projects designed to accelerate your development workflow
          </p>
          <div className="hero-buttons">
            <Link to="/tools" className="btn btn-primary">
              Explore Tools
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Our Tools?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Purpose-Built</h3>
            <p>Each tool is designed with a specific use case in mind</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Lightning-fast and optimized for production environments</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔧</div>
            <h3>Easy Integration</h3>
            <p>Simple APIs and comprehensive documentation</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <h3>Secure</h3>
            <p>Enterprise-grade security and regular updates</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Browse our collection of tools and find exactly what you need</p>
        <Link to="/tools" className="btn btn-large">
          Start Exploring
        </Link>
      </section>
    </div>
  );
}
