/**
 * Scene 06 — Scale Pill + Floating Elements
 * Frames 750–810 (0:25–0:27)
 *
 * Static visual: Blue background with "Scale!" pill in center.
 * Floating decorative geometric pill elements around it with
 * gradients, shadows, and depth cues.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { Pill } from "../components/Pill";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

/** Floating decorative pill element configuration */
interface FloatingPill {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  background: string;
  opacity: number;
}

const FLOATING_PILLS: FloatingPill[] = [
  // Top left
  { x: 280, y: 200, width: 120, height: 44, rotation: -15, background: "rgba(255,255,255,0.15)", opacity: 0.7 },
  // Top right
  { x: 1500, y: 250, width: 100, height: 36, rotation: 12, background: "rgba(255,255,255,0.12)", opacity: 0.6 },
  // Left mid
  { x: 180, y: 520, width: 140, height: 48, rotation: -8, background: `linear-gradient(135deg, ${COLORS.bgAzure}40, ${COLORS.pillIndigo}30)`, opacity: 0.5 },
  // Right mid
  { x: 1600, y: 480, width: 110, height: 40, rotation: 20, background: "rgba(255,255,255,0.1)", opacity: 0.5 },
  // Bottom left
  { x: 350, y: 780, width: 90, height: 34, rotation: 10, background: `linear-gradient(135deg, ${COLORS.pillViolet}30, ${COLORS.bgAzure}20)`, opacity: 0.45 },
  // Bottom right
  { x: 1450, y: 750, width: 130, height: 42, rotation: -18, background: "rgba(255,255,255,0.12)", opacity: 0.55 },
  // Small top center-left
  { x: 600, y: 300, width: 80, height: 30, rotation: 5, background: "rgba(255,255,255,0.08)", opacity: 0.4 },
  // Small bottom center-right
  { x: 1200, y: 700, width: 70, height: 28, rotation: -10, background: "rgba(255,255,255,0.1)", opacity: 0.35 },
];

export const Scene06: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${COLORS.bgVibrantBlue} 0%, ${COLORS.bgDeepBlue} 80%)`,
      }}
    >
      {/* Floating decorative pill elements */}
      {FLOATING_PILLS.map((pill, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: pill.x,
            top: pill.y,
            width: pill.width,
            height: pill.height,
            borderRadius: pill.height / 2,
            background: pill.background,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transform: `rotate(${pill.rotation}deg)`,
            opacity: pill.opacity,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        />
      ))}

      {/* Central "Scale!" pill */}
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        <Pill
          width={280}
          height={72}
          background={`linear-gradient(135deg, ${COLORS.bgAzure}, ${COLORS.pillIndigo})`}
          boxShadow={`0 12px 48px rgba(37, 99, 235, 0.4), 0 4px 16px rgba(0, 0, 0, 0.15)`}
        >
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 28,
              fontWeight: FONT_WEIGHTS.bold,
              color: COLORS.textLight,
              letterSpacing: -0.5,
            }}
          >
            Scale!
          </span>
        </Pill>
      </div>
    </AbsoluteFill>
  );
};
