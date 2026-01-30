// src/pages/Home.jsx
import { Link } from "react-router-dom";
import ProjectsGrid from "../components/ProjectsGrid.jsx";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
      {/* NUDGE - galvenais preview */}
      <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)", gap: 32, alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--accent-soft)", backgroundColor: "rgba(15, 23, 42, 0.8)", marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: "999px", background: "var(--accent)", boxShadow: "0 0 12px var(--accent-soft)" }} />
            <span style={{ fontSize: 12, color: "#9ca3af" }}>Current project</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.05, margin: 0, marginBottom: 16 }}>
            Nudge
            <span style={{ backgroundImage: "linear-gradient(120deg, #22c55e, #22d3ee 40%, #a855f7)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>
              {" "}– micro social challenges
            </span>
          </h1>
          <p className="plain-text" style={{ maxWidth: 460, margin: 0, marginBottom: 24, fontSize: 15, color: "var(--text-muted)" }}>
            Daily micro-challenges for introverts. Duolingo-style habit building for real-world social skills – one 30-second action per day.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link
              to="/projects/nudge"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border: "1px solid transparent",
                background: "linear-gradient(135deg, #22c55e, #22d3ee 60%, #22c55e)",
                color: "#020617",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 0 24px #22c55e55",
              }}
            >
              Explore Nudge
            </Link>
            <a
              href="#projects"
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border: "1px solid #1f2937",
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                fontSize: 14,
                textDecoration: "none",
                color: "#e5e7eb",
              }}
            >
              View all projects
            </a>
          </div>
        </div>

        {/* Nudge app preview */}
        <div style={{ borderRadius: 28, border: "1px solid #1f2933", background: "radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%)", padding: 20, boxShadow: "0 32px 100px rgba(0,0,0,0.95)", position: "relative", overflow: "hidden" }}>
          <div style={{ borderRadius: 24, border: "1px solid #111827", padding: 20, background: "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.6))", minHeight: 220 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 12, color: "#6b7280" }}>
              <span>Today’s nudge</span>
              <span style={{ color: "var(--accent)" }}>Streak: 3 days</span>
            </div>
            <div style={{ borderRadius: 20, border: "1px solid #111827", padding: 20, background: "radial-gradient(circle at 0 0, #22c55e22, transparent 60%)", display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ margin: 0, fontSize: 15, color: "#e5e7eb", fontWeight: 500 }}>
                Make eye contact and smile at one person today.
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>Takes ~10 seconds. No small talk required.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <button style={{ flex: 1, padding: "10px 12px", borderRadius: 999, border: "none", background: "linear-gradient(135deg, #22c55e, #22d3ee)", color: "#020617", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  I did it ✅
                </button>
                <button style={{ padding: "10px 12px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.95)", color: "#9ca3af", fontSize: 13, cursor: "pointer" }}>
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citi projekti */}
      <ProjectsGrid />
    </div>
  );
}

export default Home;
