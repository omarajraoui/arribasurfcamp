#+ Arriba Surf Camp – Production Frontend

Multilingual, mobile‑first marketing & booking site for Arriba Surf Camp (Indonesia). Built with React 19, Vite 5 and Tailwind 3. Includes rich media gallery, villa & rooms showcases, booking logic, internationalization (EN/FR/ES/NL/ID), map, and performance-oriented code splitting.

## 1. Summary of Recent Modifications
This commit consolidates all recent work:
1. Internationalization
	- Added locales: ES (Spanish), NL (Dutch), ID (Indonesian) alongside EN & FR.
	- Completed missing translation keys for construction banner, payment options, team & history sections.
	- Populated previously empty arrays (team members, history timelines) so sections render across all added languages.
2. Payments UI Simplification
	- Removed deposit / balance split and complex timeline; replaced with single one‑time total display & supportive note.
	- Normalized translation keys (paymentOptions.*) for consistency.
3. Navigation & Layout Adjustments
	- Experimented with non-scroll grid navigation then reverted to original horizontal scroll on user request.
	- Fixed footer social layout: desktop inline (including email), mobile stacked & centered.
4. Gallery & Media
	- Ensured gallery section build syntax issues resolved (previous transient parse error now fixed).
	- Added surf hero video (stored in public/surf-video.mp4).
5. Image Optimization Pipeline
	- Prebuild script (sharp) generates webp/avif variants + manifest for progressive loading via OptimizedImage component.
	- Adjusted OptimizedImage to respect Vite base (relative builds) and handle key hashing gracefully.
6. Favicon & Branding
	- Standardized favicon to public/arribalogo.png (stable path, non-hashed) ensuring visibility in both absolute and relative builds.
7. Build Reliability
	- Switched Vite base to './' to allow opening dist/index.html under Live Server / nested path without 404 asset errors.
8. Cleanup
	- Deleted assorted transient markdown spec / draft files to reduce repo noise.

## 2. Tech Stack
- React 19, React Router 7 (lazy loaded route sections)
- Vite 5 (manual chunk splitting for vendor groups: react, motion, datepicker, i18n, leaflet)
- TailwindCSS 3 utility styling
- i18next + browser language detector (EN, FR, ES, NL, ID)
- Framer Motion animations
- Leaflet (lazy map) & React DatePicker (Sunday-only booking input)
- Sharp prebuild image optimization

## 3. Key Features
- Fully localized UI & dynamic content (team/history arrays) across five languages
- Weekly booking logic (start = Sunday, end auto +6 days)
- Currency formatting helper (locale aware)
- Villa & Rooms pages with progressive image loading + responsive grids
- Experience page with gallery & modular sections
- Optimized chunking & lazy loading to reduce initial payload
- Progressive image component using generated manifest (webp/avif variants + placeholder)

## 4. Project Structure (High-Level)
```
src/
  components/
	 layout/          # Navigation, Footer
	 sections/        # Homepage sections & navigation grid
	 lexparriba/      # Experience (gallery, hero, etc.)
	 surfcamp/        # Villa, Rooms (Chambres), Planning
	 ui/              # Reusable UI (OptimizedImage, etc.)
  pages/             # Route-level wrappers (lazy)
  i18n/              # Translation setup & resources
  utils/             # Currency & helpers
public/              # Static assets, video, favicon, optimized images output
scripts/             # optimize-images.mjs prebuild script
```

## 5. Commands
Dev:
```bash
npm install
npm run dev
```
Build / Preview (relative asset paths enabled by default):
```bash
npm run build
npm run preview
```

## 6. Deployment Notes
- Current Vite base './' supports serving dist/ from a subdirectory or static host without path rewrites.
- If deploying at domain root and preferring absolute paths, switch base back to '/' in vite.config.js.
- GitHub Pages: consider setting base to '/arribasurfcamp/' then rebuilding, or use relative as-is if publishing root of a user/org site.

## 7. Images & Optimization
- Prebuild script (scripts/optimize-images.mjs) produces AVIF & WebP variants + manifest consumed by OptimizedImage.
- Large original assets retained for fallback; hashed filenames emitted by Vite.

## 8. Future Enhancements
- Real payment integration (Stripe Checkout or serverless function)
- Availability backend (dates & capacity)
- Automated Lighthouse & performance budgets
- Accessibility audit (focus states, ARIA labels)
- Unit tests for booking logic & currency formatter

## 9. Maintenance Tips
- Add new translation keys uniformly across all locales in `src/i18n/index.js`.
- When adding images, prefer placing the raw file in `src/assets/...`; prebuild will handle optimization.
- Keep chunk grouping in `vite.config.js` aligned with any new large vendor libraries.

---
Maintained by Arriba Surf Camp.
