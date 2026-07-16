import "./global.css";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Text, Button, Card, Pill, PillGroup, Badge, Input, Stepper,
  ProgressBar, MacroBar, Ring, Modal, SegmentedControl, NavBar,
} from "soma-style";

const MACROS = [
  { label: "Cal", color: "#77c8d1", cls: "text-teal", val: 0, target: 1888 },
  { label: "Pro", color: "#b17850", cls: "text-warm", val: 0, target: 184 },
  { label: "Carb", color: "#6366b0", cls: "text-indigo", val: 0, target: 144 },
  { label: "Fat", color: "#cbe896", cls: "text-lime", val: 0, target: 64 },
  { label: "Fiber", color: "#82d0c8", cls: "text-fiber", val: 0, target: 31 },
];

export default function App() {
  const [nav, setNav] = useState("home");
  const [tab, setTab] = useState<"Week" | "Progress" | "Year">("Week");
  const [band, setBand] = useState("Active");
  const [steps, setSteps] = useState(10000);
  const [modal, setModal] = useState(false);

  return (
    <View className="flex-1 bg-base">
      <StatusBar style="light" />
      <NavBar
        brand="soma-style"
        items={[{ key: "home", label: "Home" }, { key: "foods", label: "Foods" }, { key: "settings", label: "Settings" }]}
        active={nav}
        onSelect={setNav}
      />
      <ScrollView contentContainerClassName="p-5 gap-4" className="flex-1">
        {/* Day header */}
        <View className="flex-row items-center gap-2">
          <Text variant="title">Thursday, Jul 16</Text>
          <Badge label="Rest" tone="neutral" />
          <Badge label="T2 · Standard Cut" tone="teal" />
        </View>

        {/* Hero card */}
        <Card variant="glow" className="gap-4">
          <SegmentedControl options={["Week", "Progress", "Year"] as const} value={tab} onChange={setTab} />

          <View className="flex-row items-end gap-2">
            <Text variant="display">0</Text>
            <Text variant="title" className="text-text-muted">/ 1,888 kcal</Text>
          </View>
          <Text variant="caption" className="text-danger">1,888 remaining · 0% complete</Text>

          {/* Macro columns with rings */}
          <View className="mt-1 flex-row justify-between">
            {MACROS.map((m) => (
              <View key={m.label} className="items-center gap-1">
                <Ring pct={0} size={44} color={m.color} label="0%" />
                <Text variant="micro">{m.label}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Activity card */}
        <Card className="gap-3">
          <Text variant="eyebrow">Activity</Text>
          <View className="flex-row items-center justify-between">
            <Button label="Run OFF" variant="secondary" size="sm" />
            <Stepper value={steps} onChange={setSteps} step={1000} min={0} />
          </View>
          <PillGroup>
            {["Sedentary", "Light", "Active", "Very Active"].map((b) => (
              <Pill key={b} label={b} active={band === b} onPress={() => setBand(b)} />
            ))}
          </PillGroup>
        </Card>

        {/* Meal cards */}
        {[
          { name: "Breakfast", kcal: 529, segs: [{ macro: "protein", value: 46 }, { macro: "carbs", value: 40 }, { macro: "fat", value: 18 }, { macro: "fiber", value: 6 }] },
          { name: "Lunch", kcal: 472, segs: [{ macro: "protein", value: 46 }, { macro: "carbs", value: 36 }, { macro: "fat", value: 16 }, { macro: "fiber", value: 9 }] },
        ].map((meal) => (
          <Card key={meal.name} className="gap-2">
            <View className="flex-row items-center justify-between">
              <Text variant="title">{meal.name}</Text>
              <Text variant="caption" className="text-text-secondary tabular-nums">{meal.kcal} kcal</Text>
            </View>
            <MacroBar segments={meal.segs as any} className="my-1" />
            <View className="flex-row items-center gap-2">
              <Button label={`Log ${meal.name}`} variant="secondary" size="sm" className="flex-1" />
              <Button label="Skip" variant="ghost" size="sm" />
            </View>
          </Card>
        ))}

        {/* Weekly deficit progress + adherence */}
        <Card className="gap-3">
          <Text variant="eyebrow">Weekly deficit</Text>
          <ProgressBar pct={0.72} color="#6ad4a0" />
          <View className="flex-row items-center justify-between">
            <Text variant="caption" className="text-text-secondary">Adherence</Text>
            <Text variant="caption" className="text-warning">over goal · 317%</Text>
          </View>
        </Card>

        {/* Inputs + modal trigger */}
        <Card className="gap-3">
          <Text variant="eyebrow">Profile</Text>
          <Input placeholder="Search foods (e.g. chicken, banana)…" />
          <Button label="Plan a refeed" variant="primary" onPress={() => setModal(true)} />
        </Card>
      </ScrollView>

      <Modal visible={modal} onClose={() => setModal(false)} title="Plan a refeed">
        <Text variant="body" className="text-text-secondary">
          A refeed raises carbs for a day to ease a long deficit. Your targets update instantly.
        </Text>
        <View className="mt-4 flex-row justify-end gap-2">
          <Button label="Cancel" variant="ghost" onPress={() => setModal(false)} />
          <Button label="Add refeed" variant="primary" onPress={() => setModal(false)} />
        </View>
      </Modal>
    </View>
  );
}
