import { Check } from "lucide-react";

const tools: string[] = [
  "Postman",
  "Swagger",
  "JMeter",
  "OWASP ZAP",
  "Git",
  "GitHub",
  "Bitbucket",
  "Jenkins",
  "Azure DevOps",
  "Docker",
  "MySQL Workbench",
  "MS SQL Server",
  "MongoDB",
  "Fiddler",
  "Lighthouse",
  "Browser DevTools",
  "MS Excel",
  "Confluence",
  "Notion",
  "JIRA",
  "TestRail",
  "ClickUp",
  "Trello",
  "Selenium",
  "Cypress",
  "Playwright",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">Tools</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm text-foreground/80 bg-card/80"
            >
              <Check className="w-4 h-4 text-primary" />
              <span>{tool}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
