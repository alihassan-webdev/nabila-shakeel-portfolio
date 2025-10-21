const skills = [
  "Selenium WebDriver (Java / Python / C#)",
  "Cypress Automation",
  "Playwright",
  "Postman / REST Assured / API Testing",
  "Jenkins / GitHub Actions / GitLab CI",
  "Docker / Kubernetes",
  "JMeter / LoadRunner (Performance Testing)",
  "TestNG / JUnit / Cucumber (BDD)",
  "SQL / Database Testing",
  "Version Control (Git, Bitbucket)",
  "OWASP ZAP / Security Testing",
  "AI/ML & Generative AI Testing",
  "Manual & Exploratory Testing",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-3xl md:text-4xl">
          Experience & Skills
        </h2>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          What I bring to the table: test automation, API validation, CI/CD
          integration, performance testing, and compliance-focused QA for
          regulated domains.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-2xl border px-4 py-3 text-sm text-foreground/80 bg-card/80 hover:bg-card transition"
            >
              {s}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 card-shadow">
            <h4 className="font-semibold">Tools & Frameworks</h4>
            <p className="mt-2 text-sm text-foreground/80">
              Selenium, Cypress, Playwright, Postman, REST Assured, JMeter,
              Docker, Kubernetes, Jenkins, GitLab CI, GitHub Actions
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 card-shadow">
            <h4 className="font-semibold">Methodologies</h4>
            <p className="mt-2 text-sm text-foreground/80">
              Shift-left testing, BDD with Cucumber, exploratory testing,
              performance benchmarking, security testing and compliance
              validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
