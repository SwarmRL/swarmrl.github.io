// src/components/GitHubStars.tsx
export default function GitHubStars() {
    return (
      <a
        href="https://github.com/SwarmRL/SwarmRL"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)]
                   px-3 py-2 text-sm hover:bg-white/5 focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label="Open SwarmRL on GitHub"
      >
        <img
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/SwarmRL/SwarmRL?style=social"
          className="h-5"
        />
        <span className="hidden sm:inline">Star us</span>
      </a>
    );
  }
  