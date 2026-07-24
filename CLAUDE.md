# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page portfolio site for "Trueno" — a 3D-modeling, illustration, and motion-design artist. Built with **Vite 8** + `@vitejs/plugin-react`, React 17 (migrated from Create React App). The UI is in Spanish (INICIO, 3D MODELS, ILUSTRACIONES, MOTION, CONTACTO). Package name is `trueno-web`.

## Commands

Uses **yarn** (Yarn 4, `nodeLinker: node-modules`).

- `yarn dev` (alias `yarn start`) — Vite dev server at http://localhost:3000
- `yarn build` — production build to `build/` (outDir overridden from Vite's default `dist` to keep `.gitignore`/deploy expectations).
- `yarn preview` — serve the built `build/` locally.
- `yarn test` — Vitest (jsdom). Runs in watch mode; `yarn test run` for a single non-watch pass. One test file: `src/App.test.jsx` (a smoke test that mounts `<App/>`).

There is no lint script and no ESLint config (the CRA `react-app` eslint setup was removed during the Vite migration).

## Build config notes (`vite.config.js`)

- **Entry:** `index.html` lives at the **project root** (not `public/`) and loads `/src/main.jsx` as a module. `public/` is served at `/` (so `favicon.ico`, `manifest.json`, and everything under `public/assets/` resolve at root).
- **jQuery:** `index.html` loads jQuery from a CDN `<script>` in `<head>` **before** the app module. `react-owl-carousel` (used in `Gallery`) is a jQuery plugin that reads `window.jQuery` at runtime — do not remove that script tag.
- **CSS:** `css.lightningcss.errorRecovery: true` is set because the vendored `owl.carousel.css` uses legacy IE star-hacks (`*display: inline`) that the default lightningcss minifier rejects. It logs a warning and strips them; the build still succeeds.

## Architecture — the modal router

The whole app is one page. **`App.jsx` is a hand-rolled view router driven by a single integer state, `modal`.** There is no react-router. Understand this before changing navigation or adding a view.

State that matters (all `useState` in `App.jsx` — there is no redux store despite `redux` being in package.json):
- `modal` — the currently active view (integer, see map below).
- `previusModal` — the view we just left. Cleared to `""` ~500ms after every `modal` change via a `useEffect` interval.
- Content-passing state (`picture`–`picture4`, `item`–`item4`, `name`, `video`, `contain`, `back`) — populated by onClick handlers just before switching `modal`, then read by the target section as props.

**View map (the routing table):**

| modal | Component | Role |
|------|-----------|------|
| 0 | `MainSection` | INICIO — hero reel video |
| 1 | `ModelsSection` | 3D models landing |
| 2 | `IlusSection` | Illustrations landing |
| 3 | `MotionSection` | Motion landing |
| 4 | `Footer` | CONTACTO |
| 5 | `WorkSection` | 3D models 4-item grid menu |
| 6 | `Gallery` | Shared image viewer (owl-carousel) |
| 7 | `WorkSection` | Illustrations 4-item grid menu |
| 8 | `WorkSection` | Motion videos 4-item grid menu |
| 9 | `VideoSection` | Video player |

**Two-view crossfade pattern:** every section is rendered when `modal === N || previusModal === N`, and receives a `zIndex` prop that is `1` when active and `0` when it's the outgoing view. Because the outgoing section stays mounted for ~500ms (until `previusModal` clears), CSS/react-spring animations can play the leave transition while the new view animates in. If you add a view, follow this exact pattern or transitions will pop instead of animate.

**Navigation inputs:**
- `ReactScrollWheelHandler` wraps the app: wheel up/down moves `modal` within the 0–4 main sections only.
- `NavBar` burger menu opens an overlay listing the 5 main sections; each item sets `modal` and closes the menu.

**`WorkSection` is generic and reused three times** (modal 5, 7, 8). It's a 4-tile grid parameterized entirely by `picture*` props and `onClick1`–`onClick4` handlers defined inline in `App.jsx`. `Gallery` (modal 6) is the shared detail viewer; its `contain` prop toggles image fit (illustrations use `contain: true`, 3D renders use `false`), and `back` stores which menu the "return" action goes to.

## Content & assets

All portfolio content lives in **`src/lib/models.json`**, grouped into `models` (3D), `ilus` (illustrations), and `motion` (videos). Each entry has a `name`, a `portada` (cover), and either `pictures` (keyed `portada`,`1`–`4`) or a `video`.

Asset files are served statically from **`public/assets/...`** and referenced by relative `./assets/...` paths in the JSON. To add a portfolio piece: drop files in `public/assets/<category>/<name>/`, add the entry to `models.json`, then wire its cover + onClick handlers into the relevant section in `App.jsx`.

## Conventions

- **Structure:** each section is `src/sections/<Name>/<Name>.jsx` + `<Name>.module.css`; shared UI in `src/components/`; barrel re-exports in `src/sections/index.js`. Files containing JSX use the `.jsx` extension (Vite/esbuild requires it); non-JSX modules (`reportWebVitals.js`, `sections/index.js`, `setupTests.js`) stay `.js`. Imports omit extensions — Vite resolves both.
- **Styling:** CSS Modules (`styles.X`) per component; **react-spring** for JS-driven animation (see `NavBar` burger→cross morph).
- `redux` and `jquery` are listed as dependencies but are **not used** in `src/`; don't assume a store or jQuery is available.
- Existing code uses loose `==` for `modal` comparisons and leaves `console.log` calls in `App.jsx` — match surrounding style rather than "fixing" these unless asked.
