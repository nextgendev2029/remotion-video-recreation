/**
 * Scene 08 — Logo Animation
 * Frames 870–960 (0:29–0:32)
 *
 * Static visual: Pure white background with Nitor logo area centered.
 *
 * IMPORTANT: The actual Nitor logo asset is NOT available.
 * This is a clearly marked TEMPORARY PLACEHOLDER.
 * The logo asset still needs to be sourced and integrated.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

export const Scene08: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.bgWhite,
      }}
    >
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        {/* Logo placeholder container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Placeholder logo mark — geometric N shape */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.pillIndigo})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 8px 32px ${COLORS.shadowBlue}`,
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 40,
                fontWeight: FONT_WEIGHTS.extrabold,
                color: COLORS.textLight,
                letterSpacing: -1,
              }}
            >
              N
            </span>
          </div>

          {/* Logo text */}
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 36,
              fontWeight: FONT_WEIGHTS.bold,
              color: COLORS.textDark,
              letterSpacing: 6,
              textTransform: "uppercase" as const,
            }}
          >
            NITOR
          </div>

          {/* Placeholder indicator */}
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 12,
              fontWeight: FONT_WEIGHTS.regular,
              color: COLORS.textMuted,
              letterSpacing: 0.5,
              marginTop: 8,
              padding: "4px 12px",
              borderRadius: 4,
              border: `1px dashed ${COLORS.textMuted}`,
            }}
          >
            ⚠ PLACEHOLDER — Actual logo asset needs to be sourced
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
