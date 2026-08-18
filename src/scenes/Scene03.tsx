/**
 * Scene 03 — Rapid Text Transitions
 * Frames 180–300 (0:06–0:10)
 *
 * Static visual: Multiple background states (light blue, dark blue, white)
 * with large centered typography. Gradient text on some states.
 * This renders the representative visual state at the middle of the scene.
 * Component architecture supports switching between states for Phase 3 animation.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { COLORS } from "../utils/colors";
import { FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

/** Background/text state definitions for the rapid transitions */
interface TextState {
  background: string;
  textColor: string;
  text: string;
  gradient?: string;
}

const TEXT_STATES: TextState[] = [
  {
    background: COLORS.bgLightBlue,
    textColor: COLORS.textDark,
    text: "What if your\nwebsite could\nthink?",
  },
  {
    background: COLORS.bgDarkNavy,
    textColor: COLORS.textLight,
    text: "Smarter\nsearch",
    gradient: `linear-gradient(135deg, #60A5FA, #A78BFA)`,
  },
  {
    background: COLORS.bgWhite,
    textColor: COLORS.textDark,
    text: "Better\nresults",
    gradient: `linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd})`,
  },
];

export const Scene03: React.FC = () => {
  // Show the first state as the representative static visual
  // Phase 3 will use frame-based interpolation to cycle through states
  const state = TEXT_STATES[0];

  return (
    <AbsoluteFill
      style={{
        background: state.background,
      }}
    >
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        <AnimatedText
          text={state.text}
          fontSize={72}
          fontWeight={FONT_WEIGHTS.bold}
          color={state.textColor}
          gradient={state.gradient}
          letterSpacing={-2}
          lineHeight={1.05}
          textAlign="center"
        />
      </div>
    </AbsoluteFill>
  );
};

/**
 * Exported for Phase 3 — all text states available for animation.
 */
export { TEXT_STATES };
export type { TextState };
