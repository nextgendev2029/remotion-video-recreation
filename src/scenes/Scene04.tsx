/**
 * Scene 04 — Sequential Typography + Arrows
 * Frames 300–540 (0:10–0:18)
 *
 * Reference: Sequential typography. Three connected pills with arrows.
 * Centered horizontal flow.
 *
 * Phase 1: placeholder showing three pills with arrow icons.
 */

import React from "react";
import { useCurrentFrame } from "remotion";
import { Pill } from "../components/Pill";
import { AnimatedText } from "../components/AnimatedText";
import { ArrowIcon } from "../components/icons";
import { COLORS } from "../utils/colors";
import { styleFragments } from "../styles/global";

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();

  const pillLabels = ["Step 1", "Step 2", "Step 3"];

  return (
    <div
      style={{
        ...styleFragments.absoluteFill,
        background: COLORS.bgWhite,
        ...styleFragments.flexColumnCenter,
      }}
    >
      {/* Three connected pills with arrows */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {pillLabels.map((label, i) => (
          <React.Fragment key={label}>
            {i > 0 && <ArrowIcon size={28} color={COLORS.textDark} />}
            <Pill
              width={200}
              height={48}
              background={COLORS.bgLightBlue}
              borderColor="transparent"
            >
              <AnimatedText
                text={label}
                fontSize={16}
                fontWeight={600}
                color={COLORS.textDark}
              />
            </Pill>
          </React.Fragment>
        ))}
      </div>

      <div
        style={{
          marginTop: 32,
          color: COLORS.textDark,
          fontSize: 14,
          opacity: 0.4,
          fontFamily: "monospace",
        }}
      >
        Scene 04 — Sequential Typography | Frames 300–540 | Frame {frame}
      </div>
    </div>
  );
};
