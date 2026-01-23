import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About SaroX Tech</h1>
        <p>Empowering developers with innovative tools</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At SaroX Tech, we believe in making development easier, faster, and more enjoyable.
            We create tools that solve real problems faced by developers every day.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <p>
            We develop a suite of tools and projects designed to enhance your development workflow.
            From code generation to performance monitoring, we've got you covered.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Innovation:</strong> We continuously improve and evolve our tools</li>
            <li><strong>Quality:</strong> Every tool is tested thoroughly for production use</li>
            <li><strong>Community:</strong> We support and grow with our developer community</li>
            <li><strong>Transparency:</strong> Open communication with our users</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>Passionate developers working to make your life easier</p>
      </section>
    </div>
  );
}
