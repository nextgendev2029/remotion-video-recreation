/**
 * Scene 08 — Checkmark + Logo Reveal
 * Frames 870–960 (0:29–0:32)
 *
 * Animation sequence (from reference):
 * f0–5:    Transition from Scene 7 CTA — white background fades in
 * f5–15:   Blue circle with white checkmark scales in (spring bounce)
 * f15–25:  Checkmark holds centered
 * f25–35:  Checkmark fades/scales out
 * f35–50:  Nitor logo fades/scales in (with "An Ascendion Company" tagline)
 * f50–90:  Logo holds centered until end
 *
 * Logo from reference:
 * - "Nitor" in dark/black text, distinctive font
 * - The "o" has a red/maroon circular swoosh accent
 * - Below: "An Ascendion Company" (Ascendion in bold)
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

/** Blue checkmark circle color — matches reference */
const CHECKMARK_BLUE = "#0000FF";

/**
 * Checkmark circle component — solid blue circle with white check
 */
const CheckmarkCircle: React.FC<{
  scale: number;
  opacity: number;
}> = ({ scale, opacity }) => (
  <div
    style={{
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: CHECKMARK_BLUE,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: `scale(${scale})`,
      transformOrigin: "center center",
      opacity,
      boxShadow: "0 8px 32px rgba(0, 0, 255, 0.25)",
    }}
  >
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 12.5L10 16.5L18 8.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/**
 * Nitor logo component — recreated from reference video frame.
 * Black text "Nitor" with red swoosh accent on the "o",
 * with "An Ascendion Company" tagline below.
 */
const NitorLogo: React.FC<{ opacity: number; scale: number }> = ({
  opacity,
  scale,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      transform: `scale(${scale * 1.15})`,
      transformOrigin: "center center",
      opacity,
    }}
  >
    {/* Nitor text with distinctive styling */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
      }}
    >
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* Single "Nitor" text — ensures natural letter spacing */}
        <text
          x="4"
          y="68"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="70"
          fontWeight="400"
          fill="#1A1A1A"
          letterSpacing="-1"
        >
          Nitor
        </text>

        {/* Red swoosh accent positioned over the "o" glyph */}
        <path
          d="M148 28 Q164 14, 169 22 Q174 32, 161 38 Q148 44, 138 37 Q131 31, 136 24 Q141 18, 148 28Z"
          fill="#B91C1C"
        />
        <path
          d="M148 25 Q151 18, 157 16 Q163 14, 167 19"
          fill="none"
          stroke="#B91C1C"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Tagline: "An Ascendion Company" */}
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 17,
        fontWeight: 400,
        color: "#4A4A4A",
        letterSpacing: 0.6,
        marginTop: -6,
      }}
    >
      An{" "}
      <span style={{ fontWeight: 700, color: "#1A1A1A" }}>Ascendion</span>{" "}
      Company
    </div>
  </div>
);

export const Scene08: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Checkmark spring entrance
  const checkSpring = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 12, stiffness: 120, mass: 0.7 },
  });

  // Checkmark exit
  const checkExitOpacity = interpolate(
    frame,
    [25, 35],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const checkExitScale = interpolate(
    frame,
    [25, 35],
    [1, 0.6],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Logo entrance
  const logoSpring = spring({
    frame: Math.max(0, frame - 35),
    fps,
    config: { damping: 15, stiffness: 80, mass: 0.8 },
  });

  const logoOpacity = interpolate(
    frame,
    [35, 45],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // White bg transition from Scene 7
  const bgOpacity = interpolate(
    frame,
    [0, 8],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: "#F5F7FA",
      }}
    >
      {/* White overlay for transition */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#F5F7FA",
          opacity: bgOpacity,
        }}
      />

      {/* Checkmark circle */}
      {frame >= 5 && frame <= 40 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckmarkCircle
            scale={checkSpring * checkExitScale}
            opacity={checkExitOpacity}
          />
        </div>
      )}

      {/* Nitor logo */}
      {frame >= 33 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NitorLogo
            opacity={logoOpacity}
            scale={0.85 + logoSpring * 0.15}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
