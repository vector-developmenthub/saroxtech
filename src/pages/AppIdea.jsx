// src/pages/AppIdea.jsx
function AppIdea() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Hero bloks */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid var(--accent-soft)",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              marginBottom: 16,
              fontSize: 11,
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: 0.12,
            }}
          >
            MVP concept
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "999px",
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent-soft)",
              }}
            />
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 3.4vw, 38px)",
              margin: 0,
              marginBottom: 12,
            }}
          >
            Micro‑social challenges for introverts
          </h1>
          <p
            style={{
              margin: 0,
              marginBottom: 16,
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 520,
            }}
          >
            An app inspired by Duolingo – but instead of learning languages,
            introverts practice tiny real‑world social actions once per day.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              fontSize: 13,
            }}
          >
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid #1f2937",
                backgroundColor: "rgba(15,23,42,0.9)",
                color: "#9ca3af",
              }}
            >
              1 challenge / day
            </span>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid #1f2937",
                backgroundColor: "rgba(15,23,42,0.9)",
                color: "#9ca3af",
              }}
            >
              <span style={{ color: "var(--accent)" }}>{"< 30s"}</span> to complete
            </span>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid #1f2937",
                backgroundColor: "rgba(15,23,42,0.9)",
                color: "#9ca3af",
              }}
            >
              Focus on comeback & streaks
            </span>
          </div>
        </div>

        {/* “App preview” kā Duolingo‑tip kartiņa */}
        <div
          style={{
            borderRadius: 28,
            border: "1px solid #111827",
            padding: 18,
            background:
              "radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.9)",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              border: "1px solid #111827",
              padding: 16,
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.6))",
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
              <span>Today&apos;s challenge</span>
              <span>Streak: 3 days</span>
            </div>
            <div
              style={{
                borderRadius: 16,
                border: "1px solid #111827",
                padding: 14,
                background:
                  "radial-gradient(circle at 0 0, #22c55e22, transparent 60%)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#e5e7eb",
                  fontWeight: 500,
                }}
              >
                Make eye contact and smile at one person you pass today.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#9ca3af",
                }}
              >
                Takes ~10 seconds. No small talk required.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 6,
                }}
              >
                <button
                  style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: 999,
                    border: "none",
                    background:
                      "linear-gradient(135deg, #22c55e, #22d3ee 60%, #22c55e)",
                    color: "#020617",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  I did it
                </button>
                <button
                  style={{
                    padding: "8px 10px",
                    borderRadius: 999,
                    border: "1px solid #1f2937",
                    backgroundColor: "rgba(15,23,42,0.95)",
                    color: "#9ca3af",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Skip
                </button>
              </div>
            </div>

            {/* Sajūtu feedback preview */}
            <div
              style={{
                marginTop: 16,
                borderRadius: 14,
                border: "1px dashed #1f2937",
                padding: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 12,
                color: "#9ca3af",
              }}
            >
              <span>How did it feel?</span>
              <div style={{ display: "flex", gap: 6 }}>
                <span>😖</span>
                <span>😐</span>
                <span>🙂</span>
                <span>😄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP mērķis + kodols, kā tava Markdown ideja */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 2.4fr)",
          gap: 28,
          alignItems: "flex-start",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              marginBottom: 8,
              fontSize: 18,
            }}
          >
            MVP goal
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: 12,
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            Prove that introverts will actually repeat micro social challenges –
            not just say the idea is nice.
          </p>
          <div
            style={{
              borderRadius: 16,
              border: "1px solid #111827",
              padding: 14,
              backgroundColor: "rgba(15,23,42,0.8)",
              fontSize: 13,
              color: "#e5e7eb",
            }}
          >
            <p style={{ margin: 0, marginBottom: 6 }}>
              Core question for the MVP:
            </p>
            <blockquote
              style={{
                margin: 0,
                borderLeft: "2px solid var(--accent-soft)",
                paddingLeft: 10,
                color: "#d1d5db",
                fontStyle: "italic",
              }}
            >
              Will a user come back tomorrow and do another challenge?
            </blockquote>
          </div>
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            MVP core features
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 14,
              color: "var(--text-muted)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <li>
              <strong>1 challenge per day</strong> – auto or manual, clear and
              executable in under 30 seconds.
            </li>
            <li>
              <strong>Simple action buttons</strong> – &quot;I did it&quot; /
              &quot;Skip&quot; for each challenge.
            </li>
            <li>
              <strong>Emotional feedback</strong> – quick emoji or 1–5 scale,
              optional &quot;before/after&quot; later.
            </li>
            <li>
              <strong>Streak‑based progress</strong> – number of days in a row,
              no public leaderboard.
            </li>
            <li>
              <strong>Daily reminder</strong> – one notification per day, user
              can turn it off.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AppIdea;
