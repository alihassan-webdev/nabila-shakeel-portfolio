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
    <header className={`sticky top-4 z-50 w-full flex justify-center ${scrolled ? "shadow-sm" : ""}`}>
      <div className="mx-auto w-full max-w-3xl py-3 rounded-full bg-transparent border border-transparent px-3 flex items-center justify-center">
        <nav className="flex items-center gap-2">
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
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-transparent bg-transparent">
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
