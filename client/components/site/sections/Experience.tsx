export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/60">
      <div className="container py-20">
        <h2 className="font-display text-3xl md:text-4xl">Experience</h2>
        <div className="mt-8 space-y-8">
          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Senior Software QA & System Engineer (Freelance Contract)</h3>
            <p className="text-sm text-foreground/70">Feb 2024 – Present</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80">
              <li>Developed and executed test strategies for AI-driven platforms and Web3 products, validating generative AI outputs for accuracy and safety.</li>
              <li>Integrated automated testing within CI/CD pipelines using Jenkins and Git to enable continuous validation.</li>
              <li>Collaborated with developers, product owners, and SDETs to plan and execute feature-level tests across web and API systems.</li>
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Software QA & IT Engineer – SoloInsight Pvt. Ltd.</h3>
            <p className="text-sm text-foreground/70">Dec 2019 – Jul 2024</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80">
              <li>Automated APIs using Cucumber and Python, reducing regression workload by 30%.</li>
              <li>Performed validation testing in compliance with healthcare standards (HIPAA).</li>
              <li>Configured CI/CD pipelines (Jenkins, GitLab CI) and performed non-deterministic testing of AI features.</li>
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Senior QA Engineer – 1 Machine Pvt. Ltd.</h3>
            <p className="text-sm text-foreground/70">Dec 2018 – Nov 2019</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80">
              <li>Specialized in US Healthcare IT, ensuring HIPAA and EMR compliance.</li>
              <li>Developed QA documentation including test plans and defect logs; validated ERP finance modules.</li>
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Software QA & System Engineer – Imperial Soft Pvt. Ltd.</h3>
            <p className="text-sm text-foreground/70">Oct 2016 – Oct 2018</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80">
              <li>Tested HMIS, ERP, and back-office systems; automated regression tests with Selenium.</li>
              <li>Validated UX/UI and reported results to stakeholders; collaborated in Agile sprints.</li>
            </ul>
          </article>

          <article className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">IT & QA Engineer – Ashtex Solutions Pvt. Ltd.</h3>
            <p className="text-sm text-foreground/70">Oct 2014 – Aug 2016</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80">
              <li>Developed and executed test plans, defect reports, and end-user documentation.</li>
              <li>Performed system, regression, and user acceptance testing for web and desktop apps.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
