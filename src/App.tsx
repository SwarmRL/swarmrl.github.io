import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import UseCases from "./pages/UseCases";
import Demos from "./pages/Demos";
import Research from "./pages/Research";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Simple navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/overview">Overview</Link> |{" "}
        <Link to="/use-cases">Use Cases</Link> |{" "}
        <Link to="/demos">Demos</Link> |{" "}
        <Link to="/research">Research</Link> |{" "}
        <Link to="/community">Community</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/research" element={<Research />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
