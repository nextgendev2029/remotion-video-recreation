/**
 * Spring animation presets.
 *
 * Centralized spring configurations that can be used with Remotion's
 * `spring()` function. Tune these in one place to adjust the overall
 * motion personality.
 */

import { SpringConfig } from "remotion";

/** Default spring — slightly bouncy, medium speed */
export const SPRING_DEFAULT: SpringConfig = {
  damping: 12,
  stiffness: 100,
  mass: 0.5,
  overshootClamping: false,
};

/** Snappy spring for quick UI element appearances */
export const SPRING_SNAPPY: SpringConfig = {
  damping: 15,
  stiffness: 200,
  mass: 0.4,
  overshootClamping: false,
};

/** Gentle spring for soft floating / background motion */
export const SPRING_GENTLE: SpringConfig = {
  damping: 20,
  stiffness: 60,
  mass: 1,
  overshootClamping: false,
};

/** Bouncy spring for playful pop-in effects */
export const SPRING_BOUNCY: SpringConfig = {
  damping: 8,
  stiffness: 150,
  mass: 0.6,
  overshootClamping: false,
};

/** Heavy spring for large-scale transforms (e.g. zoom typography) */
export const SPRING_HEAVY: SpringConfig = {
  damping: 18,
  stiffness: 80,
  mass: 1.2,
  overshootClamping: false,
};
