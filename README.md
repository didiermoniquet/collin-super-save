# COLLIN · Super Save!

A toy-box 3D penalty shootout in a single self-contained HTML file, built with [three.js](https://threejs.org/). You play **Collin**, a Playmobil-style goalkeeper, facing penalties from striker **Timothy** — read the shot, dive to the right zone, and get a body part to the ball to make the save.

## Play

Just open `collin-super-save.html` in any modern browser — no build step and nothing to install (three.js loads from a CDN).

Or serve it locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/collin-super-save.html
```

## Controls

Dive into one of six zones — top row = high, bottom row = low:

```
Q W E      ↖ ↑ ↗
A S D      ↙ ● ↘
```

Keys are mapped by **physical position**, so AZERTY / QWERTZ layouts work too — or just tap the on-screen pad. A save only counts if Collin's body actually touches the ball.

- **Drag** to orbit the camera · **scroll** to zoom · **double-click** to reset the view
- Choose **Easy / Medium / Hard** (shot speed) before kick-off
- Concede 3 goals and it's full time

## Highlights

- Procedurally built Playmobil-style figures — no external image assets
- Research-grounded goalkeeper movement: athletic set position, a power-step dive, a natural ballistic jump, leading-hand reach, and a collapsed-barrier smother for low shots
- Physical ball-contact saves, parries with bounce physics, and a goal net that ripples on contact
- Suburban-pitch scenery, dynamic shadows, and striker reactions (celebration / dejection)
