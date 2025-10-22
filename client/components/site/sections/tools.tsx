import {
  Zap,
  Cloud,
  Workflow,
  GitBranch,
  Database,
  FileText,
  Activity,
} from "lucide-react";

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
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Tools</h2>

        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-items-center">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col items-center last:col-span-2 last:flex last:items-center last:justify-center md:last:col-span-1"
              >
                <div className="aspect-square w-full max-w-[100px] sm:max-w-[160px] md:max-w-[180px] mx-auto rounded-lg border bg-card p-3 card-shadow flex items-center justify-center relative">
                  <div
                    className="flex items-center justify-center w-24 h-24 z-10 border-2 border-black rounded-lg"
                    style={{
                      maskImage:
                        "linear-gradient(90deg, transparent 0%, black 50%, black 100%), linear-gradient(to top, transparent 0%, black 50%, black 100%)",
                      WebkitMaskImage:
                        "linear-gradient(90deg, transparent 0%, black 50%, black 100%), linear-gradient(to top, transparent 0%, black 50%, black 100%)",
                      maskComposite: "intersect",
                      WebkitMaskComposite: "source-in",
                    }}
                  >
                    <Icon className="w-14 h-14 text-primary" />
                  </div>
                </div>
                <span className="mt-2 text-center text-sm font-medium text-foreground/60 max-w-[180px]">
                  {c.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
