#!/usr/bin/env node
import fg from 'fast-glob';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const root = process.cwd();
const patterns = ['src/assets/**/*.{jpg,jpeg,png,JPG,PNG}'];
const files = await fg(patterns, { cwd: root, absolute: true });

const outDir = path.join(root, 'public/optimized');
await fs.mkdir(outDir, { recursive: true });

const widths = [480, 768, 1024, 1440];
let created = 0; let skipped = 0; let errors = 0;
const manifest = {};

for (const file of files) {
  try {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext); // original name without extension
    const relKey = baseName.toLowerCase();
    manifest[relKey] = manifest[relKey] || { variants: [], placeholder: '' };

    // Placeholder (small base64) only once
    if (!manifest[relKey].placeholder) {
      try {
        const plBuf = await sharp(file).resize({ width: 24 }).blur().toBuffer();
        manifest[relKey].placeholder = `data:image/${ext.replace('.', '')};base64,${plBuf.toString('base64')}`;
      } catch {}
    }

    for (const w of widths) {
      const webpName = `${baseName}-${w}.webp`;
      const avifName = `${baseName}-${w}.avif`;
      const webpPath = path.join(outDir, webpName);
      const avifPath = path.join(outDir, avifName);
      // Determine if regeneration needed (source newer than both variants)
      let regenerate = false;
      try {
        const srcStat = await fs.stat(file);
        const wStat = await fs.stat(webpPath).catch(()=>null);
        if (!wStat || wStat.mtimeMs < srcStat.mtimeMs) regenerate = true;
      } catch { regenerate = true; }
      if (regenerate) {
        const pipeline = sharp(file).resize({ width: w, withoutEnlargement: true });
        await Promise.all([
          pipeline.clone().webp({ quality: 72 }).toFile(webpPath),
          pipeline.clone().avif({ quality: 55 }).toFile(avifPath)
        ]);
        created += 2;
      } else {
        skipped += 2;
      }
      // Record variants (order: AVIF then WebP; browser picks first supported)
      manifest[relKey].variants.push({ width: w, type: 'image/avif', src: `/optimized/${avifName}` });
      manifest[relKey].variants.push({ width: w, type: 'image/webp', src: `/optimized/${webpName}` });
    }
  } catch (e) {
    errors++; console.error('Image optimize failed', file, e.message);
  }
}

await fs.writeFile(path.join(outDir, 'image-manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Image optimize summary: variants created=${created} skipped=${skipped} errors=${errors}`);
