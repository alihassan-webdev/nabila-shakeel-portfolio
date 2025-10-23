import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-12">Education</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              degree: "MBA – Information Technology Management",
              university: "Allama Iqbal Open University, Pakistan",
              url: "https://www.aiou.edu.pk/",
            },
            {
              degree: "Bachelor of Computer Sciences",
              university: "University of the Punjab, Pakistan",
              url: "https://www.pu.edu.pk/",
            },
          ].map((education) => (
            <div
              key={education.degree}
              className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                    {education.degree}
                  </h3>
                  <a
                    href={education.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {education.university}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
