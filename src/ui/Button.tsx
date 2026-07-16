import { Pressable, type PressableProps } from "react-native";
import { Text } from "./Text";

export type ButtonVariant = "primary" | "warm" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const CONTAINER: Record<ButtonVariant, string> = {
  primary: "bg-teal active:bg-teal-light",
  warm: "bg-warm active:bg-warm-light",
  secondary: "border border-border-glow bg-transparent active:bg-surface-elevated",
  ghost: "bg-transparent active:bg-surface-hover",
};

const LABEL: Record<ButtonVariant, string> = {
  primary: "text-ink",
  warm: "text-text",
  secondary: "text-text-secondary",
  ghost: "text-text-muted",
};

const PAD: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2.5",
  lg: "px-6 py-3",
};

export interface ButtonProps extends Omit<PressableProps, "children"> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/** Button primitive — primary (teal), warm, secondary (outline), ghost (text). */
export function Button({
  label,
  variant = "primary",
  size = "md",
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      accessibilityRole="button"
      className={`flex-row items-center justify-center gap-2 rounded-lg ${PAD[size]} ${CONTAINER[variant]} ${disabled ? "opacity-50" : ""} ${className ?? ""}`}
      {...props}
    >
      <Text variant="caption" className={`font-semibold ${LABEL[variant]}`}>
        {label}
      </Text>
    </Pressable>
  );
}
