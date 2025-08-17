#!/usr/bin/env node
import fg from 'fast-glob';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const root = process.cwd();
const patterns = ['src/assets/**/*.{jpg,jpeg,png,JPG,PNG}'];
const files = await fg(patterns, { cwd: root, absolute: true });

let created = 0; let skipped = 0; let errors = 0;

for (const file of files) {
  try {
    const ext = path.extname(file).toLowerCase();
    const base = file.slice(0, -ext.length);
    const webp = base + '.webp';
    let need = true;
    try {
      const [srcStat, webpStat] = await Promise.all([
        fs.stat(file),
        fs.stat(webp).catch(()=>null)
      ]);
      if (webpStat && webpStat.mtimeMs >= srcStat.mtimeMs) need = false;
    } catch {}
    if (!need) { skipped++; continue; }

    const img = sharp(file);
    // create moderately compressed webp
    await img.webp({ quality: 72 }).toFile(webp);
    created++;
  } catch (e) {
    errors++; console.error('Image optimize failed', file, e.message);
  }
}

console.log(`Image optimize summary: webp created=${created} skipped=${skipped} errors=${errors}`);
