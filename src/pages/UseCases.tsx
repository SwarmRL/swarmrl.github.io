// src/pages/UseCases.tsx
import { Section, Card, Muted, A } from "../components/ui";

export default function UseCases() {
  return (
    <>
      <Section
        title="Use cases"
        desc="Where SwarmRL shines across research and engineering."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Microrobotic & active-matter control</h3>
            <Muted className="mt-2">
              Train decentralized policies to steer microscopic colloids and other active
              particles in simulation or experiment.
            </Muted>
            <p className="mt-3">
              Learn more:{" "}
              <A to="https://arxiv.org/abs/2404.16388">paper</A> ·{" "}
              <A to="https://swarmrl.github.io/SwarmRL.ai/">docs</A>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Physics-grounded simulation loops</h3>
            <Muted className="mt-2">
              Use the <code>EspressoMD</code> engine to build physically realistic training
              environments with forces, walls, rods, and flow fields.
            </Muted>
            <p className="mt-3">
              API:{" "}
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.espresso/">
                engine.espresso
              </A>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Collective search & chemotaxis</h3>
            <Muted className="mt-2">
              Model “run-and-tumble”/gradient-following behaviors or swarm search over other
              species/targets.
            </Muted>
            <p className="mt-3">
              Tasks:{" "}
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.searching.gradient_sensing/">
                GradientSensing
              </A>{" "}
              ·{" "}
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.searching.species_search/">
                SpeciesSearch
              </A>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Micro-manipulation</h3>
            <Muted className="mt-2">
              Learn policies that coordinate agents to rotate and move micro-objects (e.g.
              rods) under constraints.
            </Muted>
            <p className="mt-3">
              Task:{" "}
              <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.tasks.object_movement.rod_rotation/">
                Rod rotation
              </A>
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
