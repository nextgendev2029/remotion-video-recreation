# Nitor Motion Design — Remotion Recreation

A production-quality recreation of the Nitor reference motion-design video, built with [Remotion](https://www.remotion.dev/).

## Video Specifications

| Property   | Value       |
| ---------- | ----------- |
| Resolution | 1920 × 1080 |
| FPS        | 30          |
| Duration   | 32 seconds  |
| Frames     | 960         |
| Format     | MP4 (H.264) |

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Install Dependencies

```bash
npm install
```

### Open Remotion Studio (Preview)

```bash
npm run dev
```

This launches Remotion Studio in your browser, where you can preview the composition, scrub through frames, and inspect individual scenes.

### Render the Final Video

```bash
npx remotion render MainVideo out/video.mp4
```

Or render a specific frame range for testing:

```bash
npx remotion render MainVideo out/test.mp4 --frames=0-90
```

### Type Check

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── index.ts                  # Remotion entry point (registerRoot)
├── index.css                 # Global CSS reset
├── Root.tsx                  # Composition registration
├── MainComposition.tsx       # Scene sequencer (Sequences + timing)
│
├── scenes/                   # One component per scene
│   ├── Scene01.tsx           # 0:00–0:03  Pill scale-in + typing
│   ├── Scene02.tsx           # 0:03–0:06  Glassmorphism pill + blobs
│   ├── Scene03.tsx           # 0:06–0:10  Rapid text transitions
│   ├── Scene04.tsx           # 0:10–0:18  Sequential typography + arrows
│   ├── Scene05.tsx           # 0:18–0:25  Zoom typography sequence
│   ├── Scene06.tsx           # 0:25–0:27  Scale pill + floating elements
│   ├── Scene07.tsx           # 0:27–0:29  CTA + checkmark
│   └── Scene08.tsx           # 0:29–0:32  Logo animation
│
├── components/               # Reusable UI primitives
│   ├── Pill.tsx
│   ├── GlassCard.tsx
│   ├── AnimatedText.tsx
│   ├── FluidBackground.tsx
│   └── icons/
│       ├── ArrowIcon.tsx
│       ├── SearchIcon.tsx
│       ├── SparkleIcon.tsx
│       ├── CheckmarkIcon.tsx
│       └── index.ts
│
├── animations/               # Motion presets and helpers
│   ├── easing.ts
│   ├── springs.ts
│   └── interpolation.ts
│
├── utils/                    # Constants and configuration
│   ├── constants.ts          # FPS, WIDTH, HEIGHT, DURATION_IN_FRAMES
│   ├── timing.ts             # Centralized scene timing table
│   └── colors.ts             # Design-token color palette
│
└── styles/
    └── global.ts             # Shared style fragments

public/
├── fonts/                    # Custom typefaces (Phase 2)
├── images/                   # Logos, backgrounds
├── audio/                    # Music, SFX
└── reference/                # Reference screenshots
```

## Architecture Decisions

- **Centralized timing**: All scene start/end frames live in `src/utils/timing.ts`. Adjusting scene boundaries never requires touching individual components.
- **Centralized constants**: Video resolution, FPS, and total frame count are defined once in `src/utils/constants.ts`.
- **Component-per-scene**: Each of the 8 scenes is an isolated React component, making parallel development straightforward.
- **Reusable primitives**: Common visual elements (Pill, GlassCard, AnimatedText, FluidBackground, icons) are shared across scenes.
- **Animation presets**: Easing curves and spring configs are defined centrally in `src/animations/` for consistent motion feel.

## Phases

| Phase | Status | Description |
| ----- | ------ | ----------- |
| 1     | ✅ Done | Project setup, architecture, placeholder scenes |
| 2     | 🔲 Next | Visual implementation — gradients, typography, animations |
| 3     | 🔲      | Polish — exact timing, easing, asset integration |
| 4     | 🔲      | Final review and render |

## License

UNLICENSED — Internal project.
