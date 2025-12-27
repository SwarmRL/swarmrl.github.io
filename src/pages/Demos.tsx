// src/pages/Demos.tsx
import { Section, CodeBlock, Button, A } from "../components/ui";

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
        <div className="space-y-4">
          <CodeBlock title="Installation">
            <span className="text-slate-500 dark:text-slate-400"># Requires Python 3.10+</span>
            {"\n"}
            <span className="text-slate-500 dark:text-slate-400"># Install from source</span>
            {"\n"}
            <span className="text-purple-600 dark:text-purple-400">git</span> clone https://github.com/SwarmRL/SwarmRL
            {"\n"}
            <span className="text-purple-600 dark:text-purple-400">cd</span> SwarmRL
            {"\n"}
            <span className="text-blue-600 dark:text-blue-400">python</span> -m pip install .
          </CodeBlock>

          <CodeBlock title="train.py">
            <span className="text-blue-600 dark:text-blue-400">from</span> swarmrl.engine.espresso <span className="text-blue-600 dark:text-blue-400">import</span> EspressoMD{"\n"}
            <span className="text-blue-600 dark:text-blue-400">from</span> swarmrl.agents.actor_critic <span className="text-blue-600 dark:text-blue-400">import</span> ActorCriticAgent{"\n"}
            <span className="text-blue-600 dark:text-blue-400">from</span> swarmrl.trainers.episodic_trainer <span className="text-blue-600 dark:text-blue-400">import</span> EpisodicTrainer{"\n"}
            <span className="text-blue-600 dark:text-blue-400">from</span> swarmrl.tasks.searching.gradient_sensing <span className="text-blue-600 dark:text-blue-400">import</span> GradientSensing{"\n"}
            <span className="text-blue-600 dark:text-blue-400">from</span> swarmrl.observables.particle_sensing <span className="text-blue-600 dark:text-blue-400">import</span> ParticleSensing{"\n"}
            {"\n"}
            <span className="text-slate-500 dark:text-slate-400"># 1. Setup Physics Engine</span>{"\n"}
            engine = <span className="text-yellow-600 dark:text-yellow-300">EspressoMD</span>(...){"\n"}
            {"\n"}
            <span className="text-slate-500 dark:text-slate-400"># 2. Define Task & Observation</span>{"\n"}
            task = <span className="text-yellow-600 dark:text-yellow-300">GradientSensing</span>(...){"\n"}
            obs = <span className="text-yellow-600 dark:text-yellow-300">ParticleSensing</span>(...){"\n"}
            {"\n"}
            <span className="text-slate-500 dark:text-slate-400"># 3. Initialize Agent</span>{"\n"}
            agent = <span className="text-yellow-600 dark:text-yellow-300">ActorCriticAgent</span>({"\n"}
            {"    "}particle_type=<span className="text-green-600 dark:text-green-400">0</span>,{"\n"}
            {"    "}network=...,{"\n"}
            {"    "}task=task,{"\n"}
            {"    "}observable=obs,{"\n"}
            {"    "}actions={"{...}"}{"\n"}
            ){"\n"}
            {"\n"}
            <span className="text-slate-500 dark:text-slate-400"># 4. Start Training</span>{"\n"}
            trainer = <span className="text-yellow-600 dark:text-yellow-300">EpisodicTrainer</span>({"\n"}
            {"    "}engine=engine,{"\n"}
            {"    "}agents=[agent],{"\n"}
            {"    "}max_steps=...,{"\n"}
            {"    "}episodes=...{"\n"}
            ){"\n"}
            trainer.<span className="text-blue-500 dark:text-blue-300">run</span>()
          </CodeBlock>
          
          <div className="flex gap-3 pt-2">
            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/getting_started/">Getting Started</Button>
            <Button href="https://swarmrl.github.io/SwarmRL.ai/pages/api/swarmrl.agents.actor_critic/" variant="outline">
              Actor-Critic Agent
            </Button>
          </div>
        </div>
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
