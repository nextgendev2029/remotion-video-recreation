/**
 * Sparkle icon — decorative star/sparkle SVG.
 *
 * Phase 1: basic four-pointed star placeholder.
 * Phase 2: refine shape, add animation support (rotation, scale pulse).
 */

import React from "react";

export interface SparkleIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({
  size = 24,
  color = "#2563EB",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={style}
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
};
