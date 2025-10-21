const skills = [
  "Manual & Exploratory Testing",
  "Test Automation (Cypress, Playwright, Selenium)",
  "API Testing (Postman, REST, GraphQL)",
  "CI/CD & Release Testing",
  "QA Methodologies",
  "Project Management Tools (Jira, Trello)",
  "Databases (MySQL, PostgreSQL)",
  "CMS/CRM & Email Marketing",
  "Cloud (AWS, GCP)",
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container py-20">
        <h2 className="font-display text-3xl md:text-4xl">What I Bring To The Table</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-xl border bg-card/80 px-4 py-3 text-sm text-foreground/80 hover:bg-card transition"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
