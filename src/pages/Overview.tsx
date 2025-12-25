// src/pages/Overview.tsx
import { Section, Card, Container, Muted } from "../components/ui";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

export default function Overview() {
  return (
    <>
      <Section title="Overview" desc="What SwarmRL is and how it fits into your research and engineering workflows." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Multi-agent RL</h3>
            <Muted className="mt-2">Train decentralized policies across heterogeneous agents.</Muted>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Physics & Simulation</h3>
            <Muted className="mt-2">Integrate with physical models and experiment loops.</Muted>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Reproducible Pipelines</h3>
            <Muted className="mt-2">Consistent APIs for envs, training, and evaluation.</Muted>
          </Card>
        </div>
      </Section>
      <Section title="Architecture">
        <Container className="max-w-4xl">
          <div className="space-y-3 text-muted mb-8">
            <p>
              SwarmRL connects rigorous physics simulations (like EspressoMD) with modern deep learning frameworks (JAX).
              This separation ensures that your training loop remains performant while the environment stays physically accurate.
            </p>
          </div>
          
          <ArchitectureDiagram />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
             <div className="space-y-2">
                <h4 className="font-semibold text-white">Environment</h4>
                <p className="text-sm text-muted">
                    Calculates physics steps, handles collisions, and manages the simulation state (positions, velocities, forces).
                </p>
             </div>
             <div className="space-y-2">
                <h4 className="font-semibold text-white">Agent / Policy</h4>
                <p className="text-sm text-muted">
                    Receives local observations (e.g., neighbor positions, chemical gradients) and outputs actions (forces/torques).
                </p>
             </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
