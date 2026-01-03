// src/pages/Research.tsx
import { Section, Card, Muted, A, CodeBlock, Container } from "../components/ui";

const bibArxiv = `@article{tovey2024swarmrl,
  title={SwarmRL: Building the Future of Smart Active Systems},
  author={Tovey, Samuel and Lohrmann, Christoph and Merkt, Tobias and Zimmer, David and Nikolaou, Konstantin and Koppenhöfer, Simon and Bushmakina, Anna and Scheunemann, Jonas and Holm, Christian},
  journal={arXiv preprint arXiv:2404.16388},
  year={2024}
}`;

export default function Research() {
  return (
    <>
      <Section className="relative overflow-hidden">
         <Container>
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Research
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    Cite and explore the scientific basis of SwarmRL. 
                    Built on peer-reviewed research and validated physical models.
                </p>
            </div>
        </Container>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="h-full flex flex-col hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-accent rounded-sm" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Primary Paper</h3>
                    <p className="text-sm text-muted">The foundation of SwarmRL</p>
                </div>
            </div>
            
            <Muted className="mb-6 flex-grow">
              Tovey et&nbsp;al. “SwarmRL: Building the Future of Smart Active Systems”.
            </Muted>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm font-medium">Read on arXiv</span>
                    <A to="https://arxiv.org/abs/2404.16388" className="text-sm">arXiv:2404.16388</A>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm font-medium">News Coverage</span>
                    <A to="https://www.icp.uni-stuttgart.de/news/news/SwarmRL-building-the-future-of-smart-active-systems/" className="text-sm">University of Stuttgart</A>
                </div>
            </div>
          </Card>

          <Card className="h-full flex flex-col hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-purple-400 rounded-full" />
                </div>
                <div>
                     <h3 className="text-xl font-semibold">Core Components</h3>
                     <p className="text-sm text-muted">Technical implementation details</p>
                </div>
            </div>

            <div className="space-y-4 flex-grow">
                <div className="space-y-1">
                    <div className="text-sm font-semibold text-white/80">Physics Engine</div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Wrapper for <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.espresso/">EspressoMD engine</A>
                    </div>
                     <div className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Interface for <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.engine.real_experiment/">RealExperiment engine</A>
                    </div>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="space-y-1">
                    <div className="text-sm font-semibold text-white/80">RL Protocol</div>
                     <div className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                         <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.agents.actor_critic/">Actor–Critic agent</A>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.trainers.episodic_trainer/">Episodic</A> & <A to="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.trainers.continuous_trainer/">Continuous</A> trainers
                    </div>
                </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Citation">
        <Container className="max-w-4xl">
             <CodeBlock title="bibtex">{bibArxiv}</CodeBlock>
             <p className="mt-4 text-sm text-muted text-center">
                Please cite this paper if you use SwarmRL in your research.
             </p>
        </Container>
      </Section>
    </>
  );
}
