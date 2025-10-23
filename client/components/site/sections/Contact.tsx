import { Mail, Linkedin, MessageCircle } from "lucide-react";

type Props = { email: string };

export default function Contact({ email }: Props) {
  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-12">
      <div className="container pt-32 pb-20 px-4 md:px-12 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Contact</h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-xl">
              Have a question or exciting opportunity? I'd love to hear from
              you. Get in touch via email or LinkedIn and let's discuss how we
              can collaborate.
            </p>
          </div>

          <aside className="rounded-[var(--radius)] border bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Availability
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2">Open to work</h3>
            <p className="text-sm text-foreground/70 mb-4">
              I am available for contract, freelance, and full-time roles. Open
              to remote and on-site opportunities.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-2 md:px-4 md:py-2 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-95 transition"
                aria-label={`Email ${email}`}
                title="Email"
              >
                <span className="hidden md:inline">Email</span>
                <Mail className="w-5 h-5 text-primary-foreground" />
              </a>

              <a
                href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-background px-6 py-2 md:px-4 md:py-2 text-sm text-foreground/80 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <span className="hidden md:inline">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/923244747948"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-background px-6 py-2 md:px-4 md:py-2 text-sm text-foreground/80 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <span className="hidden md:inline">WhatsApp</span>
                <FaWhatsapp size={20} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
