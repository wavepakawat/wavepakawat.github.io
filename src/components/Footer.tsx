import { useLang } from "../i18n";
import { UI } from "../data";

export function Footer() {
  const { tr } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-5 py-10 text-sm text-faint sm:px-8">
        © {year} Pakawat Maleephet · {tr(UI.footer)}
      </div>
    </footer>
  );
}
