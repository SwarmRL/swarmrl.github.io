// src/pages/Contact.tsx
import { Section, Card, A, Button, Muted } from "../components/ui";

export default function Contact() {
  return (
    <>
      <Section title="Contact" desc="Questions, bug reports, or collaboration ideas? We’d love to hear from you." />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Project channels</h3>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-2">
              <li>
                <A to="https://github.com/SwarmRL/SwarmRL">GitHub repository</A>
              </li>
              <li>
                <A to="https://github.com/SwarmRL/SwarmRL/issues">Open an issue</A> (support &amp; bug reports)
              </li>
              <li>
                <A to="https://swarmrl.github.io/SwarmRL.ai/">Documentation site</A>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Media & research</h3>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-2">
              <li>
                <A to="https://arxiv.org/abs/2404.16388">Paper on arXiv</A>
              </li>
              <li>
                <A to="https://www.icp.uni-stuttgart.de/news/news/SwarmRL-building-the-future-of-smart-active-systems/">
                  University of Stuttgart news
                </A>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
