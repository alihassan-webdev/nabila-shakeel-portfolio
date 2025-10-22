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
      ],
    },
    {
      date: "Dec 2018 – Nov 2019",
      title: "Senior QA Engineer – 1 Machine Pvt. Ltd.",
      description:
        "Specialized in US Healthcare IT, ensuring HIPAA and EMR compliance; developed QA documentation and validated ERP finance modules.",
    },
    {
      date: "Oct 2016 – Oct 2018",
      title: "Software QA & System Engineer – Imperial Soft Pvt. Ltd.",
      description:
        "Tested HMIS, ERP, and back-office systems; automated regression tests with Selenium and validated UX/UI for stakeholders.",
    },
    {
      date: "Oct 2014 – Aug 2016",
      title: "IT & QA Engineer – Ashtex Solutions Pvt. Ltd.",
      description:
        "Developed and executed test plans, defect reports, and end-user documentation; performed system and UAT testing.",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl text-center">
          Experience
        </h2>

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block transform -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-12 md:items-start"
                >
                  {/* Center dot */}
                  <div className="hidden md:flex md:col-span-2 md:col-start-6 items-center justify-center relative">
                    <div className="absolute w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />
                  </div>

                  {/* Card Section */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-span-5 md:col-start-1 md:mr-8"
                        : "md:col-span-5 md:col-start-8 md:ml-8"
                    }`}
                  >
                    {/* Date above card — perfectly aligned with dot */}
                    <p
                      className={`text-xs font-semibold text-primary uppercase tracking-widest mb-3 w-[160px] ${
                        isLeft
                          ? "ml-auto text-right md:translate-x-[40px]"
                          : "text-left md:-translate-x-[40px]"
                      }`}
                    >
                      {exp.date}
                    </p>

                    <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow hover:shadow-lg transition-all duration-300">
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
                              <span className="text-primary font-bold mt-0.5">
                                ✓
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
