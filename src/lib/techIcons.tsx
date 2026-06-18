import type { ComponentType } from "react";
import { SiMariadb, SiGithubcopilot } from "react-icons/si";
import { Webhook } from "lucide-react";

type IconType = ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

/**
 * Brand logos for tech tags.
 * - `src`  => devicon SVG (true brand colors), served from /public. `invert`
 *            flips monochrome marks (e.g. Next.js) so they stay visible on dark.
 * - `Icon` => react-icons fallback for logos devicon doesn't ship usable; when
 *            `color` is omitted it inherits currentColor (text-ink) and adapts
 *            to the theme.
 */
interface TechIcon {
  src?: string;
  invert?: boolean;
  Icon?: IconType;
  color?: string;
}

// devicon path → /public/icons/devicon/<file>
const dev = (file: string): string => `icons/devicon/${file}`;

export const TECH: Record<string, TechIcon> = {
  "React Native (CLI & Expo)": { src: dev("react-original.svg") },
  "React Native": { src: dev("react-original.svg") },
  "React.js": { src: dev("react-original.svg") },
  TypeScript: { src: dev("typescript-original.svg") },
  JavaScript: { src: dev("javascript-original.svg") },
  "Next.js": { src: dev("nextjs-original.svg"), invert: true },
  "Tailwind CSS": { src: dev("tailwindcss-original.svg") },
  Golang: { src: dev("go-original.svg") },
  "C# .NET Core": { src: dev("dotnetcore-original.svg") },
  "REST API": { Icon: Webhook },
  "SQL Server": { src: dev("microsoftsqlserver-original.svg") },
  MongoDB: { src: dev("mongodb-original.svg") },
  PostgreSQL: { src: dev("postgresql-original.svg") },
  // devicon ships MariaDB as a single dark teal that vanishes on the dark
  // theme, so keep the adaptive monochrome mark.
  MariaDB: { Icon: SiMariadb },
  SQLite: { src: dev("sqlite-original.svg") },
  Docker: { src: dev("docker-original.svg") },
  Git: { src: dev("git-original.svg") },
  Figma: { src: dev("figma-original.svg") },
  "Claude Code": { src: dev("claude-ai-symbol.svg") },
  Cursor: { src: dev("cursor-ai-code-icon.svg"), invert: true },
  Codex: { src: dev("codex-color.svg") },
  "GitHub Copilot": { Icon: SiGithubcopilot },
  "Gemini API": { src: dev("google-gemini.svg") },
};
