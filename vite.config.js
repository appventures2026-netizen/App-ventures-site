import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this site from the /App-ventures-site/ subpath, but
// Vercel serves it from the domain root — Vercel sets VERCEL=1 during its
// build, so we use that to pick the right base automatically.
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/App-ventures-site/',
  plugins: [react()],
})
