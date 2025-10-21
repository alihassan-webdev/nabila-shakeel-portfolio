export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/60 via-background to-secondary" />
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/80">HELLO, I’M</p>
            <h1 className="mt-3 font-display text-5xl leading-tight md:text-7xl">
              Nabila Shakeel
            </h1>
            <h2 className="mt-2 text-xl font-medium text-foreground/80">Senior QA Engineer</h2>
            <p className="mt-5 max-w-xl text-foreground/70">
              Senior QA Engineer with 7+ years of experience in manual and automation testing across web, mobile, and API platforms. Proven expertise in designing and executing functional, regression, and integration tests for transaction-based and data-intensive systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition"
              >
                View Experience
              </a>
              <a
                href="mailto:nabilashakeel62@gmail.com"
                className="inline-flex items-center rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-sm rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Snapshot</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>• Manual & Automation Testing (Selenium, Cypress, Playwright)</li>
                <li>• API Testing: Postman, REST Assured, GraphQL</li>
                <li>• CI/CD: Jenkins, GitHub Actions, GitLab CI</li>
                <li>• Containerization: Docker, Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
