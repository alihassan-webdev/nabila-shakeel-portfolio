import { FileText, Zap, Cloud, Workflow, Boxes, Database, Check, Wrench } from "lucide-react";

const groups = [
  {
    title: "🧰 Automation & Testing Tools",
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
    title: "🧪 Testing Frameworks",
    icon: FileText,
    items: ["TestNG", "JUnit", "Cucumber (BDD)"],
  },
  {
    title: "⚙️ CI/CD & DevOps",
    icon: Workflow,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
  },
  {
    title: "💾 Database & API",
    icon: Database,
    items: ["SQL / Database Testing", "API Testing"],
  },
  {
    title: "🧠 AI & Emerging Tech",
    icon: Cloud,
    items: ["AI/ML Testing", "Generative AI Testing"],
  },
  {
    title: "🔒 Security & Performance",
    icon: Zap,
    items: ["Security Testing", "Performance Testing / Benchmarking", "Compliance Validation"],
  },
  {
    title: "🧍‍♂️ Manual & Exploratory",
    icon: Check,
    items: ["Manual Testing", "Exploratory Testing"],
  },
  {
    title: "📚 Methodologies",
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
          What I bring to the table: test automation, API validation, CI/CD
          integration, performance testing, and compliance-focused QA for
          regulated domains.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border bg-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>

              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="inline-flex items-center gap-3 rounded-full border px-3 py-2 text-sm text-foreground/80 bg-card/80">
                    <span className="w-4 h-4 flex items-center justify-center text-primary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="inline-block">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
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
