export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container py-20">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">About</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-lg">
              Senior QA Engineer with over 7 years of experience in manual and automation testing across web, mobile, and API platforms. Proven expertise in designing and executing functional, regression, and integration tests for transaction-based and data-intensive systems. Skilled in API validation (REST, GraphQL, WebSockets), CI/CD pipeline integration (Jenkins, GitLab), and shift-left testing practices.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border bg-card p-8 card-shadow">
              <h3 className="text-xl font-semibold">Core Skills & Expertise</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ul className="list-disc pl-5 text-foreground/80 space-y-2">
                  <li>Test Design & Planning: requirements analysis, test strategy, UAT coordination</li>
                  <li>Test Automation: Selenium (Java/Python/C#), Cypress, Playwright, TestNG, JUnit, Cucumber</li>
                  <li>API & Performance Testing: Postman, REST Assured, JMeter, LoadRunner</li>
                </ul>
                <ul className="list-disc pl-5 text-foreground/80 space-y-2">
                  <li>CI/CD & DevOps: Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes</li>
                  <li>Databases & Validation: SQL, JSON/XML validation</li>
                  <li>Tools & Management: Jira, Qase, HP ALM, Azure DevOps</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-card p-6 card-shadow">
              <h4 className="font-medium">Compliance & Domains</h4>
              <p className="mt-2 text-foreground/80 text-sm">
                Familiar with ISO 9001 / ISO 27001 standards, GDPR-compliant testing practices and experienced in Financial, Healthcare, and EdTech QA environments. Skilled at aligning QA processes with regulatory and privacy requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
