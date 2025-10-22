import {
  Check,
  Zap,
  FileText,
  Database,
  Cloud,
  Boxes,
  Workflow,
  Wrench,
  GitBranch,
  Code,
  Server,
  ShieldCheck,
  DownloadCloud,
  Mail,
} from "lucide-react";

const tools: { name: string; icon: any }[] = [
  { name: "Postman", icon: Zap },
  { name: "Swagger", icon: FileText },
  { name: "JMeter", icon: Zap },
  { name: "OWASP ZAP", icon: ShieldCheck },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Bitbucket", icon: GitBranch },
  { name: "Jenkins", icon: Server },
  { name: "Azure DevOps", icon: Workflow },
  { name: "Docker", icon: Boxes },
  { name: "MySQL Workbench", icon: Database },
  { name: "MS SQL Server", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Fiddler", icon: Wrench },
  { name: "Lighthouse", icon: DownloadCloud },
  { name: "Browser DevTools", icon: Code },
  { name: "MS Excel", icon: FileText },
  { name: "Confluence", icon: FileText },
  { name: "Notion", icon: FileText },
  { name: "JIRA", icon: Mail },
  { name: "TestRail", icon: FileText },
  { name: "ClickUp", icon: FileText },
  { name: "Trello", icon: FileText },
  { name: "Selenium", icon: Check },
  { name: "Cypress", icon: Check },
  { name: "Playwright", icon: Check },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Tools</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm text-foreground/80 bg-card/80"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{t.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
