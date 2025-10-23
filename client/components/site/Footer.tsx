interface FooterProps {
  email: string;
}

export default function Footer({ email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-foreground/60">
          © {currentYear} •{" "}
          <span className="text-foreground font-semibold">Nabila Shakeel</span>.
          All Rights Reserved
        </p>
        <p className="text-sm text-foreground/60">
          Developed by{" "}
          <a
            href="https://alihassan-online.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Ali Hassan
          </a>
        </p>
      </div>
    </footer>
  );
}
