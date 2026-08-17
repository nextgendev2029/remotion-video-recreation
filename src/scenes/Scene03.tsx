/**
 * Scene 03 — Rapid Text Transitions
 * Frames 180–300 (0:06–0:10)
 *
 * Reference: Rapid text transitions. Background shifts through light blue,
 * deep blue and white.
 *
 * Phase 1: placeholder with scene label.
 */

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase 1: simple color cycling to show the background shifting concept
  const colorProgress = interpolate(frame, [0, 60, 120], [0, 0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bgColor =
    colorProgress < 0.33
      ? COLORS.bgLightBlue
      : colorProgress < 0.66
        ? COLORS.bgDeepBlue
        : COLORS.bgWhite;

  const textColor = colorProgress > 0.66 ? COLORS.textDark : COLORS.textLight;

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: bgColor,
        transition: "background 0.3s",
        ...styleFragments.flexColumnCenter,
      }}
    >
      <AnimatedText
        text="Scene 03 — Rapid Text"
        fontSize={48}
        fontWeight={700}
        color={textColor}
      />

      <div
        style={{
          marginTop: 24,
          color: textColor,
          fontSize: 14,
          opacity: 0.5,
          fontFamily: "monospace",
        }}
      >
        Frames 180–300 | Frame {frame}
      </div>
    </div>
  );
};
