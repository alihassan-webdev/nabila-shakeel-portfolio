import { ArrowUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container py-12 md:py-20 px-4 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-base md:text-lg uppercase tracking-widest text-primary/70">HELLO, I’M</p>

            <div className="mt-4">
              <h1 style={{ fontFamily: "Caveat" }} className="text-[2.4rem] md:text-[3.6rem] leading-tight font-extrabold">Nabila Shakeel</h1>
              <div className="mt-3">
                <span className="inline-flex items-center rounded-2xl bg-primary/10 text-primary px-3 py-1 text-xs font-medium border border-primary/20">Senior SQA Engineer</span>
              </div>
            </div>


            <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed text-lg">
              Senior QA Engineer with 7+ years of experience in manual and automation testing across web, mobile, and API platforms. Proven expertise in designing and executing functional, regression, and integration tests for transaction-based and data-intensive systems.
            </p>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                Download Resume
                <ArrowUp className="w-4 h-4 rotate-45 text-black" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="mx-auto max-w-md rounded-2xl border bg-card p-6 card-shadow">
              <h3 className="font-semibold">Snapshot</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>• Manual & Automation Testing (Selenium, Cypress, Playwright)</li>
                <li>• API Testing: Postman, REST Assured, GraphQL</li>
                <li>• CI/CD: Jenkins, GitHub Actions, GitLab CI</li>
                <li>• Containerization: Docker, Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
