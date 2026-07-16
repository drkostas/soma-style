import { Text as RNText, type TextProps } from "react-native";

export type TextVariant =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "caption"
  | "eyebrow"
  | "micro";

const VARIANTS: Record<TextVariant, string> = {
  display: "text-display text-text",
  headline: "text-headline text-text",
  title: "text-title text-text",
  body: "text-body text-text",
  caption: "text-caption text-text",
  eyebrow: "text-eyebrow text-text-muted uppercase",
  micro: "text-micro text-text-muted",
};

export interface SomaTextProps extends TextProps {
  variant?: TextVariant;
  /** Extra NativeWind classes (e.g. a color override like `text-warm`). */
  className?: string;
}

/** Typography primitive — the shared type scale, matching the web `.t-*` classes. */
export function Text({ variant = "body", className, ...props }: SomaTextProps) {
  return <RNText className={`${VARIANTS[variant]} ${className ?? ""}`} {...props} />;
}
