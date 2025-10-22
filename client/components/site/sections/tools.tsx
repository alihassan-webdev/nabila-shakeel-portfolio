import { Zap, Cloud, Workflow, GitBranch, Database, FileText, Activity } from "lucide-react";

const categories: { title: string; icon: any; color?: string }[] = [
  { title: "Automation", icon: Zap },
  { title: "API", icon: Cloud },
  { title: "DevOps", icon: Workflow },
  { title: "Versioning", icon: GitBranch },
  { title: "Database", icon: Database },
  { title: "Management", icon: FileText },
  { title: "Monitoring", icon: Activity },
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
                <div className="aspect-square w-full max-w-[180px] mx-auto rounded-lg border bg-card p-3 card-shadow flex items-center justify-center relative">
                  <div className="flex items-center justify-center w-24 h-24 z-10">
                    <Icon className="w-20 h-20 text-primary" />
                  </div>
                </div>
                <span className="mt-2 text-center text-sm font-medium text-foreground/60 max-w-[180px]">{c.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
