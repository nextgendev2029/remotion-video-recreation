/**
 * Global CSS-in-JS style fragments applied across the composition.
 */

import { FONT_FAMILY } from "../utils/typography";

/**
 * Returns CSS string for injection. References centralized typography.
 */
export const GLOBAL_STYLES = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${FONT_FAMILY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
` as const;

/**
 * Common style fragments reusable across components.
 */
export const styleFragments = {
  /** Absolute-fill positioning (covers parent) */
  absoluteFill: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%" as const,
    height: "100%" as const,
  },

  /** Flexbox centering */
  flexCenter: {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },

  /** Flex column centering */
  flexColumnCenter: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
} as const;
