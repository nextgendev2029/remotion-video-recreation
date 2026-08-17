/**
 * Interpolation helpers.
 *
 * Convenience wrappers around Remotion's `interpolate()` and `spring()`
 * to reduce boilerplate in scene components.
 */

import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { ExtrapolateType } from "remotion";

/** Common extrapolation setting: clamp both ends */
const CLAMP: { extrapolateLeft: ExtrapolateType; extrapolateRight: ExtrapolateType } = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
};

/**
 * Opacity fade-in over a frame range.
 * Returns a value from 0 → 1 clamped to the given range.
 */
export function fadeIn(
  frame: number,
  startFrame: number,
  durationFrames: number,
): number {
  return interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], CLAMP);
}

/**
 * Opacity fade-out over a frame range.
 * Returns a value from 1 → 0 clamped to the given range.
 */
export function fadeOut(
  frame: number,
  startFrame: number,
  durationFrames: number,
): number {
  return interpolate(frame, [startFrame, startFrame + durationFrames], [1, 0], CLAMP);
}

/**
 * Scale entrance: 0 → 1 with clamping.
 */
export function scaleIn(
  frame: number,
  startFrame: number,
  durationFrames: number,
): number {
  return interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], CLAMP);
}

/**
 * Slide-in from a given offset to 0.
 * Returns pixel offset clamped to the given range.
 */
export function slideIn(
  frame: number,
  startFrame: number,
  durationFrames: number,
  offsetPx: number,
): number {
  return interpolate(frame, [startFrame, startFrame + durationFrames], [offsetPx, 0], CLAMP);
}

/**
 * React hook: produces a spring value that starts at a given frame offset.
 * Useful for staggering entrance animations.
 */
export function useSpringEntrance(delayFrames: number, config?: Parameters<typeof spring>[0]["config"]): number {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame: Math.max(0, frame - delayFrames),
    fps,
    config,
  });
}
