import { useState } from "react";
import ToolCard from "../components/ToolCard";
import { tools, categories } from "../data/tools";
import "../styles/Tools.css";

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = selectedCategory === "All"
    ? tools
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="tools-page">
      <section className="tools-header">
        <h1>Our Tools & Projects</h1>
        <p>Explore our collection of powerful development tools</p>
      </section>

      <section className="tools-content">
        <div className="filters">
          <h3>Filter by Category</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="tools-grid">
          {filteredTools.length > 0 ? (
            filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          ) : (
            <p className="no-tools">No tools found in this category</p>
          )}
        </div>
      </section>

      <section className="submit-tool">
        <h2>Have a Tool to Share?</h2>
        <p>Submit your project and help the community grow</p>
        <button className="btn btn-primary">Submit Your Tool</button>
      </section>
    </div>
  );
}
