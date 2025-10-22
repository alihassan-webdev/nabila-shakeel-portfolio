import { Zap, ShieldCheck, Workflow, GitBranch, Database, FileText, DownloadCloud } from "lucide-react";

const categories: { title: string; icon: any }[] = [
  { title: "Automation & Testing Tools", icon: Zap },
  { title: "API & Security Tools", icon: ShieldCheck },
  { title: "CI/CD & DevOps Tools", icon: Workflow },
  { title: "Version Control Systems", icon: GitBranch },
  { title: "Database Management Tools", icon: Database },
  { title: "Bug Tracking & Project Management Tools", icon: FileText },
  { title: "Monitoring & Analysis Tools", icon: DownloadCloud },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Tools</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-[var(--radius)] border bg-card p-6 card-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
