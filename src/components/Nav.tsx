import { useEffect, useState } from "react";
import { Languages, Moon, Sun } from "lucide-react";
import { useLang } from "../i18n";
import { useTheme } from "../theme";
import { UI } from "../data";

const LINKS = [
  { href: "#work", label: UI.nav.projects },
  { href: "#about", label: UI.nav.about },
  { href: "#experience", label: UI.nav.experience },
  { href: "#contact", label: UI.nav.contact },
];

export function Nav() {
  const { lang, toggle: toggleLang, tr } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Tuck away while scrolling down past the hero; reveal on scroll up.
      setHidden(y > last && y > 280);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pill =
    "grid h-9 w-9 place-items-center rounded-full border border-current/25 text-current transition-colors hover:border-accent hover:text-accent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] border-b transition-[transform,background-color,border-color,backdrop-filter] duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-line bg-bg/80 text-ink backdrop-blur-md"
          : "border-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-current"
        >
          PM<span className="text-accent">.</span>
        </a>

        <nav className="hidden gap-7 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-current opacity-75 transition-opacity hover:opacity-100"
            >
              {tr(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex h-9 items-center gap-1.5 rounded-full border border-current/25 px-3 font-mono text-xs font-semibold text-current transition-colors hover:border-accent"
          >
            <Languages size={14} strokeWidth={2.2} />
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
            <span className="opacity-40">/</span>
            <span className={lang === "th" ? "text-accent" : ""}>TH</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light / dark theme"
            className={pill}
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={2.2} />
            ) : (
              <Moon size={16} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
