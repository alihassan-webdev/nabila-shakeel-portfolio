import { FileText, Zap, Cloud, Workflow, Database, Wrench } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-5 mt-12 md:mt-0">
            <h2 className="font-display text-4xl md:text-5xl">About</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-lg">
              Senior QA Engineer with over 7 years of experience in manual and
              automation testing across web, mobile, and API platforms. Proven
              expertise in designing and executing functional, regression, and
              integration tests for transaction-based and data-intensive
              systems. Skilled in API validation (REST, GraphQL, WebSockets),
              CI/CD pipeline integration (Jenkins, GitLab), and shift-left
              testing practices.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 md:p-8 card-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Core Competencies
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold font-display mb-6 md:mb-8">
                Skills & Expertise
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        Test Design & Planning
                      </h4>
                      <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                        Requirements analysis, test strategy, UAT coordination
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Test Automation
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Selenium (Java/Python/C#), Cypress, Playwright, TestNG,
                        JUnit, Cucumber
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        API & Performance Testing
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Postman, REST Assured, JMeter, LoadRunner
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        CI/CD & DevOps
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Databases & Validation
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        SQL, JSON/XML validation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Tools & Management
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Jira, Qase, HP ALM, Azure DevOps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
