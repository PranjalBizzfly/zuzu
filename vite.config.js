import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Scratch dirs (headless-browser profiles, screenshots, build checks)
      // that tools drop in the project root. Browser profile files stay
      // locked while the browser runs, and watching one crashes the dev
      // server with EBUSY. Globbed as `.edge-tmp*` (not just `.edge-tmp`)
      // since concurrent sessions create numbered variants (`.edge-tmp2`,
      // `.edge-tmp3`, ...) that an exact-name pattern silently misses --
      // this is what actually crashed the server (EBUSY on a locked file
      // under `.edge-tmp2/`).
      ignored: ['**/.edge-tmp*/**', '**/.shots/**', '**/.build-check/**', '**/.preview.log'],
    },
  },
})
