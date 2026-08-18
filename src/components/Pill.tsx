/**
 * Pill component — rounded pill-shaped UI element.
 *
 * Used across multiple scenes: search pill (Scene 1), flow pills (Scene 4),
 * "Scale!" pill (Scene 6), CTA button (Scene 7).
 */

import React from "react";
import { COLORS } from "../utils/colors";

export interface PillProps {
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Background color or gradient */
  background?: string;
  /** Border color */
  borderColor?: string;
  /** Border width in pixels */
  borderWidth?: number;
  /** CSS opacity (0–1) */
  opacity?: number;
  /** CSS transform string */
  transform?: string;
  /** Box shadow */
  boxShadow?: string;
  /** Padding left/right */
  paddingHorizontal?: number;
  /** Child content rendered inside the pill */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const Pill: React.FC<PillProps> = ({
  width = 320,
  height = 56,
  background = COLORS.uiWhite,
  borderColor = "transparent",
  borderWidth = 0,
  opacity = 1,
  transform,
  boxShadow = `0 4px 24px ${COLORS.shadowDark}, 0 1px 4px ${COLORS.shadowDark}`,
  paddingHorizontal = 24,
  children,
  style,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: height / 2,
        background,
        border: borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform,
        overflow: "hidden",
        boxShadow,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
