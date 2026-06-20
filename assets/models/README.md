# Goalkeeper model assets

The game tries to load an external goalkeeper model and falls back to the built-in
procedural keeper if it is missing. Drop the model here:

```
assets/models/collin-keeper.glb
```

The loader is wired up in `collin-super-save.html` (`loadKeeperModel()` +
`USE_GLB_KEEPER` / `KEEPER_GLB_*` constants, search for "EXTERNAL GLB GOALKEEPER").

---

## collin-keeper.glb

- **File name:** `collin-keeper.glb`  (GLB, glTF 2.0 binary)
- **Status:** ⛔ **TODO — not added yet.** No file is shipped in this folder, so the game
  currently runs on the procedural fallback keeper. Add a model to enable the GLB path.
- **Source:** _TODO — fill in once a model is chosen (URL or "created locally in Blender")._
- **License:** _TODO — must be CC0 / public domain, or CC‑BY with attribution below._
- **Author:** _TODO (required for CC‑BY)._
- **Attribution text:** _TODO (required for CC‑BY — paste the exact required credit line)._
- **Free-to-use confirmation:** _TODO — confirm the asset is free for commercial/non‑commercial
  use and that the license is explicit (not "unclear")._

> Do **not** commit a model whose license is unclear, a paid/subscription asset, a copyrighted
> commercial game model, an unlicensed Sketchfab download, or an AI-generated model with unclear
> commercial rights.

---

## Allowed sources (need explicit, compatible licenses — list for approval before adding)

- **CC0 low-poly human** (e.g. Kenney "Mini Characters", Quaternius "Ultimate Modular Characters" — both CC0)
- **CC0 football/soccer player**
- **CC0 rigged humanoid**
- A **locally created Blender model** (mark Source = "created locally")
- A **MakeHuman / MB‑Lab export** — only if the exported asset's license is acceptable
  (MakeHuman exports are CC0; MB‑Lab check per-version)

When proposing a candidate, record: name, exact source URL, license, author, and the required
attribution string. Do not auto-download anything with an unclear or incompatible license.

## Format / calibration notes

- Export as **GLB (glTF 2.0 binary)**, +Z forward, +Y up, real-world metres if possible.
- The model is added as a **child of `keeper.group`**, so it inherits the keeper's position,
  rotation and live height scale (`KSCALE`). Use `KEEPER_GLB_SCALE` to normalise the model to the
  procedural build height (`FIG_BUILD_H`); `KEEPER_GLB_OFFSET` to seat the feet on the goal line;
  `KEEPER_GLB_ROTATION_Y` to face the striker (+z).
- The GLB currently follows the keeper **root transform only** (no per-limb animation yet) — dives
  read as a whole-body move/roll. Rigging the GLB skeleton to the procedural joints is a later step.
- Heads-up: once a GLB is present it also contributes to the keeper's bounding box used for
  ground-planting, so verify the model sits on the turf after calibrating scale/offset.
