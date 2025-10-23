import { BookOpen, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl mb-12">Education</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education Cards */}
          <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                  MBA – Information Technology Management
                </h3>
                <a
                  href="https://www.aiou.edu.pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Allama Iqbal Open University, Pakistan
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-accent/5 p-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                  Bachelor of Computer Sciences
                </h3>
                <a
                  href="https://www.pu.edu.pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  University of the Punjab, Pakistan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
