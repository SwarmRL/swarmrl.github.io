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
            SwarmRL — multi-agent RL for <br className="hidden md:block" /> smart active systems
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

        {/* Key Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Sim-to-Real Bridge</h3>
                <p className="text-muted leading-relaxed">
                    Deploy the same control policies in high-fidelity simulations and real-world micro-robotic experiments.
                    Bridge the gap between theory and application.
                </p>
            </div>
            <div className="space-y-4">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Hybrid Control</h3>
                <p className="text-muted leading-relaxed">
                    Combine classical control theory with state-of-the-art Deep Reinforcement Learning. 
                    Flexible architecture for any agent design.
                </p>
            </div>
             <div className="space-y-4">
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Accelerated Physics</h3>
                <p className="text-muted leading-relaxed">
                    Leverage <span className="text-green-400 font-mono text-sm">JAX</span> for massive parallelization and 
                    <span className="text-green-400 font-mono text-sm"> EspressoMD</span> for accurate hydrodynamics and electrostatics.
                </p>
            </div>
        </div>

        {/* Visuals Placeholder */}
        <div className="mt-24 border-t border-slate-200 dark:border-white/5 pt-12">
             <div className="relative w-full max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 text-center backdrop-blur-md">
                 <div className="py-12">
                    <p className="text-xl font-semibold text-slate-900 dark:text-white/80">Visualizing Swarm Intelligence</p>
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
