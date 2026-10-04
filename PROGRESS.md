# 📓 GSAP Lab — Progress Log

> Session-by-session record of what was learned, the gotchas hit, and where to resume.
> Companions: `ROADMAP.md` (the plan) · `error_log.csv` (misses + spaced-rep dates) · `gsap-lab/` (the code).
> Owner: Dilip.

---

## Status at a glance

| Pattern | Reference | Playground done (cold) | Owned |
|---------|-----------|------------------------|-------|
| 01 · Tweens | ✅ | ✅ | ✅ |
| 02 · Easing | ✅ | ✅ | ✅ |
| 03 · Timelines | ✅ | ✅ | ✅ (owned 2026-06-30) |
| 04 · Stagger | ✅ | ✅ | ✅ (owned 2026-06-30) |
| 05 · ScrollTrigger | ✅ | ✅ | ✅ (owned 2026-07-01, L2 re-derived cold) |
| 09 · SplitText | ✅ | ✅ | 🟡 L1 cold; fonts-gotcha L2 owed (error_log) |
| 10 · Flip | ✅ | ✅ | ✅ (owned 2026-07-02; fix ease casing) |
| 11 · Interaction | ✅ | ✅ | ✅ (owned 2026-07-02; fix cleanup handler) |
| 12 · Page transitions | ✅ | ✅ | ✅ (owned 2026-07-13; 3 misses → d3 07-16) |
| 13 · Overlay menu (F9 pulled fwd) | ✅ | ✅ | ✅ (owned 2026-07-13, browser-verified incl. spam-click; scope slip → d3 07-16) |
| 14 · Text FX (scramble/counter/type) | ✅ | ✅ | ✅ (owned 2026-07-13, clean cold rebuild, browser-verified) |
| 15 · DrawSVG | ✅ | ✅ | ✅ (owned 2026-07-13; contextSafe repeat-miss fixed same day — took 2 attempts, see error_log) |
| 16 · MorphSVG | ✅ | ✅ | ✅ (owned 2026-07-13, browser-verified; applied 15's contextSafe lesson same-day) |
| 17 · MotionPath | ✅ | ✅ | ✅ (owned 2026-07-13, browser-verified incl. autoRotate; Dilip caught the dasharray-channel lab bug) |
| 06 · Pinning / horizontal | ✅ | ✅ | ✅ (owned 2026-07-01) |
| 07 · Parallax & scrub | ✅ | ✅ | ✅ (owned 2026-07-01; re-say L2 in own words at d3) |
| 08 · Smooth scroll (Lenis) | ✅ | ✅ | ✅ (owned 2026-07-01, L1+L2 cold) |

**✅ Phase A complete (2026-06-30)** — tweens, easing, timelines, stagger all owned cold.
**Phase B (2026-06-30 → 07-01):** 05 ScrollTrigger owned (built cold; L2 re-derived cold on 07-01, clearing the "given" debt). 06 Pinning/horizontal owned (cold, incl. the `-(scrollWidth - innerWidth)` math).
**Still open for d3 (2026-07-03):** stagger-ease vs tween-ease verbalized cleanly (only remaining `owned: no` in error_log). Plus the standard 01–06 cold rebuilds.
**✅ Phase B complete (2026-07-01)** — ScrollTrigger, pinning/horizontal, parallax, Lenis smooth scroll. (07's L2 verbalization still owed at d3; everything else cold.)
**Queued: BUILD 1 — the "Studio" landing page** — combine patterns 1–8 + the SplitText hero (09). First portfolio piece; starts after Phase C.
**Also queued:** Phase C (09 SplitText, 10 Flip, 11 interaction, 12 page transitions) · Phase E (13–17 text & SVG) · **NEW Phase F — UI Interaction Cookbook** (F1–F32: buttons/cursor, menus/nav, Flip transitions, drag/carousels — seeded from gsap.com/ui, added 2026-07-01).
**THE committed path (2026-07-01):** Phase C (09→12) → Build 1 → Phase E (13→17) → Phase F cookbook (Groups 1→5) → Build 2 → Three.js → Build 3.
**✅ Phase C complete (2026-07-13)** — SplitText, Flip, interaction, page transitions.
**Next (as of 2026-07-13):** drill **13 Overlay menu** (F9 pulled forward — paused reversible timeline, the one mechanism 01–12 never taught) + clear the **overdue re-do backlog** (everything due 07-02→07-09 — consolidate into ONE cold rebuild session covering all `owned: no` entries), then **start BUILD 1**. SplitText line-reveals renumbered 13→18 (folders unchanged).

---

## Session 1 — 2026-06-29

Set up the lab and drilled Patterns 01–03. Hit three real bugs and understood the cause of each (the goal — not just "made it work").

### What got built
- `gsap-lab/` scaffolded: Next.js 16 + Tailwind + GSAP 3.15 + `@gsap/react` + Lenis.
- Infra: `src/lib/gsap.js` (plugin registration), `src/components/SmoothScroll.jsx` (Lenis ↔ ScrollTrigger), hub at `src/app/page.js`.
- Convention per pattern: `patterns/NN-slug/page.js` (annotated reference, read-only) + `NN-slug/playground/page.js` (rebuild from memory).

### Concepts owned ✅
- **The React+GSAP idiom:** `"use client"` + `useRef` scope + `useGSAP(fn, { scope })` (auto-cleanup, scoped selectors).
- **`y` / `x` = transforms** (`translateY`/`translateX`), in px. Animate these, **never `top`/`left`** — transforms run on the GPU, no layout reflow = smooth.
- **`autoAlpha`** = opacity + visibility in one; the reveal default.
- **Easing direction:** ease-**out** = decelerate into place → entrances/reveals (default `power3.out`); ease-**in** = exits; **inOut** = on-screen A→B moves.
- **`ease` vs `stagger` are different knobs:** ease = how ONE element moves; stagger = the time offset BETWEEN many elements.
- **`elastic.out(amplitude, period)`** → 1st arg = overshoot strength, 2nd = wobble speed/spacing (smaller = buzzier). `back.out(n)` → n = overshoot distance.
- **Timelines sequence tweens** (the fix for "two tweens fighting"). `gsap.timeline({ defaults: {...} })` shares ease/duration across all tweens.
- **Position parameter:** `-=` / `+=` measure from the **end of the timeline so far**; `<` / `>` measure from the **previous tween's start/end**. `"-=0.3"` = small overlap · `"<"` = start together · `"+=0.5"` = gap.

### Gotchas hit (full detail in error_log.csv)
1. **Stacked two tweens on one box → flicker then vanished.** `.from` has `immediateRender` (slams to start instantly); two tweens then fight over the same props. → A reveal is **one** tween; sequence with a timeline.
2. **`ease` can't be function-based per-target.** GSAP reads a function on `ease` as a custom easing curve → returned a string → `NaN` → no movement. → Loop the elements, one tween each with its own ease string.
3. **Timeline ran but nothing moved.** `.from()` selectors (`.tl-*`) didn't match the JSX classNames (`.title` etc). An empty GSAP selection is a **silent no-op — no error**. → **Rule: when a GSAP animation is silent, first check selector ↔ className match.** (Marked `owned: no` — re-test this reflex.)

### Quick cheatsheet (the React+GSAP skeleton, from memory)
```jsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Demo() {
  const scope = useRef(null);
  useGSAP(() => {
    gsap.from(".box", { y: 40, autoAlpha: 0, ease: "power3.out", stagger: 0.1 });
  }, { scope });

  return <main ref={scope}><div className="box" /></main>;
}
```

---

## Session 2 — 2026-06-30 → 07-01 (recap)

Owned **04 → 08 in two evenings** — Phase A *and* B complete.
- 04 Stagger (each vs amount, grid `from:"center"`); stagger-ease vs tween-ease nuance still owed.
- 05 ScrollTrigger — L2 was *given* on day 1, then blanked and **re-derived cold** on 07-01 (the system working as designed).
- 06 Pinning/horizontal — cold, including interrogating the `-(scrollWidth - innerWidth)` math unprompted.
- 07 Parallax — `{ sl }` destructure typo → silent no-animation → **day-1 selector reflex extended to "check the target resolved."**
- 08 Lenis wiring — L1+L2 cold on first try, no debt.
- WIN logged: ScrollTrigger `start/end` = "two lines that must meet" (element edge + viewport position).
- Decisions: **committed path** C → Build 1 → E → F → Build 2 → Three.js; Phase F cookbook added from gsap.com/ui.
- 09 SplitText drilled (L1 cold; fonts-gotcha L2 owed). 10 Flip scaffolded.

---

## Session 3 — 2026-07-02

### System / lab work
- **ROADMAP:** added **Phase G — Advanced mastery topics** (G1–G12: CustomEase, matchMedia+a11y, master timelines, Observer, ScrollTrigger deep cuts, perf engineering…). Expanded **Phase F** with the **button-hover taxonomy** (8 mechanisms, F4½) and **Group 6 — UI controls** (F33–F46: toggle, tooltip, modal, checkbox-draw, tabs, loaders…) + micro-interaction feel rules. Cookbook now 46 effects.
- **Lab completed end-to-end:** references + blank playgrounds for **11 Interaction (quickTo magnet/cursor), 12 Page transitions (curtain), 14 Text FX (scramble/counter/typewriter), 15 DrawSVG, 16 MorphSVG, 17 MotionPath**. All plugins registered in `lib/gsap.js` (verified against node_modules). Hub gained the Phase E section. Every remaining animation type now has reference material; drilling order unchanged.

### d3 re-dos (first spaced-rep day — it caught real decay)
- **01 Tweens:** rebuilt; L2 (x/y vs left/top) correct. **2 slips logged:** `duration` in `fromTo`'s from-vars (config lives in TO-vars) + `ease`/`duration` on `gsap.set` (set = instant, ignores them). Fixes pending.
- **02 Easing:** race rebuilt clean (loop, one tween each, function-based x). **L2 REGRESSION logged:** wrote ".out for out animation" — backwards; .out = decelerate = ENTRANCES, .in = EXITS. Day-1 WIN didn't survive cold recall. Rewrite pending.
- **03 Timelines:** re-do **not done yet** — still open from today's batch.

### Open items
| item | due |
|---|---|
| 03 d3 re-do + 02 L2 rewrite + 01 fixes | now (over-due today) |
| 04/05/06-entry re-dos + stagger-ease verbalization | 2026-07-03 |
| 07/09-entry re-dos (incl. fonts-gotcha L2) | 2026-07-04 |
| 01/02 slip re-dos (today's misses) | 2026-07-05 |

---

## Session 4 — 2026-07-13

Drilled **12 Page transitions** cold — the curtain wipe, with an "up and back" double-sweep variation. Fixed all three misses himself after behavior-level hints; concept tests (slow-mo swap visibility + double-click guard) run and passing. **Phase C complete → Build 1 is next.**

### Misses logged (all d3 → 2026-07-16, full detail in error_log.csv)
1. **Swap in plain sight:** `.add(setView)` placed after the curtain had exited — the content swap must sit BETWEEN cover and reveal. Rule: storyboard a transition by what is VISIBLE at each timeline step.
2. **Dead busy guard:** `onComplete: (busy.current = false)` — an assignment, not a function; evaluated at creation, GSAP silently ignored it. 4th silent-failure family member: non-function callback.
3. **Unused `contextSafe`:** event-handler timelines run outside the useGSAP context (global selectors, no cleanup on unmount) unless wrapped.

### Late-session discovery — the Tailwind v4 ↔ GSAP channel clash
Pattern 13's menu "did nothing" on click. Browser probe (Playwright) showed the animation ran perfectly — **one full screen above the viewport**. Tailwind v4's `translate-*` classes set the CSS `translate` property; GSAP absorbs it into its pixel `y` channel, then `yPercent` animates a different channel. **This also silently broke Pattern 12 — the curtain never actually covered the screen; the "swap hidden" test never truly passed.** Both references fixed (`from`-vars claim `y: 0`). Silent-failure family #5. Full entry in error_log.csv.

### Pattern 13 — Overlay menu (drilled same day, F9 pulled forward)
New mechanism owned: **build-once paused reversible timeline** — `play()`/`reverse()` from the handler, `timeScale(1.6)` on close for the exit-snappier feel. Rebuilt cold; browser-verified including the spam-click test (settles fully closed, no stacking, no errors). One slip: first draft omitted `{ scope }` from `useGSAP` — day-1 idiom, fixed after one hint, logged (d3 07-16). Key contrasts vs 12 understood *in code*: no busy guard (reverse turns around from current progress), no contextSafe (handler creates nothing).

### Pattern 14 — Text FX (same day, Phase E begun)
Clean cold rebuild, zero misses: scramble (chars/speed/revealDelay), count-up (`.from` + `textContent: 0` + `snap`), typewriter (TextPlugin, `ease: "none"`), sequenced with `-=` overlaps. Browser-verified: counter lands exactly 1250 in integers, replay button restarts all three. Pattern-13 lesson carried over unprompted (replay steers `tl.current`, no contextSafe).

### Open items
| item | due |
|---|---|
| ENTIRE pre-07-13 re-do backlog (d3s of 07-03→07-05 + d7 wave 07-06→07-09) — consolidate into one cold rebuild session | ASAP, before Build 1 |
| 12's three misses + 13's scope slip + Tailwind-channel gotcha (d3) | 2026-07-16 |
| **12 playground: apply the y:0 claim + RE-RUN the slow-mo swap-hidden test for real** (12's "owned" is conditional on this) | next session |

---

## How to resume (read this first next session)
1. Check `error_log.csv` for any re-dos due today — do those **before** new work (highest priority, your DSA rule).
2. If 2026-07-02+: rebuild 01–03 playgrounds cold (delete code, rewrite from blank).
3. Then continue from the **Next** row in the status table above.
