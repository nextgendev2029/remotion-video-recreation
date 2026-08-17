/**
 * Custom easing curves for animations.
 *
 * These are thin wrappers / presets around Remotion's Easing module,
 * centralised so we can tune the motion feel from a single file.
 */

import { Easing } from "remotion";

/** Smooth ease-out used for most entrance animations */
export const easeOutQuart = Easing.out(Easing.poly(4));

/** Smooth ease-in-out for transitions */
export const easeInOutCubic = Easing.inOut(Easing.poly(3));

/** Gentle ease-in for exit animations */
export const easeInQuad = Easing.in(Easing.poly(2));

/** Snappy ease-out for UI element pop-ins */
export const easeOutBack = Easing.out(Easing.back(1.4));

/** Smooth ease-in-out for scale transformations */
export const easeInOutQuint = Easing.inOut(Easing.poly(5));
