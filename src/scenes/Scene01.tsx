/**
 * Scene 01 — Pill Scale-In + Typing
 * Frames 0–90 (0:00–0:03)
 *
 * Reference: Fluid blue background. White pill scales in. Typing/reveal text.
 *
 * Phase 1: placeholder with scene label and colored background.
 */

import React from "react";
import { useCurrentFrame } from "remotion";
import { FluidBackground } from "../components/FluidBackground";
import { Pill } from "../components/Pill";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase 2: animate pill scale-in and text typing
  const pillOpacity = Math.min(1, frame / 15);
  const pillScale = Math.min(1, frame / 20);

  return (
    <div style={{ ...styleFragments.absoluteFill }}>
      <FluidBackground
        primaryColor={COLORS.bgDeepBlue}
        secondaryColor={COLORS.bgAzure}
      />
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        <Pill
          width={400}
          height={56}
          opacity={pillOpacity}
          transform={`scale(${pillScale})`}
        >
          <AnimatedText
            text="Scene 01 — Pill Scale-In"
            fontSize={18}
            fontWeight={500}
            color={COLORS.textDark}
          />
        </Pill>

        {/* Phase 1 label */}
        <div
          style={{
            marginTop: 24,
            color: COLORS.textLight,
            fontSize: 14,
            opacity: 0.5,
            fontFamily: "monospace",
          }}
        >
          Frames 0–90 | Frame {frame}
        </div>
      </div>
    </div>
  );
};
