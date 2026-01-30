// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import PixelBackground from "./components/PixelBackground.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Nudge from "./pages/Nudge.jsx";
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="app-root">
      <PixelBackground />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/nudge" element={<Nudge />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
