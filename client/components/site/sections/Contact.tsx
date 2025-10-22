import { Mail, Linkedin } from "lucide-react";

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
            </div>
          </div>

          <aside className="rounded-[var(--radius)] border bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Availability</span>
            </div>

            <h3 className="text-lg font-semibold mb-2">Open to work</h3>
            <p className="text-sm text-foreground/70 mb-4">
              I am available for contract, freelance, and full-time roles. Open to remote and on-site opportunities.
            </p>

            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2">Preferred roles</h4>
              <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                <li>• Senior QA Engineer</li>
                <li>• Test Automation Engineer</li>
                <li>• API / Backend Test Engineer</li>
              </ul>
            </div>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-95 transition"
              aria-label={`Email ${email}`}
              title="Email"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
              <span>Email Me</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
