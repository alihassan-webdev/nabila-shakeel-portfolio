import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("#home");
  };

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-max py-3 rounded-2xl bg-card border border-border px-6 items-center justify-center gap-6">
        <a href="#home" className="font-display font-semibold text-lg text-primary hover:text-primary/80 transition-colors">
          Portfolio
        </a>
        <div className="h-6 w-px bg-border/30"></div>
        <nav className="flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={l.href === "#home" ? handleHomeClick : undefined}
              className={`text-sm px-4 py-2 rounded-2xl transition-all duration-200 ${
                active === l.href
                  ? "text-primary bg-primary/10 shadow-sm"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between py-3 px-4 rounded-2xl bg-card border border-border w-full">
        <a href="#home" className="font-display font-semibold text-base text-primary hover:text-primary/80 transition-colors">
          Portfolio
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 rounded-2xl bg-card border border-border">
          <nav className="flex flex-col p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  if (l.href === "#home") handleHomeClick;
                  setOpen(false);
                }}
                className={`py-3 px-3 text-sm rounded-lg transition-all ${
                  active === l.href
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
