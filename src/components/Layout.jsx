// src/components/Layout.jsx (tikai nav izmaiņas)
import { Link, useLocation } from "react-router-dom";
import { CONTACTS } from "../contacts.js";

function Layout({ children }) {
  const { pathname } = useLocation();

  const navLinkStyle = (active) => ({
    fontSize: 14,
    textDecoration: "none",
    color: active ? "var(--accent)" : "#9ca3af",
    paddingBottom: 2,
    borderBottom: active ? "1px solid var(--accent-soft)" : "1px solid transparent",
  });

  return (
    <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "24px 16px 64px" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: "radial-gradient(circle at 0 0, #22c55e, #22d3ee 60%, #22c55e)", boxShadow: "0 0 20px #22c55e55" }} />
          <span style={{ fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 13, color: "#9ca3af" }}>
            SAROXTECH
          </span>
        </Link>

        <nav style={{ display: "flex", gap: 20 }}>
          <Link to="/" style={navLinkStyle(pathname === "/")}>Home</Link>
          <Link to="/projects" style={navLinkStyle(pathname.startsWith("/projects"))}>Projects</Link>
          <Link to="/portfolio" style={navLinkStyle(pathname.startsWith("/portfolio"))}>Portfolio</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ marginTop: 64, fontSize: 12, color: "#4b5563", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #111827", paddingTop: 16, gap: 16, flexWrap: "wrap" }}>
        <span>© {new Date().getFullYear()} SaroxTech</span>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {CONTACTS.email && <a href={`mailto:${CONTACTS.email}`} style={{ color: "#9ca3af", textDecoration: "none" }}>Email</a>}
          {CONTACTS.github && <a href={CONTACTS.github} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>GitHub</a>}
          {CONTACTS.twitter && <a href={CONTACTS.twitter} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>X</a>}
          {CONTACTS.youtube && <a href={CONTACTS.youtube} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>YouTube</a>}
          {CONTACTS.tiktok && <a href={CONTACTS.tiktok} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", textDecoration: "none" }}>TikTok</a>}
        </div>
      </footer>
    </div>
  );
}

export default Layout;
