/**
 * FluidBackground — layered background with radial gradients and blurred blobs.
 *
 * Used in Scenes 1, 2, 6 for the fluid blue background effect.
 * Blobs are positioned statically for Phase 2; animation deferred to Phase 3.
 */

import React from "react";
import { COLORS } from "../utils/colors";
import { WIDTH, HEIGHT } from "../utils/constants";

export interface BlobConfig {
  /** X position as percentage of width */
  x: number;
  /** Y position as percentage of height */
  y: number;
  /** Radius in pixels */
  radius: number;
  /** Color */
  color: string;
  /** Blur radius */
  blur: number;
  /** Opacity 0–1 */
  opacity: number;
}

export interface FluidBackgroundProps {
  /** Primary background color */
  primaryColor?: string;
  /** Secondary color for gradient */
  secondaryColor?: string;
  /** Optional blobs to render */
  blobs?: BlobConfig[];
  /** CSS opacity (0–1) */
  opacity?: number;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Child content rendered above the background */
  children?: React.ReactNode;
}

const DEFAULT_BLOBS: BlobConfig[] = [
  { x: 25, y: 30, radius: 300, color: COLORS.bgAzure, blur: 120, opacity: 0.6 },
  { x: 70, y: 60, radius: 250, color: COLORS.bgVibrantBlue, blur: 100, opacity: 0.5 },
  { x: 50, y: 80, radius: 200, color: COLORS.bgAzure, blur: 80, opacity: 0.4 },
];

export const FluidBackground: React.FC<FluidBackgroundProps> = ({
  primaryColor = COLORS.bgDeepBlue,
  secondaryColor = COLORS.bgAzure,
  blobs = DEFAULT_BLOBS,
  opacity = 1,
  style,
  children,
}) => {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: `radial-gradient(ellipse at 30% 40%, ${secondaryColor} 0%, ${primaryColor} 70%)`,
        opacity,
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Radial glow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 50% 50%, ${secondaryColor}33 0%, transparent 60%)`,
        }}
      />

      {/* Blurred blobs */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.radius * 2,
            height: blob.radius * 2,
            borderRadius: "50%",
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {children}
    </div>
  );
};
