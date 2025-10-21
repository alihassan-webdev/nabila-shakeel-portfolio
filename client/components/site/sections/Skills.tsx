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
  "CI/CD & Test Automation Pipelines",
  "AI/ML & Generative AI Testing",
  "Manual & Exploratory Testing",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20">
        <h2 className="font-display text-3xl md:text-4xl">Skills & Tools</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-xl border bg-card/80 px-4 py-3 text-sm text-foreground/80 hover:bg-card transition"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
