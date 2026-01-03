// src/pages/Overview.tsx
import { Section, Card, Container, Muted } from "../components/ui";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

export default function Overview() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <Container>
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Overview
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    SwarmRL connects rigorous physics simulations with modern deep learning frameworks. 
                    It bridges the gap between <span className="text-accent">EspressoMD</span> physics and <span className="text-accent">JAX</span>-based learning, 
                    enabling reproducible research in multi-agent systems.
                </p>
            </div>
        </Container>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="h-full hover:border-accent/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <div className="w-6 h-6 border-2 border-blue-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-agent RL</h3>
            <Muted>
                Train decentralized policies across heterogeneous agents. 
                Scale from a few particles to thousands of interacting entities with efficient JAX-based learning loops.
            </Muted>
          </Card>
          
          <Card className="h-full hover:border-accent/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <div className="w-6 h-6 border-2 border-purple-400 rotate-45" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Physics & Simulation</h3>
            <Muted>
                Integrate with physical models and experiment loops. 
                Directly interface with EspressoMD for hydrodynamics, electrostatics, and complex particle interactions.
            </Muted>
          </Card>

          <Card className="h-full hover:border-accent/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <div className="w-6 h-1 bg-green-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reproducible Pipelines</h3>
            <Muted>
                Consistent APIs for envs, training, and evaluation. 
                Share complete experiment configurations and pretrained policies to ensure scientific reproducibility.
            </Muted>
          </Card>
        </div>
      </Section>

      <Section title="System Architecture" className="bg-white/5">
        <Container className="max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
                 <div className="rounded-2xl border border-white/10 bg-black/20 p-8 shadow-2xl">
                    <ArchitectureDiagram />
                 </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
                <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                        <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        Environment
                    </h4>
                    <p className="text-muted leading-relaxed pl-6 border-l border-white/10 ml-1.5">
                        Calculates physics steps, handles collisions, and manages the simulation state (positions, velocities, forces). 
                        Powered by <strong>EspressoMD</strong> for high-fidelity physics.
                    </p>
                </div>
                
                <div className="w-full h-px bg-white/10" />

                <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                        <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        Agent / Policy
                    </h4>
                    <p className="text-muted leading-relaxed pl-6 border-l border-white/10 ml-1.5">
                        Receives local observations (e.g., neighbor positions, chemical gradients) and outputs actions (forces/torques).
                        Optimized with <strong>JAX</strong> for rapid training.
                    </p>
                </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
