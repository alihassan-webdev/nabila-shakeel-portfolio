type Props = { email: string };

export default function Contact({ email }: Props) {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60">
      <div className="container py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Contact</h2>
            <p className="mt-4 text-foreground/70">
              I’m open to freelance, contract, or full-time opportunities. Reach out via email or LinkedIn and I’ll respond promptly.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition"
            >
              Email: {email}
            </a>
            <a
              href="https://www.linkedin.com/in/nabila-shakeel-727476a6/"
              target="_blank"
              rel="noreferrer"
              className="ml-4 inline-flex items-center rounded-full border border-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Quick Contact</h3>
            <p className="mt-2 text-sm text-foreground/80">Email</p>
            <a
              href={`mailto:${email}`}
              className="text-sm text-primary hover:underline"
            >
              {email}
            </a>
            <p className="mt-4 text-sm text-foreground/80">Location: Remote / willing to relocate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
