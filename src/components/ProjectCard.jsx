// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

const statusLabel = {
  mvp: "MVP",
  prototype: "Prototype", 
  ongoing: "Ongoing",
  archived: "Archived",
};

function ProjectCard({ project }) {
  const hasLink = project.link;
  const hasRepo = project.repo;

  return (
    <Link
      to={project.link || "#"}
      className={`project-card-link ${!hasLink ? "no-link" : ""}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        borderRadius: 20,
        border: "1px solid #111827",
        background: "radial-gradient(circle at top left, #22c55e0f, transparent 55%)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "relative",
        overflow: "hidden",
        transition: "all 200ms ease-out",
        cursor: hasLink ? "pointer" : "default"
      }}
    >
      {/* VISI IEPRIEKŠĒJIE STILI PALIEK TĀ PATI */}
      <div className="backdrop-blur glass-card" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, #22d3ee11, transparent 20%)", opacity: 0.8, pointerEvents: "none" }} />
      
      <header style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
          <h3 style={{ margin: 0, fontSize: 17, letterSpacing: 0.02 }}>{project.title}</h3>
          {project.status && (
            <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, border: "1px solid #1f2937", color: project.status === "mvp" ? "var(--accent)" : "#9ca3af", backgroundColor: project.status === "mvp" ? "rgba(34, 197, 94, 0.1)" : "rgba(15,23,42,0.5)", fontWeight: 500 }}>
              {statusLabel[project.status]}
            </span>
          )}
        </div>
        <p style={{ margin: 0, fontSize: 12, color: "#6b7280", textTransform: "uppercase", letterSpacing: 0.12 }}>{project.tag}</p>
      </header>

      <p style={{ position: "relative", zIndex: 1, margin: 0, fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{project.description}</p>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
        {project.tech.map((t) => (
          <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 999, backgroundColor: "rgba(15,23,42,0.9)", border: "1px solid #1f2937", color: "#9ca3af" }}>
            {t}
          </span>
        ))}
      </div>

      {(hasLink || hasRepo) && (
        <div style={{ position: "relative", zIndex: 1, marginTop: "auto", paddingTop: 12, borderTop: "1px solid #1f2937", display: "flex", gap: 16, fontSize: 13, alignItems: "center" }}>
          {hasLink && <span style={{ color: "var(--accent)", fontWeight: 500 }}>View project →</span>}
          {hasRepo && !hasLink && (
            <a href={project.repo} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: 500 }}>
              View code →
            </a>
          )}
        </div>
      )}
    </Link>
  );
}

export default ProjectCard;
