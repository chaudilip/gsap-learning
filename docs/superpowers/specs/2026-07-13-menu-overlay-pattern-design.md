# Pattern 13 — Overlay Menu (open/close) — Design

**Date:** 2026-07-13 · **Status:** approved by Dilip · **Origin:** F9 pulled forward, renumbered as Pattern 13 per Dilip's choice.

## Goal

Add a menu open/close drill to gsap-lab as Pattern 13, teaching the one GSAP mechanism patterns 01–12 never covered: the **build-once, paused, reversible timeline**.

## Learning objectives (what "owned" means)

1. **Paused reversible timeline:** build ONE timeline in `useGSAP` with `paused: true`; the click handler only calls `tl.play()` / `tl.reverse()`.
2. **`reverse()` runs backwards from current progress** → mid-animation clicks are inherently safe. Direct contrast with Pattern 12, which created a timeline per click and needed a `busy` guard.
3. **`timeScale()` for asymmetric feel:** open at 1×, close at ~1.6× (exits snappier than entrances — Phase F feel rule).
4. Secondary contrast: 12 needed `contextSafe` because the handler *created* animations; 13's handler only toggles an existing timeline.

## Choreography (reference)

- Fullscreen dark overlay wipes down (`yPercent: -100 → 0`, `power4.inOut`), parked via Tailwind `-translate-y-full` (no FOUC).
- 5 nav links rise from `overflow-hidden` masks (`yPercent: 100 → 0`, `power3.out`, stagger ~0.07, overlapped `"-=0.2"`).
- Toggle button (z-above overlay) flips `open` state + `aria-expanded`, drives `timeScale(...).play()/.reverse()`.

## Scope decisions (Dilip, 2026-07-13)

- **In:** staggered link rise; close-faster-than-open.
- **Out (stays in Phase F):** hamburger↔X morph (F10), SplitText char hover.

## Files

- `gsap-lab/src/app/patterns/13-menu-overlay/page.js` — annotated reference, same comment style as 12.
- `gsap-lab/src/app/patterns/13-menu-overlay/playground/page.js` — 默写 file: JSX shell given, GSAP written from memory; brief + CODE-ONLY concept tests (L2 protocol): spam-click mid-animation, delete `paused: true` and observe, retune close timeScale.

## Ripple edits (renumber: 13 = menu, SplitText lines = 18)

- **ROADMAP.md:** Phase E row 13 (SplitText lines) renumbered to 18; new Pattern 13 row for the menu; F9 marked "pulled forward → Pattern 13"; committed-path line updated.
- **Hub `page.js`:** E-section alias entry `n:13 → 09-splittext` becomes `n:18`; new group entry for 13; flip 12 to `done: true` (owned 2026-07-13).
- **PROGRESS.md:** add row 13 to status table as next drill.
- **No folder renames** — 14–17 untouched.
