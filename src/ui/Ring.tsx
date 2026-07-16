import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Text } from "./Text";

export interface RingProps {
  /** 0..1 */
  pct: number;
  size?: number;
  stroke?: number;
  /** progress color hex (defaults to teal). */
  color?: string;
  label?: string;
  className?: string;
}

/** Circular progress ring (SVG — renders on web + native). */
export function Ring({ pct, size = 56, stroke = 5, color = "#77c8d1", label, className }: RingProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.min(Math.max(pct, 0), 1);
  const offset = c * (1 - clamped);
  return (
    <View style={{ width: size, height: size }} className={`items-center justify-center ${className ?? ""}`}>
      <Svg width={size} height={size} style={{ position: "absolute", transform: [{ rotate: "-90deg" }] }}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke="#152232" strokeWidth={stroke} fill="none" />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </Svg>
      {label != null && (
        <Text variant="caption" className="font-semibold text-text tabular-nums">{label}</Text>
      )}
    </View>
  );
}
