export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,.12),transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          SwarmRL — multi-agent RL for<br className="hidden md:block" /> smart active systems
        </h1>
        <p className="mt-4 text-muted max-w-2xl">
          Build, train, and evaluate swarms across simulation and experiment with a unified, Pythonic API.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/overview" className="rounded-xl px-5 py-3 bg-accent text-black font-semibold">
            Get Started
          </a>
          <a href="https://github.com/SwarmRL/SwarmRL" className="rounded-xl px-5 py-3 border border-white/10 hover:bg-white/5">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
