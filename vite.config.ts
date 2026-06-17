import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// User page (wavepakawat.github.io) is served from the domain root, so base stays "/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
