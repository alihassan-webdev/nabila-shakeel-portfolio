type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • Single‑page portfolio
        </p>
        <a
          href={`mailto:${email}`}
          className="text-sm text-primary hover:underline"
        >
          {email}
        </a>
      </div>
    </footer>
  );
}
