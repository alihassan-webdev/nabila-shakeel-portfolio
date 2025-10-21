const projects = [
  { title: "Enterprise QA Automation", desc: "Built automated regression suites for ERP finance modules using Selenium and TestNG." },
  { title: "API Validation Framework", desc: "Designed API test harness with Postman and REST Assured for critical backend services." },
  { title: "CI/CD Integration", desc: "Integrated tests into Jenkins and GitLab CI pipelines for continuous validation." },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-secondary/30">
      <div className="container py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl md:text-4xl">Recent Projects</h2>
          <p className="text-foreground/70 max-w-lg">Selected highlights showcasing testing frameworks, automation, and CI/CD integrations across finance, healthcare and Web3.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-3xl border bg-card p-6 card-shadow hover:translate-y-[-4px] transition-transform">
              <div className="h-36 w-full rounded-xl bg-gradient-to-tr from-primary/10 to-accent/10 flex items-center justify-center text-primary/60 text-sm font-medium">Project preview</div>
              <h3 className="mt-4 text-lg font-semibold font-display">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Get in touch</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
