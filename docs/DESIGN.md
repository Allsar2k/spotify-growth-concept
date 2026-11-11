# Design system · Cap & Gown

**Thesis:** *It should feel like a graduation card, not a cancellation screen.* The concept turns a price change into a milestone, so the visuals are warm and celebratory: cream paper, deep green ink, a gold tassel.

## Palette

Defined once in [`assets/tokens.json`](../assets/tokens.json); `scripts/check-contrast.mjs` checks every pairing against WCAG 2.2 AA on each push.

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `bg` | `#FFF8EE` | Cream paper background | — |
| `surface` | `#FFFFFF` | Cards | — |
| `line` | `#EADFCC` | Borders | decorative only |
| `ink` | `#10241F` | Headlines, body, the mortarboard | 15.4:1 on `bg` |
| `ink2` | `#3D524C` | Secondary text | 7.9:1 on `bg` |
| `accent` | `#0A6E4D` | "Still paying": bars, links, buttons | 5.9:1 on `bg` |
| `mint` | `#D9F2E6` | Soft fills behind input metrics and "good" outcomes | ink on mint 13.8:1 |
| `gold` | `#F2B33D` | The tassel; highlights the North Star | ink on gold 8.7:1 |
| `coral` | `#C8442C` | Losses and guardrails, always with a dashed outline and a label | 4.6:1 on `bg` |

**Rule:** green means *still paying*, coral means *lost or at risk*, and both always come with a written label and a shape difference (solid vs. dashed outline), so the charts read without colour.

## Type

- Headlines: rounded sans (`ui-rounded`, SF Pro Rounded, Arial Rounded, Nunito), extra bold. Friendly, like the occasion.
- Body: the system sans for readability.
- Numbers are the heroes: large, rounded, extra bold.

## Shape

- Generous 14–20px radii. Pill-shaped progress bars.
- **Motif:** the mortarboard, with a tassel that turns into a sound wave: graduation and music in one mark.

## Graphics

| File | Shows |
|---|---|
| `assets/banner.svg` | Project banner with the mortarboard |
| `assets/funnel.svg` | The illustrative graduation funnel and where leavers go |
| `assets/experiments.svg` | Five hypotheses ranked by ICE |
| `assets/metric-tree.svg` | North Star, input metrics and guardrails |
