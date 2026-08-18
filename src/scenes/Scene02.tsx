/**
 * Scene 02 — Glassmorphism + Organic Blobs
 * Frames 90–180 (0:03–0:06)
 *
 * Animation sequence (from reference):
 * f0–5 (local): Transition from Scene 1 - bg shifts to light blue
 * f5–15: Glass card appears, blobs grow in, "AI" text starts appearing
 * f10–20: Word-by-word "AI adoption can" reveal, "remedy" typing in pill
 * f20–90: Blobs drift organically, content settled, "remedy that" pill complete
 *
 * Key visuals:
 * - Light blue background (#DBEAFE)
 * - Two large organic purple-blue blobs behind glass card
 * - Glass card with backdrop blur, thin white border
 * - Text "AI adoption can" (bold, white) above inner pill
 * - Inner pill: sparkle icon + "remedy that" + search icon
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { WIDTH, HEIGHT } from "../utils/constants";

/** Scene 2 text from reference */
const HEADING_TEXT = "AI adoption can";
const PILL_TEXT = "remedy that";

/** Animation timing (local frames within this scene's 90-frame span) */
const TIMING = {
  /** Glass card fade-in */
  cardStart: 3,
  cardEnd: 12,
  /** Heading text reveal */
  headingStart: 5,
  headingEnd: 18,
  /** Inner pill appear */
  pillStart: 5,
  pillEnd: 15,
  /** Pill text typing */
  pillTypingStart: 8,
  pillTypingEnd: 25,
} as const;

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Organic blob movement (sinusoidal drift) ──
  const blob1X = 35 + Math.sin(frame * 0.025) * 8;
  const blob1Y = 30 + Math.cos(frame * 0.02) * 6;
  const blob2X = 55 + Math.cos(frame * 0.03) * 10;
  const blob2Y = 60 + Math.sin(frame * 0.022) * 8;

  // Blob scale pulsing
  const blob1Scale = 1 + Math.sin(frame * 0.015) * 0.08;
  const blob2Scale = 1 + Math.cos(frame * 0.018) * 0.06;

  // ── Glass card entrance ──
  const cardOpacity = interpolate(
    frame,
    [TIMING.cardStart, TIMING.cardEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const cardScale = spring({
    frame: Math.max(0, frame - TIMING.cardStart),
    fps,
    config: { damping: 16, stiffness: 100, mass: 0.9 },
  });

  // ── Heading text: word-by-word reveal ──
  const headingWords = HEADING_TEXT.split(" ");
  const wordProgress = interpolate(
    frame,
    [TIMING.headingStart, TIMING.headingEnd],
    [0, headingWords.length],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ── Inner pill ──
  const pillOpacity = interpolate(
    frame,
    [TIMING.pillStart, TIMING.pillEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const pillScale = spring({
    frame: Math.max(0, frame - TIMING.pillStart),
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  // Pill text typing
  const pillCharsToShow = Math.floor(
    interpolate(
      frame,
      [TIMING.pillTypingStart, TIMING.pillTypingEnd],
      [0, PILL_TEXT.length],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );
  const displayPillText = PILL_TEXT.slice(0, pillCharsToShow);

  // Blob entrance scale (blobs grow in from 0)
  const blobEntrance = interpolate(
    frame,
    [0, 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ background: "#DBEAFE" }}>
      {/* Organic blob 1 (upper-left) */}
      <div
        style={{
          position: "absolute",
          left: `${blob1X}%`,
          top: `${blob1Y}%`,
          width: 500 * blob1Scale,
          height: 550 * blob1Scale,
          borderRadius: "42% 58% 35% 65% / 45% 40% 60% 55%",
          background: "linear-gradient(135deg, #7B9BF7 0%, #4A6CF7 40%, #2545E8 100%)",
          filter: "blur(30px)",
          opacity: 0.7 * blobEntrance,
          transform: `translate(-50%, -50%) scale(${blobEntrance})`,
        }}
      />

      {/* Organic blob 2 (lower-center) */}
      <div
        style={{
          position: "absolute",
          left: `${blob2X}%`,
          top: `${blob2Y}%`,
          width: 450 * blob2Scale,
          height: 500 * blob2Scale,
          borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%",
          background: "linear-gradient(180deg, #5B7BF7 0%, #2E4DE8 50%, #1A2DD8 100%)",
          filter: "blur(25px)",
          opacity: 0.75 * blobEntrance,
          transform: `translate(-50%, -50%) scale(${blobEntrance})`,
        }}
      />

      {/* Glass card container */}
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
        }}
      >
        <div
          style={{
            width: 650,
            height: 280,
            borderRadius: 40,
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1.5px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            opacity: cardOpacity,
            transform: `scale(${cardScale})`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Heading: "AI adoption can" - word by word */}
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 48,
              fontWeight: FONT_WEIGHTS.bold,
              color: COLORS.textDark,
              letterSpacing: -1,
              lineHeight: 1.1,
              display: "flex",
              gap: 14,
            }}
          >
            {headingWords.map((word, i) => {
              const wordOpacity = interpolate(
                wordProgress,
                [i, i + 0.6],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              const wordTranslateY = interpolate(
                wordProgress,
                [i, i + 0.8],
                [15, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              return (
                <span
                  key={i}
                  style={{
                    opacity: wordOpacity,
                    transform: `translateY(${wordTranslateY}px)`,
                    display: "inline-block",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Inner search pill: sparkle + "remedy that" + search */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 44,
              borderRadius: 22,
              background: COLORS.uiWhite,
              paddingLeft: 10,
              paddingRight: 14,
              gap: 10,
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
              opacity: pillOpacity,
              transform: `scale(${pillScale})`,
            }}
          >
            {/* Sparkle icon in blue circle */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#3B9BF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width={14} height={14} viewBox="0 0 16 16" fill="none">
                <path d="M8 1L9.5 6.5L8 6L6.5 6.5L8 1Z" fill="white" />
                <path d="M8 15L6.5 9.5L8 10L9.5 9.5L8 15Z" fill="white" />
                <path d="M1 8L6.5 6.5L6 8L6.5 9.5L1 8Z" fill="white" />
                <path d="M15 8L9.5 9.5L10 8L9.5 6.5L15 8Z" fill="white" />
              </svg>
            </div>

            {/* Pill text */}
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 15,
                fontWeight: FONT_WEIGHTS.medium,
                color: "#374151",
                letterSpacing: -0.2,
                whiteSpace: "nowrap",
                minWidth: 80,
              }}
            >
              {displayPillText}
            </span>

            {/* Search icon */}
            <svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, opacity: 0.5 }}
            >
              <circle cx="10.5" cy="10.5" r="6.5" stroke="#94A3B8" strokeWidth={2} />
              <path d="M15.5 15.5L20 20" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
