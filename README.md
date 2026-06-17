# Pakawat Maleephet — Portfolio

Personal portfolio / resume website for **Pakawat Maleephet** — Mobile & Fullstack Developer.

🔗 **Live site:** https://wavepakawat.github.io

Static site (plain HTML/CSS/JS, **no build step**) — bilingual **EN / TH** toggle, creative animated design, downloadable résumé.

## 📂 Structure

```
index.html                      # all content (EN + TH via data-en / data-th)
style.css                       # creative/colorful theme
script.js                       # language toggle, nav, scroll reveal
assets/profile.png              # avatar (extracted from résumé)
assets/favicon.svg              # favicon
Pakawat-Maleephet-Resume.pdf    # downloadable résumé
.nojekyll                       # serve files as-is on GitHub Pages
```

## 🚀 Deploy to GitHub Pages (one time)

This repo is named `wavepakawat.github.io`, so it deploys as a **GitHub user page** — no build, no Actions.

1. Create the repo on GitHub named exactly **`wavepakawat.github.io`** (public).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/wavepakawat/wavepakawat.github.io.git
   git push -u origin main
   ```
3. On GitHub → **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch** → Branch: **`main`**, folder **`/ (root)`** → **Save**.
4. Wait ~1 minute → visit **https://wavepakawat.github.io** 🎉

Every later `git push` to `main` updates the live site automatically.

## ✏️ Editing content

- Text lives in `index.html` as `data-en="..."` / `data-th="..."` pairs — edit both languages in place.
- Replace the photo by overwriting `assets/profile.png`.
- Replace the résumé by overwriting `Pakawat-Maleephet-Resume.pdf` (keep the same filename).

## 🔧 Before you go live — quick checks

- **LinkedIn URL** in `index.html` (`id="linkedinLink"`) is currently a best guess
  (`https://www.linkedin.com/in/pakawat-maleephet`). Update it to your real profile URL.

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
