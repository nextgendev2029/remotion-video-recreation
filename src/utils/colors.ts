/**
 * Design-token color palette.
 *
 * These values are approximate starting points derived from the reference
 * analysis. They will be refined in Phase 2 once we begin visual matching.
 *
 * Naming convention:
 *   - `bg*`   → background layers
 *   - `ui*`   → interactive UI surfaces (pills, cards)
 *   - `text*` → typography
 *   - `accent` → highlights / CTAs
 */

export const COLORS = {
  /** Primary deep blue background */
  bgDeepBlue: "#0B1E45",

  /** Lighter azure gradient stop */
  bgAzure: "#1B6EF3",

  /** Light / white scene background */
  bgWhite: "#FFFFFF",

  /** Soft light-blue tint used in transitional backgrounds */
  bgLightBlue: "#D0E4FF",

  /** Default pill / card surface */
  uiWhite: "#FFFFFF",

  /** Pill border or subtle card outline */
  uiBorder: "rgba(255, 255, 255, 0.25)",

  /** Glassmorphism semi-transparent surface */
  uiGlass: "rgba(255, 255, 255, 0.15)",

  /** Primary dark text */
  textDark: "#0B1E45",

  /** Light text on dark backgrounds */
  textLight: "#FFFFFF",

  /** Subdued / secondary text */
  textMuted: "rgba(11, 30, 69, 0.6)",

  /** Accent blue for CTAs and interactive elements */
  accent: "#2563EB",
} as const;

/** Type-safe color key */
export type ColorKey = keyof typeof COLORS;
