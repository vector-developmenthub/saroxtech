// src/pages/Nudge.jsx
import { Link } from "react-router-dom";

function Nudge() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {/* Back + header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <Link
          to="/projects"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderRadius: 999,
            border: "1px solid #1f2937",
            backgroundColor: "rgba(15,23,42,0.8)",
            fontSize: 13,
            color: "#9ca3af",
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          ← Back to projects
        </Link>
      </div>

      <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)", gap: 32, alignItems: "flex-start" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--accent-soft)", backgroundColor: "rgba(15, 23, 42, 0.8)", marginBottom: 16, fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.12 }}>
            Current project
            <span style={{ width: 6, height: 6, borderRadius: "999px", background: "var(--accent)", boxShadow: "0 0 12px var(--accent-soft)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 44px)", margin: 0, marginBottom: 16 }}>
            Nudge – daily micro social challenges
          </h1>
          <p style={{ margin: 0, marginBottom: 24, fontSize: 16, color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.6 }}>
            Introverts deserve habit-building tools too. Nudge delivers one 30-second social challenge per day with streak tracking, emotional feedback, and zero social pressure.
          </p>
          
          <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, fontSize: 13 }}>
              <span style={{ padding: "8px 14px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.9)", color: "#9ca3af" }}>1 challenge / day</span>
              <span style={{ padding: "8px 14px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.9)", color: "#9ca3af" }}><span style={{ color: "var(--accent)" }}>{"< 30s"}</span> per challenge</span>
              <span style={{ padding: "8px 14px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.9)", color: "#9ca3af" }}>Streak tracking</span>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <button style={{ flex: 1, padding: "14px 20px", borderRadius: 999, border: "none", background: "linear-gradient(135deg, #22c55e, #22d3ee)", color: "#020617", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                Try demo
              </button>
              <button style={{ padding: "14px 20px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.9)", color: "#e5e7eb", fontSize: 15, cursor: "pointer" }}>
                View spec
              </button>
            </div>
          </div>
        </div>

        {/* Interactive demo */}
        <div style={{ borderRadius: 28, border: "1px solid #111827", background: "radial-gradient(circle at top, #0f172a 0, #020617 70%, #000 100%)", padding: 24, boxShadow: "0 40px 120px rgba(0,0,0,0.95)" }}>
          <div style={{ borderRadius: 24, border: "1px solid #111827", padding: 24, background: "linear-gradient(145deg, rgba(15,23,42,0.97), rgba(15,23,42,0.7))", minHeight: 320 }}>
            {/* Demo challenge */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: 13, color: "#6b7280" }}>
              <span>Day 3 challenge</span>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>Streak: 3 🔥</span>
            </div>
            
            <div style={{ borderRadius: 24, border: "1px solid #1f2937", padding: 28, background: "radial-gradient(circle at top left, #22c55e22 0%, transparent 60%)", display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h3 style={{ margin: 0, marginBottom: 8, fontSize: 18, color: "#e5e7eb", fontWeight: 600 }}>Ask a cashier "How's your day going?"</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#9ca3af" }}>~15 seconds. No follow-up conversation needed.</p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <button style={{ flex: 1, padding: "14px 16px", borderRadius: 999, border: "none", background: "linear-gradient(135deg, #22c55e, #22d3ee)", color: "#020617", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                    ✅ I did it
                  </button>
                  <button style={{ padding: "14px 16px", borderRadius: 999, border: "1px solid #1f2937", backgroundColor: "rgba(15,23,42,0.95)", color: "#9ca3af", fontSize: 15, cursor: "pointer", minWidth: 80 }}>
                    Skip
                  </button>
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderRadius: 16, border: "1px dashed #1f2937", fontSize: 13, color: "#9ca3af" }}>
                  <span>How did it feel?</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span>😖</span><span>😐</span><span>🙂</span><span>😄</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP spec */}
      <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 2.4fr)", gap: 32 }}>
        <div>
          <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20 }}>MVP Goal</h2>
          <div style={{ borderRadius: 20, border: "1px solid #111827", padding: 20, backgroundColor: "rgba(15,23,42,0.8)" }}>
            <p style={{ margin: 0, marginBottom: 12, fontSize: 14, color: "#d1d5db" }}>
              Prove introverts return daily for micro social challenges:
            </p>
            <blockquote style={{ margin: 0, borderLeft: "3px solid var(--accent-soft)", paddingLeft: 16, color: "#9ca3af", fontStyle: "italic", fontSize: 15 }}>
              "Will users come back tomorrow for another nudge?"
            </blockquote>
          </div>
        </div>
        
        <div>
          <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20 }}>Core Features</h2>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: 12 }}>
            <li><strong>1 challenge/day</strong> – auto/manual selection, under 30s execution</li>
            <li><strong>Simple buttons</strong> – "Did it" / "Skip" instant feedback</li>
            <li><strong>Emotional check-in</strong> – quick emoji scale post-challenge</li>
            <li><strong>Private streaks</strong> – daily count, no leaderboards</li>
            <li><strong>Optional reminders</strong> – one daily push notification</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Nudge;
