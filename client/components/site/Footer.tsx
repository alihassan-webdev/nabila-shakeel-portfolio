type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • Nabila Shakeel
        </p>
        <p className="text-sm text-foreground/60">Developed by <a href="https://alihassan-online.netlify.app/" target="_blank" rel="noreferrer" className="no-underline hover:text-foreground/80 transition">Ali Hassan</a></p>
      </div>
    </footer>
  );
}
