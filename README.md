# Arriba Surf Camp Website

Multilingual, mobile‑first marketing & booking site for Arriba Surf Camp (Indonesia). Built with React + Vite + Tailwind. Features smooth section navigation, weekly booking (Sunday→Saturday), localized pricing & currency formatting, image/gallery experience, and map/location info.

## Tech Stack
- React 19 + Vite 5 (code‑splitting via React.lazy, manual Rollup chunks)
- TailwindCSS 3 for styling
- i18next with browser language detection (EN, FR, ES, NL, ID ready)
- Framer Motion animations
- React Router 7 (hash section scroll support)
- React Leaflet (map with custom marker)
- React DatePicker (restricted to Sunday start dates)

## Key Features
- Internationalization across all UI copy
- Weekly booking flow (auto end date = start + 6 days)
- Currency formatting utility (locale aware)
- Mobile‑optimized gallery (single column) & Villa/Rooms photo grids (responsive)
- Floating contact (WhatsApp & email) + hidden desktop socials on mobile
- Scroll spy navigation (desktop only) for L’Exp Arriba page
- Performance: vendor chunk splitting, lazy routes/components

## Getting Started
```bash
pnpm install # or npm install / yarn install
npm run dev   # start dev server
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview    # local preview of production build
```

## Deployment (GitHub Pages)
1. Ensure repo remote is set: `git remote add origin https://github.com/omarajraoui/arribasurfcamp.git`
2. Deploy:
```bash
npm run deploy
```
This runs a production build then publishes `dist/` via `gh-pages` (installed implicitly with npx).

If you prefer a static host (Netlify / Vercel / Cloudflare Pages), just point it at `npm run build` and serve `dist/` (set base to `./` already for relative assets).

## Environment
No backend yet. Stripe / Express placeholders removed; future payment integration will plug into PaymentOptions component.

## Project Structure (excerpt)
```
src/
	pages/                # Route-level components (lazy loaded)
	components/
		layout/             # Nav, Footer, shared layout pieces
		sections/           # Homepage sections
		lexparriba/         # Experience page modules (hero video, gallery, etc.)
		surfcamp/           # Surf camp detail sections (Villa, Rooms, Planning)
		booking/            # Booking flow components
	i18n/                 # Translation resources setup
	utils/                # Currency helpers
```

## Translations
Add or edit language keys in `src/i18n/index.js`. New languages: extend `resources` and add the code to the language selector in `Navigation.jsx`.

## Booking Logic
- Only Sundays selectable
- End date auto‑derived (start + 6)
- Price = participants * localizedWeekPrice

## Image / Asset Notes
Large JPG/JPG capitalized names included via `assetsInclude` in `vite.config.js`. Future optimization: compress & provide WebP alternatives.

## Next Potential Improvements
- Real payment integration (Stripe checkout/session)
- Backend/API for availability + reservations
- Lighthouse performance pass (image compression, preloading hero video poster)
- Accessibility sweep (focus outlines for custom buttons, ARIA labels)
- Unit tests for pricing & date utils

## License
MIT (add a LICENSE file if you intend open-source distribution).

---
Maintained by Arriba Surf Camp.
