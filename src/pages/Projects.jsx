// src/pages/Projects.jsx
import Portfolio from "./Portfolio.jsx"; // tavs timeline
import ProjectsGrid from "../components/ProjectsGrid.jsx";

function Projects() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <section>
        <h1 style={{ fontSize: "clamp(28px, 3.2vw, 36px)", margin: 0, marginBottom: 8 }}>
          Projects
        </h1>
        <p style={{ margin: 0, maxWidth: 520, fontSize: 14, color: "var(--text-muted)" }}>
          Selected experiments and products – from game engines to AI to web apps.
        </p>
        <ProjectsGrid include_header={false} />
      </section>
    </div>
  );
}

export default Projects;
