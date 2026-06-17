import { Coffee } from "lucide-react";
import { useLang } from "../i18n";
import { UI } from "../data";

export function Footer() {
  const { tr } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-[0.88rem] text-faint">
      <p className="flex flex-wrap items-center justify-center gap-1.5">
        © {year} Pakawat Maleephet · {tr(UI.footer)}
        <Coffee size={15} strokeWidth={2.2} />
      </p>
    </footer>
  );
}
