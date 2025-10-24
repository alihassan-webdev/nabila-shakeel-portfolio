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
      </div>
    </footer>
  );
}
