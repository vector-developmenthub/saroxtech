import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="hero-content">
          <h1>Portfolio</h1>
          <p>Programmer & Digital Technology Enthusiast</p>
        </div>
      </section>

      <div className="portfolio-container">
        {/* About Me Section */}
        <section className="portfolio-section about-me-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I am a programmer and digital technology enthusiast. Since an early age, I have experimented with programming, 
            game development, AI, 3D animation, and digital services. I am interested in innovation, game design, artificial 
            intelligence, cybersecurity, and digital business models.
          </p>
        </section>

        {/* Programming Experience */}
        <section className="portfolio-section">
          <h2 className="section-title">Programming Experience</h2>

          <div className="experience-item">
            <h3 className="experience-title">Early Steps</h3>
            <ul className="experience-list">
              <li>Discovered programming in 4th grade, starting with <strong>Scratch</strong> (scratch.mit.edu).</li>
              <li>Created <strong>over 100 projects</strong> across multiple accounts.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Unity</h3>
            <ul className="experience-list">
              <li>Started learning <strong>Unity</strong> and C# for game development.</li>
              <li>Built a simple <strong>player controller</strong>, but realized deeper knowledge of C# / C++ was needed.</li>
              <li>Explored 3D game mechanics, but found Unity limiting for my ideas at the time.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Godot</h3>
            <ul className="experience-list">
              <li>Discovered <strong>Godot</strong>, which better suited my game development goals.</li>
              <li>Learned to create:
                <ul className="nested-list">
                  <li>Player controller with <strong>ik-bone dynamic animations</strong>.</li>
                  <li><strong>Procedural terrain</strong> and optimization.</li>
                  <li><strong>AI agents</strong> in games.</li>
                </ul>
              </li>
              <li>Developed a <strong>parkour-style game</strong> and experimented with advanced mathematics in gameplay mechanics.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Python and AI</h3>
            <ul className="experience-list">
              <li>Learned <strong>Python</strong> and neural networks.</li>
              <li>Built a small AI on Google Cloud that recognizes digits from images.</li>
              <li>Explored AI agents in games, inspired by the movie <em>Free Guy</em>.</li>
            </ul>
          </div>
        </section>

        {/* Other Projects and Technologies */}
        <section className="portfolio-section">
          <h2 className="section-title">Other Projects and Technologies</h2>

          <div className="experience-item">
            <h3 className="experience-title">Video Production and 3D Animation</h3>
            <ul className="experience-list">
              <li>Gained experience in video production and <strong>3D animation</strong>.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Web Development</h3>
            <ul className="experience-list">
              <li>Purchased my first <strong>domain name</strong>.</li>
              <li>Built <strong>advanced websites</strong> using HTML, CSS, and JavaScript.</li>
              <li>Created a semi-3D driving game in <strong>vanilla JavaScript</strong>.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Apps and Business Experiments</h3>
            <ul className="experience-list">
              <li>Developed an app similar to <strong>Wallpaper Engine</strong> focused on music visualization.</li>
              <li>Nearly completed the project, but realized the business idea did not solve a real problem.</li>
              <li>Started exploring <strong>digital business models, monetization, and user experience</strong>.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Cybersecurity</h3>
            <ul className="experience-list">
              <li>Acquired knowledge in <strong>cybersecurity</strong>: OSINT, dark web, website protection, various hacking techniques.</li>
              <li>Experimented with <strong>user data protection</strong> and secure software development.</li>
            </ul>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="portfolio-section summary-section">
          <h2 className="section-title">Key Strengths</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🎮</div>
              <h3>Game Development</h3>
              <p>Godot, Unity, C#, GDScript, Advanced mechanics</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Python, Neural Networks, AI Agents, Google Cloud</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React, Advanced UX</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎬</div>
              <h3>Creative Media</h3>
              <p>3D Animation, Video Production, Game Design</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔒</div>
              <h3>Cybersecurity</h3>
              <p>OSINT, Data Protection, Secure Development</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💡</div>
              <h3>Innovation</h3>
              <p>Self-learning, Independent Work, Complex Projects</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="portfolio-section summary-section">
          <h2 className="section-title">Summary</h2>
          <div className="summary-content">
            <ul className="summary-list">
              <li>Multiple years of experience in programming, game development, and AI.</li>
              <li>Practical experience in video production, 3D animation, and web development.</li>
              <li>Experience experimenting with digital business and cybersecurity.</li>
              <li>Strong self-learning skills, ability to work independently, and execute complex projects.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
