export default function Skills() {
  const skills = {
    "Testing & QA": [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "System Testing",
      "UAT",
      "Security Testing",
      "Selenium",
      "Cypress",
      "Playwright",
      "Cucumber (BDD)",
      "API Testing",
      "Postman",
      "Rest Assured",
      "JMeter",
      "Performance Testing",
      "LoadRunner",
      "Shift-left Testing",
      "CI/CD Pipeline Integration",
      "Cloud QA (AWS, Azure)",
      "Web3 Testing",
      "GDPR Compliance",
      "ISO 27001",
    ],
    "Frameworks & Tools": [
      "TestNG",
      "JUnit",
      "Agile / Scrum",
      "Kanban",
      "SDLC / STLC",
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "ITIL Process",
      "Jira",
      "Qase",
      "HP ALM",
      "Azure DevOps",
    ],
    "Domain Expertise": [
      "Financial Systems",
      "Digital Banking",
      "Healthcare (HIPAA/EMR)",
      "SaaS Platforms",
      "ERP Systems",
      "HCM Platforms",
      "AI/ML Testing",
      "Generative AI",
      "PIAM",
      "Education Systems",
      "Hospitality Systems",
      "Enterprise Solutions",
    ],
  };

  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-12">Core Skills</h2>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/5 text-sm text-foreground/80 border border-foreground/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
