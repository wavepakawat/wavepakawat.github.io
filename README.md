# Pakawat Maleephet — Portfolio

Personal portfolio / résumé site for **Pakawat Maleephet** — Mobile & Fullstack Developer.

🔗 **Live:** https://wavepakawat.github.io

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**, icons from **lucide-react**.
Bilingual **EN / TH** toggle, creative animated design, downloadable résumé.

## 🧰 Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | lucide-react |
| Package manager | Bun |
| Deploy | GitHub Actions → GitHub Pages |

## 📂 Structure

```
index.html                    # Vite entry
src/
  main.tsx                    # bootstrap
  App.tsx                     # composes sections
  styles.css                  # Tailwind entry + design tokens (@theme) + keyframes
  i18n.tsx                    # EN/TH language context
  data.ts                     # all content (bilingual) — edit here
  useReveal.ts                # scroll-reveal hook
  components/                 # Nav, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
public/
  assets/profile.png          # avatar
  assets/favicon.svg
  Pakawat-Maleephet-Resume.pdf
.github/workflows/deploy.yml  # build + deploy to Pages
```

## 🛠️ Develop

```bash
bun install
bun run dev        # http://localhost:5173
bun run build      # type-check + production build → dist/
bun run preview    # preview the build
```

## 🚀 Deploy (one-time setup)

This repo is named `wavepakawat.github.io`, so it deploys as a **GitHub user page**.

1. Create a **public** GitHub repo named exactly **`wavepakawat.github.io`**.
2. Push:
   ```bash
   git remote add origin https://github.com/wavepakawat/wavepakawat.github.io.git
   git push -u origin main
   ```
3. GitHub → **Settings → Pages** → *Build and deployment* → Source: **GitHub Actions**.
4. The workflow builds and publishes automatically. Live at **https://wavepakawat.github.io** in ~1–2 min.

Every later `git push` to `main` rebuilds and redeploys.

## ✏️ Editing content

- All text lives in **`src/data.ts`** as `{ en, th }` pairs — edit both languages in one place.
- Replace the photo: overwrite `public/assets/profile.png`.
- Replace the résumé: overwrite `public/Pakawat-Maleephet-Resume.pdf` (keep the filename).

## 🔧 Before going live

- Update the **LinkedIn URL** in `src/data.ts` (`PROFILE.linkedin`) — currently a best guess.
