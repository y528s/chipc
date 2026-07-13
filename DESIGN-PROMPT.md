# Design prompt — City & Hackney IPC Portal

A self-contained prompt that captures the approved direction for the consolidated
IPC portal. Paste it into a fresh Claude session (or Claude Code) to regenerate this
design from scratch. Kept in the repo so the brief travels with the project.

---

Build a clickable, multi-page HTML/CSS prototype of a redesigned portal for
**City & Hackney Integrated Primary Care (IPC)**. Self-contained static files (no
build step); one shared stylesheet using CSS classes (structured to map cleanly onto
a WordPress theme later). Add a subtle floating "✎ Admin: edit this page" button that
toggles inline `contenteditable` editing on marked regions, to demo front-end editing.

## The concept (this is the pitch)

Today the GP clinical site and the IPC members area are two separate sites with two
back ends. Consolidate them into **one portal — one login, one search, one WordPress
back end.** Access is controlled **per item, not per area**: anything for member
practices is marked with a padlock 🔒 wherever it appears. There is no separate
"members area" as a place.

## Brand & aesthetic

"The IPC Hub" — search-first, warm, feature-rich, NHS-appropriate but not clinical.

- **Palette:** IPC Blue `#074a81`, Green `#43723c` (primary), deep green `#1d3317`,
  Teal `#4ab182`, Gold `#c68a00` (accent/CTAs), Purple `#7d56b4`, cream page bg `#f7f4ec`.
- **Fonts:** Poppins (headings), Open Sans (body).
- Rounded 12px cards, soft shadows, gradient hero
  (`linear-gradient(115deg, #1d3317, #43723c 62%, #4ab182)`), pill-shaped chips and
  buttons, licensed-stock GP photography.

## Header / nav

Green gradient bar, white logo, "You are logged in" status, search icon. Five airy pill items:

`HOME · GENERAL PRACTICE ⌄ · 🔒 IPC ⌄ · ☆ SAVED`

- **GENERAL PRACTICE** dropdown → Pathways, Services, Topics (open to all staff)
- **🔒 IPC** dropdown → Bulletins, Contracts, Documents, Policies, Staff Bank (each padlocked)
- Dropdowns open on hover/focus; parent highlights on its child pages.
- The IPC / General Practice split exists **only in the menu** — pages, search and
  back end are all consolidated.

## Home page

Search hero ("Find what you need, fast" style) with popular-search chips (padlocked
ones marked 🔒). "Quick access" = **two rows of tiles**:

1. An unframed General Practice row (Pathways, Services, Topics, Saved items).
2. The five IPC tiles wrapped in **one gold-tinted, gold-bordered frame with a single
   "🔒 IPC — login needed" tag** overlapping its top edge — no padlock on each tile;
   the frame gates the group.

Below: "Popular this week", "Recently updated", clinical topics, upcoming events,
latest news, a gold contact band.

## Section pages (all in the same design system)

- **Pathways / Services / Topics** — search-first libraries with type filters and
  result cards; open, no login.
- **Documents** (🔒) — the IPC document library rebuilt in this format: search hero,
  "popular today / recently updated" panels, type filters, result list → **document
  page** with an in-browser PDF-viewer mock (toolbar, page nav, zoom, download),
  details rail, topics, related docs.
- **Contracts** (🔒) — grid of contract tiles → a **contract page** (e.g. Duty Doctor:
  resource list, "about this service", named contract lead).
- **Policies** (🔒) — versioned list with owners and review dates.
- **Staff Bank** (🔒) — find-work / find-staff.
- **Bulletins** (🔒) — **do not redesign the content or workflow**; a plain weekly
  archive with a note stating it's unchanged, only the surrounding chrome is new.
- **Saved items** (☆) — personal favourites from anywhere, with **working** live text
  search + type filters (pathways/forms, documents, services, contracts) and un-star
  to remove.

## Padlock rule

🔒 marks member-practice content everywhere it appears (nav, chips, list rows).
Members see everything seamlessly; non-members are prompted to log in only when
opening a locked item. A one-line legend strip sits under the header stating this.

## Back-end preview (`admin.html`)

A WordPress-admin-style dashboard mock:

- One left content menu for the whole portal (Pathways, Services, Topics, Bulletins 🔒,
  Contracts 🔒, Documents 🔒, Policies 🔒, Staff Bank 🔒, Events, News).
- At-a-glance counts, "needs attention" (policy reviews due), recent edits (including
  a front-end edit landing here).
- An "Add a document" form whose key feature is a **"Members only" checkbox** that
  "makes the 🔒 appear automatically everywhere."
- A who-can-edit-what roles table.

## Demo framing

- Every page carries a sticky amber banner: "⚠ DESIGN DEMO — pages, links and content
  are illustrative only, not the real IPC pages."
- A simple 3-card launcher page (**The portal / The back end / The plan**).
- A one-page stakeholder plan (what changes, what stays, editing model, staging→live
  rollout).

---

_Approved design: The IPC Hub · Prepared by Fusion · July 2026_
