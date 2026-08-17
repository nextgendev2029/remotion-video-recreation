/**
 * Centralized scene timing configuration.
 *
 * Each scene's start/end frame is defined here so that adjusting timing
 * only requires changing this single file.
 *
 * Frame values are approximate and derived from the reference analysis.
 * They can be fine-tuned in later phases without touching individual components.
 */

export interface SceneTiming {
  /** Scene identifier (1-indexed to match reference analysis) */
  readonly id: number;
  /** Human-readable label for the scene */
  readonly label: string;
  /** First frame of the scene (inclusive) */
  readonly from: number;
  /** Duration of the scene in frames */
  readonly durationInFrames: number;
}

/**
 * Master timing table.
 * `from` is the absolute start frame; `durationInFrames` is derived from
 * the gap between this scene's start and the next scene's start (or total duration).
 */
export const SCENE_TIMINGS: readonly SceneTiming[] = [
  { id: 1, label: "Pill Scale-In + Typing",            from: 0,   durationInFrames: 90  },
  { id: 2, label: "Glassmorphism Pill + Blobs",         from: 90,  durationInFrames: 90  },
  { id: 3, label: "Rapid Text Transitions",             from: 180, durationInFrames: 120 },
  { id: 4, label: "Sequential Typography + Arrows",     from: 300, durationInFrames: 240 },
  { id: 5, label: "Zoom Typography Sequence",           from: 540, durationInFrames: 210 },
  { id: 6, label: "Scale Pill + Floating Elements",     from: 750, durationInFrames: 60  },
  { id: 7, label: "CTA + Checkmark",                    from: 810, durationInFrames: 60  },
  { id: 8, label: "Logo Animation",                     from: 870, durationInFrames: 90  },
] as const;

/**
 * Utility: retrieve timing for a specific scene by its 1-indexed ID.
 */
export function getSceneTiming(sceneId: number): SceneTiming {
  const scene = SCENE_TIMINGS.find((s) => s.id === sceneId);
  if (!scene) {
    throw new Error(`Scene ${sceneId} not found in SCENE_TIMINGS`);
  }
  return scene;
}
