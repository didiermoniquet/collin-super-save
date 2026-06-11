# Changelog

All notable changes to **COLLIN · Super Save!** are recorded here.
The version shown on the start/end screens (and `window.GAME_VERSION` /
`<meta name="version">`) matches the latest entry below.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/),
and the project aims to follow [Semantic Versioning](https://semver.org/).

## [1.1.0] — 2026-06-11

A big gameplay update — six new features.

### Added
- **Striker "tell" + reaction timing.** The shooter now telegraphs the shot with a plant-foot / hip lean as he strikes — readable on Easy, subtle on Hard — so reading the shot becomes a skill. Each commit shows your reaction time (or **READ! ⚡** when you go before the ball is struck).
- **Slow-mo best-save replay.** Your best save of each match is recorded and can be replayed in slow motion from the Full Time screen, with the camera fully orbitable (drag / pinch / scroll).
- **Stats panel (per difficulty).** Lifetime save rate, best streak, best reaction time, and a 6-zone save-rate heat map — under "📊 Stats" on the start screen.
- **Shooter variety.** Four shooters (Timothy, Sven, Lars, Matteo), each with their own kit colour, number, and shot tendencies (top corners, low & hard, sneaky disguise…) and a slightly different pace. One steps up each match.
- **Sudden Death mode.** One goal and it's full time, with the shots speeding up relentlessly. Tracked as a separate high-score table from Normal.
- **Keeper cosmetics.** Recolour the whole kit — jersey, shorts, socks, gloves, and boots — and set a custom name (shown on the shirt) under "🎨 Keeper kit", with a **live 3D preview** of Collin spinning on a turntable that updates as you pick. The original kit is the default and the first swatch in each row; the selected colour is clearly highlighted. Choices are saved.
- **Back to menu.** A 🏠 button during play (and a "⌂ MENU" button on the Full Time screen) returns to the start menu, so you can change kit, mode, or difficulty mid-session.

### Changed
- High scores are now kept per **mode × difficulty**; existing records carry over into Normal mode.
- Save data moved to a single versioned blob (still IndexedDB-primary with localStorage + cookie fallbacks); v1.0.x high scores migrate automatically.

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
