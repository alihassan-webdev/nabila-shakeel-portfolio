import { CheckCircle2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Testing & QA Practices",
      items: [
        "Manual, Functional, Regression, Integration, System, UAT, and Security Testing",
        "Automation with Selenium (Java/Python/C#), Cypress, Playwright, and Cucumber (BDD)",
        "API Testing using Postman, Swagger, Rest Assured, and JMeter",
        "Performance Testing with JMeter and LoadRunner",
        "Test Case Design, Test Strategy, and UAT Coordination",
        "Shift-left Testing, Continuous Integration, and Continuous Testing",
        "QA in Cloud (AWS, Azure) and Web3 Environments",
        "GDPR & ISO 9001/27001 Compliant QA Practices",
      ],
    },
    {
      title: "Frameworks & Methodologies",
      items: [
        "Agile / Scrum / Kanban",
        "SDLC / STLC",
        "CI/CD Pipelines (Jenkins, GitLab CI, GitHub Actions)",
        "ITIL-aligned QA Process",
        "Test Automation Frameworks (TestNG, JUnit, Cucumber)",
      ],
    },
    {
      title: "Domain Expertise",
      items: [
        "Financial Systems & Digital Banking",
        "Healthcare / HIPAA & EMR Compliance",
        "SaaS, ERP, and HCM Platforms",
        "AI / ML & Generative AI Testing",
        "Cloud-Based Identity & Access Management (PIAM)",
        "Education, Hospitality, and Enterprise SaaS Systems",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-12">Core Skills</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-8 card-shadow"
            >
              <h3 className="text-xl font-semibold font-display text-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
