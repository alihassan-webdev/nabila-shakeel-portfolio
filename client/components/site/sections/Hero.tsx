export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/60 via-background to-secondary" />
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Hello, I’m</p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              A Software Quality Assurance Engineer
            </h1>
            <p className="mt-5 max-w-xl text-foreground/70">
              I craft reliable software experiences through thoughtful test strategies,
              automation, and collaborative quality practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-sm rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Quick Snapshot</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li>• Functional, Regression & Exploratory Testing</li>
                <li>• Test Automation: Cypress, Playwright, Selenium</li>
                <li>• API Testing: Postman, REST, GraphQL</li>
                <li>• Agile collaboration with dev and product teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
