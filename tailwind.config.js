/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-sun': '#F6C74B',           // pastel sun (primary)
  'brand-sun-accent': '#FFA725',    // updated user-defined orange accent
        'brand-sun-soft': '#FFF1CC',      // very light sun tint
        'brand-sand': '#F5F1E9',          // off-white base background
        'brand-sand-alt': '#ECE5D8',      // subtle secondary background
        'brand-sand-deep': '#E2D9C9',     // borders / lines
        'brand-ink': '#2B2F36',           // primary text
        'brand-ink-soft': '#4A525E',      // secondary text
        'brand-foam': '#FAFBFC',          // pure-ish white panel
        'brand-coral': '#E27A4F',         // warm supporting accent
        'brand-success': '#3B7D5B',       // success util
        'brand-danger': '#C94F3D',        // error util
        'brand-focus': '#FFD978',         // focus ring
        'brand-ocean': '#1E3A5F',         // rare deep
        'brand-ocean-soft': '#355479',
      },
      boxShadow: {
        'subtle': '0 2px 4px -2px rgba(0,0,0,0.05), 0 4px 12px -4px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
};
