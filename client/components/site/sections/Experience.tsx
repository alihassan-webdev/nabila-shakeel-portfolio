import { FileText, Zap, Cloud, Boxes, Database } from "lucide-react";

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

  const icons = [FileText, Zap, Cloud, Boxes, Database];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Experience</h2>

        {/* Outer wrapper with centered timeline */}
        <div className="mt-12 relative">
          {/* Vertical timeline center line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block transform -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative md:grid md:grid-cols-12 md:items-start">
                  {/* Dot for this item (desktop) */}
                  <div className="absolute left-1/2 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background hidden md:block transform -translate-x-1/2" />

                  {/* Card column - placed left or right on md+ screens */}
                  <div className={` ${isLeft ? "md:col-span-5 md:col-start-1 md:mr-4" : "md:col-span-5 md:col-start-8 md:ml-4"}`}>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                      {exp.date}
                    </p>

                    <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {(() => {
                            const Icon = icons[index % icons.length];
                            return <Icon className="w-5 h-5 text-primary" />;
                          })()}
                        </div>
                        <h3 className="text-lg font-semibold font-display text-foreground">{exp.title}</h3>
                      </div>

                      <p className="mt-3 text-foreground/70 leading-relaxed">{exp.description}</p>

                      {exp.highlights && (
                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                              <span className="text-primary font-bold mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Small-screen link: visible only on small devices */}
                      <div className="mt-4 md:hidden">
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                          View details
                        </a>
                      </div>
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
