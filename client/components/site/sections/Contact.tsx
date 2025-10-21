type Props = { email: string };

export default function Contact({ email }: Props) {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60">
      <div className="container py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">I’d love to hear from you</h2>
            <p className="mt-4 text-foreground/70">
              Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition"
            >
              Email me
            </a>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-foreground/80">Email</p>
            <a
              href={`mailto:${email}`}
              className="text-sm text-primary hover:underline"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
