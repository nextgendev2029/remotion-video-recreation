/**
 * Scene 08 — Logo Animation
 * Frames 870–960 (0:29–0:32)
 *
 * Reference: White background. Nitor logo animation.
 *
 * Phase 1: simple text placeholder for the logo.
 * Phase 2: will use actual logo asset when available.
 */

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene08: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = interpolate(frame, [0, 25], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: COLORS.bgWhite,
        ...styleFragments.flexColumnCenter,
      }}
    >
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <AnimatedText
          text="NITOR"
          fontSize={72}
          fontWeight={800}
          color={COLORS.textDark}
          style={{ letterSpacing: 12 }}
        />
        <AnimatedText
          text="[Logo Placeholder]"
          fontSize={14}
          fontWeight={400}
          color={COLORS.textMuted}
          style={{ marginTop: 8 }}
        />
      </div>

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
        Scene 08 — Logo | Frames 870–960 | Frame {frame}
      </div>
    </div>
  );
};
