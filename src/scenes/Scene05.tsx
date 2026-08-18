/**
 * Scene 05 — Zoom Typography Sequence: Crawl → Walk → Run
 * Frames 540–750 (0:18–0:25)
 *
 * Animation sequence (from reference):
 * f0–45:   White pill expands from Scene 4 carousel, fills screen
 * f45–95:  "Crawl" appears centered, scales up dramatically (camera push),
 *          opacity fades as it zooms through
 * f95–145: "Walk" appears same zoom-through pattern
 * f145–195: "Run" appears same zoom-through pattern
 * f195–210: Clean white, transition out
 *
 * Each word: appears at moderate size → holds briefly → scales up dramatically
 * (like zooming through the camera) while fading out → next word appears
 *
 * Text color: light sky blue (#93C5FD range)
 * Background: white/near-white (#F8FAFC)
 */

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";

/** The words in sequence (NOT "Scale!" — that's Scene 6) */
const WORDS = ["Crawl", "Walk", "Run"] as const;

/** Light near-white background matching reference */
const BG_COLOR = "#F5F7FA";

/** Light blue text color from reference */
const TEXT_COLOR = "#93C5FD";

/** Duration of each word's full lifecycle (appear → zoom → fade) in frames */
const WORD_DURATION = 50;

/** Timing for each word phase */
const WORD_PHASES = WORDS.map((word, i) => ({
  word,
  /** Frame where this word first appears (local to scene) */
  start: 45 + i * WORD_DURATION,
  /** Frame where the zoom-through completes */
  end: 45 + (i + 1) * WORD_DURATION,
}));

/** White pill transition from Scene 4 */
const PILL_TRANSITION_END = 42;

/**
 * Individual word component — handles the zoom-through animation
 * for a single word in the Crawl/Walk/Run sequence.
 */
const ZoomWord: React.FC<{
  word: string;
  startFrame: number;
  duration: number;
  frame: number;
}> = ({ word, startFrame, duration, frame }) => {
  const localFrame = frame - startFrame;

  if (localFrame < 0 || localFrame > duration) return null;

  const progress = localFrame / duration;

  // Scale: starts at ~1, holds for first 40%, then zooms dramatically
  const scale = interpolate(
    progress,
    [0, 0.1, 0.4, 1.0],
    [0.6, 1.0, 1.0, 8.0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }
  );

  // Opacity: fades in quickly, holds, then fades as it zooms through
  const opacity = interpolate(
    progress,
    [0, 0.08, 0.45, 0.85, 1.0],
    [0, 1.0, 1.0, 0.3, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
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
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 120,
          fontWeight: FONT_WEIGHTS.medium,
          color: TEXT_COLOR,
          letterSpacing: -2,
          lineHeight: 1.0,
          textAlign: "center",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          opacity,
          willChange: "transform, opacity",
        }}
      >
        {word}
      </div>
    </div>
  );
};

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();

  // White pill expanding transition from Scene 4
  // The pill starts as a horizontal bar and expands to fill screen
  const pillScale = interpolate(
    frame,
    [0, PILL_TRANSITION_END],
    [0.15, 12],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }
  );

  const pillOpacity = interpolate(
    frame,
    [0, 10, PILL_TRANSITION_END - 5, PILL_TRANSITION_END],
    [1, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Background fades from Scene 4's blue gradient to white
  const bgTransitionProgress = interpolate(
    frame,
    [0, 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: BG_COLOR,
      }}
    >
      {/* Blue background underneath during transition */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #BFDBFE 100%)",
          opacity: 1 - bgTransitionProgress,
        }}
      />

      {/* White pill expanding to fill screen */}
      {frame < PILL_TRANSITION_END + 5 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 800,
            height: 60,
            borderRadius: 30,
            background: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
            transform: `translate(-50%, -50%) scale(${pillScale})`,
            transformOrigin: "center center",
            opacity: pillOpacity,
          }}
        />
      )}

      {/* Word zoom sequence */}
      {WORD_PHASES.map(({ word, start, end }) => (
        <ZoomWord
          key={word}
          word={word}
          startFrame={start}
          duration={end - start}
          frame={frame}
        />
      ))}
    </AbsoluteFill>
  );
};

export { WORDS };
