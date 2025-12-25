export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,.12),transparent_70%)]"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:py-28">
        <header>
          <h1 className="text-balance font-semibold tracking-tight
                         text-4xl md:text-6xl [text-wrap:balance]">
            SwarmRL — multi-agent RL for
            <br className="hidden md:block" />
            smart active systems
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
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
            className="rounded-xl px-5 py-3 border border-white/10
                       hover:bg-white/5 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/40
                       transition"
            aria-label="Open SwarmRL on GitHub in a new tab"
          >
            GitHub
          </a>
        </div>

        {/* Media slot (optional): cartoon robots video or Lottie */}
        <div className="mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
            {/* Replace with your generated video. Keep it light! */}
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/media/robots-poster.jpg"
            >
              <source src="/media/robots-hero.mp4" type="video/mp4" />
              {/* Fallback text */}
              Your browser does not support the video tag.
            </video>

            {/* Reduced motion: hide/pause video via CSS (see note below) */}
          </div>
        </div>
      </section>
    </main>
  );
}
