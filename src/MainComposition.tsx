/**
 * MainComposition — orchestrates all 8 scenes using Remotion's <Sequence>.
 *
 * Each scene is rendered within a Sequence that maps to the centralized
 * timing configuration. Adjusting scene boundaries only requires changing
 * src/utils/timing.ts.
 */

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_TIMINGS } from "./utils/timing";
import { COLORS } from "./utils/colors";

import { Scene01 } from "./scenes/Scene01";
import { Scene02 } from "./scenes/Scene02";
import { Scene03 } from "./scenes/Scene03";
import { Scene04 } from "./scenes/Scene04";
import { Scene05 } from "./scenes/Scene05";
import { Scene06 } from "./scenes/Scene06";
import { Scene07 } from "./scenes/Scene07";
import { Scene08 } from "./scenes/Scene08";

/**
 * Map of scene IDs to their React components.
 * Keeping this explicit (rather than dynamic) for readability and type safety.
 */
const SCENE_COMPONENTS: Record<number, React.FC> = {
  1: Scene01,
  2: Scene02,
  3: Scene03,
  4: Scene04,
  5: Scene05,
  6: Scene06,
  7: Scene07,
  8: Scene08,
};

export const MainComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgWhite }}>
      {SCENE_TIMINGS.map((scene) => {
        const SceneComponent = SCENE_COMPONENTS[scene.id];
        if (!SceneComponent) return null;

        return (
          <Sequence
            key={scene.id}
            from={scene.from}
            durationInFrames={scene.durationInFrames}
            name={`Scene ${String(scene.id).padStart(2, "0")}: ${scene.label}`}
          >
            <SceneComponent />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
