// src/pages/Research.tsx
import { Section, Card, Muted, A, CodeBlock } from "../components/ui";

const bibArxiv = `@article{tovey2024swarmrl,
  title={SwarmRL: Building the Future of Smart Active Systems},
  author={Tovey, Samuel and Lohrmann, Christoph and Merkt, Tobias and Zimmer, David and Nikolaou, Konstantin and Koppenhöfer, Simon and Bushmakina, Anna and Scheunemann, Jonas and Holm, Christian},
  journal={arXiv preprint arXiv:2404.16388},
  year={2024}
}`;

export default function Research() {
  return (
    <>
      <Section title="Research" desc="Cite and explore the scientific basis of SwarmRL." />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Primary paper</h3>
            <Muted className="mt-2">
              Tovey et&nbsp;al. “SwarmRL: Building the Future of Smart Active Systems”.
            </Muted>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-2">
              <li>
                <A to="https://arxiv.org/abs/2404.16388">arXiv:2404.16388</A>
              </li>
              <li>
                Press/news:{" "}
                <A to="https://www.icp.uni-stuttgart.de/news/news/SwarmRL-building-the-future-of-smart-active-systems/">
                  University of Stuttgart news
                </A>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Engines & training</h3>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-2">
              <li>
                Physics engine wrapper:{" "}
                <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.espresso/">
                  EspressoMD engine
                </A>
              </li>
              <li>
                Real-world interface:{" "}
                <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.real_experiment/">
                  RealExperiment engine
                </A>
              </li>
              <li>
                RL protocol:{" "}
                <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.agents.actor_critic/">
                  Actor–Critic agent
                </A>
                ,{" "}
                <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.trainers.episodic_trainer/">
                  Episodic trainer
                </A>{" "}
                &{" "}
                <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.trainers.continuous_trainer/">
                  Continuous trainer
                </A>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="BibTeX">
        <CodeBlock title="BibTeX">{bibArxiv}</CodeBlock>
      </Section>
    </>
  );
}
