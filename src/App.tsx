import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import UseCases from "./pages/UseCases";
import Demos from "./pages/Demos";
import Research from "./pages/Research";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

export default function App() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/overview", label: "Overview" },
    { to: "/use-cases", label: "Use Cases" },
    { to: "/demos", label: "Demos" },
    { to: "/research", label: "Research" },
    { to: "/community", label: "Community" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Minimal, clean nav */}
      <nav className="bg-background px-6 py-4 flex gap-6 border-b border-white/10">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `transition-colors hover:text-accent ${
                isActive ? "text-accent font-semibold" : "text-text"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Page container */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/research" element={<Research />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
