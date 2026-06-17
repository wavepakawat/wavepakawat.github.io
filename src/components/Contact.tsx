import { ArrowUpRight, Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { useLang } from "../i18n";
import { UI, PROFILE } from "../data";
import { MaskText } from "./MaskText";

const LINKS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", value: "Pakawat Maleephet", href: PROFILE.linkedin, ext: true },
  { icon: Github, label: "GitHub", value: "@wavepakawat", href: PROFILE.github, ext: true },
];

export function Contact() {
  const { tr } = useLang();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line px-5 pt-24 sm:px-8 sm:pt-36">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.contact.title)} )
      </span>

      <a
        href={`mailto:${PROFILE.email}`}
        data-cursor
        className="group mt-8 block max-w-5xl"
      >
        <MaskText
          as="h2"
          text={tr(UI.contact.big)}
          className="text-giant block font-bold transition-colors group-hover:text-accent"
        />
        <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-accent">
          {PROFILE.email}
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </a>

      <p className="mt-10 max-w-xl text-muted">{tr(UI.contact.lead)}</p>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              {...(l.ext ? { target: "_blank", rel: "noopener" } : {})}
              className="group flex flex-col gap-3 bg-bg p-6 transition-colors hover:bg-bg2"
            >
              <span className="flex items-center justify-between text-accent">
                <Icon size={20} strokeWidth={1.8} />
                <ArrowUpRight size={16} className="text-faint transition-colors group-hover:text-accent" />
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-wide text-faint">{l.label}</span>
                <span className="block truncate font-medium">{l.value}</span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-line py-10 sm:flex-row sm:items-center">
        <a
          href={PROFILE.resume}
          download
          data-cursor
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
        >
          <Download size={17} />
          {tr(UI.hero.resume)}
        </a>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {tr(UI.contact.location)} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
