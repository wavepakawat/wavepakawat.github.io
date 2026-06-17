import { Mail, Phone, Linkedin, Github, MapPin, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n";
import { UI, PROFILE } from "../data";
import { Section } from "./Section";

type Card = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const CARDS: Card[] = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", value: "Pakawat Maleephet", href: PROFILE.linkedin, external: true },
  { icon: Github, label: "GitHub", value: "@wavepakawat", href: PROFILE.github, external: true },
];

export function Contact() {
  const { tr } = useLang();

  return (
    <Section id="contact" index="06" title={UI.contact.title} center>
      <p className="mx-auto mb-10 max-w-[50ch] text-center text-[1.1rem] text-muted">
        {tr(UI.contact.lead)}
      </p>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
              className="flex flex-col items-center gap-1.5 rounded-[20px] border border-white/10 bg-white/5 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-pink hover:bg-pink/5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl grad-cool text-white">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="text-[0.75rem] uppercase tracking-wide text-faint">{c.label}</span>
              <span className="break-words text-[0.92rem] font-semibold">{c.value}</span>
            </a>
          );
        })}
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-muted">
        <MapPin size={16} strokeWidth={2.2} />
        {tr(UI.contact.location)}
      </p>
    </Section>
  );
}
