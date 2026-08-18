/**
 * Checkmark icon — circle with checkmark SVG.
 * Used in Scene 7 for the confirmation/CTA element.
 */

import React from "react";

export interface CheckmarkIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  /** Fill color for the circle background */
  fillColor?: string;
  /** Checkmark stroke color (defaults to white for filled, color for outline) */
  checkColor?: string;
  /** 0–1 progress for animated stroke draw (1 = fully drawn) */
  progress?: number;
  style?: React.CSSProperties;
}

export const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
  size = 64,
  color = "#2563EB",
  strokeWidth = 2,
  fillColor,
  checkColor,
  progress = 1,
  style,
}) => {
  const circleCircumference = 2 * Math.PI * 10;
  const checkLength = 24;
  const resolvedCheckColor = checkColor ?? (fillColor ? "#FFFFFF" : color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
    >
      {/* Circle background fill */}
      {fillColor && (
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={fillColor}
          opacity={progress}
        />
      )}

      {/* Circle outline */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circleCircumference}
        strokeDashoffset={circleCircumference * (1 - progress)}
        strokeLinecap="round"
      />

      {/* Checkmark */}
      <path
        d="M7.5 12L10.5 15L16.5 9"
        stroke={resolvedCheckColor}
        strokeWidth={strokeWidth + 0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={checkLength}
        strokeDashoffset={checkLength * (1 - progress)}
      />
    </svg>
  );
};
