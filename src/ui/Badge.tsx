import { View, type ViewProps } from "react-native";
import { Text } from "./Text";

export type BadgeTone = "teal" | "warm" | "success" | "danger" | "neutral";

const TONE: Record<BadgeTone, { box: string; label: string }> = {
  teal: { box: "bg-teal-bg border-teal-dim", label: "text-teal" },
  warm: { box: "bg-warm-bg border-warm-dim", label: "text-warm" },
  success: { box: "bg-success/15 border-success/30", label: "text-success" },
  danger: { box: "bg-danger/15 border-danger/30", label: "text-danger" },
  neutral: { box: "bg-surface-elevated border-border-glow", label: "text-text-secondary" },
};

export interface BadgeProps extends ViewProps {
  label: string;
  tone?: BadgeTone;
  className?: string;
}

/** Small status chip / tag (e.g. REST, T2·STANDARD CUT, streak). */
export function Badge({ label, tone = "neutral", className, ...props }: BadgeProps) {
  const t = TONE[tone];
  return (
    <View
      className={`flex-row items-center self-start rounded border px-2 py-0.5 ${t.box} ${className ?? ""}`}
      {...props}
    >
      <Text variant="micro" className={`font-semibold uppercase ${t.label}`}>
        {label}
      </Text>
    </View>
  );
}
