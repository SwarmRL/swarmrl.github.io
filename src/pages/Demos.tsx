// src/pages/Demos.tsx
import { Section, Card, Code, Button, A } from "../components/ui";

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/40">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Demos() {
  return (
    <>
      <Section title="Demos" desc="Small, reproducible examples and videos." />

      <Section title="Quickstart training">
        <Card>
          <pre className="text-sm overflow-auto">
            <code>{`# Install from source
git clone https://github.com/SwarmRL/SwarmRL
cd SwarmRL
python -m pip install .

# Minimal sketch (pseudo-code)
from swarmrl.engine.espresso import EspressoMD
from swarmrl.agents.actor_critic import ActorCriticAgent
from swarmrl.trainers.episodic_trainer import EpisodicTrainer
from swarmrl.tasks.searching.gradient_sensing import GradientSensing
from swarmrl.observables.particle_sensing import ParticleSensing

engine = EspressoMD(...)            # physics engine
task = GradientSensing(...)         # objective
obs = ParticleSensing(...)          # inputs to policy
agent = ActorCriticAgent(particle_type=0, network=..., task=task, observable=obs, actions={...})
trainer = EpisodicTrainer(engine=engine, agents=[agent], max_steps=..., episodes=...)

trainer.run()                       # train swarm policy
`}</code>
          </pre>
          <div className="mt-4 flex gap-3">
            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/getting_started/">Getting Started</Button>
            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.agents.actor_critic/" variant="outline">
              Actor-Critic Agent
            </Button>
          </div>
        </Card>
      </Section>

      <Section title="Video">
        <Video id="b7NRddDScdM" title="SwarmRL overview" />
        <p className="mt-3 text-sm">
          Source: <A to="https://github.com/SwarmRL/SwarmRL">GitHub README</A>
        </p>
      </Section>
    </>
  );
}
