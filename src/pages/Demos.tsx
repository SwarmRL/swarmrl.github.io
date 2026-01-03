// src/pages/Demos.tsx
import { Section, CodeBlock, Button, A, Container, Card } from "../components/ui";

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/40 shadow-2xl">
      <div className="aspect-video relative group">
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
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <Container>
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Demos
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    Explore small, reproducible examples and watch SwarmRL agents in action.
                </p>
            </div>
        </Container>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold">1</span>
                    <h2 className="text-2xl font-bold">Quickstart Training</h2>
                </div>
                
                <Card className="border-accent/20 bg-accent/5">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Step-by-step Guide</h3>
                        <p className="text-muted text-sm mb-4">
                            Learn how to set up your environment, define a task, and train your first policy in minutes.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/getting_started/">Getting Started Guide</Button>
                            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.agents.actor_critic/" variant="outline">
                            Actor-Critic API
                            </Button>
                        </div>
                    </div>
                </Card>

                <div className="space-y-6">
                     <CodeBlock title="Installation">
                        <span className="text-slate-500"># Requires Python 3.10+</span>
                        {"\n"}
                        <span className="text-slate-500"># Install from source</span>
                        {"\n"}
                        <span className="text-purple-400">git</span> clone https://github.com/SwarmRL/SwarmRL
                        {"\n"}
                        <span className="text-purple-400">cd</span> SwarmRL
                        {"\n"}
                        <span className="text-blue-400">python</span> -m pip install .
                    </CodeBlock>

                    <CodeBlock title="train.py">
                        <span className="text-blue-400">from</span> swarmrl.engine.espresso <span className="text-blue-400">import</span> EspressoMD{"\n"}
                        <span className="text-blue-400">from</span> swarmrl.agents.actor_critic <span className="text-blue-400">import</span> ActorCriticAgent{"\n"}
                        <span className="text-blue-400">from</span> swarmrl.trainers.episodic_trainer <span className="text-blue-400">import</span> EpisodicTrainer{"\n"}
                        <span className="text-blue-400">from</span> swarmrl.tasks.searching.gradient_sensing <span className="text-blue-400">import</span> GradientSensing{"\n"}
                        <span className="text-blue-400">from</span> swarmrl.observables.particle_sensing <span className="text-blue-400">import</span> ParticleSensing{"\n"}
                        {"\n"}
                        <span className="text-slate-500"># 1. Setup Physics Engine</span>{"\n"}
                        engine = <span className="text-yellow-300">EspressoMD</span>(...){"\n"}
                        {"\n"}
                        <span className="text-slate-500"># 2. Define Task & Observation</span>{"\n"}
                        task = <span className="text-yellow-300">GradientSensing</span>(...){"\n"}
                        obs = <span className="text-yellow-300">ParticleSensing</span>(...){"\n"}
                        {"\n"}
                        <span className="text-slate-500"># 3. Initialize Agent</span>{"\n"}
                        agent = <span className="text-yellow-300">ActorCriticAgent</span>({"\n"}
                        {"    "}particle_type=<span className="text-green-400">0</span>,{"\n"}
                        {"    "}network=...,{"\n"}
                        {"    "}task=task,{"\n"}
                        {"    "}observable=obs,{"\n"}
                        {"    "}actions={"{...}"}{"\n"}
                        ){"\n"}
                        {"\n"}
                        <span className="text-slate-500"># 4. Start Training</span>{"\n"}
                        trainer = <span className="text-yellow-300">EpisodicTrainer</span>({"\n"}
                        {"    "}engine=engine,{"\n"}
                        {"    "}agents=[agent],{"\n"}
                        {"    "}max_steps=...,{"\n"}
                        {"    "}episodes=...{"\n"}
                        ){"\n"}
                        trainer.<span className="text-blue-300">run</span>()
                    </CodeBlock>
                </div>
            </div>

            <div className="space-y-8 lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">2</span>
                    <h2 className="text-2xl font-bold">Video Showcase</h2>
                </div>
                
                <Video id="b7NRddDScdM" title="SwarmRL overview" />
                
                <div className="p-6 rounded-2xl bg-muted/5 border border-white/10 dark:bg-white/5 dark:border-white/10">
                    <h3 className="font-semibold mb-2 text-text">About this demo</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                        This video demonstrates various swarm behaviors emerging from trained policies, 
                        including gradient sensing and collective transport tasks.
                    </p>
                    <div className="text-xs text-muted">
                        Source: <A to="https://github.com/SwarmRL/SwarmRL">GitHub README</A>
                    </div>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
}