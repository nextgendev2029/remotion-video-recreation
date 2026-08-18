/**
 * Scene 04 — Sequential Typography + Arrows
 * Frames 300–540 (0:10–0:18)
 *
 * Static visual: White background with centered horizontal flow.
 * Three rounded pills connected by arrows with sequential text labels.
 */

import React from "react";
import { AbsoluteFill } from "remotion";
import { Pill } from "../components/Pill";
import { ArrowIcon } from "../components/icons/ArrowIcon";
import { COLORS } from "../utils/colors";
import { FONT_FAMILY, FONT_WEIGHTS } from "../utils/typography";
import { styleFragments } from "../styles/global";

/** Pill configuration for the sequential flow */
interface FlowPill {
  label: string;
  background: string;
  textColor: string;
}

const FLOW_PILLS: FlowPill[] = [
  {
    label: "Crawl",
    background: COLORS.pillBlue,
    textColor: COLORS.textLight,
  },
  {
    label: "Walk",
    background: COLORS.pillIndigo,
    textColor: COLORS.textLight,
  },
  {
    label: "Run",
    background: COLORS.pillViolet,
    textColor: COLORS.textLight,
  },
];

export const Scene04: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.bgWhite,
      }}
    >
      {/* Title text above the flow */}
      <div
        style={{
          ...styleFragments.absoluteFill,
          ...styleFragments.flexColumnCenter,
          gap: 48,
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 44,
            fontWeight: FONT_WEIGHTS.bold,
            color: COLORS.textDark,
            letterSpacing: -1,
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          Your growth journey
        </div>

        {/* Horizontal flow: pills connected by arrows */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {FLOW_PILLS.map((pill, i) => (
            <React.Fragment key={pill.label}>
              {i > 0 && (
                <ArrowIcon
                  size={32}
                  color={COLORS.textDark}
                  strokeWidth={2}
                  opacity={0.4}
                />
              )}
              <Pill
                width={180}
                height={56}
                background={pill.background}
                boxShadow={`0 4px 20px ${pill.background}40, 0 2px 8px rgba(0, 0, 0, 0.06)`}
              >
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 20,
                    fontWeight: FONT_WEIGHTS.semibold,
                    color: pill.textColor,
                    letterSpacing: -0.3,
                  }}
                >
                  {pill.label}
                </span>
              </Pill>
            </React.Fragment>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
