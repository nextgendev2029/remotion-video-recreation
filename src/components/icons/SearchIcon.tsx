/**
 * Search icon — magnifying glass SVG.
 * Used inside the pill in Scene 1 and Scene 2.
 */

import React from "react";

export interface SearchIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  style?: React.CSSProperties;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 20,
  color = "#94A3B8",
  strokeWidth = 2,
  opacity = 1,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ opacity, flexShrink: 0, ...style }}
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15.5 15.5L20 20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
