export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">About</h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Senior QA Engineer with over 7 years of experience in manual and automation testing across web, mobile, and API platforms. Proven expertise in designing and executing functional, regression, and integration tests for transaction-based and data-intensive systems. Skilled in API validation (REST, GraphQL, WebSockets), CI/CD pipeline integration (Jenkins, GitLab), and shift-left testing practices. Strong background in financial and Web3 QA environments with hands-on experience in crypto wallet integrations, ensuring reliability and precision in fast-paced development cycles.
          </p>

          <h3 className="mt-6 text-xl font-semibold">Core Skills</h3>
          <ul className="mt-3 list-disc pl-5 text-foreground/80">
            <li>Test Design & Planning: requirements analysis, test strategy, UAT coordination</li>
            <li>Test Automation: Selenium (Java/Python/C#), Cypress, Playwright, TestNG, JUnit, Cucumber</li>
            <li>API & Performance Testing: Postman, REST Assured, JMeter, LoadRunner</li>
            <li>CI/CD & DevOps: Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes</li>
            <li>Databases & Validation: SQL, JSON/XML validation</li>
            <li>Tools & Management: Jira, Qase, HP ALM, Azure DevOps</li>
            <li>Compliance: ISO 9001, ISO 27001, GDPR-aware testing practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
