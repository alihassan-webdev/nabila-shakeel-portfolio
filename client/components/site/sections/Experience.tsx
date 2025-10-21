export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-3xl md:text-4xl">Experience</h2>

        <div className="mt-8 space-y-8">
          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-3 text-sm text-foreground/70">Feb 2024 – Present</div>
            <div className="md:col-span-9">
              <div className="rounded-2xl border bg-card p-6 card-shadow">
                <h3 className="text-lg font-semibold">Senior Software QA & System Engineer (Freelance Contract)</h3>
                <p className="mt-2 text-foreground/80">Developed and executed test strategies for AI-driven platforms and Web3 products. Integrated automated testing within CI/CD pipelines using Jenkins and Git.</p>
                <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-2">
                  <li>Shift-left testing and early integration of test cases into pipelines.</li>
                  <li>Designed regression and performance test suites for LLM-based systems.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-3 text-sm text-foreground/70">Dec 2019 – Jul 2024</div>
            <div className="md:col-span-9">
              <div className="rounded-2xl border bg-card p-6 card-shadow">
                <h3 className="text-lg font-semibold">Software QA & IT Engineer – SoloInsight Pvt. Ltd.</h3>
                <p className="mt-2 text-foreground/80">Automated APIs using Cucumber and Python; reduced regression workload by 30% and configured CI/CD pipelines for continuous testing.</p>
                <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-2">
                  <li>Validation testing in compliance with healthcare standards (HIPAA).</li>
                  <li>Maintained automation frameworks for web and API testing.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-3 text-sm text-foreground/70">Dec 2018 – Nov 2019</div>
            <div className="md:col-span-9">
              <div className="rounded-2xl border bg-card p-6 card-shadow">
                <h3 className="text-lg font-semibold">Senior QA Engineer – 1 Machine Pvt. Ltd.</h3>
                <p className="mt-2 text-foreground/80">Specialized in US Healthcare IT, ensuring HIPAA and EMR compliance; developed QA documentation and validated ERP finance modules.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-3 text-sm text-foreground/70">Oct 2016 – Oct 2018</div>
            <div className="md:col-span-9">
              <div className="rounded-2xl border bg-card p-6 card-shadow">
                <h3 className="text-lg font-semibold">Software QA & System Engineer – Imperial Soft Pvt. Ltd.</h3>
                <p className="mt-2 text-foreground/80">Tested HMIS, ERP, and back-office systems; automated regression tests with Selenium and validated UX/UI for stakeholders.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-3 text-sm text-foreground/70">Oct 2014 – Aug 2016</div>
            <div className="md:col-span-9">
              <div className="rounded-2xl border bg-card p-6 card-shadow">
                <h3 className="text-lg font-semibold">IT & QA Engineer – Ashtex Solutions Pvt. Ltd.</h3>
                <p className="mt-2 text-foreground/80">Developed and executed test plans, defect reports, and end-user documentation; performed system and UAT testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
