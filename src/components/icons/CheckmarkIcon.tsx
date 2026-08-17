/**
 * Checkmark icon — circle with checkmark SVG.
 *
 * Phase 1: basic static placeholder.
 * Phase 2: add animated stroke-draw effect.
 */

import React from "react";

export interface CheckmarkIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  /** 0–1 progress for animated stroke draw (1 = fully drawn) */
  progress?: number;
  style?: React.CSSProperties;
}

export const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
  size = 48,
  color = "#2563EB",
  strokeWidth = 2,
  progress = 1,
  style,
}) => {
  // Total path length for the checkmark (approximate)
  const checkLength = 24;
  const circleCircumference = 2 * Math.PI * 10; // r=10

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circleCircumference}
        strokeDashoffset={circleCircumference * (1 - progress)}
      />
      <path
        d="M8 12L11 15L16 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={checkLength}
        strokeDashoffset={checkLength * (1 - progress)}
      />
    </svg>
  );
};
