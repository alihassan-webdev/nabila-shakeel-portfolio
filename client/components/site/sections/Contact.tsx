type Props = { email: string };

export default function Contact({ email }: Props) {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container py-20">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Contact</h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-xl">I’m open to freelance, contract, or full-time opportunities. Reach out via email or LinkedIn and I’ll respond promptly.</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-95 transition"
              >
                Email: {email}
              </a>

              <a
                href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
              >
                LinkedIn Profile
              </a>

              <a href="#" className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition">
                Download CV
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border bg-card p-6 card-shadow">
            <h3 className="font-semibold">Quick Contact</h3>
            <p className="mt-2 text-sm text-foreground/80">Email</p>
            <a href={`mailto:${email}`} className="text-sm text-primary hover:underline">{email}</a>

            <div className="mt-6">
              <h4 className="font-medium">Availability</h4>
              <p className="mt-2 text-sm text-foreground/80">Available for new opportunities — open to contract and remote roles.</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="text-sm inline-flex items-center rounded-2xl border px-3 py-1 text-foreground/80 hover:bg-foreground/5">Download CV</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
