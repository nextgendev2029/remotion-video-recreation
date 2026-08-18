/**
 * Scene 07 — Text Sequence + CTA Pill
 * Frames 810–870 (0:27–0:29)
 *
 * Animation sequence (from reference):
 * f0–8:    "Great" text zooms in on blue gradient bg, scales up & fades
 * f8–18:   "AI" text zooms in on blue gradient bg, scales up & fades
 * f18–30:  White bg — "drives" appears (purple/indigo color)
 * f28–38:  "outcomes" appears beside "drives" (lighter blue)
 * f38–42:  Text holds, then fades
 * f42–48:  Blue gradient bg returns, glass pill appears
 * f48–60:  "Read Blog to Learn More!" text fills in word by word
 *
 * Text from reference (exact):
 * - "Great"
 * - "AI"
 * - "drives" (indigo/purple) + "outcomes" (light blue)
 * - "Read Blog to Learn More!"
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";

/** Blue gradient background used in multiple sub-phases */
const BLUE_GRADIENT = "linear-gradient(135deg, #93C5FD 0%, #3B82F6 25%, #1D4ED8 50%, #2563EB 75%, #60A5FA 100%)";

/** White background for the "drives outcomes" phase */
const WHITE_BG = "#F5F7FA";

/**
 * ZoomText sub-component for "Great" and "AI" zoom-through effect
 */
const ZoomText: React.FC<{
  text: string;
  startFrame: number;
  duration: number;
  frame: number;
  fontSize?: number;
}> = ({ text, startFrame, duration, frame, fontSize = 140 }) => {
  const localFrame = frame - startFrame;
  if (localFrame < 0 || localFrame > duration) return null;

  const progress = localFrame / duration;

  const scale = interpolate(
    progress,
    [0, 0.15, 0.5, 1.0],
    [0.5, 1.0, 1.2, 3.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = interpolate(
    progress,
    [0, 0.1, 0.55, 0.9, 1.0],
    [0, 1.0, 1.0, 0.2, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
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
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize,
          fontWeight: FONT_WEIGHTS.regular,
          color: "#FFFFFF",
          letterSpacing: -2,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          opacity,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const Scene07: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase boundaries (local frames)
  const GREAT_START = 0;
  const GREAT_END = 9;
  const AI_START = 7;
  const AI_END = 18;
  const DRIVES_START = 18;
  const DRIVES_VISIBLE = 22;
  const OUTCOMES_START = 26;
  const OUTCOMES_VISIBLE = 30;
  const TEXT_HOLD_END = 38;
  const CTA_BG_START = 36;
  const CTA_PILL_START = 40;
  const CTA_WORDS_START = 44;


  // Blue gradient opacity: visible during Great/AI, then returns for CTA
  const blueGradientOpacity = (() => {
    if (frame < AI_END) return 1;
    if (frame < DRIVES_START) {
      return interpolate(frame, [AI_END - 2, DRIVES_START], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame < CTA_BG_START) return 0;
    return interpolate(frame, [CTA_BG_START, CTA_BG_START + 5], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  })();

  // "drives" opacity
  const drivesOpacity = interpolate(
    frame,
    [DRIVES_VISIBLE - 3, DRIVES_VISIBLE, TEXT_HOLD_END - 2, TEXT_HOLD_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // "outcomes" opacity (appears slightly after "drives")
  const outcomesOpacity = interpolate(
    frame,
    [OUTCOMES_START, OUTCOMES_VISIBLE, TEXT_HOLD_END - 2, TEXT_HOLD_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // CTA pill animation
  const ctaPillSpring = spring({
    frame: Math.max(0, frame - CTA_PILL_START),
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.6 },
  });

  // CTA words: "Read", "Blog", "to", "Learn", "More!"
  const CTA_WORDS = ["Read", "Blog", "to", "Learn", "More!"];
  const wordsPerFrame = 2.5; // frames per word appearance

  return (
    <AbsoluteFill style={{ background: WHITE_BG }}>
      {/* Blue gradient layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: BLUE_GRADIENT,
          opacity: blueGradientOpacity,
        }}
      />

      {/* "Great" zoom text */}
      <ZoomText
        text="Great"
        startFrame={GREAT_START}
        duration={GREAT_END - GREAT_START}
        frame={frame}
        fontSize={160}
      />

      {/* "AI" zoom text */}
      <ZoomText
        text="AI"
        startFrame={AI_START}
        duration={AI_END - AI_START}
        frame={frame}
        fontSize={140}
      />

      {/* "drives outcomes" text phase */}
      {frame >= DRIVES_START - 2 && frame <= TEXT_HOLD_END + 2 && (
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 64,
                fontWeight: FONT_WEIGHTS.bold,
                color: "#4338CA",
                letterSpacing: -1.5,
                opacity: drivesOpacity,
              }}
            >
              drives
            </span>
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 64,
                fontWeight: FONT_WEIGHTS.bold,
                color: "#93C5FD",
                letterSpacing: -1.5,
                opacity: outcomesOpacity,
              }}
            >
              outcomes
            </span>
          </div>
        </div>
      )}

      {/* CTA pill: "Read Blog to Learn More!" */}
      {frame >= CTA_PILL_START && (
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
          <div
            style={{
              width: 560,
              height: 80,
              borderRadius: 44,
              background: "rgba(255, 255, 255, 0.15)",
              border: "1.5px solid rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transform: `scale(${ctaPillSpring})`,
              transformOrigin: "center center",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
            }}
          >
            {CTA_WORDS.map((word, i) => {
              const wordFrame = frame - CTA_WORDS_START;
              const wordDelay = i * wordsPerFrame;
              const wordOpacity = interpolate(
                wordFrame,
                [wordDelay, wordDelay + 3],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );

              return (
                <span
                  key={i}
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 28,
                    fontWeight: FONT_WEIGHTS.semibold,
                    color: "#FFFFFF",
                    letterSpacing: -0.3,
                    opacity: wordOpacity,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
