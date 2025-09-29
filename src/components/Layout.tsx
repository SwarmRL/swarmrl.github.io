// src/components/Layout.tsx
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Container, NavItem } from "./ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/overview", label: "Overview" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/demos", label: "Demos" },
  { to: "/research", label: "Research" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="py-4">
          <nav className="flex items-center gap-6">
            {links.map((l) => <NavItem key={l.to} to={l.to} label={l.label} />)}
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10">
        <Container className="py-10 text-sm text-muted">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SwarmRL</p>
            <div className="flex gap-4">
              <a href="https://github.com/SwarmRL/SwarmRL" className="hover:text-accent">GitHub</a>
              <a href="/research" className="hover:text-accent">Research</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
