// src/components/ui.tsx
import * as React from "react";
import { NavLink } from "react-router-dom";

export function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  title,
  desc,
  as: Tag = "section",
}: React.PropsWithChildren<{ className?: string; title?: string; desc?: string; as?: React.ElementType }>) {
  return (
    <Tag className={`py-16 md:py-24 ${className}`}>
      <Container>
        {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>}
        {desc && <p className="mt-2 text-muted max-w-3xl">{desc}</p>}
        <div className={title || desc ? "mt-8" : ""}>{children}</div>
      </Container>
    </Tag>
  );
}

export function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border border-muted/20 dark:border-white/10 bg-muted/5 dark:bg-white/5 p-6 ${className}`}>{children}</div>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "accent",
  className = "",
}: React.PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "accent" | "ghost" | "outline";
  className?: string;
}>) {
  const base = "inline-flex items-center gap-2 rounded-xl px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const styles =
    variant === "accent"
      ? "bg-accent text-black font-semibold shadow-[0_0_30px_rgba(56,189,248,.25)]"
      : variant === "outline"
      ? "border border-muted/20 dark:border-white/10 hover:bg-muted/10 dark:hover:bg-white/5 text-text"
      : "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20";
  if (href) return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
  return <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
}

// Allow extra classes on Muted
export function Muted({
    children,
    className = "",
  }: React.PropsWithChildren<{ className?: string }>) {
    return <p className={`text-muted ${className}`}>{children}</p>;
  }
  
  // Allow extra classes on Code
export function Code({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <code className={`px-2 py-1 rounded-lg bg-muted/10 border border-border font-mono text-sm text-text ${className}`}>
      {children}
    </code>
  );
}

export function CodeBlock({
  title,
  children,
  className = "",
}: React.PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    <div className={`rounded-2xl border border-border bg-surface overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/10 border-b border-border">
        <span className="text-xs font-mono text-muted">{title || "Terminal"}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-text">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
  
  // (Optional) Allow extra classes on A too
  export function A({
    to,
    children,
    className = "",
  }: { to: string; children: React.ReactNode; className?: string }) {
    return (
      <a
        href={to}
        className={`text-accent bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 bg-[length:0_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px] transition-[background-size] ${className}`}
      >
        {children}
      </a>
    );
  }  

// Nav item with active state
export function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors hover:text-accent ${isActive ? "text-accent font-semibold" : "text-text"}`
      }
    >
      {label}
    </NavLink>
  );
}
