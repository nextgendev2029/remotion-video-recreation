/**
 * Pill component — rounded pill-shaped UI element.
 *
 * Phase 1: simple placeholder with configurable dimensions and color.
 * Phase 2: will add gradients, glassmorphism variants, inner content, and spring animations.
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
  /** Child content rendered inside the pill */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const Pill: React.FC<PillProps> = ({
  width = 320,
  height = 56,
  background = COLORS.uiWhite,
  borderColor = COLORS.uiBorder,
  borderWidth = 1,
  opacity = 1,
  transform,
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
        border: `${borderWidth}px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
