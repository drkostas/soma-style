/**
 * Canonical macro color system for the soma ecosystem — the warm/cool palette
 * from the design spec. Each macro carries its hex value, the Tailwind class
 * names (resolved by the tokens defined in `soma-style/theme.css`), and the CSS
 * custom-property name (for non-Tailwind consumers via `soma-style/tokens.css`).
 *
 * The Tailwind class names are drop-in compatible with the earlier
 * macro-engine-core `MACRO_COLORS` so existing call sites keep working.
 */

export type Macro = "calories" | "protein" | "carbs" | "fat" | "fiber";

export interface MacroColor {
  /** Design-spec hex value. */
  hex: string;
  /** Tailwind text class (e.g. "text-warm"), resolved via theme.css. */
  text: string;
  /** Tailwind background class (e.g. "bg-warm"). */
  bg: string;
  /** Tailwind border class (e.g. "border-warm"). */
  border: string;
  /** CSS custom property exposed by tokens.css (e.g. "--macro-protein"). */
  cssVar: string;
}

export const MACRO_COLORS: Record<Macro, MacroColor> = {
  calories: { hex: "#77C8D1", text: "text-teal", bg: "bg-teal", border: "border-teal", cssVar: "--macro-calories" },
  protein: { hex: "#B17850", text: "text-warm", bg: "bg-warm", border: "border-warm", cssVar: "--macro-protein" },
  carbs: { hex: "#6366B0", text: "text-indigo", bg: "bg-indigo", border: "border-indigo", cssVar: "--macro-carbs" },
  fat: { hex: "#CBE896", text: "text-lime", bg: "bg-lime", border: "border-lime", cssVar: "--macro-fat" },
  fiber: { hex: "#82D0C8", text: "text-teal-light", bg: "bg-teal-light", border: "border-teal-light", cssVar: "--macro-fiber" },
};

/**
 * Status color for how close an intake is to its target, as a percentage.
 * 90-110% on target, 70-89% or 111-120% approaching, else (under 70% or over
 * 120%) off. Corrects the earlier macro-engine-core version, whose `pct >= 70`
 * short-circuit made a large overshoot read as "approaching" instead of "off".
 */
export function progressColor(pct: number): string {
  if (pct >= 90 && pct <= 110) return "text-success";
  if ((pct >= 70 && pct < 90) || (pct > 110 && pct <= 120)) return "text-warning";
  return "text-danger";
}

/**
 * Status color for deficit adherence — how the achieved deficit compares to
 * the goal deficit (kcal).
 */
export function deficitColor(actual: number, goal: number): string {
  if (goal <= 0) return "text-muted-foreground";
  if (actual >= goal) return "text-success";
  if (actual >= goal - 100) return "text-warning";
  return "text-danger";
}
