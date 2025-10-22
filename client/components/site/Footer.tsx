type Props = { email: string };

export default function Footer({ email }: Props) {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • <span className="text-black">Nabila Shakeel</span>. All Rights Reserved
        </p>
        <p className="text-sm text-foreground/60">Developed by <a href="https://alihassan-online.netlify.app/" target="_blank" rel="noreferrer" className="no-underline text-black">Ali Hassan</a></p>
      </div>
    </footer>
  );
}
