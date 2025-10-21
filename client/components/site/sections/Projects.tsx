const projects = [
  { title: "Enterprise QA Automation", desc: "Built automated regression suites for ERP finance modules using Selenium and TestNG." },
  { title: "API Validation Framework", desc: "Designed API test harness with Postman and REST Assured for critical backend services." },
  { title: "CI/CD Integration", desc: "Integrated tests into Jenkins and GitLab CI pipelines for continuous validation." },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="container py-20">
        <h2 className="font-display text-3xl md:text-4xl">Recent Projects</h2>
        <p className="mt-3 text-foreground/70 max-w-2xl">Selected highlights showcasing testing frameworks, automation, and CI/CD integrations across domains like finance, healthcare and Web3.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border bg-card p-6 card-shadow hover:scale-[1.01] transition-transform">
              <h3 className="text-lg font-semibold">{p.title}</h3>
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
