import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => setActive(window.location.hash || "#home");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 w-full flex justify-center transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-4xl flex items-center justify-between py-3 rounded-full bg-background/60 backdrop-blur-md px-4">
        <a href="#home" className="text-lg font-display font-semibold tracking-tight">
          Nabila Shakeel
        </a>

        <nav className="hidden md:flex items-center gap-3 bg-background/30 rounded-full px-2 py-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                active === l.href
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-primary border-primary/40 bg-transparent backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Let’s talk
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card border"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t bg-card">
          <div className="container py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground/80 hover:bg-foreground/5 rounded-md px-3"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-3 inline-flex w-max items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
