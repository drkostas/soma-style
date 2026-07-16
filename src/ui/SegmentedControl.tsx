import { Pressable, View } from "react-native";
import { Text } from "./Text";

export interface SegmentedControlProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
}

/** Tab-strip style segmented control (Week/Progress/Year, settings tabs). */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <View className={`flex-row gap-1 rounded-lg border border-border-subtle bg-surface p-1 ${className ?? ""}`}>
      {options.map((opt) => {
        const active = opt === value;
        return (
          <Pressable
            key={opt}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => onChange(opt)}
            className={`flex-1 items-center rounded-md px-3 py-1.5 ${active ? "bg-teal-bg" : "active:bg-surface-hover"}`}
          >
            <Text variant="caption" className={`font-semibold ${active ? "text-teal" : "text-text-muted"}`}>
              {opt}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
