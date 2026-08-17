/**
 * Search icon — magnifying glass SVG.
 *
 * Phase 1: basic placeholder.
 * Phase 2: refine to match reference styling.
 */

import React from "react";

export interface SearchIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
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
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 16L21 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
