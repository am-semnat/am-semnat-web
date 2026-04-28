#!/usr/bin/env node
// Regenerate the website's favicon + structured-data icon PNGs from
// public/source/amsemnat-logo.svg. Run with: npm run generate:icons
//
// The two favicon files use the full Monogram composition (glyph + ink
// corner brackets) — at tab-icon scale the brackets give the mark
// intentional editorial framing instead of reading as a plain plate of
// paper. The structured-data org logo is bare glyph-on-paper since it
// sits in contexts (Google rich results, OG previews) where the
// brackets would compete with surrounding chrome.
//
// Outputs:
//  - app/icon.png         (512×512) — Next.js auto-detected favicon
//                                     (this is what browsers display).
//  - public/favicon.png   (32×32)   — legacy /favicon.png fallback.
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
const INK = '#0e0e10';

const baseSvg = readFileSync(SRC, 'utf8');

async function trimmedGlyph(color) {
  const recolored = baseSvg.replace(/fill:#3f66ff/gi, `fill:${color}`);
  const { data, info } = await sharp(Buffer.from(recolored), { density: 600 })
    .png()
    .trim()
    .toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

// Brackets-only SVG at canvas size; glyph composited separately so it can
// keep its true (trimmed) aspect ratio.
function buildBracketsSvg({ size, color, frameFrac, armFrac, strokeFrac }) {
  const frame = size * frameFrac;
  const off = (size - frame) / 2;
  const arm = frame * armFrac;
  const sw = Math.max(1, frame * strokeFrac);
  const x0 = off, y0 = off, x1 = off + frame, y1 = off + frame;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <g fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="square">
    <path d="M ${x0} ${y0 + arm} L ${x0} ${y0} L ${x0 + arm} ${y0}"/>
    <path d="M ${x1 - arm} ${y0} L ${x1} ${y0} L ${x1} ${y0 + arm}"/>
    <path d="M ${x0} ${y1 - arm} L ${x0} ${y1} L ${x0 + arm} ${y1}"/>
    <path d="M ${x1 - arm} ${y1} L ${x1} ${y1} L ${x1} ${y1 - arm}"/>
  </g>
</svg>`;
}

async function render({ size, padding = 0, brackets = null, outPath }) {
  const glyph = await trimmedGlyph(INK);

  const target = brackets
    ? size * brackets.frameFrac * brackets.glyphFrac
    : size * (1 - padding * 2);
  const scale = target / Math.max(glyph.width, glyph.height);
  const w = Math.max(1, Math.round(glyph.width * scale));
  const h = Math.max(1, Math.round(glyph.height * scale));
  const glyphBuf = await sharp(glyph.data).resize(w, h, { fit: 'fill' }).png().toBuffer();

  const layers = [{
    input: glyphBuf,
    top: Math.round((size - h) / 2),
    left: Math.round((size - w) / 2),
  }];

  if (brackets) {
    const bracketsSvg = buildBracketsSvg({ size, color: COBALT, ...brackets });
    const bracketsBuf = await sharp(Buffer.from(bracketsSvg), { density: 300 })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    layers.push({ input: bracketsBuf, top: 0, left: 0 });
  }

  mkdirSync(dirname(outPath), { recursive: true });
  await sharp({ create: { width: size, height: size, channels: 4, background: PAPER } })
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  return outPath;
}

// Same bracket proportions on both favicon files so they look identical at
// any size browsers pick (16/32/64/…). strokeFrac stays at 0.040 so the
// stroke survives downscaling from 512 → 32 (≈1px floor).
const FAVICON_BRACKETS = { frameFrac: 0.84, glyphFrac: 0.60, armFrac: 0.32, strokeFrac: 0.040 };

const TARGETS = [
  { outPath: resolve(ROOT, 'app/icon.png'),       size: 512, brackets: FAVICON_BRACKETS },
  { outPath: resolve(ROOT, 'public/favicon.png'), size: 32,  brackets: FAVICON_BRACKETS },
  { outPath: resolve(ROOT, 'public/icon.png'),    size: 512, padding: 0.14 },
];

for (const t of TARGETS) {
  const out = await render(t);
  console.log(`  ✓ ${out.replace(ROOT + '/', '')}  (${t.size}×${t.size})`);
}
