export default function Experience() {
  const experiences = [
    {
      date: "Feb 2024 – Present",
      title: "Senior Software QA & System Engineer (Freelance Contract)",
      description:
        "Developed and executed test strategies for AI-driven platforms and Web3 products. Integrated automated testing within CI/CD pipelines using Jenkins and Git.",
      highlights: [
        "Shift-left testing and early integration of test cases into pipelines.",
        "Designed regression and performance test suites for LLM-based systems.",
      ],
    },
    {
      date: "Dec 2019 – Jul 2024",
      title: "Software QA & IT Engineer – SoloInsight Pvt. Ltd.",
      description:
        "Automated APIs using Cucumber and Python; reduced regression workload by 30% and configured CI/CD pipelines for continuous testing.",
      highlights: [
        "Validation testing in compliance with healthcare standards (HIPAA).",
        "Maintained automation frameworks for web and API testing.",
        "Mentored junior QA engineers on test automation best practices and frameworks.",
        "Led test strategy for critical SaaS platform deployments ensuring zero-downtime releases.",
      ],
    },
    {
      date: "Dec 2018 – Nov 2019",
      title: "Senior QA Engineer – 1 Machine Pvt. Ltd.",
      description:
        "Specialized in US Healthcare IT, ensuring HIPAA and EMR compliance; developed QA documentation and validated ERP finance modules.",
      highlights: [
        "Conducted comprehensive EMR system testing with attention to patient data security and compliance.",
        "Developed test automation scripts for financial module validations reducing manual effort by 40%.",
        "Managed defect lifecycle and provided detailed test reports for senior management and stakeholders.",
      ],
    },
    {
      date: "Oct 2016 – Oct 2018",
      title: "Software QA & System Engineer – Imperial Soft Pvt. Ltd.",
      description:
        "Tested HMIS, ERP, and back-office systems; automated regression tests with Selenium and validated UX/UI for stakeholders.",
      highlights: [
        "Built robust Selenium-based regression test suites achieving 95% test automation coverage.",
        "Collaborated with UX/UI teams to validate user workflows and accessibility compliance standards.",
      ],
    },
    {
      date: "Oct 2014 – Aug 2016",
      title: "IT & QA Engineer – Ashtex Solutions Pvt. Ltd.",
      description:
        "Developed and executed test plans, defect reports, and end-user documentation; performed system and UAT testing.",
      highlights: [
        "Executed comprehensive test plans for multiple projects achieving 98% defect detection rate.",
        "Coordinated UAT testing with end-users and stakeholders ensuring smooth product releases.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Experience</h2>

        <div className="mt-16 relative">
          {/* Left vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Dot */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mt-2" />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    {exp.date}
                  </p>

                  <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow">
                    <h3 className="text-lg font-semibold font-display text-foreground">
                      {exp.title}
                    </h3>

                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.highlights && (
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-foreground/70"
                          >
                            <span className="text-primary font-bold mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
