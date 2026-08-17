/**
 * Remotion Root — registers all compositions.
 *
 * This is the entry point that Remotion uses to discover available
 * compositions. The main composition uses centralized constants for
 * resolution, FPS, and duration.
 */

import "./index.css";
import { Composition } from "remotion";
import { MainComposition } from "./MainComposition";
import { COMPOSITION_ID, WIDTH, HEIGHT, FPS, DURATION_IN_FRAMES } from "./utils/constants";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMPOSITION_ID}
        component={MainComposition}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
