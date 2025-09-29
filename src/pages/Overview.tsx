// src/pages/Overview.tsx
import { Section, Card, Container, Muted } from "../components/ui";

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
        <Container className="max-w-3xl">
          <div className="space-y-3 text-muted">
            <p>• Environments → Agents → Policies → Trainers → Evaluators</p>
            <p>• Clear interfaces make it easy to extend and swap components.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
