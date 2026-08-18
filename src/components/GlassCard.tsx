/**
 * GlassCard component — glassmorphism surface with backdrop blur.
 *
 * Used in Scene 2 for the glassmorphism container over the fluid background.
 */

import React from "react";
import { COLORS } from "../utils/colors";

export interface GlassCardProps {
  /** Width in pixels or CSS string */
  width?: number | string;
  /** Height in pixels or CSS string */
  height?: number | string;
  /** Background color (should be semi-transparent) */
  background?: string;
  /** Backdrop blur radius in pixels */
  blurRadius?: number;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** CSS opacity (0–1) */
  opacity?: number;
  /** CSS transform string */
  transform?: string;
  /** Box shadow */
  boxShadow?: string;
  /** Padding */
  padding?: number;
  /** Child content */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  width = 480,
  height = 120,
  background = COLORS.uiGlass,
  blurRadius = 40,
  borderRadius = 60,
  borderColor = COLORS.uiGlassBorder,
  borderWidth = 1.5,
  opacity = 1,
  transform,
  boxShadow = `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
  padding = 12,
  children,
  style,
}) => {
  return (
    <div
      style={{
        width,
        height,
        background,
        backdropFilter: `blur(${blurRadius}px)`,
        WebkitBackdropFilter: `blur(${blurRadius}px)`,
        borderRadius,
        border: `${borderWidth}px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform,
        overflow: "hidden",
        boxShadow,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
