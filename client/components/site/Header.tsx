import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 ${
        scrolled ? "border-b" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-display font-semibold tracking-tight">
          Nabila Shakeel
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-primary border-primary/40 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
