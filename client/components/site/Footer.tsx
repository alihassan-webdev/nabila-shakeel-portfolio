type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex items-center justify-center">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • Nabila Shakeel
        </p>
      </div>
    </footer>
  );
}
