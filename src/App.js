import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Projects_Detail from "./pages/projects-detail";
import Blog_Post from "./pages/blog-post";

function App() {
  return (
    <div className="App">
      <div id="body">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects-detail" element={<Projects_Detail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-post" element={<Blog_Post />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
