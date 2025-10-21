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
          <a href="https://www.linkedin.com/in/nabila-shakeel-727476a6/" target="_blank" rel="noreferrer" className="text-sm text-foreground/80 hover:underline">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block align-middle">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2.2a4 4 0 0 1 4-2.2z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="text-sm inline-flex items-center rounded-full border border-foreground/10 px-3 py-1 text-foreground/80 hover:bg-foreground/5">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
