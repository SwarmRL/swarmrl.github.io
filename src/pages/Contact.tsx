// src/pages/Contact.tsx
import { Section, Card, A, Container } from "../components/ui";

export default function Contact() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <Container>
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Contact
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                    Questions, bug reports, or collaboration ideas? We’d love to hear from you.
                </p>
            </div>
        </Container>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full flex flex-col hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-400 rounded-lg" />
                 </div>
                 <div>
                    <h3 className="text-xl font-semibold">Project Channels</h3>
                    <p className="text-sm text-muted">Development & Community</p>
                 </div>
            </div>
            
            <div className="space-y-4 flex-grow">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">GitHub Repository</span>
                        <A to="https://github.com/SwarmRL/SwarmRL" className="text-sm">View Code</A>
                    </div>
                    <p className="text-sm text-muted">Star, fork, or contribute to the project.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">Issues & Support</span>
                        <A to="https://github.com/SwarmRL/SwarmRL/issues" className="text-sm">Open Issue</A>
                    </div>
                    <p className="text-sm text-muted">Report bugs or request new features.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">Documentation</span>
                        <A to="https://swarmrl.github.io/SwarmRL.ai/" className="text-sm">Read Docs</A>
                    </div>
                    <p className="text-sm text-muted">Comprehensive guides and API references.</p>
                </div>
            </div>
          </Card>

          <Card className="h-full flex flex-col hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-purple-400 rounded-full" />
                 </div>
                 <div>
                    <h3 className="text-xl font-semibold">Research & Media</h3>
                    <p className="text-sm text-muted">Publications & News</p>
                 </div>
            </div>
            
             <div className="space-y-4 flex-grow">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">Academic Paper</span>
                        <A to="https://arxiv.org/abs/2404.16388" className="text-sm">Read on arXiv</A>
                    </div>
                    <p className="text-sm text-muted">The foundational paper describing SwarmRL.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">University News</span>
                        <A to="https://www.icp.uni-stuttgart.de/news/news/SwarmRL-building-the-future-of-smart-active-systems/" className="text-sm">Read Article</A>
                    </div>
                    <p className="text-sm text-muted">University of Stuttgart press coverage.</p>
                </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
