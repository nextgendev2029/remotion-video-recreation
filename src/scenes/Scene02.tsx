/**
 * Scene 02 — Glassmorphism Pill + Blobs
 * Frames 90–180 (0:03–0:06)
 *
 * Static visual: Light blue background with blurred deep-blue blobs.
 * A glassmorphism container in the center with an inner search pill.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { FluidBackground } from "../components/FluidBackground";
import { GlassCard } from "../components/GlassCard";
import { Pill } from "../components/Pill";
import { SearchIcon } from "../components/icons/SearchIcon";
import { SparkleIcon } from "../components/icons/SparkleIcon";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

export const Scene02: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Light blue background with deep blue blobs */}
      <FluidBackground
        primaryColor="#93C5FD"
        secondaryColor={COLORS.bgLightBlue}
        blobs={[
          { x: 20, y: 25, radius: 300, color: "#1E40AF", blur: 100, opacity: 0.35 },
          { x: 75, y: 40, radius: 260, color: "#1D4ED8", blur: 90, opacity: 0.3 },
          { x: 40, y: 70, radius: 280, color: "#2563EB", blur: 110, opacity: 0.25 },
          { x: 60, y: 20, radius: 200, color: "#1E3A8A", blur: 80, opacity: 0.3 },
        ]}
      />

      {/* Center content */}
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
        }}
      >
        {/* Glassmorphism container */}
        <GlassCard
          width={520}
          height={100}
          borderRadius={60}
          background="rgba(255, 255, 255, 0.12)"
          blurRadius={40}
          borderColor="rgba(255, 255, 255, 0.25)"
          borderWidth={1.5}
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          padding={16}
        >
          {/* Inner search pill */}
          <Pill
            width={380}
            height={52}
            background={COLORS.uiWhite}
            boxShadow="0 2px 12px rgba(0, 0, 0, 0.08)"
            paddingHorizontal={16}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
              }}
            >
              <SearchIcon size={18} color="#94A3B8" />
              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 16,
                  fontWeight: FONT_WEIGHTS.regular,
                  color: "#94A3B8",
                  letterSpacing: -0.1,
                }}
              >
                Seeking smarter...
              </span>
              <div style={{ flex: 1 }} />
              <SparkleIcon size={18} color={COLORS.bgVibrantBlue} opacity={0.6} />
            </div>
          </Pill>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};
