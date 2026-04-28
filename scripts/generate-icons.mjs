#!/usr/bin/env node
// Regenerate the website's favicon + structured-data icon PNGs from
// public/source/amsemnat-logo.svg. Run with: npm run generate:icons
//
// Outputs:
//  - app/icon.png         (512×512) — Next.js auto-detected favicon.
//  - public/favicon.png   (32×32)   — fallback favicon.
//  - public/icon.png      (512×512) — structured-data Organization logo
//                                     (referenced from app/layout.tsx).

import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SRC = resolve(ROOT, 'public/source/amsemnat-logo.svg');

const COBALT = '#3f66ff';
const PAPER = '#faf9f4';

const baseSvg = readFileSync(SRC, 'utf8');
const recolored = baseSvg.replace(/fill:#3f66ff/gi, `fill:${COBALT}`);

async function trimmedGlyph() {
  const { data, info } = await sharp(Buffer.from(recolored), { density: 600 })
    .png()
    .trim()
    .toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

async function render({ size, padding, outPath }) {
  const glyph = await trimmedGlyph();
  const target = Math.max(1, Math.round(size * (1 - padding * 2)));
  const scale = target / Math.max(glyph.width, glyph.height);
  const w = Math.max(1, Math.round(glyph.width * scale));
  const h = Math.max(1, Math.round(glyph.height * scale));
  const resized = await sharp(glyph.data).resize(w, h, { fit: 'fill' }).png().toBuffer();

  mkdirSync(dirname(outPath), { recursive: true });
  await sharp({
    create: { width: size, height: size, channels: 4, background: PAPER },
  })
    .composite([{ input: resized, top: Math.round((size - h) / 2), left: Math.round((size - w) / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  return outPath;
}

const TARGETS = [
  { outPath: resolve(ROOT, 'app/icon.png'),       size: 512, padding: 0.14 },
  { outPath: resolve(ROOT, 'public/favicon.png'), size: 32,  padding: 0.08 },
  { outPath: resolve(ROOT, 'public/icon.png'),    size: 512, padding: 0.14 },
];

for (const t of TARGETS) {
  const out = await render(t);
  console.log(`  ✓ ${out.replace(ROOT + '/', '')}  (${t.size}×${t.size})`);
}
