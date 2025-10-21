export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/60">
      <div className="container py-20">
        <h2 className="font-display text-3xl md:text-4xl">Education & Experience</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Experience</h3>
            <ul className="mt-4 space-y-4 text-sm text-foreground/80">
              <li>
                <p className="font-medium">Senior QA Engineer • 2022 — Present</p>
                <p>Lead test planning, automation, and release validation for web platforms.</p>
              </li>
              <li>
                <p className="font-medium">QA Engineer • 2019 — 2022</p>
                <p>Performed functional and regression testing; improved bug triage workflows.</p>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Education</h3>
            <ul className="mt-4 space-y-4 text-sm text-foreground/80">
              <li>
                <p className="font-medium">B.Sc. in Computer Science</p>
                <p>Focused on software engineering, testing methodologies, and data structures.</p>
              </li>
              <li>
                <p className="font-medium">Certifications</p>
                <p>ISTQB Foundation, Agile Testing, API Testing with Postman.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
