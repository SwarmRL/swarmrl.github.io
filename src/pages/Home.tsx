import SwarmBackground from "../components/SwarmBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Interactive Swarm Background */}
      <SwarmBackground />
      
      {/* Soft radial glow overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,.12),transparent_70%)]"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:py-28 relative z-10">
        <header>
          <h1 className="text-balance font-semibold tracking-tight
                         text-4xl md:text-6xl [text-wrap:balance]">
            SwarmRL — multi-agent RL for
            <br className="hidden md:block" />
            smart active systems
          </h1>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            Build, train, and evaluate swarms across simulation and experiment with a unified, Pythonic API.
          </p>
        </header>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/overview"
            className="rounded-xl px-5 py-3 font-semibold text-black bg-accent
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                       hover:brightness-95 active:translate-y-[1px] transition"
            aria-label="Get started with SwarmRL"
          >
            Get Started
          </a>
          <a
            href="https://github.com/SwarmRL/SwarmRL"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-3 border border-white/10 bg-black/20 backdrop-blur-sm
                       hover:bg-white/5 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/40
                       transition"
            aria-label="Open SwarmRL on GitHub in a new tab"
          >
            GitHub
          </a>
        </div>

        {/* Media slot placeholder */}
        <div className="mt-16">
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
             <div className="py-12">
                <p className="text-xl font-semibold text-white/80">Visualizing Swarm Intelligence</p>
                <p className="mt-2 text-muted">Comprehensive simulation gallery and benchmarks coming soon.</p>
                <div className="mt-6 flex justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse delay-75"></span>
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse delay-150"></span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
