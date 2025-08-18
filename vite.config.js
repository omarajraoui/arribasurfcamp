import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// Allow switching between absolute and relative asset base.
// Default: '/' (good for proper hosting where dist/ is the web root).
// To generate a build that can be opened from a subfolder (e.g. file:// or /project/dist/index.html via Live Server),
// run: VITE_RELATIVE=1 npm run build  (this sets base to './').
// Force relative base so opening dist/index.html from a parent path (e.g. Live Server at repo root) works.
// If you deploy to a real domain root, this can stay './' or be switched back to '/'.
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  base: './',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  // Ensure Vite treats capitalized JPG & PNG files as static assets
  assetsInclude: ['**/*.JPG', '**/*.PNG'],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          datepicker: ['react-datepicker'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Leaflet libs if present (adjust if different package names)
          leaflet: ['leaflet']
        }
      }
    }
  }
})
