/**
 * Scene 06 — Scale Pill + Floating Elements
 * Frames 750–810 (0:25–0:27)
 *
 * Reference: "Scale!" transitions into a pill. Decorative floating
 * geometric pill elements.
 *
 * Phase 1: placeholder with pill and sparkle icons.
 */

import React from "react";
import { useCurrentFrame } from "remotion";
import { Pill } from "../components/Pill";
import { AnimatedText } from "../components/AnimatedText";
import { SparkleIcon } from "../components/icons";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene06: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: COLORS.bgWhite,
        ...styleFragments.flexColumnCenter,
      }}
    >
      {/* Floating decorative sparkles */}
      <SparkleIcon
        size={32}
        color={COLORS.accent}
        style={{ position: "absolute", top: 200, left: 300, opacity: 0.3 }}
      />
      <SparkleIcon
        size={20}
        color={COLORS.bgAzure}
        style={{ position: "absolute", top: 350, right: 400, opacity: 0.25 }}
      />
      <SparkleIcon
        size={28}
        color={COLORS.accent}
        style={{ position: "absolute", bottom: 250, left: 500, opacity: 0.2 }}
      />

      <Pill width={300} height={64} background={COLORS.accent}>
        <AnimatedText
          text="Scale!"
          fontSize={24}
          fontWeight={700}
          color={COLORS.textLight}
        />
      </Pill>

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
        Scene 06 — Scale Pill | Frames 750–810 | Frame {frame}
      </div>
    </div>
  );
};
