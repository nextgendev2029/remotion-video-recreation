/**
 * Scene 06 — Scale! Pill + Floating Elements
 * Frames 750–810 (0:25–0:27)
 *
 * Animation sequence (from reference):
 * f0:   Scene arrives — blue gradient background
 * f0–15: "Scale!" pill and floating elements scale in from small
 * f15–60: Elements slowly drift outward + scale up subtly
 *
 * Layout:
 * - Center: "Scale!" pill with purple-blue to white/lavender gradient
 * - 6 floating decorative elements around it:
 *   1. Top-left: wide navy/purple capsule (gradient bar)
 *   2. Top-right: small purple/lavender square-ish capsule
 *   3. Left: lavender/pink semi-transparent capsule
 *   4. Bottom-left: dark blue/purple capsule
 *   5. Bottom-right: wave pattern card (white with sine wave line)
 *   6. Additional small capsule
 *
 * Transition from Scene 5: white bg → blue gradient (handled by Scene 5 ending)
 * Also includes "Great" and "AI" text zoom before the Scale pill scene fully settles
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
} from "remotion";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";

/** Floating element configuration */
interface FloatingElement {
  /** Center X position (relative to 1920) */
  x: number;
  /** Center Y position (relative to 1080) */
  y: number;
  width: number;
  height: number;
  rotation: number;
  background: string;
  borderRadius: number;
  opacity: number;
  /** Whether this element has an internal pattern (wave) */
  hasWavePattern?: boolean;
  /** Drift direction multiplier for animation */
  driftX: number;
  driftY: number;
}

const FLOATING_ELEMENTS: FloatingElement[] = [
  // Top-left: wide navy-purple gradient bar
  {
    x: 520, y: 230, width: 280, height: 55, rotation: -2,
    background: "linear-gradient(135deg, #1E3A8A, #4338CA)",
    borderRadius: 12, opacity: 0.95, driftX: -0.8, driftY: -0.6,
  },
  // Top-right: small purple/lavender capsule
  {
    x: 1180, y: 260, width: 140, height: 70, rotation: 3,
    background: "linear-gradient(135deg, #A78BFA, #DDD6FE, #EDE9FE)",
    borderRadius: 14, opacity: 0.85, driftX: 0.9, driftY: -0.5,
  },
  // Left: lavender/pink semi-transparent capsule
  {
    x: 380, y: 440, width: 160, height: 60, rotation: -1,
    background: "linear-gradient(135deg, #C4B5FD80, #DDD6FE60, #EDE9FE40)",
    borderRadius: 12, opacity: 0.7, driftX: -0.7, driftY: 0.2,
  },
  // Below center-left: dark blue/purple capsule
  {
    x: 580, y: 600, width: 170, height: 65, rotation: 2,
    background: "linear-gradient(135deg, #1E40AF, #3B82F6, #6366F1)",
    borderRadius: 14, opacity: 0.9, driftX: -0.4, driftY: 0.7,
  },
  // Bottom-right: wave pattern card
  {
    x: 1050, y: 590, width: 250, height: 70, rotation: 1,
    background: "linear-gradient(135deg, #F0F4FF, #E8EEFF)",
    borderRadius: 14, opacity: 0.85, hasWavePattern: true,
    driftX: 0.8, driftY: 0.6,
  },
];

/** SVG wave pattern for the wave card */
const WavePattern: React.FC<{ width: number; height: number }> = ({ width, height }) => (
  <svg
    width={width - 20}
    height={height - 20}
    viewBox="0 0 200 40"
    style={{ position: "absolute", top: 10, left: 10 }}
  >
    {/* Light wave */}
    <path
      d="M0 20 Q25 5, 50 20 T100 20 T150 20 T200 20"
      fill="none"
      stroke="#A5B4FC"
      strokeWidth="2"
      opacity="0.5"
    />
    {/* Dark wave */}
    <path
      d="M0 20 Q25 35, 50 20 T100 20 T150 20 T200 20"
      fill="none"
      stroke="#4338CA"
      strokeWidth="2.5"
      opacity="0.7"
    />
  </svg>
);

export const Scene06: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scale-in spring for all elements
  const entranceSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80, mass: 0.8 },
  });

  // Slow drift progress (0 to 1 over the scene duration)
  const driftProgress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Overall scene scale (elements grow slightly over time)
  const overallScale = interpolate(frame, [0, 60], [1.0, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 30%, #2563EB 60%, #93C5FD 100%)",
      }}
    >
      {/* Container for all floating elements + pill */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: `scale(${overallScale})`,
          transformOrigin: "center center",
        }}
      >
        {/* Floating decorative elements */}
        {FLOATING_ELEMENTS.map((el, i) => {
          const driftX = el.driftX * driftProgress * 30;
          const driftY = el.driftY * driftProgress * 25;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: el.x - el.width / 2 + driftX,
                top: el.y - el.height / 2 + driftY,
                width: el.width,
                height: el.height,
                borderRadius: el.borderRadius,
                background: el.background,
                opacity: el.opacity * entranceSpring,
                transform: `rotate(${el.rotation}deg) scale(${entranceSpring})`,
                transformOrigin: "center center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
                overflow: "hidden",
              }}
            >
              {el.hasWavePattern && (
                <WavePattern width={el.width} height={el.height} />
              )}
            </div>
          );
        })}

        {/* Central "Scale!" pill */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${entranceSpring})`,
            transformOrigin: "center center",
          }}
        >
          <div
            style={{
              width: 340,
              height: 120,
              borderRadius: 24,
              background: "linear-gradient(135deg, #4338CA 0%, #6366F1 30%, #A78BFA 60%, #DDD6FE 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 48px rgba(67, 56, 202, 0.35), 0 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 42,
                fontWeight: FONT_WEIGHTS.semibold,
                color: "#FFFFFF",
                letterSpacing: -0.5,
              }}
            >
              Scale!
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
