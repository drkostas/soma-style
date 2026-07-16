# soma-style

Shared design tokens for the soma ecosystem. One source of truth for macro colors, the chart palette, and the Tailwind v4 theme, so soma and the standalone macro-engine / hevy2garmin / garmin-auth UIs all render the same palette instead of each copy-pasting hex values.

## Install

```bash
npm install soma-style
```

## Use it

### TypeScript tokens

```ts
import { MACRO_COLORS, progressColor, deficitColor, ChartColors } from "soma-style";

MACRO_COLORS.protein.hex;   // "#B17850"
MACRO_COLORS.protein.bg;    // "bg-warm"      (Tailwind class, needs theme.css)
MACRO_COLORS.protein.cssVar // "--macro-protein" (needs tokens.css)

progressColor(102);         // "text-success"
deficitColor(450, 500);     // "text-warning"
```

### Tailwind v4 apps

Import the theme after Tailwind so the macro/status classes resolve:

```css
@import "tailwindcss";
@import "soma-style/theme.css";
```

Now `bg-warm`, `text-indigo`, `bg-teal`, `text-success`, etc. map to the design-spec colors.

### Non-Tailwind apps

Import the plain CSS variables and reference them directly:

```css
@import "soma-style/tokens.css";
```

```css
.protein { color: var(--macro-protein); }
```

## The palette

| Macro    | Hex       | Tailwind      | CSS var            |
| -------- | --------- | ------------- | ------------------ |
| calories | `#77C8D1` | `teal`        | `--macro-calories` |
| protein  | `#B17850` | `warm`        | `--macro-protein`  |
| carbs    | `#6366B0` | `indigo`      | `--macro-carbs`    |
| fat      | `#CBE896` | `lime`        | `--macro-fat`      |
| fiber    | `#82D0C8` | `teal-light`  | `--macro-fiber`    |

Status colors (`success` / `warning` / `danger`) back `progressColor` and `deficitColor`.

## Develop

```bash
npm run build   # tsc → dist/
npm test        # vitest
```
