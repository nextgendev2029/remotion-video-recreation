/**
 * Arrow icon — simple SVG right-arrow.
 *
 * Phase 1: basic chevron / arrow shape.
 * Phase 2: may adjust stroke, size, and add animation support.
 */

import React from "react";

export interface ArrowIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  size = 24,
  color = "#0B1E45",
  strokeWidth = 2,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
