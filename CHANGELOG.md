# Changelog

All notable changes to **COLLIN · Super Save!** are recorded here.
The version shown on the start/end screens (and `window.GAME_VERSION` /
`<meta name="version">`) matches the latest entry below.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/),
and the project aims to follow [Semantic Versioning](https://semver.org/).

## [1.18.0] — 2026-06-19

### Changed
- **Surface realism pass — the figures no longer read as one uniform plastic.** Added procedural
  **canvas bump-map textures** and differentiated every material's light response (proportions untouched):
  - **Fabric** (jerseys, shorts, leggings, socks): a fine **knit weave** with matte roughness. The lofted body now carries UVs so textures map onto it.
  - **Skin:** soft mottling + a gentle sheen (no longer a flat fill); faint **cheek warmth**.
  - **Hair:** vertical **strand** texture with highlights and matte roughness — no more smooth helmet.
  - **Gloves:** knit backhand vs **glossier latex grip palm**, panel **stitching**, wrist **strap + buckle**.
  - **Boots:** synthetic-leather grain, a **tongue + laces**, side seams, matte rubber sole.
  - Bump maps are colour-independent, so kit recolouring is unaffected.
- **Face readability at gameplay distance:** stronger dark **brows**, larger **eyes** with eyelids + catchlights, **nostril shadows**, and proper **upper/lower lips** with a mouth line — it reads as a face from across the box. Added a ribbed **crew collar**.

## [1.17.1] — 2026-06-19

### Changed
- **Large-form / mass-distribution pass — proportions of an athletic ~12-year-old, not an adult.**
  - **Shoulders ~20% narrower** (arm root .315→.245, chest .298→.233) — the bodybuilder inverted-triangle is gone.
  - **Torso** reshaped to ribcage → abdomen → pelvis stacked with only a **gentle** chest-to-waist taper and a **fuller lower trunk**.
  - **Neck** thicker and slightly shorter so it supports the head naturally (no thin tube); head lowered onto it.
  - **Arms** now taper to a **slim wrist** before the hand, so the limb reads as a forearm ending in a hand rather than a pipe.
  - **Gloves ~35% bigger** so they **dominate the hands** like real keeper gloves.
  - **Knees and ankles** softened (gentler kneecap/calf lobes, fuller ankle) for smoother transitions.
- Verified against the squint/silhouette test, the textured front, and a full dive.

## [1.17.0] — 2026-06-19

### Changed
- **Anatomical relief on the continuous body.** The `loft()` builder now takes per-section **muscle lobes** (and fabric folds), so the single-skin limbs and trunk carry real anatomy instead of being plain ovals:
  - **Arms:** a rounded deltoid that merges into the trunk, a **bicep up the front** and a **tricep down the back**, the **point of the elbow (olecranon)** at the back, and a **forearm flexor** swell tapering to the wrist.
  - **Legs:** a **quadriceps** up the front of the thigh, **hamstrings** at the back, a **calf belly** high on the back of the shin, and a kneecap at the front.
  - **Torso:** in side view the **chest now projects forward over a set-back abdomen** (a real ribcage S-curve), with pecs; in front view broad chest → pinched waist.
  - **Pelvis:** the shorts now read as a pelvis — **hip width, glutes, a hint of the iliac crests, and an inseam pinch** so the legs separate as they emerge.
  - Faint **fabric folds** at the hem, waist and chest.
- **Real goalkeeper gloves.** Rebuilt from the old sphere into a **flat lofted backhand, four fingers with volume and gaps, a thumb, a latex grip palm and a wrist strap** — it reads as a glove, not a ball.
- **Deeper face sculpt:** added **upper eyelids**, a stronger **nose bridge & tip** with **nostril wings**, a sharper **jawline**, and fuller cheekbones.

## [1.16.0] — 2026-06-19

### Changed
- **The body is no longer assembled from separate primitive parts.** Every limb and the trunk are now **single continuous lofted surfaces** (a new `loft()` builds one smooth skin through a stack of shaped elliptical cross-sections), replacing the old stack of cylinders + sphere "joint caps":
  - **Arms** are one flowing skin — deltoid → bicep → elbow → forearm → wrist — with **no separate shoulder/elbow cap objects**; the upper-arm and forearm ends overlap at the elbow so the joint bends out of one form.
  - **Legs** are one flowing skin — thigh (quad up front) → knee → calf (muscle on the back) → slim ankle — with **no separate kneecap**; the knee emerges from the anatomy.
  - **Torso** is one continuous trunk — pelvis hem → pinched waist → ribcage/abdomen → chest → shoulders → neck base — wider than deep so it reads as a human trunk, not a rounded box. The **shorts** are a single skin wrapping the pelvis and the tops of the thighs, with the jersey hem draping over them.
  - **Neck** rises out of a wide trapezius/clavicle base instead of being a cylinder plugged between parts.
  - Verified as a silhouette and across poses (ready, deep knee/elbow bends, dive); the joint rig, kit recolouring and save-collision are unchanged.

## [1.15.0] — 2026-06-19

### Changed
- **The head is now a sculpted human head, not a sphere with hair stuck on.** It's built as a single mesh whose vertices are **displaced into real anatomy** — a cranium and occiput, a flatter face plane, a brow ridge, **recessed eye sockets**, a **nose bridge and tip**, **cheekbones with youthful fullness**, and a **gently tapering jaw with a rounded chin**. The **hair conforms to the scalp** (a second surface offset along the skull normals, masked to a natural hairline) instead of a floating dome, the **ears are sculpted**, and the eyes are almond-shaped with a catchlight. Applies to both keepers and the striker (each keeps its own skin/hair/eye colours). The body remains the procedural model; only the head was rebuilt this pass.

## [1.14.2] — 2026-06-19

### Changed
- **Dive realism (priority):** the flying save is no longer a rigid plank. The diving keyframes now form a flowing **C-curve** — the **chest twists toward the ball** (new spinal-twist `wy` channel on the waist), the spine **curls and arches** slightly, and **both legs trail with a natural bend** instead of locking straight. The reaching arm keeps a **slight elbow bend at full stretch** (no hyper-extended stick arm), so the glove leads and the keeper reads as *attacking* the ball rather than colliding with it. The curve and twist relax as he lands. Applies to both keepers.
- **Neck & head:** neck ~10% longer with a slimmer trapezius, and the head **raised so it sits on top of the shoulders** instead of sunk between them — the natural shoulder slope is kept.
- **Arms:** anatomical taper — wide at the shoulder, narrowing to the elbow, swelling again through the forearm, narrowing to the wrist — with subtle **bicep/tricep and forearm muscle** volume so the limbs aren't plain cylinders.
- **Lower legs:** a more defined **calf** high on the shin tapering to a slimmer ankle — a clearer knee → calf → ankle line.

## [1.14.1] — 2026-06-19

### Changed
- **Silhouette & proportion pass** so the figures read as a realistic (slightly stylized) U12 footballer rather than a toy — verified as a plain black silhouette: human, athlete, goalkeeper at a glance.
  - **Head** ~13% smaller; **neck** longer and emerging from a wide, low, sloped trapezius instead of a squared yoke.
  - **Shoulders** lowered and narrowed a touch, with the deltoid flattened into a natural slope (no more shoulder-pad look).
  - **Torso** ~12% taller with a more pinched waist and restrained (un-exaggerated) athletic V.
  - **Arms** thicker (upper arm + forearm), forearms slightly shorter, arms set closer to the body.
  - **Legs** noticeably longer (the big fix for the chibi look), with a clearer kneecap, quad and calf.
  - **Gloves** wider and heavier/more padded; **boots** ~20% less bulky — longer and slimmer, more like a real football boot.

## [1.14.0] — 2026-06-19

### Changed
- **Both keepers and the striker were rebuilt to look like athletic adult footballers instead of toy mannequins.** Same articulated rig and joints (so every dive/get-up still works) — only the meshes changed:
  - **Proportions:** broader shoulders with rounded deltoid caps, an athletic V torso (lathe profile: narrow waist → ribcage swell → broad chest) with pec definition, a clearly visible neck + trapezius, thicker tapered arms and legs (upper arm ≈ forearm, thigh ≈ shin), and a smaller, more adult head.
  - **Limbs:** quad and calf bulges, knee caps and elbow caps, and fabric folds at the elbows, knees and waist — no more plain tubes or rectangles.
  - **Hands:** bigger padded goalkeeper gloves with four fanned fingers, a thumb, a latex grip palm and a wrist strap; outfield players get larger bare fists with a thumb.
  - **Feet:** proper football boots — heel, instep, ankle collar, rounded toe, a moulded white sole and six studs underneath — replacing the block feet.
  - **Head:** visible ears below the temple hair, cheekbones, layered hair (crop + fringe + back + temples), and tidier facial features.

## [1.13.0] — 2026-06-19

### Added
- **Showcase / demo mode** — open `collin-super-save.html#demo` (or `?demo`) and the keeper auto-loops **dive → concede → get-up** on a cinematic 3/4 camera, cycling through all six dive directions, with the striker/HUD/controls hidden and a caption naming each beat. Gated entirely behind the flag, so normal play is untouched. Handy for watching the animation without playing.

### Changed
- **Collin now gets up off the deck like a human instead of levitating.** After conceding he used to float straight from lying flat to standing in one spring. He now plays a researched floor-to-stand: **lie & hold** a beat (head hung — the dejection cue), **plant a hand and push the chest up off the turf**, **gather onto one knee** (lead foot flat, a forearm on the thigh), then **drive up through that leg** into a weary, head-in-hands slump, with the torso uprighting last. Built procedurally from the exact pose he landed in, and mirrored correctly for dives to either side. The conceded result window was lengthened (1.5 s → 2.9 s) to let the sequence breathe.
- **Less stiff, more human dive motion.** Widened the kinetic-chain stagger so the legs/hips clearly drive first while the spine and arms whip out and trail later (less rigid lockstep), and **softened the landing** so the impact is absorbed rather than snapping flat. Applies to both Collin and the opponent keeper.

### Fixed
- The keeper's feet now sit **flat** the moment he is back on them when getting up (the ankle no longer stays toe-pointed once he stands).

## [1.12.3] — 2026-06-18

### Changed
- **Both keepers now wear realistic goalkeeper gloves.** The old flat tiger-stripe wrist bars are gone; each glove is now a proper modelled GK glove — a contoured backhand, a separate dark latex grip palm facing outward, four fingers and a thumb. Outfield players keep their bare hands.
- **The opponent keeper (Goal-to-Goal mode) now reaches for and catches the ball too.** Matching Collin's behaviour, the opponent's gloves **procedurally aim at the live ball** on a save — **one hand** at full stretch to a top corner, **both hands** otherwise — and he **gathers and holds the ball** on a two-handed save instead of always parrying. Verified: the opponent's glove meets the ball (≈0.03 m) and a caught ball stays pinned in his hands.

## [1.12.2] — 2026-06-17

### Changed
- **The keeper now reaches for the ball with his hands on every dive — using proper goalkeeping technique per shot.** On top of the per-zone shapes, the reaching hand(s) now **procedurally aim at the live ball position and the elbow straightens**, so the glove genuinely extends to meet the moving ball instead of holding a fixed pose. Following how a real keeper saves:
  - **Low corners, low central (smother) and high central** → **both hands** go to the ball to catch/trap it.
  - **Top corners** → **one hand** (the near/strong hand) at full stretch — a top-corner ball is physically a one-hander; you can't get the second hand up there.
  - It only engages when he's diving toward the ball's side (no flailing across a wrong-way guess) and eases in/out across the dive. Contact was re-verified at every shot zone in both 8v8 and 11v11.
- **He now catches and holds the ball when he can, instead of always parrying.** A two-handed save (low corners, low/high central) **gathers the ball and holds it secured between both gloves** — no rebound. Only the full-stretch **top-corner** saves (a one-handed tip) and wrong-way deflections are still parried clear.
- **Low diving catches (bottom-left / bottom-right, and the smother) now clutch the ball low and tight to the body** — the catch pose locks to him so the ball stays down where he grabbed it instead of drifting up to chest height at the end of the dive.
- **When he concedes, the keeper reacts in dejection — where he was beaten.** He rises **at his own position (not recentred)** and **covers his face with both hands in shame**: elbows pulled in toward the chest, forearms rising to the face, both palms over the eyes, shoulders rounded forward and the head tilted down a little into the hands. (Only on a goal; a save shows no dejection.)

## [1.12.1] — 2026-06-17

### Fixed
- **Shortened the players' arms** — they'd been lengthened too far (longer than the legs, ~1.05× leg length), which read as gangly, especially in dives. They're now a natural ~0.88× the leg length (shorter than the legs). The keeper's hands still reach knee height in his set stance, and saves were re-verified in both formats (he still reaches every zone).

## [1.12.0] — 2026-06-15

### Changed
- **The keeper now leads with his hands on every dive — grounded in goalkeeper coaching.** Researched how the body should be placed for each type of save and re-shaped the dives so the **hands attack the ball first** (the No. 1 coaching point: "lead with your hands — the further you extend, the more you reach"):
  - **Top corners:** the lead (top) hand now reaches out along the body's line to the corner instead of both arms staying pinned straight overhead, so it reads as a hand attacking the ball at the corner.
  - **High through the middle:** both hands now spring **up to meet/tip the ball**, rather than the save being made with the chest/head.
  - **Low corners:** the lead (bottom) hand leads out and down **behind** the low ball, and the dive is kept on a slight **diagonal (head higher than the hips) rather than flat on the turf** — the coached shape that's both safer and a touch longer in reach; the top hand stays up to help secure it.
  - The collapse/smother for the low central ball (chest over it, hands scooping) was already correct and is unchanged.
- Every change was checked against the game's own physics save-detection (capsule collision) with a headless rig harness: the keeper still **reaches every shot zone in both the 8v8 and 11v11 formats across the full keeper-height range**, with equal-or-better margin than before — so the dives look more like real goalkeeping without making saves any harder. The nearest hand-to-ball distance at full stretch dropped from ~1.1–1.5 m to ~0.0–0.4 m.
## [1.11.3] — 2026-06-15

### Changed
- The **`CUP <year>`** advertising-hoarding label now uses the **current year automatically** (CUP 2026, CUP 2027, …) instead of a fixed year.

## [1.11.2] — 2026-06-14

### Changed
- **Reworked the keeper into a proper coiled, athletic set position — a slight squat** (matching the reference photo). Feet a touch wider than the shoulders with the **toes turned out ~12°**, in a **slight squat: the hips drop and sit back with the thighs angled forward (knees over the feet) and the shins ~vertical**, the **torso leaning ~15° forward** so the shoulders are ahead of the hips, **chin down with the eyes tracking the ball**, and the arms held off the body with the elbows bent so the **open hands sit at knee height, apart, in front of the body** — ready to spring either way. (Verified by measurement: knee bend ≈52°, hips ~7 cm below standing, thighs angled forward, lean ≈16°, feet gap ≈0.43 m, toes out ≈12°, hands ≈0.54 m apart at knee height in front.)
- **Lengthened the figures' arms** to more natural human proportions — the old arms were short (fingertips only reached mid-thigh), which is why the keeper couldn't get his hands down to knee height in front. Saves were re-verified in both formats after the change (the keeper still reaches every zone).
- Replaced the **`FC·24`** label on the pitch-side advertising hoardings (it read as the EA video game) with a neutral **`CUP 2026`**.

## [1.11.1] — 2026-06-14

### Fixed
- **The opponent's goal in Goal-to-Goal mode now matches the new professional goal.** It had been left with the old flat frame and back-curtain net; it now has the same FIFA-scale 0.12 m posts, rear box stanchion with ground anchors, and the 3-D net enclosure (roof + sloped back + side panels, no floor net) — mirrored to run back behind the far goal — with the same billow-on-impact physics. It was also **moved forward (to z=18)** so the goal and its net run-back sit on the field with run-off behind, instead of poking into the far stand.

## [1.11.0] — 2026-06-14

### Changed
- **A real professional goal.** Replaced the flat posts-and-back-curtain with a proper modern stadium goal, built to FIFA scale and designed for the close-up behind-the-goal camera:
  - **Frame:** glossy white painted-aluminium posts & crossbar at the correct **0.12 m diameter**, with rounded post↔bar corners.
  - **Rear box stanchion:** top run-back (~0.9 m), ground run-back (~2.0 m) and the back slope between them, joined by top/bottom rear bars and a mid-stay each side, **pinned by ground anchors** — all scaled to the chosen format (8v8 / 11v11).
  - **Net:** a true 3-D enclosure — a roof and a sloped back panel down to the ground at the rear, plus vertical triangular **side nets** (no net on the ground inside — open grass, like a real goal) — in white nylon with an even **~square mesh**, a little gravity slack (not rigid), and small net **ties/clips** along the crossbar.
  - **Physics:** the back net now takes a **localised punch** where the ball strikes and **billows back, then springs smoothly home** (stiff, moderately damped — low stretch).
  - Frame and net are **separate meshes**; the net grid rebuilds to the correct cell size for each format. Gameplay, dives and saves are unchanged.

## [1.10.0] — 2026-06-14

### Changed
- **A big realism pass — the game looks far less cartoonish.** Re-graded the whole presentation toward a natural, photographic look while keeping every bit of gameplay identical:
  - **Rendering pipeline:** switched to **sRGB output + ACES filmic tone-mapping** (highlights roll off naturally instead of blowing out flat), with all colour textures tagged sRGB so nothing shifts hue.
  - **Lighting:** softer overcast-bright daylight — a gentler warm sun key, broad cool sky/ground fill, and **higher-resolution, softer-edged shadows** — instead of the hard, flat key.
  - **Sky & air:** desaturated, hazier sky gradient and a greyer atmospheric **fog** for real depth (no more electric cyan).
  - **Pitch:** natural (de-neoned) grass with finer **mowing stripes**, broad mottled wear and a denser grass speckle so it reads organic, not plastic.
  - **Materials:** weathered, duller concrete stands & roofs, a more natural team-blue crowd, and **rounder, smoother players and ball** (higher-poly limbs/head/ball). The bright **pink boots & volt gloves are kept** — those are real.
  - **Grade:** a slightly deeper cinematic vignette to frame the pitch.
  - Heavy post-processing (bloom/SSAO) was deliberately skipped to avoid external dependencies in the offline PWA; the look is achieved in-pipeline.

## [1.9.4] — 2026-06-14

### Added
- **Pick the players' heights.** The Keeper and Striker kit panels each get a **Height slider** (1.40–2.05 m; defaults Collin 1.60 m, striker 1.72 m). Because saves are physics-based, a taller keeper genuinely reaches more of the goal — the choice is persisted and applied live.
- **Official goal sizes — choose 8v8 or 11v11.** A new **Format** selector in the menu sets the goal to its real dimensions and labels it: **8v8 = 5.00 × 2.00 m**, **11v11 = 7.32 × 2.44 m (FIFA full-size)**. The goal, net, shot zones **and the keeper's dive reach all scale together**, so the save difficulty stays balanced in either format (verified: the keeper reaches every zone in both). The far goal in Goal-to-Goal resizes too.

## [1.9.3] — 2026-06-14

### Added
- **A two-camp crowd that lives and dies with the result.** The stands are now split into two sets of supporters — **Collin's camp** (steel-grey, his dark kit) on the stadium's left and the **striker's camp** (blue kit) on the right — across both the painted rows and the 3-D spectators. When a shot is settled the two camps react in opposite ways: a **save** sends Collin's camp leaping up with arms thrown overhead (and the striker's camp slumping with their **heads in their hands**), and a **goal** flips it — the striker's camp erupts while Collin's holds their heads. The reaction rolls in, holds, and eases back to the ambient wave, and is wired to every mode's shot outcome.

## [1.9.2] — 2026-06-14

### Changed
- **Collin remodelled joint-by-joint from a real photo of the keeper** (`collin-human.jpeg`), so both his build and his pre-dive position match the actual lean young keeper rather than a generic figure:
  - **Proportions:** slimmer arms and legs, a narrower chest/shoulder line, a tighter pelvis and a smaller, more teen-like head and neck — a leaner, taller-looking athletic build. (Bone lengths and joint pivots are unchanged, so every dive and pose still lines up; figures auto-scale to 1.60 m as before.)
  - **Set/ready stance rebuilt from the photo's joint angles.** Trunk leans forward only **moderately and as a waist hinge** — decoupled from the body pitch so the **shins stay vertical and the feet flat** (the old coupling tipped the feet and read as falling forward). The crouch comes from a moderate knee bend with the hips dropped back, head up to the play, and **both arms hanging from the shoulders with the elbows bent ~80° so the open gloves sit at WAIST/HIP height in front of the body** (not up by the chest, not down at the knees), about shoulder-width apart. Feet a touch wider than the shoulders.
  - **A genuinely human face.** Replaced the blocky cylinder head with a rounded, oval head + jaw, and added the features from the photo — **eyebrows, almond eyes, a nose and ears** — under a short textured brown crop with a bare forehead and a light fringe at the hairline, plus a focused neutral expression.
  - **Colour/kit:** hair retuned to a true mid-brown (the old shade flared ginger under the warm key light — now the shipped default) and the socks darkened to match his all-black kit.

## [1.9.1] — 2026-06-14

### Fixed
- **The crowd no longer blocks the view.** On tall phone screens the camera zooms out behind the goal, which put the goal-line stand and the near ends of the side stands right in front of the lens (giant spectators filling the foreground). The bowl was widened and the goal-end / side stands pushed well back beyond the camera's furthest zoom, so the playing view stays clear.

### Changed
- **Spectators now have arms.** Each person has a pair of arms that rest low while seated and **shoot up and wave** when the cheer wave rolls past, so the celebration reads much more clearly.

## [1.9.0] — 2026-06-14

### Added
- **A living crowd in the stands.** The terraces are now populated with **3-D spectators sitting and cheering** — low-poly people seated row by row across all four stands, gently bobbing, with a **stand-up "arms-out" cheer that rolls around the bowl** like a Mexican wave. Built with instanced rendering (grouped by shirt and skin colour) and driven by its own lightweight animation loop, so it adds atmosphere without bogging the game down or touching the gameplay loop.

## [1.8.3] — 2026-06-14

### Changed
- Reworded the end-of-game message that referenced "training between the cones" (the cones are gone) to "keep working on those saves!".

## [1.8.2] — 2026-06-14

### Removed
- **The orange training cones on the pitch are gone**, clearing the playing surface around the penalty area.

## [1.8.1] — 2026-06-14

### Removed
- **The suburban houses and perimeter trees are gone.** They were the old "back garden" backdrop and now clash with the new stadium, so the field is framed by the stands alone. (The wider grass ground plane and the ball-stop hedge are kept.)

## [1.8.0] — 2026-06-14

### Added
- **A full stadium around the pitch.** The field no longer floats in empty sky — it now sits inside a proper **stadium**. All four sides (behind the goal, behind the penalty taker, and along both touchlines) are wrapped in **stepped concrete terraces** with a dark shadow lip on every row, packed with a **realistic crowd**: a natural spread of clothing and skin tones, hair and caps, and the odd empty seat, with soft ambient shading so the rows read with depth rather than flat confetti. Each stand is capped by a **cantilever roof** with a dark underside and a concrete back wall, fronted by a **sponsor/LED advertising hoarding**, and the four corners carry **floodlight pylons** with glowing lamp banks aimed in at the pitch. Built entirely within the scene-setup section so it composes cleanly with the keeper/player work, and kept lightweight (the crowd is one reused canvas texture tiled across the rows).

## [1.7.3] — 2026-06-13

### Fixed
- **The keeper's feet now stay on the ground.** In his set/ready stance Collin was up on the very tips of his boots (the deep crouch pitched the feet ~66° toes-down), so he looked like he was floating. The ankles now **dorsiflex to keep the soles flat on the turf** — heels just slightly up, on the balls of the feet — and the ground-contact rule was changed to **plant his lowest point exactly on the grass whenever he isn't airborne** (it used to only stop him sinking, never floating). He's only off the ground during the airborne part of a real dive.
- Re-reached the **top-corner dive** so the gloves actually get to the corner with the new human proportions, and verified the keeper still saves every zone (96% diving to the right zone with a realistic reaction).

## [1.7.2] — 2026-06-13

### Fixed
- **Dives no longer "fly" — the low saves hug the ground.** A trace of the dive showed the keeper's whole body floating ~0.2 m off the turf for ~0.4 s on a low save, which read as flying. The low and bottom-corner dives now **stay down and lay out along the ground** (a low push to meet the knee-high ball, then settling on the side), and the airborne arc is a touch snappier so there's less hang at the top. Top-corner and centre-high saves still take the **leap they need** (you can't reach the top corner without leaving your feet — those genuinely are flying saves). Re-tuned and re-checked that the keeper still reaches the ball in every zone (save collision verified across all six).

## [1.7.1] — 2026-06-13

### Changed
- **Pro goalkeeper "set" stance.** Now that the keeper is human-proportioned, re-grounded his body language in real GK coaching: between/before shots he holds a proper **coiled athletic set** — knees deeply bent, **chest leaning out over the knees** with weight on the balls of the feet, **feet about shoulder-width**, and the **gloves up and forward, ready to spring** (arms off the body, no "t-rexing"). The dives then launch out of that loaded crouch, so the whole save reads like a real keeper. (The flying corner saves, the vertical tip-over and the low collapse/smother were re-checked against the new proportions and hold up.)

## [1.7.0] — 2026-06-13

A big presentation overhaul — players, scene and menus.

### Changed
- **Human body proportions.** The figures were remodelled from the stubby toy build to athletic-youth proportions — longer legs (~45% of height), leaner torso and limbs, a rounded shoulder yoke and a noticeably smaller head — so Collin and the striker read as people, not bath toys. Figures now auto-scale to their target height (so the proportions can change freely), and the diving saves actually look *better* for it (the leaner body makes the full-stretch dives more elegant). Collision, grounding and all dive types were re-verified.
- **Richer look & feel.** Warmer low-afternoon key light with a cool sky counter-fill and softer shadows; a real **gradient sky dome** with a soft sun glow; **mown-stripe turf** with a grassy speckle (no more flat plastic green); warm horizon haze; and a subtle **cinematic colour-grade + vignette** that frames the pitch without touching the UI.
- **Completely redesigned menus & HUD.** A modern, premium pass over every panel: a clean white card with a gradient accent stripe and gradient wordmark, **segmented difficulty control**, refined mode pills, elegant labelled dividers, a bold green “Kick Off” call-to-action, tidier collapsible kit/stats sections, and lighter floating HUD badges, dive pad and buttons — all keeping the playful football identity while feeling far more polished.

## [1.6.0] — 2026-06-12

### Added
- **Face customisation: skin, hair, and eye colour.** Both the keeper (Collin) and your striker now have **Skin**, **Hair**, and **Eyes** pickers in their customisation panels, each with its own palette — realistic skin tones, common hair colours (plus a couple of fun ones), and a range of eye colours. The live preview and the in-game figures update instantly, and the opponent keeper (who is your striker in goal) inherits the striker's look. The mouth stays its friendly dark line. Choices are saved like the rest of the kit.

## [1.5.0] — 2026-06-12

### Changed
- **Bigger, more spectacular top-corner saves.** The high diving saves are now a full-blown flying leap — the keeper springs higher to the corner with real hang time at the apex, the body flung nearly horizontal and stretched in one long line, arms reaching past the head to the top corner, the contralateral leg driving fully straight — then comes down to land. Applies to both Collin and the opponent keeper.

### Fixed
- **The opponent's goal now sits on a goal line.** In the two-goal view the opponent's goal previously floated on bare grass; the pitch now has proper markings at that end — a goal line directly under the posts, an 18-yard box, and the side lines running the full length and meeting the goal — so it reads as a real goal-to-goal pitch with the posts aligned to the line.

## [1.4.9] — 2026-06-12

### Changed
- **Spectacular full-stretch low diving saves.** Modelled on the iconic Courtois full-stretch save: on a bottom-corner shot the keeper now launches into a **fully horizontal, airborne flying save** — the whole body stretched out in one long straight line off the ground, the gloves reaching down to the low ball, the legs trailing straight with the toes pointed — and then comes down to **land on its side** (hip on the turf). It's a clean plank in the air, not a flat slide, and it applies to both Collin and the opponent keeper. (v1.4.8 grounded the low save; this makes it dramatic again while still landing properly.)

## [1.4.8] — 2026-06-12

### Fixed
- **Low diving saves are now grounded and read properly.** On a dive to a bottom corner the keeper used to float — the hip never reached the turf — because the spine was hard-wired to curl with the body roll, piking the figure so an arm/foot poked through the ground and the auto-grounding shoved the whole body (and the hip) back up into the air. The spine bend is now controlled per-dive (`wz`), so low saves keep a straight body and **lay out flat along the ground on the side, hip and torso on the turf**, the lower arm reaching the low ball — verified by measuring the hip height from multiple angles. High flying saves keep their reaching arch. The opponent keeper's low dive is grounded the same way.

## [1.4.7] — 2026-06-12

### Changed
- **Pro goalkeeper diving technique.** Reworked the dive body shapes from real GK coaching/biomechanics so both keepers (Collin and the opponent) move like a pro: the keeper now **attacks the ball at ~45°** (driving forward *and* sideways off the contralateral leg) instead of falling flat along the line, the body is **longer and fully extended** in flight with the **hands leading**, the **vertical save extends and arches** to reach up-and-over the bar, the **smother folds over the ball** reaching hands-first, and the keeper **lands on its side** (top leg cushioning) rather than flopping flat. Collin's dive and the opponent's dive are now driven from a single shared definition, so they stay identical.

## [1.4.6] — 2026-06-12

### Changed
- **Opponent keeper now dives exactly like Collin.** In the two-goal view the far keeper is driven through the *same* dive system as the player's keeper — the same per-zone keyframes and the gather → explosive ballistic jump → full-stretch reach → landing timeline — just mirrored for its reversed facing and re-grounded on the turf. So it gets the identical flying corner saves, the centre-high vertical spring, and the low collapsed-barrier smother, instead of the simpler approximation it had before.

## [1.4.5] — 2026-06-12

### Changed
- **Proper opponent keeper dive + a camera swoop on goals.** The opponent keeper now makes a real flying save in the two-goal view — a ballistic jump, the body rolling fully horizontal, arms reaching with the gloves out, legs splitting (the previous version looked wrong because its facing flipped the dive). And when you score, the camera now swoops in toward the goal to show off the finish, net billow and confetti, then pulls back to defend.

## [1.4.4] — 2026-06-12

### Fixed
- **No more "second goal" behind the opponent.** The decorative background goal at the far end is now hidden during your Goal-to-Goal shot, so the camera down-pitch shows just the opponent's goal (it still appears as background scenery the rest of the time).

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
