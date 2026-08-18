# Remotion Video Recreation

## Overview

A frame-accurate recreation of the Nitor Infotech reference motion-design video, built entirely with [Remotion](https://www.remotion.dev/), React, and TypeScript.

The video features 8 sequential scenes covering animated typography, glassmorphism cards, pill morphs, zoom-through sequences, floating elements, and a branded logo reveal.

## Tech Stack

- **React** 19
- **TypeScript** 5.9
- **Remotion** 4.0

## Requirements

- Node.js ≥ 18
- npm ≥ 9

## Installation

```bash
npm install
```

## Run Remotion Studio

```bash
npm run dev
```

Opens Remotion Studio at `http://localhost:3000` where you can preview, scrub, and inspect individual scenes.

## Render Final Video

```bash
npx remotion render MainVideo out/final-video.mp4
```

## Type Check

```bash
npm run typecheck
```

## Project Structure

```
src/
├── index.ts                  # Remotion entry point (registerRoot)
├── Root.tsx                  # Composition registration
├── MainComposition.tsx       # Scene sequencer (Sequences + timing)
├── template.tsx              # Assignment template entry (re-exports MainComposition)
│
├── scenes/                   # One component per scene
│   ├── Scene01.tsx           # 0:00–0:03  Pill scale-in + typing
│   ├── Scene02.tsx           # 0:03–0:06  Glassmorphism pill + blobs
│   ├── Scene03.tsx           # 0:06–0:10  Text reveal sequence
│   ├── Scene04.tsx           # 0:10–0:18  Word cascade + pill carousel
│   ├── Scene05.tsx           # 0:18–0:25  Zoom typography (Crawl/Walk/Run)
│   ├── Scene06.tsx           # 0:25–0:27  Scale pill + floating elements
│   ├── Scene07.tsx           # 0:27–0:29  Text sequence + CTA pill
│   └── Scene08.tsx           # 0:29–0:32  Checkmark + logo reveal
│
├── components/               # Reusable UI primitives
│   ├── Pill.tsx
│   ├── GlassCard.tsx
│   ├── AnimatedText.tsx
│   ├── FluidBackground.tsx
│   └── icons/
│
├── animations/               # Motion presets and helpers
│   ├── easing.ts
│   ├── springs.ts
│   └── interpolation.ts
│
└── utils/                    # Constants and configuration
    ├── constants.ts          # Resolution, FPS, duration
    ├── timing.ts             # Centralized scene timing table
    ├── colors.ts             # Design-token color palette
    └── typography.ts         # Font families and weights

public/
├── fonts/                    # Inter font family (woff2)
├── images/                   # Static assets
├── audio/                    # Audio assets
└── reference/                # Reference video
```

## Composition

| Property   | Value       |
| ---------- | ----------- |
| Resolution | 1920 × 1080 |
| FPS        | 30          |
| Duration   | ~32 seconds |
| Frames     | 960         |
| Format     | MP4 (H.264) |

## Assets

- **Fonts**: Inter font family in `public/fonts/` (Regular, Medium, SemiBold, Bold, ExtraBold, Black)
- **Icons**: SVG components in `src/components/icons/` (Sparkle, Search, Arrow, Checkmark)
- **Reference**: Original reference video in `public/reference/reference-video.mp4`

## Submission

The final rendered video is located at:

```
out/final-video.mp4
```

To generate it from source, run the render command above.

## License

UNLICENSED — Internal project.
