# Changelog

All notable changes to **COLLIN · Super Save!** are recorded here.
The version shown on the start/end screens (and `window.GAME_VERSION` /
`<meta name="version">`) matches the latest entry below.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/),
and the project aims to follow [Semantic Versioning](https://semver.org/).

## [1.0.2] — 2026-06-10

### Fixed
- High scores now persist on **iOS "Add to Home Screen"** apps. Those standalone apps tend to wipe `localStorage` and cookies between launches, but **IndexedDB survives** — so IndexedDB is now the primary store (with localStorage + cookie kept as fallbacks), and the best across all stores is loaded on launch. Also requests persistent storage where supported.

## [1.0.1] — 2026-06-10

### Fixed
- High scores now persist far more reliably across sessions. They're stored in **both** `localStorage` and a 1-year cookie, and the best of whatever survived is loaded on start — so if a browser/home-screen/private mode wipes one store, the other keeps the record.
- A new personal best is now saved **the instant it's beaten during play**, not only at full time, so it survives even if the game is closed mid-match.

## [1.0.0] — 2026-06-10

First versioned release. Everything built so far:

### Game
- 3D toy-box penalty shootout built with three.js in a single HTML file.
- Procedurally modelled Playmobil-style figures (no external art): keeper **Collin** and striker **Timothy**.
- Six dive zones (Q/W/E · A/S/D, mapped by physical key position) plus an on-screen pad.
- A save only counts when Collin's body actually **touches the ball** (capsule collision); deflections bounce with physics; the goal net ripples toward the viewer.
- Research-grounded goalkeeper movement: athletic set position, power-step dive, ballistic jump, leading-hand reach, and a collapsed-barrier smother for low shots.
- Striker run-up, plant, and kick with celebration / dejection reactions.
- **Easy / Medium / Hard** difficulty (shot speed only).
- **High score per difficulty**, saved in `localStorage`, shown in the HUD, start screen, and full-time screen.

### Presentation & platform
- Suburban-pitch scenery, dynamic shadows, soft procedural sound with a mute toggle.
- Mouse/touch camera: drag to orbit, **pinch / wheel to zoom**, double-tap to reset.
- Responsive layout for any window size, phone-friendly with safe-area handling.
- **Fullscreen** toggle (Android/desktop) and iOS "Add to Home Screen" support with an app icon.
