/**
 * Scene 07 — CTA + Checkmark
 * Frames 810–870 (0:27–0:29)
 *
 * Reference: CTA text and button. Circle/checkmark animation.
 *
 * Phase 1: placeholder with CTA pill and checkmark icon.
 */

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Pill } from "../components/Pill";
import { AnimatedText } from "../components/AnimatedText";
import { CheckmarkIcon } from "../components/icons";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene07: React.FC = () => {
  const frame = useCurrentFrame();

  const checkProgress = interpolate(frame, [15, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: COLORS.bgWhite,
        ...styleFragments.flexColumnCenter,
        gap: 32,
      }}
    >
      <AnimatedText
        text="Ready to get started?"
        fontSize={40}
        fontWeight={700}
        color={COLORS.textDark}
      />

      <Pill width={240} height={56} background={COLORS.accent}>
        <AnimatedText
          text="Get Started"
          fontSize={18}
          fontWeight={600}
          color={COLORS.textLight}
        />
      </Pill>

      <CheckmarkIcon
        size={64}
        color={COLORS.accent}
        progress={checkProgress}
      />

      <div
        style={{
          position: "absolute",
          bottom: 60,
          color: COLORS.textDark,
          fontSize: 14,
          opacity: 0.4,
          fontFamily: "monospace",
        }}
      >
        Scene 07 — CTA + Checkmark | Frames 810–870 | Frame {frame}
      </div>
    </div>
  );
};
