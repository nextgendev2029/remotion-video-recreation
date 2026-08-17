/**
 * FluidBackground component — animated background with gradient blobs.
 *
 * Phase 1: simple gradient background placeholder.
 * Phase 2: will add animated radial-gradient blobs, colour transitions,
 * and per-scene background state.
 */

import React from "react";
import { COLORS } from "../utils/colors";
import { WIDTH, HEIGHT } from "../utils/constants";

export interface FluidBackgroundProps {
  /** Primary background color */
  primaryColor?: string;
  /** Secondary color for gradient */
  secondaryColor?: string;
  /** CSS opacity (0–1) */
  opacity?: number;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Child content rendered above the background */
  children?: React.ReactNode;
}

export const FluidBackground: React.FC<FluidBackgroundProps> = ({
  primaryColor = COLORS.bgDeepBlue,
  secondaryColor = COLORS.bgAzure,
  opacity = 1,
  style,
  children,
}) => {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        opacity,
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
