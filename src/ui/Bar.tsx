import { View } from "react-native";

const MACRO_HEX = {
  calories: "#77c8d1",
  protein: "#b17850",
  carbs: "#6366b0",
  fat: "#cbe896",
  fiber: "#82d0c8",
} as const;

export interface ProgressBarProps {
  /** 0..1 */
  pct: number;
  /** token color hex (defaults to teal). */
  color?: string;
  className?: string;
}

/** Single-fill progress bar. */
export function ProgressBar({ pct, color = MACRO_HEX.calories, className }: ProgressBarProps) {
  return (
    <View className={`h-1.5 overflow-hidden rounded-full bg-surface-elevated ${className ?? ""}`}>
      <View style={{ width: `${Math.min(Math.max(pct, 0), 1) * 100}%`, backgroundColor: color }} className="h-full rounded-full" />
    </View>
  );
}

export interface MacroBarSegment {
  macro: keyof typeof MACRO_HEX;
  /** relative weight of the segment */
  value: number;
}

export interface MacroBarProps {
  segments: MacroBarSegment[];
  className?: string;
}

/** Thin multi-segment macro bar (protein/carbs/fat/fiber), colored from the shared palette. */
export function MacroBar({ segments, className }: MacroBarProps) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <View className={`h-1 flex-row overflow-hidden rounded-full ${className ?? ""}`}>
      {segments.map((s, i) => (
        <View
          key={i}
          style={{ flex: s.value / total, backgroundColor: MACRO_HEX[s.macro] }}
        />
      ))}
    </View>
  );
}
