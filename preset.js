/**
 * soma-style preset — the ecosystem's canonical design tokens as a Tailwind
 * (NativeWind) preset. Shared by every app (web + native). Colors and the type
 * scale live here so `bg-surface`, `text-warm`, `text-title`, etc. resolve the
 * same everywhere.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Surfaces (deepest → most raised)
        base: "#0a1720",
        // Dark ink for text on light accents (teal/lime buttons) — avoids the
        // `text-base` (font-size) vs `base` (color) utility collision.
        ink: "#0a1720",
        surface: {
          DEFAULT: "#0e1a26",
          elevated: "#152232",
          hover: "#1a2e3c",
          active: "#1e3140",
        },
        // Borders
        border: {
          DEFAULT: "#1a3040",
          subtle: "#142530",
          glow: "#233d48",
        },
        // Text
        text: {
          DEFAULT: "#fdf8f2",
          secondary: "#a0b4c0",
          muted: "#5a7a8a",
          faint: "#3a5565",
        },
        // Macro — protein (warm)
        warm: {
          DEFAULT: "#b17850",
          light: "#c7966e",
          dim: "#8a5d3a",
          bg: "#1d1510",
        },
        // Macro — calories (teal)
        teal: {
          DEFAULT: "#77c8d1",
          light: "#97d9e4",
          dim: "#4a8a95",
          bg: "#0d1f22",
        },
        // Macro — carbs (indigo)
        indigo: {
          DEFAULT: "#6366b0",
          light: "#8184cc",
          dim: "#3e458b",
          bg: "#121420",
        },
        // Macro — fat (lime)
        lime: {
          DEFAULT: "#cbe896",
          dim: "#8ab060",
          bg: "#131d10",
        },
        // Macro — fiber
        fiber: "#82d0c8",
        // Status
        success: "#6ad4a0",
        warning: "#e0a458",
        danger: "#e06060",
      },
      fontSize: {
        // Typography scale (matches the web .t-* classes)
        display: ["48px", { lineHeight: "48px", fontWeight: "700", letterSpacing: "-1.4px" }],
        headline: ["24px", { lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.5px" }],
        title: ["18px", { lineHeight: "22px", fontWeight: "600", letterSpacing: "-0.2px" }],
        body: ["14px", { lineHeight: "21px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "17px", fontWeight: "500" }],
        eyebrow: ["11px", { lineHeight: "11px", fontWeight: "600", letterSpacing: "0.9px" }],
        micro: ["10px", { lineHeight: "12px", fontWeight: "500" }],
      },
    },
  },
};
