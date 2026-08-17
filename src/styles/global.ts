/**
 * Global CSS styles applied to the Remotion composition.
 *
 * Phase 1: basic resets and font setup.
 * Phase 2: will add @font-face declarations for custom fonts.
 */

/**
 * Returns CSS string for injection into <style> tags or Remotion's global style mechanism.
 * Currently used as a reference — actual injection happens via index.css or
 * inline styles in the composition.
 */
export const GLOBAL_STYLES = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
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
    width: "100%",
    height: "100%",
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
