/**
 * Scene 01 — Pill Scale-In + Typing
 * Frames 0–90 (0:00–0:03)
 *
 * Animation sequence (from reference):
 * f0–10:  Blue fluid background only
 * f10–20: Translucent circle fades in and scales up at center
 * f20–30: Circle morphs into pill shape, blue dot + "Seeking" appears
 * f30–45: Sparkle icon replaces dot, pill widens, text bolds
 * f45–75: Pill expands to full width, text types character by character
 * f75–90: Settled state, subtle background drift
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { FluidBackground } from "../components/FluidBackground";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { WIDTH, HEIGHT } from "../utils/constants";

/** The full text from the reference video */
const FULL_TEXT = "Seeking smarter ways to tackle inefficiences?";

/** Animation timing constants (frame numbers, local to this scene) */
const TIMING = {
  /** Circle first appears */
  circleStart: 10,
  /** Circle fully visible */
  circleEnd: 18,
  /** Pill morph begins */
  pillMorphStart: 18,
  /** Pill morph complete (small pill) */
  pillMorphEnd: 28,
  /** Sparkle icon transition */
  sparkleStart: 26,
  sparkleEnd: 32,
  /** Text typing begins */
  typingStart: 35,
  /** Text typing ends */
  typingEnd: 75,
  /** First word "Seeking" appears immediately with pill */
  firstWordStart: 22,
} as const;

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Background blob drift ──
  const blobDriftX = Math.sin(frame * 0.02) * 3;
  const blobDriftY = Math.cos(frame * 0.015) * 2;

  // ── Phase 1: Circle appearance (f10–f18) ──
  const circleOpacity = interpolate(
    frame,
    [TIMING.circleStart, TIMING.circleStart + 4],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const circleScale = spring({
    frame: Math.max(0, frame - TIMING.circleStart),
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  // ── Phase 2: Circle → Pill morph (f18–f28) ──
  const pillMorphProgress = interpolate(
    frame,
    [TIMING.pillMorphStart, TIMING.pillMorphEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Circle starts at 60px diameter, pill is ~200px wide initially
  const pillWidth = interpolate(pillMorphProgress, [0, 1], [60, 220]);
  const pillHeight = 60;

  // ── Phase 3: Pill expansion during typing (f35–f75) ──
  const expandProgress = interpolate(
    frame,
    [TIMING.typingStart, TIMING.typingEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const finalPillWidth = interpolate(expandProgress, [0, 1], [220, 620]);
  const currentPillWidth = frame < TIMING.typingStart ? pillWidth : finalPillWidth;

  // ── Icon transitions ──
  // Blue dot opacity (appears with pill, fades when sparkle comes)
  const blueDotOpacity = interpolate(
    frame,
    [TIMING.pillMorphStart + 4, TIMING.pillMorphStart + 6, TIMING.sparkleStart, TIMING.sparkleEnd],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sparkle icon opacity
  const sparkleOpacity = interpolate(
    frame,
    [TIMING.sparkleStart, TIMING.sparkleEnd],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ── Text reveal ──
  // "Seeking" appears with pill morph
  const firstWordOpacity = interpolate(
    frame,
    [TIMING.firstWordStart, TIMING.firstWordStart + 5],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Typing effect: reveal characters one by one after "Seeking"
  const baseWord = "Seeking";
  const remainingText = FULL_TEXT.slice(baseWord.length);
  const charsToShow = frame < TIMING.typingStart
    ? 0
    : Math.floor(
        interpolate(
          frame,
          [TIMING.typingStart, TIMING.typingEnd],
          [0, remainingText.length],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )
      );

  const displayText = frame < TIMING.firstWordStart
    ? ""
    : frame < TIMING.typingStart
      ? baseWord
      : baseWord + remainingText.slice(0, charsToShow);

  // Text font weight transition (lighter → bolder)
  const textWeight = frame < TIMING.sparkleEnd ? FONT_WEIGHTS.regular : FONT_WEIGHTS.semibold;
  const textColor = frame < TIMING.sparkleEnd ? "#64748B" : COLORS.textDark;

  // ── Overall visibility ──
  const showCircleOnly = frame < TIMING.pillMorphStart;
  const showPill = frame >= TIMING.pillMorphStart;

  // ── Pill shadow deepens as it expands ──
  const shadowIntensity = interpolate(
    frame,
    [TIMING.pillMorphStart, TIMING.typingEnd],
    [0.05, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      {/* Blue fluid background with subtle drift */}
      <FluidBackground
        primaryColor={COLORS.bgDeepBlue}
        secondaryColor={COLORS.bgAzure}
        blobs={[
          {
            x: 30 + blobDriftX,
            y: 35 + blobDriftY,
            radius: 400,
            color: "#2563EB",
            blur: 140,
            opacity: 0.6,
          },
          {
            x: 65 - blobDriftX * 0.7,
            y: 55 - blobDriftY * 0.5,
            radius: 350,
            color: "#3B82F6",
            blur: 120,
            opacity: 0.5,
          },
          {
            x: 45 + blobDriftY,
            y: 75 - blobDriftX,
            radius: 280,
            color: "#1D4ED8",
            blur: 100,
            opacity: 0.4,
          },
        ]}
      />

      {/* Center content */}
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
        {/* Phase 1: Translucent circle */}
        {showCircleOnly && (
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.35)",
              opacity: circleOpacity,
              transform: `scale(${circleScale})`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        )}

        {/* Phase 2+: Pill shape */}
        {showPill && (
          <div
            style={{
              width: currentPillWidth,
              height: pillHeight,
              borderRadius: pillHeight / 2,
              background: COLORS.uiWhite,
              boxShadow: `0 8px 40px rgba(37, 99, 235, ${shadowIntensity}), 0 2px 8px rgba(0, 0, 0, 0.08)`,
              display: "flex",
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 20,
              gap: 10,
              overflow: "hidden",
              transform: `scale(${interpolate(
                pillMorphProgress,
                [0, 0.5, 1],
                [0.6, 1.02, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              )})`,
            }}
          >
            {/* Icon container */}
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#3B9BF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {/* Blue dot (early phase) */}
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: COLORS.uiWhite,
                  opacity: blueDotOpacity,
                  position: "absolute",
                }}
              />
              {/* 4-point sparkle star (later phase) */}
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  opacity: sparkleOpacity,
                  position: "absolute",
                }}
              >
                <path
                  d="M8 1L9.5 6.5L8 6L6.5 6.5L8 1Z"
                  fill="white"
                />
                <path
                  d="M8 15L6.5 9.5L8 10L9.5 9.5L8 15Z"
                  fill="white"
                />
                <path
                  d="M1 8L6.5 6.5L6 8L6.5 9.5L1 8Z"
                  fill="white"
                />
                <path
                  d="M15 8L9.5 9.5L10 8L9.5 6.5L15 8Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Text */}
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 18,
                fontWeight: textWeight,
                color: textColor,
                letterSpacing: -0.3,
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                opacity: firstWordOpacity,
                overflow: "hidden",
              }}
            >
              {displayText}
            </span>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
