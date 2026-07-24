# Trueno — Portfolio

Single-page portfolio site for **Trueno** (3D modeling, illustration, motion design). Built with [Vite](https://vite.dev/) + React 17.

## Requirements

- Node.js 18+ (developed on Node 24)
- [Yarn](https://yarnpkg.com/) (Yarn 4, `nodeLinker: node-modules`)

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server supports hot module replacement.

## Scripts

| Command        | Description                                              |
| -------------- | -------------------------------------------------------- |
| `yarn dev`     | Start the Vite dev server at http://localhost:3000       |
| `yarn build`   | Production build to `build/`                             |
| `yarn preview` | Serve the production build locally                       |
| `yarn test`    | Run the Vitest suite (`yarn test run` for a single pass) |

## Project structure

- `index.html` — app entry (loads `/src/main.jsx`); jQuery is loaded from a CDN here because the Gallery uses the `react-owl-carousel` jQuery plugin.
- `src/App.jsx` — the whole app; a single-integer "modal" state acts as the view router.
- `src/sections/` — one folder per view (`MainSection`, `ModelsSection`, `Gallery`, …).
- `src/lib/models.json` — portfolio content (3D models, illustrations, motion).
- `public/assets/` — static images and videos, served at `/assets/...`.
