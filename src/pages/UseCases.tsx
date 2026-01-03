// src/pages/UseCases.tsx
import { Section, Card, Muted, A, Container } from "../components/ui";

export default function UseCases() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <Container>
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Use Cases
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    Where SwarmRL shines across research and engineering. 
                    From microscopic control to collective behavior analysis.
                </p>
            </div>
        </Container>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:border-accent/50 transition-all bg-muted/5 border-muted/20 dark:border-white/10 dark:bg-white/5 hover:bg-muted/10 dark:hover:bg-white/10">
            <div className="flex items-start justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 text-lg font-bold">1</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
                    Control
                 </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Microrobotic & Active-matter</h3>
            <Muted className="mb-6">
              Train decentralized policies to steer microscopic colloids and other active
              particles in simulation or experiment. Enable precise control at the micro-scale.
            </Muted>
            <div className="pt-4 border-t border-muted/20 dark:border-white/10 flex items-center gap-4 text-sm">
              <span className="text-muted">Learn more:</span>
              <A to="https://arxiv.org/abs/2404.16388">Read Paper</A>
              <span className="text-muted/30">|</span>
              <A to="https://swarmrl.github.io/SwarmRL.ai/">View Docs</A>
            </div>
          </Card>

          <Card className="group hover:border-accent/50 transition-all bg-muted/5 border-muted/20 dark:border-white/10 dark:bg-white/5 hover:bg-muted/10 dark:hover:bg-white/10">
             <div className="flex items-start justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-purple-400 text-lg font-bold">2</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">
                    Simulation
                 </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Physics-grounded Loops</h3>
            <Muted className="mb-6">
              Use the <code className="bg-white/10 px-1 py-0.5 rounded text-text font-mono">EspressoMD</code> engine to build physically realistic training
              environments with forces, walls, rods, and complex flow fields.
            </Muted>
            <div className="pt-4 border-t border-muted/20 dark:border-white/10 flex items-center gap-4 text-sm">
                <span className="text-muted">API:</span>
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.espresso/">
                engine.espresso
              </A>
            </div>
          </Card>

          <Card className="group hover:border-accent/50 transition-all bg-muted/5 border-muted/20 dark:border-white/10 dark:bg-white/5 hover:bg-muted/10 dark:hover:bg-white/10">
             <div className="flex items-start justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 text-lg font-bold">3</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">
                    Behavior
                 </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Collective Search & Chemotaxis</h3>
            <Muted className="mb-6">
              Model “run-and-tumble”, gradient-following behaviors, or swarm search over other
              species/targets. Simulate emergent biological behaviors.
            </Muted>
             <div className="pt-4 border-t border-muted/20 dark:border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                 <span className="text-muted">Tasks:</span>
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.searching.gradient_sensing/">
                GradientSensing
              </A>
              <span className="text-muted/30">|</span>
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.searching.species_search/">
                SpeciesSearch
              </A>
            </div>
          </Card>

          <Card className="group hover:border-accent/50 transition-all bg-muted/5 border-muted/20 dark:border-white/10 dark:bg-white/5 hover:bg-muted/10 dark:hover:bg-white/10">
             <div className="flex items-start justify-between mb-4">
                 <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-amber-400 text-lg font-bold">4</span>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20">
                    Manipulation
                 </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Micro-manipulation</h3>
            <Muted className="mb-6">
              Learn policies that coordinate agents to rotate and move micro-objects (e.g.
              rods) under physical constraints and fluid dynamics.
            </Muted>
             <div className="pt-4 border-t border-muted/20 dark:border-white/10 flex items-center gap-4 text-sm">
                <span className="text-muted">Task:</span>
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.object_movement.rod_rotation/">
                Rod rotation
              </A>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
