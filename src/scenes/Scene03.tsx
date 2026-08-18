/**
 * Scene 03 — Text Reveal Sequence
 * Frames 180–300 (0:06–0:10)
 *
 * Animation sequence (from reference):
 * f0–10 (local): Transition — blob background zooms/morphs
 * f10–20: "AI tech" appears (white text on organic blob bg)
 * f20–40: "AI tech can increase" — words add one by one
 * f40–55: Background shifts to full blue gradient, "revenue by"
 * f55–70: "revenue by" holds, then ">" chevron appears
 * f70–85: "$15" appears
 * f85–100: "trillion" completes, hold
 * f100–120: Settled state, slight text shift
 *
 * Key visual details:
 * - First half: organic blob on light grey/white bg, white text
 * - Second half: full blue gradient (deep blue left, sky blue right)
 * - Text is white, bold, centered-left positioned
 * - Word-by-word reveal with scale-in effect
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { WIDTH, HEIGHT } from "../utils/constants";

/**
 * Text states with their local frame ranges (within 120-frame scene).
 * Each state defines what text is visible and the background style.
 */
interface TextPhase {
  /** Local frame when this text starts appearing */
  startFrame: number;
  /** The word to add */
  word: string;
}

/**
 * The full sentence is revealed word by word:
 * "AI tech can increase revenue by > $15 trillion"
 */
const WORD_SEQUENCE: TextPhase[] = [
  { startFrame: 12, word: "AI" },
  { startFrame: 16, word: "tech" },
  { startFrame: 28, word: "can" },
  { startFrame: 33, word: "increase" },
  { startFrame: 50, word: "revenue" },
  { startFrame: 55, word: "by" },
  { startFrame: 72, word: ">" },
  { startFrame: 78, word: "$15" },
  { startFrame: 88, word: "trillion" },
];

/** Frame at which background transitions from blob to full gradient */
const BG_TRANSITION_START = 42;
const BG_TRANSITION_END = 55;

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();

  // ── Background transition ──
  // Phase 1 (f0–42): Organic blob on light/white background
  // Phase 2 (f42–55): Crossfade to full blue gradient
  // Phase 3 (f55+): Full blue gradient
  const bgTransition = interpolate(
    frame,
    [BG_TRANSITION_START, BG_TRANSITION_END],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Blob drift for first half
  const blobX = 35 + Math.sin(frame * 0.03) * 5;
  const blobY = 45 + Math.cos(frame * 0.025) * 4;
  const blobScale = 1 + frame * 0.005; // Blob grows during scene

  // ── Word reveal ──
  const visibleWords: Array<{ word: string; opacity: number; translateY: number }> = [];

  for (const phase of WORD_SEQUENCE) {
    const wordOpacity = interpolate(
      frame,
      [phase.startFrame, phase.startFrame + 5],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const wordTranslateY = interpolate(
      frame,
      [phase.startFrame, phase.startFrame + 6],
      [20, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    if (wordOpacity > 0) {
      visibleWords.push({
        word: phase.word,
        opacity: wordOpacity,
        translateY: wordTranslateY,
      });
    }
  }

  // Text position shifts left as more words appear (to stay centered-ish)
  const textLeftShift = interpolate(
    frame,
    [12, 55, 88],
    [0, -40, -80],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Text size changes between phases
  const fontSize = interpolate(
    frame,
    [12, 42, 55],
    [42, 46, 56],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      {/* Phase 1: Light background with organic blob */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: WIDTH,
          height: HEIGHT,
          background: "#F5F7FA",
          opacity: 1 - bgTransition,
        }}
      >
        {/* Organic blob */}
        <div
          style={{
            position: "absolute",
            left: `${blobX}%`,
            top: `${blobY}%`,
            width: 600 * blobScale,
            height: 650 * blobScale,
            borderRadius: "42% 58% 35% 65% / 45% 40% 60% 55%",
            background: "linear-gradient(160deg, #93B4F7 0%, #5B7BF7 30%, #3355E8 60%, #2030D8 100%)",
            filter: "blur(20px)",
            opacity: 0.85,
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Secondary blob (lighter) */}
        <div
          style={{
            position: "absolute",
            left: `${blobX - 12}%`,
            top: `${blobY - 18}%`,
            width: 400 * blobScale,
            height: 450 * blobScale,
            borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%",
            background: "linear-gradient(135deg, #A8C4F7 0%, #7B9BF7 60%)",
            filter: "blur(25px)",
            opacity: 0.6,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Phase 2: Full blue gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: WIDTH,
          height: HEIGHT,
          background: "linear-gradient(135deg, #1E3AE8 0%, #3B6BF6 35%, #5B9BF7 65%, #7BC5F8 100%)",
          opacity: bgTransition,
        }}
      />

      {/* Text container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 120 + textLeftShift,
          paddingRight: 120,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0 16px",
            alignItems: "baseline",
          }}
        >
          {visibleWords.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONT_FAMILY,
                fontSize,
                fontWeight: FONT_WEIGHTS.regular,
                color: "#FFFFFF",
                letterSpacing: -0.5,
                lineHeight: 1.2,
                opacity: item.opacity,
                transform: `translateY(${item.translateY}px)`,
                display: "inline-block",
              }}
            >
              {item.word}
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
