import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "th";

/** A bilingual string. */
export type L = { en: string; th: string };

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
  /** Resolve a bilingual string to the active language. */
  tr: (s: L) => string;
}

const Ctx = createContext<LangCtx | null>(null);
const STORAGE_KEY = "site-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "th") return saved;
    } catch {
      /* ignore */
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value: LangCtx = {
    lang,
    setLang,
    toggle: () => setLang((p) => (p === "en" ? "th" : "en")),
    tr: (s) => s[lang],
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
