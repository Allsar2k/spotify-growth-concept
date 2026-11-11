// Checks the concept's design tokens against WCAG 2.2 AA.
//
// assets/tokens.json lists every colour once, which pairs are used for body
// text (4.5:1) and which for large text or graphics only (3:1). The script also
// fails if styles.css uses a colour that is not a token, so the site, the
// graphics and this check can't drift apart.
//
// Usage: node scripts/check-contrast.mjs   (no dependencies)
import { readFileSync } from 'node:fs';

const tokens = JSON.parse(readFileSync('assets/tokens.json', 'utf8'));
const css = readFileSync('styles.css', 'utf8');

const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => lin(parseInt(hex.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

let failures = 0;
const check = (pairs = [], min) => {
  for (const [fg, bg] of pairs) {
    const a = tokens.colors[fg];
    const b = tokens.colors[bg];
    if (!a || !b) {
      console.error(`✗ unknown token in pair ${fg} / ${bg}`);
      failures++;
      continue;
    }
    const r = ratio(a, b);
    const ok = r >= min;
    if (!ok) failures++;
    console.log(`${ok ? '✓' : '✗'} ${fg} on ${bg}: ${r.toFixed(2)}:1 (needs ${min}:1)`);
  }
};

console.log(`${tokens.name} design system\n`);
check(tokens.text, 4.5);
check(tokens.large, 3);

const known = new Set(Object.values(tokens.colors).map((v) => v.toUpperCase()));
for (const hex of css.match(/#[0-9a-fA-F]{6}\b/g) ?? []) {
  if (!known.has(hex.toUpperCase())) {
    console.error(`✗ styles.css uses ${hex}, which is not in assets/tokens.json`);
    failures++;
  }
}

if (failures) {
  console.error(`\n${failures} problem(s) found`);
  process.exit(1);
}
console.log('\nAll colour pairs meet WCAG 2.2 AA.');
