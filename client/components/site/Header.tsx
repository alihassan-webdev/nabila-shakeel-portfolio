import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
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

    const handleScroll = () => {
      let current = "#home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        // Check if section is in the upper half of viewport
        if (rect.top <= window.innerHeight / 2) {
          current = `#${id}`;
        } else {
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-max py-3 rounded-2xl bg-card/60 backdrop-blur-md border border-border/60 px-6 items-center justify-center gap-6 shadow-sm">
        <span className="font-display font-semibold text-xl text-primary">
          Portfolio
        </span>
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
      <div className="md:hidden flex items-center justify-between w-full py-3 px-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/60">
        <span className="font-display font-semibold text-lg text-primary">
          Portfolio
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute top-full mt-2 left-4 right-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/60 overflow-hidden transition-all duration-300 ease-out origin-top ${
          open
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                if (l.href === "#home") {
                  handleHomeClick(e);
                }
                setOpen(false);
              }}
              className={`py-3 px-3 text-sm rounded-lg transition-all duration-200 ${
                open ? `delay-${index * 50}` : ""
              } ${
                active === l.href
                  ? "text-primary bg-primary/10 font-medium"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 300ms ease-out, transform 300ms ease-out",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
