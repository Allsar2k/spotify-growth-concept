# Accessibility

The concept site and graphics in this repository aim to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Level AA.

## What's supported

- Every colour pair used for text meets AA contrast. `scripts/check-contrast.mjs` checks the design tokens on every push.
- Colour never carries meaning alone: charts and timelines also use labels, position and shape.
- Every graphic in `assets/` has a title and description, and the same content is written out in the documents in `docs/`.
- The site works with a keyboard, has a "Skip to content" link, reflows at 320px width and 200% zoom, and turns off motion when your system asks for reduced motion.

## Report a barrier

Open an issue with the page or file, what you were trying to do, and the browser and assistive technology you used.
