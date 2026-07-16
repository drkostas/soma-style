import { Pressable, View } from "react-native";
import { Text } from "./Text";

export interface NavItem {
  key: string;
  label: string;
}

export interface NavBarProps {
  brand: string;
  items: NavItem[];
  active: string;
  onSelect: (key: string) => void;
  className?: string;
}

/** Top navigation bar with brand + items and a warm active highlight. */
export function NavBar({ brand, items, active, onSelect, className }: NavBarProps) {
  return (
    <View className={`flex-row items-center justify-between border-b border-border bg-surface px-5 py-3 ${className ?? ""}`}>
      <Text variant="title" className="font-bold">{brand}</Text>
      <View className="flex-row gap-1">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <Pressable
              key={it.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              onPress={() => onSelect(it.key)}
              className={`rounded-lg px-3 py-1.5 ${isActive ? "bg-warm/20" : "active:bg-surface-hover"}`}
            >
              <Text variant="caption" className={`font-medium ${isActive ? "text-warm" : "text-text-secondary"}`}>
                {it.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
