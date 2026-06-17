import { useEffect, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";
import { useLang } from "../i18n";
import { useTheme } from "../theme";
import { UI } from "../data";

const LINKS = [
  { href: "#about", label: UI.nav.about },
  { href: "#skills", label: UI.nav.skills },
  { href: "#experience", label: UI.nav.experience },
  { href: "#projects", label: UI.nav.projects },
  { href: "#education", label: UI.nav.education },
  { href: "#contact", label: UI.nav.contact },
];

export function Nav() {
  const { lang, toggle: toggleLang, tr } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconBtn =
    "grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-border bg-bg/80" : "border-transparent bg-bg/40"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#hero" className="flex items-center gap-2.5 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-ink text-[0.8rem]">
            PM
          </span>
          <span className="hidden sm:inline">Pakawat</span>
        </a>

        <nav className="mx-auto hidden gap-7 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {tr(l.label)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex h-9 items-center gap-1.5 rounded-lg border border-border px-2.5 font-mono text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Languages size={15} strokeWidth={2.2} />
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
            <span className="opacity-40">/</span>
            <span className={lang === "th" ? "text-accent" : ""}>TH</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light / dark theme"
            className={iconBtn}
          >
            {theme === "dark" ? <Sun size={17} strokeWidth={2.2} /> : <Moon size={17} strokeWidth={2.2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
