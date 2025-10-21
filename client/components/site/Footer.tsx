type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • Nabila Shakeel
        </p>
        <p className="text-xs text-foreground/60">Developed by ali hassan</p>
      </div>
    </footer>
  );
}
