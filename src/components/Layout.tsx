// src/components/Layout.tsx
import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Container, NavItem } from "./ui";
import ThemeToggle from "./ThemeToggle";
import GitHubStars from "./GitHubStars";
import logo from "../assets/logo.jpg";

const links = [
  { to: "/overview", label: "Overview" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/demos", label: "Demos" },
  { to: "/research", label: "Research" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col text-text">
      <header
        className="border-b border-white/10 bg-background/80 backdrop-blur
                   supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
      >
        <Container className="py-4">
          <nav className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={logo} alt="SwarmRL Logo" className="h-8 w-auto rounded-md" />
                <span className="font-semibold text-lg hidden sm:block">SwarmRL</span>
              </Link>

              {/* Left: links */}
              <div className="hidden md:flex items-center gap-6">
                {links.map((l) => (
                  <NavItem key={l.to} to={l.to} label={l.label} />
                ))}
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-3">
              <GitHubStars />
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 -mr-2 text-muted hover:text-text transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 18 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </Container>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-background/95 backdrop-blur-xl md:hidden p-4 flex flex-col gap-2 shadow-2xl">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-muted hover:text-text hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 dark:border-white/10 border-muted/20">
        <Container className="py-10 text-sm text-muted">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SwarmRL</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
