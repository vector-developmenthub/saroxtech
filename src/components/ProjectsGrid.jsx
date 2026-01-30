// src/components/ProjectsGrid.jsx
import { PROJECTS } from "../projects";
import ProjectCard from "./ProjectCard";

function ProjectsGrid({include_header = true}) {
  return (
    <section id="projects" style={{ marginBottom: 72 }}>
      <header
        style={{
          display: include_header ? "flex" : "none",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 20,
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 18 }}>Projects</h2>
          <p
            style={{
              margin: 0,
              marginTop: 4,
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            Apart from learning everyday something new, here are some of my recent projects.
          </p>
        </div>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginTop: include_header ? 0 : 24,
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
