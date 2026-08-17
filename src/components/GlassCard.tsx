/**
 * GlassCard component — glassmorphism surface.
 *
 * Phase 1: simple semi-transparent card with backdrop blur placeholder.
 * Phase 2: will add refined blur values, border gradients, and shadow layers.
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
  /** CSS opacity (0–1) */
  opacity?: number;
  /** CSS transform string */
  transform?: string;
  /** Child content */
  children?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  width = 400,
  height = 200,
  background = COLORS.uiGlass,
  blurRadius = 24,
  borderRadius = 24,
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
        background,
        backdropFilter: `blur(${blurRadius}px)`,
        WebkitBackdropFilter: `blur(${blurRadius}px)`,
        borderRadius,
        border: `1px solid ${COLORS.uiBorder}`,
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
