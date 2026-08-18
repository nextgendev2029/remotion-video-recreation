/**
 * Centralized typography system.
 *
 * All font-family, weight, size, spacing, and line-height values
 * are defined here. Components reference these tokens instead of
 * hardcoding font values.
 */

/** Primary font stack — Inter loaded via @font-face in index.css */
export const FONT_FAMILY =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";

/** Font weight tokens */
export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

/** Pre-defined text styles for common use cases */
export const TEXT_STYLES = {
  /** Scene 1 pill text: "Seeking smarter..." */
  pillText: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.medium,
    letterSpacing: -0.2,
    lineHeight: 1.2,
  },

  /** Scene 3 large text transitions */
  displayLarge: {
    fontFamily: FONT_FAMILY,
    fontSize: 72,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: -1.5,
    lineHeight: 1.1,
  },

  /** Scene 4 pill labels */
  pillLabel: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: -0.1,
    lineHeight: 1.3,
  },

  /** Scene 5 zoom typography words */
  zoomWord: {
    fontFamily: FONT_FAMILY,
    fontSize: 120,
    fontWeight: FONT_WEIGHTS.extrabold,
    letterSpacing: -3,
    lineHeight: 1.0,
  },

  /** Scene 6 "Scale!" pill text */
  scalePill: {
    fontFamily: FONT_FAMILY,
    fontSize: 28,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: -0.5,
    lineHeight: 1.2,
  },

  /** Scene 7 CTA heading */
  ctaHeading: {
    fontFamily: FONT_FAMILY,
    fontSize: 48,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: -1,
    lineHeight: 1.15,
  },

  /** Scene 7 CTA button text */
  ctaButton: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: -0.2,
    lineHeight: 1.2,
  },

  /** Scene 8 logo text placeholder */
  logoText: {
    fontFamily: FONT_FAMILY,
    fontSize: 56,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: 4,
    lineHeight: 1.1,
  },

  /** Small caption text */
  caption: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
} as const;
