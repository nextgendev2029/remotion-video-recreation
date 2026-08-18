# Remotion Video Recreation

## Overview

A recreation of the Nitor Infotech reference motion-design video, built with [Remotion](https://www.remotion.dev/), React, and TypeScript.

The project reproduces the original video's visual design across 8 sequential scenes with animated typography, gradient backgrounds, glassmorphism elements, and branded logo reveal.

## Features

- 8-scene motion design with animated transitions
- Animated typography with character-by-character typing effects
- Gradient and fluid backgrounds
- Glassmorphism card with backdrop blur
- Animated UI pills, cards, and floating decorative elements
- SVG icons (sparkle, search, arrow, checkmark)
- Zoom-through typography sequences
- Reference audio track integration
- Nitor branding with red swoosh logo accent
- Centralized timing and design-token architecture

## Tech Stack

- **React** 19
- **TypeScript** 5.9
- **Remotion** 4.0
- **CSS / SVG** for styling and icons
- **Inter** font family

## Composition Specifications

| Property       | Value        |
| -------------- | ------------ |
| Resolution     | 1920 × 1080 |
| FPS            | 30           |
| Duration       | ~32 seconds  |
| Frames         | 960          |
| Composition ID | MainVideo    |
| Format         | MP4 (H.264)  |
| Audio          | AAC stereo   |

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

Opens Remotion Studio at `http://localhost:3000` for previewing, scrubbing, and inspecting individual scenes.

## Type Check

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

## Render Final Video

```bash
npm run render
```

The rendered video is output to `out/final-video.mp4`.

## Project Structure

```
src/
├── index.ts                  # Remotion entry point (registerRoot)
├── Root.tsx                  # Composition registration
├── MainComposition.tsx       # Scene sequencer (Sequences + timing + audio)
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
├── audio/                    # Reference audio track (WAV)
└── reference/                # Reference video (not required for rendering)
```

## Assets

- **Fonts**: Inter font family in `public/fonts/` (Regular, Medium, SemiBold, Bold, ExtraBold, Black)
- **Audio**: Reference audio track in `public/audio/reference-audio.wav`
- **Icons**: SVG components in `src/components/icons/` (Sparkle, Search, Arrow, Checkmark)

## Template

`src/template.tsx` is the assignment template entry point. It re-exports the validated `MainComposition` component and all composition configuration constants (`COMPOSITION_ID`, `WIDTH`, `HEIGHT`, `FPS`, `DURATION_IN_FRAMES`, `SCENE_TIMINGS`).

## Submission

The repository contains the complete working source project. Generated MP4 files are excluded from Git via `.gitignore` to keep the repository lightweight.

To produce the final rendered video from source:

```bash
npm install
npm run render
```

The final rendered MP4 is supplied separately as part of the assignment submission.

## License

UNLICENSED — Internal project.
