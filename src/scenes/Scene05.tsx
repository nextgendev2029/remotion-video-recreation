/**
 * Scene 05 — Zoom Typography Sequence
 * Frames 540–750 (0:18–0:25)
 *
 * Static visual: White background with large centered typography.
 * Words: "Crawl", "Walk", "Run", "Scale!"
 * Shows "Scale!" as the representative resting state (end state before Scene 6).
 *
 * IMPORTANT: Typography is centered using transform-origin: center center
 * so that the zoom animation in Phase 3 scales from the visual center
 * without drifting.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

/** The words that appear in sequence */
const WORDS = ["Crawl", "Walk", "Run", "Scale!"] as const;

export const Scene05: React.FC = () => {
  // Show "Scale!" as the representative static state
  // Phase 3 will animate through all words with zoom effect
  const currentWord = WORDS[3];

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bgWhite,
      }}
    >
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 140,
            fontWeight: FONT_WEIGHTS.extrabold,
            color: COLORS.textDark,
            letterSpacing: -4,
            lineHeight: 1.0,
            textAlign: "center",
            transformOrigin: "center center",
            // Gradient text for "Scale!"
            background: `linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {currentWord}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { WORDS };
