import "../styles/ToolCard.css";

export default function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-header">
        <span className="tool-icon">{tool.icon}</span>
        <span className="tool-version">v{tool.version}</span>
      </div>
      
      <h3 className="tool-name">{tool.name}</h3>
      <p className="tool-category">{tool.category}</p>
      
      <p className="tool-description">{tool.description}</p>
      
      <div className="tool-features">
        {tool.features.map((feature, idx) => (
          <span key={idx} className="feature-tag">{feature}</span>
        ))}
      </div>
      
      <button className="download-btn">⬇️ Download</button>
    </div>
  );
}
