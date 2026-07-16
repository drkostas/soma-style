/**
 * soma-style — shared design tokens for the soma ecosystem.
 *
 * TypeScript exports: macro colors + status helpers, and the chart palette.
 * CSS entrypoints (import in your app):
 *   - `soma-style/theme.css`  — Tailwind v4 `@theme` block; makes classes like
 *     `bg-warm`, `text-indigo`, `text-success` resolve.
 *   - `soma-style/tokens.css` — plain `:root` CSS variables for non-Tailwind apps.
 */

export type { Macro, MacroColor } from "./macro-colors";
export { MACRO_COLORS, progressColor, deficitColor } from "./macro-colors";

export type { ChartColorKey } from "./chart-colors";
export { ChartColors } from "./chart-colors";
