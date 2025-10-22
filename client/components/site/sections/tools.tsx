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

export default function Tools() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Tools</h2>

        <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="aspect-square w-full max-w-[220px] mx-auto rounded-lg border bg-card p-4 card-shadow flex flex-col items-center justify-center gap-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-center">
                  <span className="block text-sm font-medium text-foreground">{c.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
