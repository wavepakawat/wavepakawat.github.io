import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { useLang } from "../i18n";
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
  const { lang, toggle, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center gap-4 px-5 py-3.5 backdrop-blur-md transition-colors duration-300 sm:px-10 ${
        scrolled ? "border-b border-white/10 bg-bg/80" : "border-b border-transparent bg-bg/50"
      }`}
    >
      <a href="#hero" className="flex items-center gap-2.5 font-bold">
        <span className="grid h-9 w-9 place-items-center rounded-[10px] grad-main font-display text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(139,92,246,0.45)]">
          PM
        </span>
        <span className="font-display">Pakawat</span>
      </a>

      <nav className="ml-auto hidden gap-6 md:flex" aria-label="Primary">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="group relative py-1 text-[0.92rem] font-medium text-muted transition-colors hover:text-ink"
          >
            {tr(l.label)}
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 grad-main transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={toggle}
        aria-label="Switch language"
        className="ml-auto flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-display text-xs font-semibold text-muted transition-colors hover:border-purple md:ml-0"
      >
        <Languages size={15} strokeWidth={2.2} />
        <span className={lang === "en" ? "grad-main bg-clip-text text-transparent" : ""}>EN</span>
        <span className="opacity-40">/</span>
        <span className={lang === "th" ? "grad-main bg-clip-text text-transparent" : ""}>TH</span>
      </button>
    </header>
  );
}
