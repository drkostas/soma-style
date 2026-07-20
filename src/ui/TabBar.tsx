import { Pressable, View } from "react-native";
import Svg, { Line } from "react-native-svg";

/* Shared bottom-tab-bar chrome for the ecosystem's Expo Router apps (soma,
   macro-engine, …). The routing stays app-local (each app declares its own
   Tabs.Screen set); this owns the *look* so every app's tab bar is identical.
   Tokens mirror preset.js — the tab bar is native chrome, so it reads them as
   values rather than NativeWind classes. */

const TEAL = "#77c8d1";
const MUTED = "#5a7a8a";
const SURFACE = "#0e1a26";
const BORDER = "#1a3040";
const INK = "#0a1720";
const BASE = "#0a1720";

/**
 * Spread into an Expo Router `<Tabs screenOptions={tabBarScreenOptions}>`. Apps
 * add per-screen `title` + `tabBarIcon`. Kept as a plain object so soma-style
 * needs no expo-router / react-navigation dependency.
 */
export const tabBarScreenOptions = {
  headerShown: false as const,
  tabBarActiveTintColor: TEAL,
  tabBarInactiveTintColor: MUTED,
  tabBarStyle: { backgroundColor: SURFACE, borderTopColor: BORDER, borderTopWidth: 1 },
  tabBarLabelStyle: { fontSize: 11, fontWeight: "600" as const },
  sceneStyle: { backgroundColor: BASE },
};

export interface CenterTabButtonProps {
  onPress: () => void;
  accessibilityLabel?: string;
}

/**
 * The raised center ⊕ tab button. Wire it to a placeholder Tabs.Screen via the
 * `tabBarButton` option; `onPress` typically opens a log/chat sheet rather than
 * navigating. Uses an SVG plus (no icon-font dependency) and a base-colored ring
 * so it reads cleanly against the tab bar on every platform.
 */
export function CenterTabButton({ onPress, accessibilityLabel = "Log" }: CenterTabButtonProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
        className="h-14 w-14 items-center justify-center rounded-full border-2 border-base bg-teal"
        style={{ marginTop: -14 }}
      >
        <Svg width={28} height={28} viewBox="0 0 28 28">
          <Line x1={14} y1={7} x2={14} y2={21} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
          <Line x1={7} y1={14} x2={21} y2={14} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
        </Svg>
      </Pressable>
    </View>
  );
}
