import { Zap, ShieldCheck, Workflow, GitBranch, Database, FileText, DownloadCloud } from "lucide-react";

const categories: { title: string; icon: any; color?: string }[] = [
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

        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-items-center">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[90px] mx-auto rounded-lg border bg-card p-2 card-shadow flex items-center justify-center relative">
                  <div className="flex items-center justify-center w-20 h-20 z-10">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <span className="mt-1 text-center text-xs font-medium text-foreground max-w-[90px]">{c.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
