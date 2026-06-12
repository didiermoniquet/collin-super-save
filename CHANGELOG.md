# Changelog

All notable changes to **COLLIN · Super Save!** are recorded here.
The version shown on the start/end screens (and `window.GAME_VERSION` /
`<meta name="version">`) matches the latest entry below.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/),
and the project aims to follow [Semantic Versioning](https://semver.org/).

## [1.4.3] — 2026-06-12

### Changed
- **Toned down the far-net ripple.** The v1.4.2 billow was too strong; dialled the impulse and wobble back to a more natural amount.

## [1.4.2] — 2026-06-12

### Changed
- **More dramatic far-net ripple.** The opponent goal's net now billows much deeper and wobbles longer when you score — a harder impulse over a wider area with a softer spring.

## [1.4.1] — 2026-06-12

### Changed
- **Punchier opponent keeper dive.** In the two-goal view the opponent keeper now performs a full flying save — a ballistic jump, the body rolling horizontal, the spine curling, arms reaching with the gloves presented, and the legs driving off the floor (using the new ankle/wrist/spine articulation) — instead of a flat lunge.
- **Far net ripples.** The opponent's goal net is now deformable and billows into the goal when you score, matching the near goal.

## [1.4.0] — 2026-06-12

### Added
- **Play as a striker — two-goal view (Goal to Goal).** On your shot the camera now swings down the pitch to the **opponent's goal** (its own net + the opponent keeper, wearing your customised striker kit). You **aim a corner** and then **time a power meter** (with a sweet-spot band) before firing — more power means a faster shot that's harder to save, but over-hitting can sail wide. The opponent keeper leans toward the corner it'll cover (read it and aim away; harder difficulties hide the lean and "read" you more). The camera swings back to your goal to defend. First to 5, win by 2, as before.

## [1.3.2] — 2026-06-12

### Changed
- **More human players (part 2): spine/waist.** The figures now bend at the **waist** — the torso curls into a sideways dive and folds over the ball on a smother, and the striker's spine loads back then drives down through the kick (and arches on a celebration / slumps on a miss). Combined with the new ankles and wrists, the keeper and striker now articulate at every major human joint while keeping the toy look.

## [1.3.1] — 2026-06-12

### Changed
- **More human players (part 1).** The figures now have **articulated ankles and wrists** on top of the existing hips, knees, shoulders, elbows and neck — feet flex and point through kicks, run-ups and dives, and the gloves/hands break naturally at the wrist instead of being rigid. Boot soles/stripes and glove stripes follow the new joints. (A spine/waist bend and the two-goal "play as a striker" view are coming next.)

## [1.3.0] — 2026-06-12

### Added
- **Goal to Goal** — a new 1v1 goalkeeper-duel mode (a.k.a. "Goalie Wars"), based on the real pickup-game rules: two keepers take turns; you shoot, the opponent saves, then they shoot and you dive. **First to 5, win by 2.** On **your shot**, pick a corner (Q/W/E/A/S/D or the pad) — the opponent keeper leans toward the corner it's about to cover, so read it and aim away (harder difficulties hide the lean and "read" you more often). On **their shot**, dive to save as usual. A top scoreboard shows the duel score and whose turn it is, and your match wins are tracked. Select it from the **Mode** row.

## [1.2.0] — 2026-06-11

### Added
- **Striker customisation.** A new "⚽ Striker kit" section lets you dress your opponent like the keeper — jersey, shorts, socks, and boots from the same 10-colour palette, plus a custom name and number, with a live spinning preview.

### Changed
- The four rotating shooters are now a single striker **you** customise. Their distinct shot styles (top-corner, low-and-hard, disguised, etc.) are kept and assigned at random each match for variety — so matches still play differently, against one consistent, customised opponent. The kick-off toast and Full Time screen show your striker's name/number plus that match's style.

## [1.1.3] — 2026-06-11

### Fixed
- The keeper **name field** wouldn't accept the letters Q, W, E, A, S, or D — the global dive-key handler was intercepting them (and calling `preventDefault`) even while typing. It now ignores the dive keys whenever a text field is focused.

## [1.1.2] — 2026-06-11

### Changed
- The keeper-kit pickers (jersey, shorts, socks, gloves, boots) now all share **one palette of 10 common colours** (red, orange, yellow, green, blue, purple, pink, black, white, grey), shown as a 5×2 grid. The default kit maps to the nearest of these, and any previously-saved colour is snapped into the palette so a swatch is always highlighted.

## [1.1.1] — 2026-06-11

### Added
- **Service worker** for offline play and reliable updates. The game now launches instantly offline, and new deploys appear on the next launch — including in the iOS "Add to Home Screen" app, which previously held a stale snapshot. The page is fetched **network-first** (latest when online, cached when offline); three.js, fonts, and icons use **stale-while-revalidate**.

### Note
- After updating to this version once (re-add the Home Screen icon a final time to pick up the service worker), future updates no longer need a manual refresh.

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
