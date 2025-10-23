import {
  Key,
  Camera,
  Cpu,
  BarChart,
  ShieldCheck,
  Smartphone,
  Layers,
  Zap,
  Database,
  Lock,
  Briefcase,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Cloud-Based Identity & Access Management",
      icon: Key,
      description: "Contributed to a modular PIAM solution for Fortune 500 companies. Ensured seamless identity lifecycle management and enterprise-grade security compliance.",
    },
    {
      title: "Enterprise Recognition & Security Solutions",
      icon: Camera,
      description: "Tested and validated real-time recognition platforms with advanced security features. Focused on system stability, performance, and user data protection.",
    },
    {
      title: "Hospital & Healthcare Applications",
      icon: ShieldCheck,
      description: "Conducted QA and IT system validation ensuring HIPAA/EMR compliance. Verified patient data integrity and secure system performance.",
    },
    {
      title: "Educational & Campus Management Systems",
      icon: Layers,
      description: "Executed functional, system, and regression testing for school/university ERP solutions. Validated modules for academics, attendance, finance, and administration.",
    },
    {
      title: "Hospitality & Club Management Systems",
      icon: Briefcase,
      description: "Performed QA and IT validation for membership, billing, and event management platforms.",
    },
    {
      title: "Generative AI & LLM Testing",
      icon: Cpu,
      description: "Designed test strategies for LLM-based workflows. Validated conversational AI outputs and implemented bias/safety checks for AI-driven platforms.",
    },
    {
      title: "Business Intelligence & Reporting Tools",
      icon: BarChart,
      description: "Validated BI dashboards, analytics tools, and data pipelines for reporting accuracy and usability.",
    },
    {
      title: "Cybersecurity & Access Control",
      icon: Lock,
      description: "Conducted penetration and compliance testing for privileged access management. Ensured secure authentication, authorization, and activity monitoring.",
    },
    {
      title: "Human Resource & Payroll Systems",
      icon: Briefcase,
      description: "Ensured functionality, integration, and compliance of HR and payroll systems. Automated critical QA workflows for workforce management.",
    },
    {
      title: "Mobile Applications (Android & iOS)",
      icon: Smartphone,
      description: "Led QA cycles for consumer-facing mobile apps. Focused on API validation, performance benchmarking, and device compatibility.",
    },
    {
      title: "ERP & Back-Office Applications",
      icon: Database,
      description: "Conducted regression automation and troubleshooting for ERP modules. Validated data consistency and transaction accuracy.",
    },
    {
      title: "Banking & Financial Systems",
      icon: Lock,
      description: "Validated ERP Finance and transaction modules. Tested workflows for teller systems, digital banking, consumer lending, and account opening.",
    },
  ];

  const domains = [
    "Cloud-Based Identity & Access Management",
    "Enterprise Recognition & Security Solutions",
    "Hospital & Healthcare Applications",
    "Educational & Campus Management Systems",
    "Hospitality & Club Management Systems",
    "Generative AI & LLM Testing",
    "Business Intelligence & Reporting Tools",
    "Cybersecurity Testing",
    "Human Resource & Payroll Systems",
    "Mobile Applications (Android & iOS)",
    "ERP & Back-Office Applications",
    "Banking & Financial Systems",
    "Cybersecurity (RevBits Privileged Access Management)",
    "US/Canadian Healthcare (HIPAA)",
    "RPA Testing (Mesmer HQ)",
    "QA Trail Tool (Jira Clone)",
    "SaaS ERP & HCM",
  ];

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Key Projects</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow min-h-[120px]"
              >
                <div className="flex items-center gap-4 h-full">
                  <div className="p-3 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
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
