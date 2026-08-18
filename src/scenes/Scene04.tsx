/**
 * Scene 04 — Word Cascade + Rotating Pill + Text Phrases + Pill Carousel
 * Frames 300–540 (0:10–0:18)
 *
 * Animation sequence (from reference):
 * LOCAL FRAMES (0-based within this scene's 240-frame span):
 *
 * Phase A — Word cascade (f0–30):
 *   "by" → "the" → "end" → "of" → "the" → "decade."
 *   Words appear staggered, each with gradient: dark blue → light blue/faded
 *   Light blue background (#DBEAFE)
 *
 * Phase B — Giant rotating pill (f30–70):
 *   Large pill with blue border rotates from ~30° to 0°
 *   White bg, blue text "AI adoption"
 *   Pill has blue border, white fill
 *
 * Phase C — Text phrases (f70–150):
 *   f70–95: "the new strategic mandate" — words appear center, light blue text
 *   f95–120: "practically" then "practically means"
 *   White/very light bg
 *
 * Phase D — Pill carousel (f150–240):
 *   Soft blue gradient bg
 *   3 white pills: "Amplifying judgment" → arrow → "Gaining foresight" → arrow → "Leading the market"
 *   Scrolls continuously left
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { WIDTH } from "../utils/constants";

/** Phase boundaries (local frames) */
const PHASE = {
  A_START: 0,
  A_END: 30,
  B_START: 30,
  B_END: 70,
  C_START: 70,
  C_END: 150,
  D_START: 150,
  D_END: 240,
} as const;

/** Crossfade helper — handles edge cases where fadeIn or fadeOut is 0 */
function phaseOpacity(
  frame: number,
  phaseStart: number,
  phaseEnd: number,
  fadeIn = 5,
  fadeOut = 5,
): number {
  if (fadeOut === 0 && fadeIn === 0) {
    // No fading at all — just return 1 if within range
    return frame >= phaseStart && frame <= phaseEnd ? 1 : 0;
  }
  if (fadeOut === 0) {
    // Fade in only, stay at 1 until end
    return interpolate(
      frame,
      [phaseStart, phaseStart + fadeIn],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  }
  if (fadeIn === 0) {
    // Fade out only, start at 1
    return interpolate(
      frame,
      [phaseEnd - fadeOut, phaseEnd],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  }
  return interpolate(
    frame,
    [phaseStart, phaseStart + fadeIn, phaseEnd - fadeOut, phaseEnd],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
}

/** Phase A: Word cascade */
const CASCADE_WORDS = [
  { word: "by", delay: 0, color: "#1E3A8A" },
  { word: "the", delay: 3, color: "#3B5FD0" },
  { word: "end", delay: 6, color: "#5B7BF0" },
  { word: "of", delay: 10, color: "#7B9BF7" },
  { word: "the", delay: 13, color: "#9BB5FA" },
  { word: "decade.", delay: 16, color: "#B5CBFC" },
];

/** Phase C: text phrases */
const PHRASE1_WORDS = ["the", "new", "strategic", "mandate"];

/** Phase D: carousel pills */
const CAROUSEL_PILLS = [
  "Amplifying judgment",
  "Gaining foresight",
  "Leading the market",
];

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Overall phase opacities
  const phaseAOpacity = phaseOpacity(frame, PHASE.A_START, PHASE.A_END, 2, 5);
  const phaseBOpacity = phaseOpacity(frame, PHASE.B_START, PHASE.B_END, 5, 5);
  const phaseCOpacity = phaseOpacity(frame, PHASE.C_START, PHASE.C_END, 5, 5);
  const phaseDOpacity = phaseOpacity(frame, PHASE.D_START, PHASE.D_END, 5, 0);

  // ── Phase A: Word cascade ──
  const cascadeWordsVisible = CASCADE_WORDS.map((w) => {
    const wordOpacity = interpolate(
      frame,
      [w.delay, w.delay + 4],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const wordScale = interpolate(
      frame,
      [w.delay, w.delay + 5],
      [0.7, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    return { ...w, opacity: wordOpacity, scale: wordScale };
  });

  // ── Phase B: Rotating pill ──
  const pillRotation = interpolate(
    frame,
    [PHASE.B_START, PHASE.B_START + 20, PHASE.B_START + 35],
    [30, 5, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const pillScaleB = spring({
    frame: Math.max(0, frame - PHASE.B_START),
    fps,
    config: { damping: 14, stiffness: 80, mass: 1.2 },
  });

  // ── Phase C: Text phrases ──
  // Sub-phase: "the new strategic mandate" (f70–95)
  const phrase1Progress = interpolate(
    frame,
    [PHASE.C_START, PHASE.C_START + 20],
    [0, PHRASE1_WORDS.length],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const phrase1Opacity = interpolate(
    frame,
    [PHASE.C_START, PHASE.C_START + 5, PHASE.C_START + 25, PHASE.C_START + 30],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Sub-phase: "practically" (f100–120) then "practically means" (f115–140)
  const practicallyOpacity = interpolate(
    frame,
    [PHASE.C_START + 30, PHASE.C_START + 35, PHASE.C_END - 10, PHASE.C_END - 5],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const meansOpacity = interpolate(
    frame,
    [PHASE.C_START + 45, PHASE.C_START + 50],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ── Phase D: Carousel scroll ──
  // Total width of all pills + arrows
  const pillW = 280;
  const arrowW = 60;
  const totalCarouselWidth = CAROUSEL_PILLS.length * pillW + (CAROUSEL_PILLS.length - 1) * arrowW;

  // Scroll position — moves left over time
  const scrollX = interpolate(
    frame,
    [PHASE.D_START, PHASE.D_END],
    [WIDTH * 0.6, -totalCarouselWidth * 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // ── Background per phase ──
  const bgPhaseA = "#DBEAFE"; // light blue
  const bgPhaseB = "#EDF2F9"; // very light blue-grey
  const bgPhaseC = "#F5F5F5"; // light grey
  const bgPhaseD_gradient = "linear-gradient(135deg, #7BB5F8 0%, #93C5FD 40%, #B5D8FE 70%, #D4E8FF 100%)";

  // Combined background
  const bgAopacity = frame < PHASE.A_END ? 1 : interpolate(frame, [PHASE.A_END, PHASE.A_END + 5], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bgBopacity = frame >= PHASE.B_START - 5 && frame < PHASE.B_END + 5 ? interpolate(frame, [PHASE.B_START - 5, PHASE.B_START, PHASE.B_END, PHASE.B_END + 5], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
  const bgCopacity = frame >= PHASE.C_START - 5 && frame < PHASE.C_END + 5 ? interpolate(frame, [PHASE.C_START - 5, PHASE.C_START, PHASE.C_END, PHASE.C_END + 5], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
  const bgDopacity = frame >= PHASE.D_START - 5 ? interpolate(frame, [PHASE.D_START - 5, PHASE.D_START], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

  return (
    <AbsoluteFill>
      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, background: bgPhaseA, opacity: bgAopacity }} />
      <div style={{ position: "absolute", inset: 0, background: bgPhaseB, opacity: bgBopacity }} />
      <div style={{ position: "absolute", inset: 0, background: bgPhaseC, opacity: bgCopacity }} />
      <div style={{ position: "absolute", inset: 0, background: bgPhaseD_gradient, opacity: bgDopacity }} />

      {/* ═══ Phase A: Word cascade ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 100,
          paddingRight: 100,
          opacity: phaseAOpacity,
        }}
      >
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "baseline" }}>
          {cascadeWordsVisible.map((w, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 64,
                fontWeight: FONT_WEIGHTS.bold,
                color: w.color,
                opacity: w.opacity,
                transform: `scale(${w.scale})`,
                display: "inline-block",
                letterSpacing: -1,
              }}
            >
              {w.word}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ Phase B: Giant rotating pill ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: phaseBOpacity,
        }}
      >
        <div
          style={{
            width: 650,
            height: 180,
            borderRadius: 90,
            background: COLORS.uiWhite,
            border: "4px solid #5B8BF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotate(${pillRotation}deg) scale(${pillScaleB})`,
            boxShadow: "0 12px 48px rgba(91, 139, 247, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06)",
          }}
        >
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 56,
              fontWeight: FONT_WEIGHTS.semibold,
              color: "#3B82F6",
              letterSpacing: -1,
            }}
          >
            AI adoption
          </span>
        </div>
      </div>

      {/* ═══ Phase C: Text phrases ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: phaseCOpacity,
        }}
      >
        {/* "the new strategic mandate" */}
        {frame >= PHASE.C_START && frame < PHASE.C_START + 35 && (
          <div
            style={{
              display: "flex",
              gap: 16,
              opacity: phrase1Opacity,
              position: "absolute",
            }}
          >
            {PHRASE1_WORDS.map((word, i) => {
              const wordOp = interpolate(
                phrase1Progress,
                [i, i + 0.5],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              return (
                <span
                  key={i}
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 52,
                    fontWeight: FONT_WEIGHTS.regular,
                    color: "#7BB5F8",
                    opacity: wordOp,
                    display: "inline-block",
                    letterSpacing: -0.5,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        )}

        {/* "practically" → "practically means" */}
        {frame >= PHASE.C_START + 28 && (
          <div
            style={{
              display: "flex",
              gap: 16,
              opacity: practicallyOpacity,
              position: "absolute",
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 52,
                fontWeight: FONT_WEIGHTS.regular,
                color: "#7BB5F8",
                letterSpacing: -0.5,
              }}
            >
              practically
            </span>
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 52,
                fontWeight: FONT_WEIGHTS.regular,
                color: "#7BB5F8",
                letterSpacing: -0.5,
                opacity: meansOpacity,
              }}
            >
              means
            </span>
          </div>
        )}
      </div>

      {/* ═══ Phase D: Pill carousel ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          opacity: phaseDOpacity,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: scrollX,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 0,
            whiteSpace: "nowrap",
          }}
        >
          {CAROUSEL_PILLS.map((label, i) => (
            <React.Fragment key={i}>
              {/* Arrow before each pill except the first */}
              {i > 0 && (
                <div
                  style={{
                    width: arrowW,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width={36} height={36} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Pill */}
              <div
                style={{
                  width: pillW,
                  height: 72,
                  borderRadius: 36,
                  background: COLORS.uiWhite,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 20,
                    fontWeight: FONT_WEIGHTS.medium,
                    color: "#2563EB",
                    letterSpacing: -0.3,
                  }}
                >
                  {label}
                </span>
              </div>
            </React.Fragment>
          ))}

          {/* Trailing arrow (visible exiting right in reference) */}
          <div
            style={{
              width: arrowW,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={36} height={36} viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" />
              <path d="M13 6L19 12L13 18" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
