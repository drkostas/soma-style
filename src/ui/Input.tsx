import { useState } from "react";
import { TextInput, View, Pressable, type TextInputProps } from "react-native";
import { Text } from "./Text";

export interface InputProps extends TextInputProps {
  className?: string;
}

/** Text / number field. */
export function Input({ className, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      placeholderTextColor="#3a5565"
      onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
      className={`rounded-md border bg-surface-elevated px-3 py-2 text-body text-text ${focused ? "border-teal-dim" : "border-border"} ${className ?? ""}`}
      {...props}
    />
  );
}

export interface StepperProps {
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
  className?: string;
}

/** Number stepper with −/+ buttons. */
export function Stepper({ value, onChange, step = 1, min, max, className }: StepperProps) {
  const clamp = (v: number) => Math.max(min ?? -Infinity, Math.min(max ?? Infinity, v));
  const Btn = ({ label, delta }: { label: string; delta: number }) => (
    <Pressable
      accessibilityRole="button"
      onPress={() => onChange(clamp(value + delta))}
      className="h-8 w-8 items-center justify-center rounded-md bg-surface-elevated active:bg-surface-hover"
    >
      <Text variant="title" className="text-text-secondary">{label}</Text>
    </Pressable>
  );
  return (
    <View className={`flex-row items-center gap-2 ${className ?? ""}`}>
      <Btn label="−" delta={-step} />
      <Text variant="body" className="min-w-16 text-center text-text tabular-nums">{value.toLocaleString()}</Text>
      <Btn label="+" delta={step} />
    </View>
  );
}
