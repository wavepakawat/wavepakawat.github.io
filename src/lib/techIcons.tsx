import type { ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMariadb,
  SiSqlite,
  SiDocker,
  SiGit,
  SiFigma,
  SiGooglegemini,
  SiGithubcopilot,
  SiClaude,
} from "react-icons/si";
import { Database, Webhook } from "lucide-react";

type IconType = ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

// `color` set => brand color; omitted => inherits currentColor (text-ink),
// used for monochrome/dark-navy brands that would vanish in one theme.
interface TechIcon {
  Icon: IconType;
  color?: string;
}

export const TECH: Record<string, TechIcon> = {
  "React Native (CLI & Expo)": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Golang: { Icon: SiGo, color: "#00ADD8" },
  "C# .NET Core": { Icon: SiDotnet, color: "#7B5BD6" },
  ".NET": { Icon: SiDotnet, color: "#7B5BD6" },
  "REST API": { Icon: Webhook },
  "SQL Server": { Icon: Database, color: "#CC2927" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MariaDB: { Icon: SiMariadb },
  SQLite: { Icon: SiSqlite },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Git: { Icon: SiGit, color: "#F05032" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "Claude Code": { Icon: SiClaude, color: "#D97757" },
  "GitHub Copilot": { Icon: SiGithubcopilot },
  "Gemini API": { Icon: SiGooglegemini, color: "#8E75B2" },
};
