import {
  FileText,
  Zap,
  Cloud,
  Workflow,
  Boxes,
  Database,
  Check,
  Wrench,
} from "lucide-react";

const groups = [
  {
    title: "Software Testing",
    icon: FileText,
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "System Testing",
      "UAT",
    ],
  },
  {
    title: "Automation",
    icon: Wrench,
    items: [
      "Selenium (basic)",
      "Postman Collections",
      "Basic CI/CD QA Flows",
      "Cypress / Playwright (exposure)",
    ],
  },
  {
    title: "Performance Testing",
    icon: Zap,
    items: ["Load & Stress Testing (JMeter)", "Benchmarking & Analysis"],
  },
  {
    title: "API Testing",
    icon: Cloud,
    items: ["REST API Validation", "SOAP API Validation", "Postman, Swagger"],
  },
  {
    title: "Security Testing",
    icon: Boxes,
    items: ["OWASP ZAP", "Vulnerability Assessment", "Compliance Validation"],
  },
  {
    title: "Test Management",
    icon: Workflow,
    items: [
      "Test Planning",
      "Test Case Writing",
      "Execution & Defect Tracking",
    ],
  },
  {
    title: "SDLC / STLC & Agile",
    icon: Check,
    items: [
      "SDLC / STLC Understanding",
      "Agile / Scrum Experience",
      "Sprint-based QA",
    ],
  },
  {
    title: "Bug Reporting & Tools",
    icon: Database,
    items: ["JIRA", "TestRail", "Excel-based Reporting", "ClickUp, Trello"],
  },
  {
    title: "Cross-Platform QA",
    icon: Cloud,
    items: ["Mobile (Android/iOS)", "Web", "Cloud-based Apps"],
  },
  {
    title: "Tools & Technologies",
    icon: FileText,
    items: [
      "Postman, Swagger, JMeter, OWASP ZAP",
      "Git, GitHub, Bitbucket",
      "Jenkins, Azure DevOps, Docker",
      "MySQL Workbench, MS SQL Server, MongoDB",
      "Fiddler, Lighthouse, Browser DevTools",
      "MS Excel, Confluence, Notion",
    ],
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
            <div
              key={g.title}
              className="rounded-[var(--radius)] border bg-card p-6 card-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {g.title}
                </h3>
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
