import { Pressable, View, type PressableProps } from "react-native";
import { Text } from "./Text";
import type { ReactNode } from "react";

export interface PillProps extends Omit<PressableProps, "children"> {
  label: string;
  active?: boolean;
  /** Accent used for the active state. */
  tone?: "teal" | "warm";
  className?: string;
}

const ACTIVE: Record<NonNullable<PillProps["tone"]>, string> = {
  teal: "bg-teal-bg border-teal",
  warm: "bg-warm-bg border-warm",
};
const ACTIVE_TEXT: Record<NonNullable<PillProps["tone"]>, string> = {
  teal: "text-teal",
  warm: "text-warm",
};

/** Segmented-control item / toggle pill (selected vs unselected). */
export function Pill({ label, active = false, tone = "teal", className, ...props }: PillProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      className={`rounded-lg border px-3 py-1.5 ${active ? ACTIVE[tone] : "border-border-glow bg-transparent active:bg-surface-hover"} ${className ?? ""}`}
      {...props}
    >
      <Text variant="caption" className={`font-semibold ${active ? ACTIVE_TEXT[tone] : "text-text-muted"}`}>
        {label}
      </Text>
    </Pressable>
  );
}

export interface PillGroupProps {
  children: ReactNode;
  className?: string;
}

/** Row container for a set of pills. */
export function PillGroup({ children, className }: PillGroupProps) {
  return <View className={`flex-row flex-wrap gap-1 ${className ?? ""}`}>{children}</View>;
}
