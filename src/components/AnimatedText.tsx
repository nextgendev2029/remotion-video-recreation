/**
 * AnimatedText component — text element with centralized typography.
 *
 * Phase 2: renders styled text using the typography system.
 * Phase 3: will add typewriter, word-by-word reveal, scale transitions.
 */

import React from "react";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY } from "../utils/typography";

export interface AnimatedTextProps {
  /** The text content to display */
  text: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Font weight */
  fontWeight?: number;
  /** Text color */
  color?: string;
  /** Letter spacing in pixels */
  letterSpacing?: number;
  /** Line height (unitless multiplier) */
  lineHeight?: number;
  /** CSS opacity (0–1) */
  opacity?: number;
  /** CSS transform string */
  transform?: string;
  /** Text alignment */
  textAlign?: React.CSSProperties["textAlign"];
  /** Text transform */
  textTransform?: React.CSSProperties["textTransform"];
  /** Optional gradient for text (CSS background value) */
  gradient?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Children override (for complex text content) */
  children?: React.ReactNode;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  fontSize = 48,
  fontWeight = 700,
  color = COLORS.textDark,
  letterSpacing = -0.5,
  lineHeight = 1.2,
  opacity = 1,
  transform,
  textAlign = "center",
  textTransform,
  gradient,
  style,
  children,
}) => {
  const gradientStyles: React.CSSProperties = gradient
    ? {
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : {};

  return (
    <div
      style={{
        fontFamily: FONT_FAMILY,
        fontSize,
        fontWeight,
        color: gradient ? undefined : color,
        letterSpacing,
        lineHeight,
        opacity,
        transform,
        textAlign,
        textTransform,
        whiteSpace: "pre-wrap",
        ...gradientStyles,
        ...style,
      }}
    >
      {children ?? text}
    </div>
  );
};
