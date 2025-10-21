import { FileText, Zap, Cloud, Workflow, Boxes, Database, Check, Wrench } from "lucide-react";

const groups = [
  {
    title: "Automation & Testing Tools",
    icon: Wrench,
    items: [
      "Selenium WebDriver",
      "Cypress",
      "Playwright",
      "Postman",
      "REST Assured",
      "JMeter",
      "LoadRunner",
      "OWASP ZAP",
    ],
  },
  {
    title: "Testing Frameworks",
    icon: FileText,
    items: ["TestNG", "JUnit", "Cucumber (BDD)"],
  },
  {
    title: "CI/CD & DevOps",
    icon: Workflow,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
  },
  {
    title: "Database & API",
    icon: Database,
    items: ["SQL / Database Testing", "API Testing"],
  },
  {
    title: "AI & Emerging Tech",
    icon: Cloud,
    items: ["AI/ML Testing", "Generative AI Testing"],
  },
  {
    title: "Security & Performance",
    icon: Zap,
    items: ["Security Testing", "Performance Testing / Benchmarking", "Compliance Validation"],
  },
  {
    title: "Manual & Exploratory",
    icon: Check,
    items: ["Manual Testing", "Exploratory Testing"],
  },
  {
    title: "Methodologies",
    icon: Boxes,
    items: ["Shift-left Testing", "BDD with Cucumber", "Exploratory Testing", "Performance Benchmarking", "Security & Compliance Validation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Skills & Tools</h2>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          Core technical skills, testing frameworks, CI/CD tooling, databases,
          and methodologies used across projects.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-[var(--radius)] border bg-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm text-foreground/80 bg-card/80"
                  >
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
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
