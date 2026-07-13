# CHIPC Website Refresh — Design Concepts

Static, self-contained mockups for the City & Hackney IPC website refresh.

## The consolidated IPC Portal prototype (Design 1, every page)
- **`portal/index.html` — the full click-through prototype** of the new model:
  the separate IPC area goes away, and the GP section and IPC content consolidate
  into one flat portal. Bulletins, Contracts, Policies and Staff Bank sit in the
  main nav as peers of Pathways, Services and Documents; access is per item —
  member-practice content simply carries a 🔒 wherever it appears.
- One merged document library (GP-Section pattern) with open and 🔒 documents
  side by side, plus a document page with in-browser preview.
- Every page has a **"✎ Admin: edit this page"** button demonstrating the front-end
  editing model for the WordPress rebuild (demo edits save to the browser).
- **`portal/plan.html`** — one-page stakeholder rebuild plan (merged front + back end,
  padlock convention, staging → live rollout) for sign-off.
- Clean semantic HTML/CSS (`portal/assets/portal.css`), structured to map 1:1 onto
  WordPress theme template parts.

## Contents (original design boards)
- `index.html` — start here (links to all three designs)
- `design-1-ipc-hub.html` — Design 1: The IPC Hub (search-first, recommended)
- `design-2-rich-gradient.html` — Design 2: Rich Gradient
- `design-3-colour-block.html` — Design 3: Colour Block

Each design shows: Portal home · GP Hub landing · Duty Doctor resources.
Design 1 also includes a single document page (GP pathway).

## Viewing
Every file is fully self-contained (images and fonts inlined) — double-click any file
to open it in a browser, or email the folder as a zip.

## Hosting on GitHub Pages
1. Create a repo and push the contents of this folder to the root (or /docs).
2. Settings → Pages → deploy from branch → select the branch/folder.
3. The site will be live at `https://<user>.github.io/<repo>/`.

## Notes
- Palette per IPC brand guide: IPC Blue #074a81, Green #43723c, Teal #4ab182, Slate #3b5f75.
- Photography: licensed Adobe Stock placeholders — swap for authentic Hackney photography before client sign-off.
- Uses the real CIPC white logo (extracted with transparency), inlined into each file.
