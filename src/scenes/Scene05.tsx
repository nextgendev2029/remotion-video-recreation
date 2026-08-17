/**
 * Scene 05 — Zoom Typography Sequence
 * Frames 540–750 (0:18–0:25)
 *
 * Reference: White-screen mask transition. "Crawl", "Walk", "Run", "Scale!"
 * style sequential zoom typography.
 *
 * Phase 1: placeholder showing the four words sequentially.
 */

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

const WORDS = ["Crawl", "Walk", "Run", "Scale!"];

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 210;
  const framesPerWord = totalFrames / WORDS.length;

  const currentWordIndex = Math.min(
    WORDS.length - 1,
    Math.floor(frame / framesPerWord),
  );

  const wordFrame = frame - currentWordIndex * framesPerWord;
  const wordOpacity = interpolate(wordFrame, [0, 10, framesPerWord - 10, framesPerWord], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: COLORS.bgWhite,
        ...styleFragments.flexColumnCenter,
      }}
    >
      <AnimatedText
        text={WORDS[currentWordIndex]}
        fontSize={96}
        fontWeight={800}
        color={COLORS.textDark}
        opacity={wordOpacity}
      />

      <div
        style={{
          position: "absolute",
          bottom: 60,
          color: COLORS.textDark,
          fontSize: 14,
          opacity: 0.4,
          fontFamily: "monospace",
        }}
      >
        Scene 05 — Zoom Typography | Frames 540–750 | Frame {frame}
      </div>
    </div>
  );
};
