import { View, type ViewProps } from "react-native";

export type CardVariant = "default" | "elevated" | "glow";

const VARIANTS: Record<CardVariant, string> = {
  default: "bg-surface border border-border",
  elevated: "bg-surface-elevated border border-border-glow",
  // `glow` mirrors the web `.border-glow` raised-edge card
  glow: "bg-surface-elevated border border-border-glow shadow-lg",
};

export interface CardProps extends ViewProps {
  variant?: CardVariant;
  className?: string;
}

/** Surface panel — the standard card/box. */
export function Card({ variant = "default", className, ...props }: CardProps) {
  return (
    <View
      className={`rounded-2xl p-4 ${VARIANTS[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
