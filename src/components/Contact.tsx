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
    <Section id="contact" index="06" title={UI.contact.title}>
      <p className="max-w-2xl text-lg text-muted">{tr(UI.contact.lead)}</p>
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
              className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-accent transition-colors group-hover:border-accent">
                <Icon size={19} strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-faint">{c.label}</span>
                <span className="block truncate font-medium">{c.value}</span>
              </span>
            </a>
          );
        })}
      </div>
      <p className="mt-8 flex items-center gap-2 text-muted">
        <MapPin size={16} strokeWidth={2.2} className="text-accent" />
        {tr(UI.contact.location)}
      </p>
    </Section>
  );
}
