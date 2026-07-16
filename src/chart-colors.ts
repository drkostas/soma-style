/**
 * Centralized chart color palette for the soma ecosystem, in OKLCh (matching the
 * shadcn/ui v2 theme). Domain-semantic colors for health/nutrition charts so every
 * app plots the same metric in the same hue.
 */

export const ChartColors = {
  // Theme-aware (follow dark/light mode via CSS vars)
  primary: "var(--primary)",
  muted: "var(--muted-foreground)",

  // Semantic (fixed, not theme-dependent)
  success: "oklch(62% 0.17 142)", // green — positive metrics
  warning: "oklch(80% 0.18 87)", // yellow — moderate
  danger: "oklch(60% 0.22 25)", // red — danger zone
  info: "oklch(65% 0.18 220)", // blue — general data

  // Domain-specific
  hr: "oklch(60% 0.22 25)", // red
  hrv: "oklch(75% 0.17 160)", // green
  sleep: "oklch(65% 0.18 270)", // indigo
  stress: "oklch(80% 0.18 87)", // yellow
  battery: "oklch(62% 0.17 142)", // green
  steps: "oklch(65% 0.18 220)", // blue
  weight: "oklch(75% 0.17 160)", // green
  calories: "oklch(72% 0.19 50)", // orange
  running: "oklch(65% 0.18 220)", // blue
} as const;

export type ChartColorKey = keyof typeof ChartColors;
