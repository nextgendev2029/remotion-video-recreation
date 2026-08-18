/**
 * Design-token color palette — tuned to match the reference video.
 *
 * Naming convention:
 *   - `bg*`   → background layers
 *   - `ui*`   → interactive UI surfaces (pills, cards)
 *   - `text*` → typography
 *   - `accent` → highlights / CTAs
 */

export const COLORS = {
  /** Primary deep blue background (Scene 1/2 base) */
  bgDeepBlue: "#1E3A8A",

  /** Lighter azure gradient stop */
  bgAzure: "#3B82F6",

  /** Vibrant blue for radial glow / accents */
  bgVibrantBlue: "#2563EB",

  /** Light / white scene background */
  bgWhite: "#FFFFFF",

  /** Soft light-blue tint (Scene 2/3 bg) */
  bgLightBlue: "#BFDBFE",

  /** Dark navy for Scene 3 dark state */
  bgDarkNavy: "#0F172A",

  /** Default pill / card surface */
  uiWhite: "#FFFFFF",

  /** Pill border or subtle card outline */
  uiBorder: "rgba(255, 255, 255, 0.25)",

  /** Glassmorphism semi-transparent surface */
  uiGlass: "rgba(255, 255, 255, 0.12)",

  /** Glassmorphism border */
  uiGlassBorder: "rgba(255, 255, 255, 0.2)",

  /** Primary dark text */
  textDark: "#0F172A",

  /** Light text on dark backgrounds */
  textLight: "#FFFFFF",

  /** Subdued / secondary text */
  textMuted: "rgba(15, 23, 42, 0.5)",

  /** Accent blue for CTAs and interactive elements */
  accent: "#2563EB",

  /** Dark accent blue (pressed/hover state) */
  accentDark: "#1D4ED8",

  /** Pill shadow color */
  shadowBlue: "rgba(37, 99, 235, 0.25)",

  /** Generic shadow */
  shadowDark: "rgba(15, 23, 42, 0.1)",

  /** Scene 4 pill colors */
  pillBlue: "#3B82F6",
  pillIndigo: "#6366F1",
  pillViolet: "#8B5CF6",

  /** Gradient text stops */
  gradientStart: "#2563EB",
  gradientEnd: "#7C3AED",
} as const;

/** Type-safe color key */
export type ColorKey = keyof typeof COLORS;
