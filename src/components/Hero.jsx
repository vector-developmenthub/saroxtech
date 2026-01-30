// src/components/Hero.jsx
function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
        gap: 32,
        alignItems: "center",
        marginBottom: 64,
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid var(--accent-soft)",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "999px",
              background: "var(--accent)",
              boxShadow: "0 0 12px var(--accent-soft)",
            }}
          />
          <span style={{ fontSize: 12, color: "#9ca3af" }}>
            Crafting interactive apps & websites
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 4vw, 44px)",
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 16,
          }}
        >
          Modular Digital Products Built with{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(120deg, #22c55e, #22d3ee 40%, #a855f7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Modern Web Technologies
          </span>{" "}
        </h1>
        <p
          style={{
            maxWidth: 460,
            margin: 0,
            marginBottom: 24,
            fontSize: 15,
            color: "var(--text-muted)",
          }}
        >
          Explore clean, fast, tech-driven web apps and experiments — designed for clarity, performance, and real use.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <a
            href="#projects"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid transparent",
              background:
                "linear-gradient(135deg, #22c55e, #22d3ee 60%, #22c55e)",
              color: "#020617",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 0 24px #22c55e55",
            }}
          >
            View projects
          </a>
          <a
            href="#contact"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #1f2937",
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              fontSize: 14,
              textDecoration: "none",
              color: "#e5e7eb",
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
      <div
        style={{
          borderRadius: 24,
          border: "1px solid #1f2933",
          background:
            "radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%)",
          padding: 16,
          boxShadow: "0 24px 80px rgba(0,0,0,0.9)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            borderRadius: 18,
            border: "1px solid #111827",
            padding: 16,
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))",
            minHeight: 180,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
              fontSize: 11,
              color: "#6b7280",
            }}
          >
            <span>saroxtech.com</span>
            <span>app preview</span>
          </div>
          <div
            style={{
              height: 140,
              borderRadius: 12,
              border: "1px solid #111827",
              background:
                "radial-gradient(circle at 0 0, #22c55e22, transparent 60%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              color: "#9ca3af",
            }}
          >
            Future app screenshots / 3D preview area
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
