type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • Nabila Shakeel
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${email}`} className="text-sm text-primary hover:underline">{email}</a>
          <a href="https://www.linkedin.com/in/nabila-shakeel-727476a6/" target="_blank" rel="noreferrer" className="text-sm text-foreground/80 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
