/**
 * Sparkle icon — four-pointed star SVG.
 * Used as decorative element in Scenes 1 and 6.
 */

import React from "react";

export interface SparkleIconProps {
  size?: number;
  color?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({
  size = 24,
  color = "#2563EB",
  opacity = 1,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ opacity, ...style }}
    >
      <path
        d="M12 0C12 0 14.5 8.5 12 12C9.5 15.5 12 24 12 24C12 24 14.5 15.5 12 12C9.5 8.5 12 0 12 0Z"
        fill={color}
      />
      <path
        d="M0 12C0 12 8.5 9.5 12 12C15.5 14.5 24 12 24 12C24 12 15.5 9.5 12 12C8.5 14.5 0 12 0 12Z"
        fill={color}
      />
      {/* Smaller diagonal sparkle arms */}
      <path
        d="M3.5 3.5C3.5 3.5 9 9 12 12C15 15 20.5 20.5 20.5 20.5"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M20.5 3.5C20.5 3.5 15 9 12 12C9 15 3.5 20.5 3.5 20.5"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
