/**
 * Scene 07 — CTA + Checkmark
 * Frames 810–870 (0:27–0:29)
 *
 * Static visual: White background with CTA heading text,
 * a blue CTA button, and a circular checkmark element.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { Pill } from "../components/Pill";
import { CheckmarkIcon } from "../components/icons/CheckmarkIcon";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

export const Scene07: React.FC = () => {
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
          gap: 36,
        }}
      >
        {/* Checkmark circle */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `${COLORS.accent}12`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 24px ${COLORS.shadowBlue}`,
          }}
        >
          <CheckmarkIcon
            size={48}
            color={COLORS.accent}
            fillColor={COLORS.accent}
            checkColor={COLORS.textLight}
            progress={1}
          />
        </div>

        {/* CTA heading */}
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 48,
            fontWeight: FONT_WEIGHTS.bold,
            color: COLORS.textDark,
            letterSpacing: -1.2,
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Ready to scale?
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 18,
            fontWeight: FONT_WEIGHTS.regular,
            color: COLORS.textMuted,
            letterSpacing: -0.2,
            lineHeight: 1.5,
            textAlign: "center",
            maxWidth: 400,
          }}
        >
          Start your journey today
        </div>

        {/* CTA button */}
        <Pill
          width={220}
          height={56}
          background={COLORS.accent}
          boxShadow={`0 6px 28px ${COLORS.shadowBlue}, 0 2px 8px rgba(0, 0, 0, 0.08)`}
        >
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 18,
              fontWeight: FONT_WEIGHTS.semibold,
              color: COLORS.textLight,
              letterSpacing: -0.2,
            }}
          >
            Get Started
          </span>
        </Pill>
      </div>
    </AbsoluteFill>
  );
};
