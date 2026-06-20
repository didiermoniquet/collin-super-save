# Collin · Super Save — project guide

A toy-box 3D penalty-shootout game. You play **Collin**, a Playmobil-style goalkeeper,
diving to save penalties from striker **Timothy**. Built with **three.js** (loaded from a
CDN). Everything procedural — no external 3D/image model assets.

## Shape of the project

It is essentially **one file**: `collin-super-save.html` (~180 KB) holds all markup, CSS,
and JS. There is **no build step** and no framework — just open it or serve it.

| File | Purpose |
|------|---------|
| `collin-super-save.html` | The entire game (HTML + CSS + JS, three.js from CDN) |
| `index.html` | Tiny redirect → `collin-super-save.html` (PWA entry) |
| `sw.js` | Service worker — offline cache, network-first HTML |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | PWA / home-screen install |
| `CHANGELOG.md` | Per-version changelog (newest entry on top) |
| `collin.webp`, `timmy.webp`, `collin-human.jpeg` | Reference images used while authoring poses — NOT loaded by the game |

## Running it

No install needed. Serve over HTTP (not `file://`, so the service worker + manifest load):

```bash
python3 -m http.server 8000
# open http://localhost:8000/collin-super-save.html
```

> **Local-iteration gotcha:** the service worker can serve a **stale cached HTML** even though it
> claims network-first, so a code edit may not show up on reload (you'll be testing an *old* build
> and chasing ghosts). A `?v=` cache-buster query alone is **not** reliable. If a change doesn't
> appear, unregister the SW + clear caches, then reload — in the console:
> `navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.unregister())); caches.keys().then(ks=>ks.forEach(k=>caches.delete(k)))`
> (or DevTools → Application → Service Workers / Clear storage). A fresh private window also avoids it.

**Controls:** dive into 6 zones by physical key position (top row Q/W/E = high, bottom row
A/S/D = low; works on AZERTY too) or tap the on-screen pad. A save only counts if Collin's
body actually touches the ball. Concede 3 → full time. Modes: Normal / Sudden Death / Goal
to Goal. Difficulty (Easy/Medium/Hard) sets shot speed.

**Demo mode:** open with `#demo` (or `?demo`). It **opens on a zoomed full-body scan turntable**
(`KSCAN` upright pose, ~12 s, one slow rotation), then auto-loops dive → concede → get-up on a
cinematic camera through all six directions; the scan returns after every six dives. The fastest
way to *watch* the keeper without playing. Gated behind the flag (see
`demoLoop`/`setupDemoScene`/`demoEnterScan`/`DEMO_SCAN_DUR`); normal play is untouched.

**Scan mode:** open with `#scan` (or `?scan`) for a zoomed, slowly-rotating **full-body turntable**
of Collin standing upright (the `KSCAN` pose) — for inspecting / photographing the model from every
side. It auto-spins but **pauses while you drag** (and resumes ~2.5 s after you let go), so you can
hold any angle; vertical drag tilts. Gated behind the flag (see `scanLoop`); normal play is untouched.

## Deploy & versioning workflow

- **Hosting:** GitHub Pages — https://didiermoniquet.github.io/collin-super-save/
  (source `main` / root). Repo: `didiermoniquet/collin-super-save`.
- **Trunk-based:** commit and push **directly to `main`** when the user asks to push — do
  **not** open a branch or PR. Only commit/push when explicitly asked.
- **Keep these three in sync on every release** (the start/end screens render `v<VERSION>`,
  which is how the user confirms a deploy landed):
  1. `<meta name="version" content="...">` in `collin-super-save.html`
  2. the `VERSION` const in `collin-super-save.html`
  3. the top entry in `CHANGELOG.md`
- **Service worker:** HTML is served network-first, assets stale-while-revalidate, so a
  deploy shows up on next launch (incl. the iOS home-screen app). Most releases need **no
  `sw.js` change** — only bump its `CACHE` name when you need to force-evict stale *assets*
  (e.g. a new three.js version or renamed icons).
- High scores / stats live in **IndexedDB** (durable on iOS standalone).
- Commit message footer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`

## Keeper animation architecture (the part most often worked on)

Both keepers (Collin and the opponent) are procedural rigs built by `buildFigure()` with
articulated joints: waist, shoulders (`sh`), elbows (`e`), forearms (`f`), wrists, hips,
knees (`k`), ankles.

A **pose** is a flat object of joint angles + a root offset, e.g. `KREADY`, `KDEJECT`, and
the per-zone dive keyframes built by `makeDivePose(zone)` which returns `{ext, load, land,
peak, air}` (gather → explosive reach → land). The same keyframes drive Collin and the
mirrored opponent keeper.

Each frame the live pose is integrated toward the phase target with **`smoothDamp()`** — a
critically-damped spring (Unity-style) that carries per-joint velocity (`kvel` / `oppVel`)
across phase changes, giving ease-in/out and follow-through instead of a stiff exponential
lerp. **`KCHAIN`** holds per-joint timing multipliers so the body moves as a kinetic chain
(legs/hips drive first <1, torso follows ~1.1, arms whip out last ~1.4). Per-phase response
times: explosive reach ~55 ms, settle on landing ~130 ms, dejection slump ~340 ms.

The dive then **reaches for the live ball**: during the airborne window the diving arm(s)
slerp their world-space aim at `ball.position` and straighten the elbow, so the glove
genuinely meets the ball (one hand to a full-stretch top corner, two hands elsewhere).
`makeDivePose` is the place to retune dive *shapes*; `smoothDamp`/`KCHAIN`/the per-phase
`smoothT` values are where you tune how the motion *feels*.

When editing animation, sanity-check with `node --check` on the extracted script, then load
it in a browser — single screenshots can't show transition smoothness; play it.

## Procedural figure & head (the other frequently-tuned part)

`buildFigure()` lofts the whole body from stacked cross-sections (`loft()`): legs, shorts,
torso, arms, neck — each one continuous skin. Slim, lean-teen proportions; the **boots** and
**gloves** are separate built meshes (`makeBoot`/`makeGlove`), scaled down so they don't
dominate. Kit colours come from **per-keeper materials** so the cosmetics panel can recolour
Collin without touching the striker/opponent.

`buildHead(skin, hair, eyeMat)` sculpts a **stylized child skull + face** by displacing a
sphere with Gaussian bumps (`G()`), and is shared by every figure. The base form varies
width/depth by height (slim, a bit longer front-to-back, subtle parietal width, a *gentle*
occiput, lower face narrowing to a small chin — deliberately **not** a ball/egg/balloon),
then adds: a forehead plane, soft brow, recessed **eye sockets**, a **projecting nose**
(bridge → rounded tip → nostril base), soft lips with a sub-lip recess, soft broad cheeks
(no localized "blobs"), and a youthful jaw. **Eyes** are a pale `M.eyeWhite` sclera + a small
dark iris set into the socket (not painted-on dots). **Ears** are a pinna + helix rim +
concha + lobe, tucked close. **Hair** is a second normal-offset shell of the sculpted skull,
masked to a hairline: faded lower sides + a **broad, ragged, asymmetric fringe** with
per-strand clump/length/direction variation — tuned to read as a short messy crop, *not* a
bowl/helmet cap, and kept low-profile (don't let it grow a crown peak or a clean curved edge).

**Inspecting the head:** the in-game camera sits *behind* the keeper, so the face is rarely
on screen. To tune it, temporarily add a tiny URL-flag inspector in `animate()` (hide the UI,
pose `KSCAN`, aim the camera at `keeper.head`, set the orbit angle from a global you can drive
from the console) to grab deterministic front / side / 3-4 / back screenshots — **then remove
it before shipping**. `#scan` is the shippable full-body equivalent.
