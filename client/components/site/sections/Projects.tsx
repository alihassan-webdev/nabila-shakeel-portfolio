import {
  Key,
  Camera,
  Cpu,
  BarChart,
  ShieldCheck,
  Smartphone,
  Layers,
  Zap,
} from "lucide-react";

export default function Projects() {
  const projects = [
    { title: "Cloud-Based Identity & Access Management", icon: Key },
    { title: "Enterprise Recognition & Security", icon: Camera },
    { title: "Generative AI & LLM Testing", icon: Cpu },
    { title: "Business Intelligence & Reporting", icon: BarChart },
    { title: "Cybersecurity & Access Control", icon: ShieldCheck },
    { title: "Mobile Applications (Android & iOS)", icon: Smartphone },
    { title: "ERP & Back-Office Applications", icon: Layers },
    { title: "RPA & Automation Tools", icon: Zap },
  ];

  const domains = [
    "Banking & Financial Systems",
    "Healthcare & Hospital Systems",
    "Educational & Campus Management",
    "Hospitality & Club Management",
    "Human Resource & Payroll Systems",
    "Cybersecurity & Compliance",
    "SaaS / Cloud Applications",
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Key Projects</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow hover:translate-y-[-4px] transition-transform duration-300 min-h-[120px]"
              >
                <div className="flex items-center gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-display text-foreground">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Domains
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {domains.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-foreground/5 text-sm text-foreground/80"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
