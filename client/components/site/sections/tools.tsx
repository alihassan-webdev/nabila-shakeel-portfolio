import { Zap, ShieldCheck, Workflow, GitBranch, Database, FileText, DownloadCloud } from "lucide-react";

const categories: { title: string; icon: any; color: string }[] = [
  { title: "Automation & Testing Tools", icon: Zap, color: "#FB923C" },
  { title: "API & Security Tools", icon: ShieldCheck, color: "#EF4444" },
  { title: "CI/CD & DevOps Tools", icon: Workflow, color: "#06B6D4" },
  { title: "Version Control Systems", icon: GitBranch, color: "#0EA5A4" },
  { title: "Database Management Tools", icon: Database, color: "#16A34A" },
  { title: "Bug Tracking & Project Management Tools", icon: FileText, color: "#8B5CF6" },
  { title: "Monitoring & Analysis Tools", icon: DownloadCloud, color: "#3B82F6" },
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
              <div key={c.title} className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[220px] mx-auto rounded-lg border bg-card p-4 card-shadow flex items-center justify-center relative">
                  {/* inner outline box (thin line) */}
                  <div className="absolute inset-6 rounded-md pointer-events-none" style={{ borderWidth: 3, borderStyle: 'solid', borderColor: c.color, opacity: 0.95 }} />
                  <div className="flex items-center justify-center w-32 h-32 z-10">
                    <Icon className="w-24 h-24" style={{ color: c.color }} />
                  </div>
                </div>
                <span className="mt-3 text-center text-sm font-medium text-foreground max-w-[220px]">{c.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
