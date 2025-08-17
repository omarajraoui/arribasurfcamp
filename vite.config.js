import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  // Use absolute base for production custom domain so route deep links load JS chunks correctly
  // (previous './' caused assets to be requested under nested paths like /lexparriba/assets/... => 404)
  // If you ever deploy under a sub-path, set base: '/subpath/'
  base: '/',
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
