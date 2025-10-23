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
      description:
        "Contributed to a modular PIAM solution for Fortune 500 companies. Ensured seamless identity lifecycle management and enterprise-grade security compliance.",
    },
    {
      title: "Enterprise Recognition & Security Solutions",
      icon: Camera,
      description:
        "Tested and validated real-time recognition platforms with advanced security features. Focused on system stability, performance, and user data protection.",
    },
    {
      title: "Hospital & Healthcare Applications",
      icon: ShieldCheck,
      description:
        "Conducted QA and IT system validation ensuring HIPAA/EMR compliance. Verified patient data integrity and secure system performance.",
    },
    {
      title: "Educational & Campus Management Systems",
      icon: Layers,
      description:
        "Executed functional, system, and regression testing for school/university ERP solutions. Validated modules for academics, attendance, finance, and administration.",
    },
    {
      title: "Hospitality & Club Management Systems",
      icon: Briefcase,
      description:
        "Performed QA and IT validation for membership, billing, and event management platforms.",
    },
    {
      title: "Generative AI & LLM Testing",
      icon: Cpu,
      description:
        "Designed test strategies for LLM-based workflows. Validated conversational AI outputs and implemented bias/safety checks for AI-driven platforms.",
    },
    {
      title: "Business Intelligence & Reporting Tools",
      icon: BarChart,
      description:
        "Validated BI dashboards, analytics tools, and data pipelines for reporting accuracy and usability.",
    },
    {
      title: "Cybersecurity & Access Control",
      icon: Lock,
      description:
        "Conducted penetration and compliance testing for privileged access management. Ensured secure authentication, authorization, and activity monitoring.",
    },
    {
      title: "Human Resource & Payroll Systems",
      icon: Briefcase,
      description:
        "Ensured functionality, integration, and compliance of HR and payroll systems. Automated critical QA workflows for workforce management.",
    },
    {
      title: "Mobile Applications (Android & iOS)",
      icon: Smartphone,
      description:
        "Led QA cycles for consumer-facing mobile apps. Focused on API validation, performance benchmarking, and device compatibility.",
    },
    {
      title: "ERP & Back-Office Applications",
      icon: Database,
      description:
        "Conducted regression automation and troubleshooting for ERP modules. Validated data consistency and transaction accuracy.",
    },
    {
      title: "Banking & Financial Systems",
      icon: Lock,
      description:
        "Validated ERP Finance and transaction modules. Tested workflows for teller systems, digital banking, consumer lending, and account opening.",
    },
    {
      title: "Cybersecurity Testing & Vulnerability Assessment",
      icon: ShieldCheck,
      description:
        "Conducted penetration testing, vulnerability assessment, and load & performance testing using OWASP ZAP, JMeter, and Fiddler. Ensured compliance, threat mitigation, and enterprise-grade security validation.",
    },
    {
      title: "RPA Testing & Automation Workflows",
      icon: Zap,
      description:
        "Focused on automation workflows and regression cycles for RPA tools like Mesmer HQ. Validated robotic process execution, task accuracy, and performance.",
    },
    {
      title: "RevBits Privileged Access Management (PAM)",
      icon: Key,
      description:
        "Contributed to access control validation, activity monitoring, and compliance testing within RevBits PAM platform.",
    },
    {
      title: "QA Trail Tool (Jira Clone)",
      icon: Briefcase,
      description:
        "Supported internal QA management tool development and testing. Focused on workflow optimization, issue tracking, and usability validation.",
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
    "Cybersecurity Testing (OWASP ZAP, JMeter, Fiddler)",
    "Human Resource & Payroll Systems",
    "Mobile Applications (Android & iOS)",
    "ERP & Back-Office Applications",
    "Banking & Financial Systems",
    "Vulnerability Assessment & Penetration Testing",
    "Load & Performance Testing",
    "RPA Testing (Mesmer HQ)",
    "SaaS ERP & HCM Platforms",
    "US/Canadian Healthcare Systems (HIPAA/EMR/HL7)",
    "RevBits Privileged Access Management (PAM)",
    "QA Trail Tool (Jira Clone)",
  ];

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-12">
          Key Projects & Domains
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-8 card-shadow">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Domains
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {domains.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-foreground/5 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
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
