/**
 * Arrow icon — right-pointing arrow SVG.
 * Used between pills in Scene 4's sequential flow.
 */

import React from "react";

export interface ArrowIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  /** Direction the arrow points */
  direction?: "right" | "left" | "up" | "down";
  style?: React.CSSProperties;
}

const ROTATIONS: Record<string, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  size = 24,
  color = "#0F172A",
  strokeWidth = 2.5,
  opacity = 1,
  direction = "right",
  style,
}) => {
  const rotation = ROTATIONS[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        opacity,
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        flexShrink: 0,
        ...style,
      }}
    >
      <path
        d="M5 12H19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
