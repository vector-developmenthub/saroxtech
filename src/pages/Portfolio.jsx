// src/pages/Portfolio.jsx
import { useEffect, useRef, useState } from "react";
import scratchLogo from "../assets/scratch.png";
import unityLogo from "../assets/unity.png";
import godotLogo from "../assets/godot.png";
import pythonLogo from "../assets/python.png";
import htmlStackLogo from "../assets/html_stack.png";
import codeLogo from "../assets/code.png";

const TIMELINE = [
  {
    id: "scratch",
    title: "Scratch – first steps into programming",
    period: "4th grade – early years",
    logo: scratchLogo,
    accent: "#22c55e",
    points: [
      "Discovered programming through Scratch.",
      "Created over 100 projects across multiple accounts.",
      "Learned core logic: variables, events, collisions, animations.",
    ],
  },
  {
    id: "unity",
    title: "Unity & C# – 3D worlds",
    period: "Next phase",
    logo: unityLogo,
    accent: "#22d3ee",
    points: [
      "Started learning Unity and C# for game development.",
      "Built a basic player controller and simple 3D mechanics.",
      "Realized I needed deeper C# / C++ knowledge for bigger ideas.",
    ],
  },
  {
    id: "godot",
    title: "Godot – advanced mechanics & AI",
    period: "Game dev focus",
    logo: godotLogo,
    accent: "#a855f7",
    points: [
      "Switched to Godot as a better fit for my game ideas.",
      "Implemented IK‑based player animations and procedural terrain.",
      "Built AI agents and a parkour‑style game with advanced math.",
    ],
  },
  {
    id: "ai",
    title: "Python & AI",
    period: "AI exploration",
    logo: pythonLogo,
    accent: "#f97316",
    points: [
      "Learned Python and neural network fundamentals.",
      "Built a small AI on Google Cloud recognizing digits from images.",
      "Explored AI agents in games inspired by the movie Free Guy.",
    ],
  },
  {
    id: "web",
    title: "Web, apps & digital products",
    period: "Product building",
    logo: htmlStackLogo,
    accent: "#eab308",
    points: [
      "Bought my first domain and built advanced websites with HTML, CSS, and JS.",
      "Created a semi‑3D driving game in vanilla JavaScript.",
      "Developed a music‑visualizer app similar to Wallpaper Engine, learning to validate real problems.",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity & innovation",
    period: "Recent focus",
    logo: codeLogo,
    accent: "#22c55e",
    points: [
      "Studied OSINT, dark web, website protection and ethical hacking techniques.",
      "Experimented with user data protection and secure software development.",
      "Explored digital business models, monetization and UX.",
    ],
  },
];

function Portfolio() {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(TIMELINE[0]?.id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll("[data-timeline-id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const viewportCenter = window.innerHeight / 2;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          });

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-timeline-id");
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // precīzāks fokuss pa vidu
        threshold: 0.3,
      }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {/* About Me */}
      <section>
        <h1 style={{ fontSize: "clamp(28px, 3.4vw, 38px)", margin: 0, marginBottom: 10 }}>
          About Me
        </h1>
        <p style={{ margin: 0, maxWidth: 720, fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
          I am a programmer and digital technology enthusiast. Since an early age, I
          have experimented with programming, game development, AI, 3D animation,
          and digital services. I am interested in innovation, game design,
          artificial intelligence, cybersecurity, and digital business models.
        </p>
      </section>

      {/* Timeline */}
      <section>
        <h2 style={{ margin: 0, marginBottom: 24, fontSize: 24 }}>
          Journey & Progress
        </h2>

        <div
          ref={containerRef}
          className="timeline-container"
          style={{
            position: "relative",
            minHeight: "400px",
            padding: "40px 20px",
          }}
        >
          {/* FIXED Curvy līnija */}
          <svg
            className="timeline-line-svg"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22c55e55" />
                <stop offset="50%" stopColor="#22d3ee77" />
                <stop offset="100%" stopColor="#22c55e44" />
              </linearGradient>
            </defs>
            <path
              d="M 50 20 Q 45 100 55 180 Q 50 260 48 340 Q 52 420 50 500 Q 48 580 52 660 Q 50 740 50 800"
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
          </svg>

          {/* Timeline items */}
          <div
            className="timeline-list"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {TIMELINE.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                active={activeId === item.id}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        className="summary-section"
        style={{
          borderRadius: 20,
          border: "1px solid #111827",
          padding: 20,
          background: "radial-gradient(circle at top left, #22c55e11, transparent 10%)",
        }}
      >
        <h2 style={{ margin: 0, marginBottom: 12, fontSize: 18 }}>Summary</h2>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: 4 }}>
          <li>Multiple years of experience in programming, game development, and AI.</li>
          <li>Practical experience in video production, 3D animation, and web development.</li>
          <li>Hands‑on experiments with digital business and cybersecurity.</li>
          <li>Strong self‑learning skills, ability to work independently, and deliver complex projects end‑to‑end.</li>
        </ul>
      </section>
    </div>
  );
}

function TimelineCard({ item, active, index }) {
  return (
    <article
      data-timeline-id={item.id}
      className={`timeline-card ${active ? "active" : ""}`}
      style={{
        position: "relative",
        opacity: active ? 1 : 0.8,
        transform: active 
          ? "scale(1.05) translateY(-8px)" 
          : "scale(0.9) translateY(0px)",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: active ? 10 : 1,
      }}
    >
      {/* Dot uz līnijas */}
      <div
        className="timeline-dot"
        style={{
          position: "absolute",
          left: "50%",
          top: "20%",
          transform: "translate(-50%, -50%)",
          width: active ? 24 : 16,
          height: active ? 24 : 16,
          borderRadius: "50%",
          border: `3px solid ${item.accent}`,
          backgroundColor: "#020617",
          boxShadow: active 
            ? `0 0 20px ${item.accent}aa` 
            : `0 0 8px ${item.accent}44`,
          transition: "all 300ms ease-out",
        }}
      />

      {/* Card */}
      <div
        style={{
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: 24,
          border: active ? `1px solid ${item.accent}66` : "1px solid #111827",
          padding: active ? 24 : 20,
          boxShadow: active 
            ? `0 32px 80px rgba(0,0,0,0.9), 0 0 0 1px ${item.accent}44` 
            : "0 16px 40px rgba(0,0,0,0.6)",
          transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
          position: "relative",
          overflow: "hidden",
          marginLeft: index % 2 === 0 ? "auto" : 0,
          marginRight: index % 2 === 0 ? 0 : "auto",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {/* Lielais attēls VIRSKARTĒ */}
        <div
          style={{
            width: "100%",
            height: active ? 140 : 100,
            borderRadius: 16,
            border: `1px solid ${item.accent}33`,
            backgroundColor: "#020617",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginBottom: 12,
            transition: "all 300ms ease-out",
          }}
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.title}
              style={{
                width: active ? "85%" : "70%",
                height: active ? "85%" : "70%",
                objectFit: "contain",
              }}
            />
          ) : (
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}44)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              ?
            </div>
          )}
        </div>

        {/* Saturs BEZ emoji */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <h3
              style={{
                margin: 0,
                fontSize: active ? 18 : 16,
                fontWeight: 600,
                color: active ? "#e5e7eb" : "#9ca3af",
              }}
            >
              {item.title}
            </h3>
            <span
              style={{
                fontSize: 12,
                color: active ? item.accent : "#6b7280",
                fontWeight: active ? 500 : 400,
              }}
            >
              {item.period}
            </span>
          </div>

          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              fontSize: 13,
              color: active ? "#d1d5db" : "var(--text-muted)",
              lineHeight: 1.5,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {item.points.map((point, idx) => (
              <li key={idx} style={{ margin: 0 }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
