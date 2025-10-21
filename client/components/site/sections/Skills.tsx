import { FileText, Zap, Cloud, Workflow, Boxes, Database, Check, Wrench } from "lucide-react";

const skills = [
  { label: "Selenium WebDriver (Java / Python / C#)", icon: FileText },
  { label: "Cypress Automation", icon: Zap },
  { label: "Playwright", icon: Boxes },
  { label: "Postman / REST Assured / API Testing", icon: Cloud },
  { label: "Jenkins / GitHub Actions / GitLab CI", icon: Workflow },
  { label: "Docker / Kubernetes", icon: Boxes },
  { label: "JMeter / LoadRunner (Performance Testing)", icon: Cloud },
  { label: "TestNG / JUnit / Cucumber (BDD)", icon: FileText },
  { label: "SQL / Database Testing", icon: Database },
  { label: "Version Control (Git, Bitbucket)", icon: FileText },
  { label: "OWASP ZAP / Security Testing", icon: Zap },
  { label: "AI/ML & Generative AI Testing", icon: Cloud },
  { label: "Manual & Exploratory Testing", icon: Check },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">
          Skills & Tools
        </h2>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          What I bring to the table: test automation, API validation, CI/CD
          integration, performance testing, and compliance-focused QA for
          regulated domains.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border px-4 py-3 text-sm text-foreground/80 bg-card/80 hover:bg-card transition flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="flex-1">{s.label}</span>
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
