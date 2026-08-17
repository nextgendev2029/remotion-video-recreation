/**
 * Scene 02 — Glassmorphism Pill + Blobs
 * Frames 90–180 (0:03–0:06)
 *
 * Reference: Glassmorphism pill over moving blue blobs. Inner pill translates.
 *
 * Phase 1: placeholder with glass card and scene label.
 */

import React from "react";
import { useCurrentFrame } from "remotion";
import { FluidBackground } from "../components/FluidBackground";
import { GlassCard } from "../components/GlassCard";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();

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
        <GlassCard width={500} height={120} borderRadius={60}>
          <AnimatedText
            text="Scene 02 — Glassmorphism"
            fontSize={20}
            fontWeight={500}
            color={COLORS.textLight}
          />
        </GlassCard>

        <div
          style={{
            marginTop: 24,
            color: COLORS.textLight,
            fontSize: 14,
            opacity: 0.5,
            fontFamily: "monospace",
          }}
        >
          Frames 90–180 | Frame {frame}
        </div>
      </div>
    </div>
  );
};
