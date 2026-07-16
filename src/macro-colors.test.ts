import { describe, it, expect } from "vitest";
import { MACRO_COLORS, progressColor, deficitColor, type Macro } from "./macro-colors";

describe("MACRO_COLORS", () => {
  it("defines all five macros with the design-spec hex values", () => {
    expect(MACRO_COLORS.calories.hex).toBe("#77C8D1");
    expect(MACRO_COLORS.protein.hex).toBe("#B17850");
    expect(MACRO_COLORS.carbs.hex).toBe("#6366B0");
    expect(MACRO_COLORS.fat.hex).toBe("#CBE896");
    expect(MACRO_COLORS.fiber.hex).toBe("#82D0C8");
  });

  it("keeps Tailwind class names drop-in compatible with the earlier spec", () => {
    expect(MACRO_COLORS.protein).toMatchObject({ text: "text-warm", bg: "bg-warm", border: "border-warm" });
    expect(MACRO_COLORS.carbs).toMatchObject({ text: "text-indigo", bg: "bg-indigo", border: "border-indigo" });
  });

  it("exposes a CSS var name per macro matching tokens.css", () => {
    (Object.keys(MACRO_COLORS) as Macro[]).forEach((m) => {
      expect(MACRO_COLORS[m].cssVar).toBe(`--macro-${m}`);
    });
  });
});

describe("progressColor", () => {
  it("is on-target within 90-110%", () => {
    expect(progressColor(100)).toBe("text-success");
    expect(progressColor(90)).toBe("text-success");
    expect(progressColor(110)).toBe("text-success");
  });
  it("warns when approaching (70-89% or 111-120%)", () => {
    expect(progressColor(80)).toBe("text-warning");
    expect(progressColor(115)).toBe("text-warning");
  });
  it("flags danger below 70% or above 120%", () => {
    expect(progressColor(50)).toBe("text-danger");
    expect(progressColor(130)).toBe("text-danger");
  });
});

describe("deficitColor", () => {
  it("is muted when there is no goal", () => {
    expect(deficitColor(200, 0)).toBe("text-muted-foreground");
  });
  it("is success at or above goal, warning within 100 kcal, danger below", () => {
    expect(deficitColor(500, 500)).toBe("text-success");
    expect(deficitColor(450, 500)).toBe("text-warning");
    expect(deficitColor(300, 500)).toBe("text-danger");
  });
});
