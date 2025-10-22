import { Mail, Linkedin, DownloadCloud } from "lucide-react";

type Props = { email: string };

export default function Contact({ email }: Props) {
  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container py-20 px-4 md:px-12 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Contact</h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-xl">
              I’m open to freelance, contract, or full-time opportunities. Reach
              out via email or LinkedIn and I’ll respond promptly.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-95 transition group"
                aria-label={`Email ${email}`}
                title="Email"
              >
                <Mail className="w-5 h-5 text-primary-foreground" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 transition"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg group"
                aria-label="Download Resume"
                title="Download Resume"
              >
                <DownloadCloud className="w-5 h-5 text-primary-foreground" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <aside className="rounded-[var(--radius)] border bg-card p-6 card-shadow">
            <h3 className="font-semibold">Quick Contact</h3>
            <p className="mt-2 text-sm text-foreground/80">Email</p>
            <a
              href={`mailto:${email}`}
              className="text-sm text-primary hover:underline"
            >
              {email}
            </a>

            <div className="mt-6">
              <h4 className="font-medium">Availability</h4>
              <p className="mt-2 text-sm text-foreground/80">
                Available for new opportunities — open to contract and remote
                roles.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-full border p-2 text-foreground/80 hover:bg-foreground/5 transition"
                aria-label="Download CV"
                title="Download CV"
              >
                <DownloadCloud className="w-5 h-5" />
                <span className="sr-only">Download CV</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
