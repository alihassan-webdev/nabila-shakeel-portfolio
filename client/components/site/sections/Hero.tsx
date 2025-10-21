export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff7ef] via-[#fffefa] to-[#f0f5ff]" />
      <div className="container py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-primary/70">HELLO, I’M</p>

            <div className="mt-4 flex items-baseline gap-6">
              <h1 className="font-display text-[2.4rem] leading-[0.95] md:text-[3.2rem] md:leading-[0.95] font-extrabold">I AM</h1>
              <h1 className="font-display text-[2rem] md:text-[2.8rem] leading-tight">Nabila Shakeel</h1>
            </div>

            <h2 className="mt-4 text-xl font-medium text-foreground/80">Senior QA Engineer</h2>

            <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed text-lg">
              Senior QA Engineer with 7+ years of experience in manual and automation testing across web, mobile, and API platforms. Proven expertise in designing and executing functional, regression, and integration tests for transaction-based and data-intensive systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                View Experience
              </a>
              <a
                href="mailto:nabilashakeel62@gmail.com"
                className="inline-flex items-center rounded-full border border-foreground/12 px-6 py-3 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
              >
                LinkedIn
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
