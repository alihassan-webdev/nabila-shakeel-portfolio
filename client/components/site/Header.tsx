import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
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
    const update = () => setActive(window.location.hash || "#home");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div className="w-max py-3 rounded-2xl bg-card/50 border border-border backdrop-blur-md px-6 flex items-center justify-center shadow-md card-shadow">
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
            <a
              href="#contact"
              className="mt-3 inline-flex w-max items-center rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
