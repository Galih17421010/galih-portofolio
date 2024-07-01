// import "./App.css";
import Index from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Projects_Detail from "./pages/projects-detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-detail" element={<Projects_Detail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
