/**
 * AnimatedText component — text element with entrance animation support.
 *
 * Phase 1: renders styled text with basic opacity/transform props.
 * Phase 2: will add typewriter, word-by-word reveal, scale transitions, etc.
 */

import React from "react";
import { COLORS } from "../utils/colors";

export interface AnimatedTextProps {
  /** The text content to display */
  text: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Font weight */
  fontWeight?: number;
  /** Text color */
  color?: string;
  /** Font family */
  fontFamily?: string;
  /** CSS opacity (0–1) */
  opacity?: number;
  /** CSS transform string */
  transform?: string;
  /** Text alignment */
  textAlign?: React.CSSProperties["textAlign"];
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  fontSize = 48,
  fontWeight = 700,
  color = COLORS.textDark,
  fontFamily = "sans-serif",
  opacity = 1,
  transform,
  textAlign = "center",
  style,
}) => {
  return (
    <div
      style={{
        fontSize,
        fontWeight,
        color,
        fontFamily,
        opacity,
        transform,
        textAlign,
        lineHeight: 1.2,
        whiteSpace: "pre-wrap",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
