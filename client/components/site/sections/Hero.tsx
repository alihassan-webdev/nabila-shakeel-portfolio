import { ArrowUp, Zap, Cloud, Boxes, Workflow } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container py-12 md:py-20 px-4 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-lg md:text-2xl uppercase tracking-widest text-primary/70 font-semibold leading-none">
              HELLO, I'M
            </p>

            <div className="mt-0 -mb-1">
              <h1
                style={{ fontFamily: "Caveat" }}
                className="text-[3.5rem] md:text-[5rem] lg:text-[90px] leading-tight font-extrabold"
              >
                Nabila Shakeel
              </h1>
            </div>

            <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed text-lg">
              Senior QA Engineer with 7+ years of experience in manual and
              automation testing across web, mobile, and API platforms. Proven
              expertise in designing and executing functional, regression, and
              integration tests for transaction-based and data-intensive
              systems.
            </p>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                Download Resume
                <ArrowUp className="w-4 h-4 rotate-45 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="mx-auto max-w-md rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-8 card-shadow hover:translate-y-[-4px] transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Quick Overview</span>
              </div>
              <h3 className="font-display font-semibold text-2xl mb-7">Snapshot</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground leading-relaxed">Manual & Automation Testing</p>
                    <p className="text-xs text-foreground/60 mt-1">Selenium, Cypress, Playwright</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Workflow className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground leading-relaxed">API Testing</p>
                    <p className="text-xs text-foreground/60 mt-1">Postman, REST Assured, GraphQL</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground leading-relaxed">CI/CD Pipeline</p>
                    <p className="text-xs text-foreground/60 mt-1">Jenkins, GitHub Actions, GitLab CI</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Boxes className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground leading-relaxed">Containerization</p>
                    <p className="text-xs text-foreground/60 mt-1">Docker, Kubernetes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
