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

  const iconBtn =
    "grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-[80] mix-blend-difference">
      <div className="flex items-center justify-between px-5 py-5 text-white sm:px-8">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight">
          PM<span className="text-accent">.</span>
        </a>

        <nav className="hidden gap-7 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.12em] opacity-80 transition-opacity hover:opacity-100"
            >
              {tr(l.label)}
            </a>
          ))}
        </nav>
      </div>

      {/* toggles sit outside mix-blend so colors stay readable */}
      <div className="fixed right-5 top-16 z-[81] flex items-center gap-2 sm:right-8">
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Switch language"
          className="flex h-9 items-center gap-1.5 rounded-full border border-line bg-bg/70 px-3 font-mono text-xs font-semibold text-ink backdrop-blur transition-colors hover:border-accent"
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
          className={`${iconBtn} bg-bg/70 backdrop-blur`}
        >
          {theme === "dark" ? <Sun size={16} strokeWidth={2.2} /> : <Moon size={16} strokeWidth={2.2} />}
        </button>
      </div>
    </header>
  );
}
