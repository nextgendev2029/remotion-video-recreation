/**
 * Scene 01 — Pill Scale-In + Typing
 * Frames 0–90 (0:00–0:03)
 *
 * Static visual: Blue fluid radial background with a centered white pill
 * containing a sparkle icon and "Seeking smarter..." text.
 * A search icon sits inside the pill on the left side.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { FluidBackground } from "../components/FluidBackground";
import { Pill } from "../components/Pill";
import { SparkleIcon } from "../components/icons/SparkleIcon";
import { SearchIcon } from "../components/icons/SearchIcon";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

export const Scene01: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Blue fluid/radial background */}
      <FluidBackground
        primaryColor={COLORS.bgDeepBlue}
        secondaryColor={COLORS.bgAzure}
        blobs={[
          { x: 30, y: 35, radius: 350, color: "#2563EB", blur: 140, opacity: 0.5 },
          { x: 65, y: 55, radius: 280, color: "#3B82F6", blur: 120, opacity: 0.45 },
          { x: 45, y: 75, radius: 220, color: "#1D4ED8", blur: 100, opacity: 0.35 },
        ]}
      />

      {/* Center content */}
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        {/* Sparkle icon above the pill */}
        <SparkleIcon
          size={28}
          color={COLORS.textLight}
          opacity={0.7}
          style={{ marginBottom: 20 }}
        />

        {/* Main white pill */}
        <Pill
          width={460}
          height={60}
          background={COLORS.uiWhite}
          boxShadow={`0 8px 40px ${COLORS.shadowBlue}, 0 2px 8px rgba(0, 0, 0, 0.08)`}
          paddingHorizontal={20}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
            }}
          >
            <SearchIcon size={20} color="#94A3B8" />
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 18,
                fontWeight: FONT_WEIGHTS.regular,
                color: "#94A3B8",
                letterSpacing: -0.2,
                lineHeight: 1.3,
              }}
            >
              Seeking smarter...
            </span>
          </div>
        </Pill>
      </div>
    </AbsoluteFill>
  );
};
