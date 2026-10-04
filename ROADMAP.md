# 🎬 GSAP & Award-Winning UI — Learning Roadmap

> Goal: become genuinely proficient at the animation + smooth-interaction layer that wins Awwwards / FWA / CSSDA — and turn it into portfolio ammo for the 12–14 LPA switch.
> Method: **same system as DSA.** Pattern-by-pattern drilling · error log · spaced rep (d3/d7/d21) · active recall (默写 = rebuild from memory, no peeking) · then COMBINE patterns into real builds.
> Stack you already own: React, Next.js, Tailwind, SCSS, MERN. We bolt GSAP onto that — no new framework needed.
> Owner: Dilip · Started: 2026-06-29.
>
> **Explicitly want to cover (Dilip's ask):** text animation · SVG animation (draw, morph, motion-along-path) · the full range of scroll-driven animation GSAP offers · a personal library of "fun", reusable effects that drop into any project. These are mapped into Phase E (Text & SVG) and the Effects Cookbook below — nothing here is skipped.

---

## 🧠 The core reframe (read this first)

An award-winning site feels expensive because of **4 layers stacked together**, not one trick:

1. **Smooth scroll** — the page glides (Lenis). This single thing is 50% of the "premium" feel.
2. **Scroll-driven choreography** — things pin, reveal, parallax, scrub as you scroll (GSAP ScrollTrigger).
3. **Refined micro-motion** — text splits letter-by-letter, staggered reveals, magnetic buttons, custom cursor. The *easing* is everything.
4. **(Optional) WebGL** — a Three.js hero / shader / 3D object. Adds the "how did they do that" factor. Learn LAST.

Your job: own layers 1–3 cold with GSAP, then add layer 4. **90% of awwwards "wow" is layers 1–3 — pure GSAP + CSS, no 3D required.** Don't get seduced into Three.js too early.

> **Important 2024+ fact:** GSAP is now **100% free, all plugins included** (SplitText, ScrollSmoother, MorphSVG, DrawSVG, Flip, Inertia — everything). Webflow acquired GreenSock and removed the paywall. So every "Club GreenSock" plugin you see in old tutorials is free to you now.

---

## 📐 The 12 GSAP patterns (your "animation NeetCode")

Drill these **in order**, one at a time, until you can rebuild each from a blank file (默写). Log every miss in `error_log.csv`. Re-do at d3/d7/d21. Exit a pattern only when you can write it cold AND explain *why* (easing choice, cleanup, perf).

### Phase A — Tween & Timeline fundamentals (the spine)
| # | Pattern | What to own cold | Exit when you can… |
|---|---------|------------------|--------------------|
| 1 | **Tweens** | `gsap.to / from / fromTo / set`; targets, duration, delay, transform props (x/y/scale/rotation/autoAlpha) | animate a box in 4 ways from memory; know why `x` beats `left` (GPU) |
| 2 | **Easing** | the *feel* lever: `power2/3/4`, `expo`, `back`, `elastic`, `circ`; custom `CustomEase` | look at any awwwards motion and name the ease; default to `power3.out` for reveals |
| 3 | **Timelines** | `gsap.timeline()`, chaining, the **position parameter** (`"<"`, `">"`, `"-=0.3"`, labels), `repeat`/`yoyo` | sequence a 5-step intro animation cold, with overlaps |
| 4 | **Stagger** | `stagger` (amount, from, grid, ease), staggered list/grid reveal | reveal a 12-card grid with a wave stagger from center |

### Phase B — Scroll (this is where awwwards lives) 🏆
| # | Pattern | What to own cold | Exit when you can… |
|---|---------|------------------|--------------------|
| 5 | **ScrollTrigger basics** | `trigger`, `start`/`end`, `toggleActions`, `markers`, `scrub` | reveal-on-scroll a section; explain scrub vs toggleActions |
| 6 | **Pinning** | `pin: true`, pin-spacing, horizontal-scroll section, scrubbed pinned sequence | build a horizontal-scroll gallery that pins (the classic awwwards move) |
| 7 | **Parallax & scrub** | layered depth via different `y` on scrub; image reveals | build a 3-layer parallax hero |
| 8 | **Smooth scroll** | **Lenis** + `ScrollTrigger.update()` wiring (or GSAP ScrollSmoother) | wire Lenis into a Next.js app so ScrollTrigger stays in sync |

### Phase C — Signature micro-motion (the polish that reads as "designer")
| # | Pattern | What to own cold | Exit when you can… |
|---|---------|------------------|--------------------|
| 9 | **SplitText** | split into chars/words/lines, masked line reveal, animate on scroll | do the "lines rise out of a mask" headline reveal (THE awwwards text move) |
| 10 | **Flip plugin** | `Flip.from()` state capture, shared-element / layout transitions | animate a grid item expanding into a detail view |
| 11 | **Interaction** | magnetic button, custom cursor, hover image-trail, `gsap.quickTo` for mouse-follow | build a magnetic CTA + a cursor that scales on hover |
| 12 | **Page transitions** | route-change reveal in Next.js App Router (overlay wipe / curtain) | a smooth curtain transition between two Next.js pages |
| 13 | **Overlay menu (open/close)** | build-once **paused reversible timeline**, `play()`/`reverse()`, `timeScale()` | fullscreen nav: overlay wipes down + links rise from masks; close = the SAME timeline reversed at 1.6×. *(= F9 pulled forward, 2026-07-13)* |

### Phase E — Text & SVG (your explicit focus — the "designer" signature) ✍️
> All these plugins are **free now**. Text + SVG is where motion stops looking like "a dev added GSAP" and starts looking designed. Drill each like a pattern (cold rebuild + error log).

| # | Pattern | Plugin / tool | What to own cold |
|---|---------|---------------|------------------|
| 18 | **Text — char/word/line reveals** | `SplitText` | split a headline into lines, mask each line, rise them in on a stagger (the #1 awwwards text move). Also: per-word fade, per-char wave. *(renumbered from 13 on 2026-07-13; drill order in Phase E unchanged — do this one first)* |
| 14 | **Text — scramble / counter / typewriter** | `ScrambleText`, `gsap.to({}, {textContent})` | a number that counts up on scroll; a scramble-in label; a typed-out line. |
| 15 | **SVG — line drawing** | `DrawSVG` | animate a stroke drawing itself (logo, underline, icon). `strokeDashoffset` is the manual version — learn both. |
| 16 | **SVG — morphing** | `MorphSVG` | morph one shape/path into another (icon ↔ icon, blob morphs). |
| 17 | **SVG — motion along a path** | `MotionPathPlugin` | move an element along an SVG path (a dot following a route, orbit motion). |

**Exit Phase E when:** you can do the masked-line headline reveal from memory, draw an SVG stroke on scroll, and morph one icon into another — each cold.

### Phase D — Foundations under all of it (don't skip)
- **Performance**: animate only `transform` + `opacity`; `will-change`; `gsap.ticker`; avoid layout thrash. Audit with DevTools Performance / FPS meter.
- **Accessibility**: `gsap.matchMedia()` + `prefers-reduced-motion` — kill/!reduce motion for users who ask for it. Award juries check this now.
- **React/Next integration** (you need this from Phase A onward): the **`useGSAP()` hook** (`@gsap/react`) for automatic cleanup + scoping. This replaces manual `gsap.context()` + `useEffect` cleanup. **Learn this on day 1 of Phase A** so every drill is React-native, not vanilla you'll have to re-learn.

---

## 🧩 The combine phase — 3 portfolio builds (this is the interview ammo)

Patterns are reps; **builds are the proof.** After Phase B, start Build 1. Each build deliberately *combines* patterns — like graph problems combine BFS + intersect.

1. **Build 1 — "Studio" landing page** (after Phase B). Hero with SplitText reveal + Lenis smooth scroll + one pinned/scrubbed section + staggered project grid. ← combines patterns 1–9. This alone is a portfolio piece.
2. **Build 2 — Interactive product / case-study page** (after Phase C). Add Flip detail-view transition + magnetic buttons + custom cursor + page transitions. ← the full "agency site" feel.
3. **Build 3 — WebGL hero** (after the Three.js stretch below). Replace Build 1's hero with a Three.js + shader object that reacts to scroll/mouse, driven by GSAP. ← the "wow" capstone.

Deploy all three (Vercel). These become your frontend differentiator — most MERN devs applying at 12–14 LPA *cannot* do this layer. That's your edge.

---

## 📜 The full scroll-animation catalog (every flavor ScrollTrigger gives)

Phase B teaches the engine; this is the menu of what you can *build* with it. Try each at least once:
- **Reveal on enter** — fade/slide elements in as they hit the viewport (`toggleActions` or `once: true`).
- **Scrub** — tie an animation's progress directly to scroll position (`scrub: true` / `scrub: 1` for smoothed). The basis of everything below.
- **Pin** — freeze a section while the page scrolls "through" it (`pin: true`).
- **Horizontal scroll** — pin a section and translate a wide track sideways as you scroll down.
- **Parallax** — layers move at different speeds (different `y` per layer on scrub) for depth.
- **Scroll-snap** — snap to sections/panels (`snap`).
- **Progress-driven UI** — scroll-progress bars, section counters, color themes that flip per section.
- **Batch reveals** — `ScrollTrigger.batch()` to stagger many cards in as they enter (perf-friendly for long lists).
- **Image sequence / "video on scroll"** — scrub through a `<canvas>` frame sequence.
- **Toggle classes / callbacks** — `onEnter`/`onLeave`/`toggleClass` to drive non-GSAP state (e.g. switch nav style).

---

## 🍬 Phase F — UI Interaction Cookbook (your drop-anywhere library) 🎛️

> Added 2026-07-01 (Dilip's ask, seeded from **gsap.com/ui**): menus, buttons, cursor, DOM/layout transitions, drag. This is the "fun reusable effects" library — the micro-interaction layer that reads as *designer*, not *dev*. Each effect = a **standalone, prop-driven component in `src/components/effects/`** you can paste into any future project (portfolio, client work, MERN apps).
>
> **Drill each like a pattern:** eye-train first (find the effect on gsap.com/ui / Codrops / Osmo → *name the technique* → guess the GSAP), then build it **cold** in a playground, then extract to a clean component. Log every miss. Same L1→L4 rubric.

**Plugins to register in `src/lib/gsap.js` before this phase** (all free since the Webflow acquisition):
`Flip, Draggable, InertiaPlugin, Observer, SplitText, DrawSVG, MorphSVGPlugin, MotionPathPlugin`

**Recommended order (my suggestion):** do **Group 1 (Buttons & Cursor) NOW** — it needs *zero new plugins*, just core GSAP + `gsap.quickTo` + mouse events you already own. Then let each later group ride in behind the core pattern that unlocks it. Fun immediately, never a tool you haven't drilled.

### Group 1 — Buttons & Cursor 🖱️ (START HERE — no new plugins)
| # | Effect | Technique |
|---|--------|-----------|
| F1 | **Magnetic button** | button drifts toward cursor, springs back on leave — `gsap.quickTo` |
| F2 | **Custom cursor** | dot + ring following the mouse with lag (`quickTo`), scales on hover |
| F3 | **Cursor state morph** | cursor grows / changes on hover targets (data-attrs drive it) |
| F4 | **Shine / gradient-follow hover** | radial-gradient highlight tracks the mouse across a button ("buttons that shine") |
| F5 | **Text-swap on hover** | two label copies masked; one slides out, one slides in |
| F6 | **Hover image-trail** | images spawn + fade along the cursor path over a list |
| F7 | **Tilt / 3D card** | card rotates toward cursor (`perspective` + `rotationX/Y`) |
| F8 | **Ripple / click burst** | expanding circle or particle pop on click |

**F4½ — The button-hover taxonomy (drill as ONE lab page, 8 buttons side by side).**
Every premium button hover is one of these mechanisms — own all 8 and you can clone any button you see:
1. **Fill sweep** — a bg layer slides/scales in from left/bottom/behind (translate or scaleX on a pseudo-layer)
2. **Text roll** — label slides up, duplicate label rolls in from below (overflow-hidden + two spans)
3. **Letter stagger** — chars wave/jump on hover (SplitText chars + stagger, tiny y)
4. **Shine sweep** — a skewed white gradient bar sweeps across once (x: -150% → 150%)
5. **Border draw** — outline draws itself around the button (DrawSVG on a rect, or dashoffset)
6. **Icon nudge/swap** — arrow slides out right, clone re-enters from left
7. **Squash & stretch** — scale 0.96 on press, `back.out` release (the tactile one)
8. **Glow follow** — radial gradient hotspot tracks the cursor (CSS var + quickSetter)

### Group 2 — Menus & Nav 🧭 (needs 09 SplitText · 15 DrawSVG · Observer)
| # | Effect | Technique |
|---|--------|-----------|
| F9 | **Full-screen overlay menu** | ✅ pulled forward → drilled as **Pattern 13** (2026-07-13); revisit here only to add the SplitText link-hover layer |
| F10 | **Hamburger ↔ close morph** | morph the icon path (MorphSVG) |
| F11 | **Dropdown / notification panel** | reveal + stagger items (like gsap.com/ui's nav panels) |
| F12 | **Scroll-direction nav** | hide on scroll-down, show on scroll-up (Observer) |
| F13 | **Animated link underline** | stroke draws in on hover (DrawSVG / `strokeDashoffset`) |
| F14 | **Marquee / infinite ticker** | seamless loop of logos/text, speed reacts to scroll (pattern 3 + 8) |

### Group 3 — Layout / DOM transitions (Flip) 🔀 (needs 10 Flip)
| # | Effect | Technique |
|---|--------|-----------|
| F15 | **Add-to-cart fly** | item flies to the cart badge — `Flip.fit` / state capture |
| F16 | **Grid → detail expand** | card expands into a detail view (shared-element) |
| F17 | **Tabs / filter swap** | content reflows smoothly between states (`Flip.from`) |
| F18 | **List reorder** | items animate to new positions on sort/filter |
| F19 | **Cart open/close** | panel + contents Flip between collapsed/expanded |

### Group 4 — Drag & carousels 🎠 (needs Draggable + InertiaPlugin)
| # | Effect | Technique |
|---|--------|-----------|
| F20 | **Draggable cards** | throw with momentum (`Draggable` + `inertia: true`) |
| F21 | **Momentum carousel / slider** | drag-to-scroll a track with snap + inertia |
| F22 | **Drag-to-reorder** | reorder a list by dragging (Flip for the settle) |
| F23 | **Radial picker** | drag around a circle (time/value picker, like the gsap.com/ui demo) |
| F24 | **Throw-to-dismiss** | flick a card off-screen, spring-back if not past threshold |

### Group 5 — Micro-feedback 🔔 (mostly core GSAP; sprinkle in anytime)
| # | Effect | Technique |
|---|--------|-----------|
| F25 | **Toast / notification** | slide-in + auto-dismiss timeline |
| F26 | **Accordion** | smooth height via measured Flip |
| F27 | **Toggle switch** | knob slides + color tween |
| F28 | **Tooltip** | scale/fade from the trigger origin |
| F29 | **Confetti burst** | particle pop (staggered physics) |
| F30 | **Animated counter** | number counts up on view (pattern 14) |
| F31 | **Page-load intro** | one-time curtain reveal on first paint |
| F32 | **Scroll-progress bar + back-to-top** | progress scrub + smooth Lenis `scrollTo` |

### Group 6 — UI controls (the "every component animated" catalog) 🎚️
> Dilip's ask 2026-07-02: toggle, tooltip "and all kinds of UI animation." These are the everyday controls — animating them well is what makes an app feel *designed*. All core GSAP + timelines; a few use Flip/Draw.

| # | Effect | Technique |
|---|--------|-----------|
| F33 | **Toggle switch** | knob x-slide + track color tween; squash on press (`back.out`) |
| F34 | **Tooltip** | scale+fade from `transformOrigin` at the trigger side; slight y-drift; delay-in instant-out |
| F35 | **Modal / dialog** | overlay fade + panel scale-up (`back.out` subtle); exit reverses FASTER (`.timeScale(1.5).reverse()`) |
| F36 | **Dropdown / select** | panel clips open (scaleY from top) + items stagger-fade in |
| F37 | **Checkbox** | box pop + checkmark DRAWS in (DrawSVG on the tick path) |
| F38 | **Radio group** | selected dot springs in; the indicator SLIDES between options (Flip or x-tween) |
| F39 | **Input focus** | label floats up + underline draws across on focus (scaleX from left) |
| F40 | **Tabs indicator** | the underline/pill glides to the active tab (Flip.from or x+width tween) |
| F41 | **Like / heart burst** | icon squash → pop + particle ring (the Twitter heart) |
| F42 | **Star rating** | stars pop in sequence on hover (stagger back.out) |
| F43 | **Loader / spinner** | infinite timeline: dots wave (`repeat:-1, yoyo`), or SVG arc drawSVG loop |
| F44 | **Skeleton shimmer** | gradient sweep loop across placeholder blocks (x: -100%→100%, `repeat:-1`) |
| F45 | **Notification badge** | count bumps: old number rolls up out, new rolls in + badge pulse |
| F46 | **Segmented control** | selection pill Flips between segments; label color crossfade |

> Micro-interaction feel rules (apply to ALL of Group 6): **fast in, faster out** (hover-in ~0.3s, hover-out ~0.2s) · **enter = ease-out, exit = ease-in** · press states scale ~0.96 · anything infinite (`repeat:-1`) must pause when offscreen (ScrollTrigger `toggleActions` or `matchMedia`) · respect `prefers-reduced-motion`.

> Rule: every effect ends as a **clean, prop-driven component you'd actually reuse** — not a one-off. This collection *is* portfolio + interview ammo, and it's the layer most MERN devs at 12–14 LPA can't do.

---

## 🎓 Phase G — Advanced mastery topics (added 2026-07-02)

> What separates "knows GSAP" from "master." Start these only after C+E+F — each assumes the fundamentals are automatic. Ordered by leverage.

| # | Topic | Why it's the master layer |
|---|-------|---------------------------|
| G1 | **CustomEase / CustomWiggle / CustomBounce** | Stock eases are everyone's. Designing your OWN curve (draw it at gsap.com/ease-visualizer) is how sites get a signature *feel*. This is the single highest-leverage "feel" skill. |
| G2 | **`gsap.matchMedia()` + motion a11y** | One animation system, different choreography per breakpoint + `prefers-reduced-motion` variant. The professional finish juries and interviewers actually check. |
| G3 | **Master-timeline architecture** | Component-level "timeline factory" functions (`buildHeroTl()`) composed into one master tl; labels, `addPause`, `tweenTo`, `timeScale` choreography. How real agency codebases structure motion. |
| G4 | **Observer plugin** | Scroll *intent* without scroll position — fullpage section-swap sites (wheel/touch/pointer unified). The pattern behind "one flick = one section" sites. |
| G5 | **ScrollTrigger deep cuts** | `containerAnimation` (triggers INSIDE a horizontal-scroll section), `batch()`, advanced `snap`, canvas image-sequence scrub ("video on scroll"), nested pins. |
| G6 | **Performance engineering** | DevTools Performance panel fluency: spotting layout thrash, compositor vs main thread, `will-change`/`force3D`, why 300 SplitText chars jank and how to fix. Being able to *diagnose* jank is rare and hireable. |
| G7 | **`quickTo` / `quickSetter` internals** | 60fps mouse-follow done right (no tween-per-mousemove). You'll use it in F1–F8; here you learn WHY it's fast. |
| G8 | **Flip advanced** | Reparenting across containers, `Flip.fit`, shared-element transitions BETWEEN ROUTES in Next.js App Router (+ View Transitions API interplay). |
| G9 | **SVG deep cuts** | Filters (turbulence/gooey), animated `clip-path`, gradient animation — the layer above draw/morph. |
| G10 | **Lenis advanced** | `lenis.scrollTo` choreography, scroll-locking for modals/menus, nested/horizontal wrappers, syncing with pinned sections. |
| G11 | **Motion design theory** | Disney's 12 principles applied to UI; easing families as a brand "motion language"; choreography systems (what moves first and why). This is eye-training's theory half — it's what makes your choices *deliberate*. |
| G12 | **Three.js / R3F + GSAP fusion** | (= the existing stretch below) scroll/mouse-driven shader + 3D, driven by the GSAP timeline system you now own. |

> Drill rule stays the same: one topic at a time, build a small proof, log misses, cold re-do. G1, G2, G6 are the highest ROI for the job switch — a candidate who can design a custom ease, ship reduced-motion variants, and read a performance flame chart is not a 5.68 LPA profile.

---

## 🌐 Stretch — Three.js / WebGL (only after Builds 1 & 2)

Don't start here. When you do:
- **Bruno Simon's Three.js Journey** (threejs-journey.com) — the definitive course, paid but gold.
- Learn **React Three Fiber (R3F)** + **drei** since you're a React dev — declarative Three.js that fits your mental model.
- The pattern to learn: drive R3F/Three.js values *with GSAP and scroll progress* (you already know ScrollTrigger by then). That fusion is the whole game.

---

## 📚 Resources (curated — don't drown in tutorials)

**Primary (use these 90% of the time):**
- **GSAP docs + "Learning" center** — gsap.com/resources. The docs are excellent; read the ScrollTrigger + Timeline docs properly, don't just copy snippets.
- **Codrops** (tympanus.net/codrops) — the awwwards tutorial goldmine. Filter for GSAP/scroll articles. Each "Demo" is a pattern you can reverse-engineer.
- **Osmo** (osmo.supply) — free, premium-quality GSAP component recipes (magnetic buttons, marquees, text reveals) from a top awwwards dev. Read the code, then rebuild from memory.
- **Lenis** (github.com/darkroom-engineering/lenis) — the smooth-scroll standard. Read the README + React example.

**Video (for seeing the *why*, then close it and 默写):**
- **Hyperplexed** (YouTube) — recreates real award-site effects. Great for "how did they do that."
- **GSAP's own YouTube** — official, current with the free-plugin era.

**Inspiration / pattern-spotting (study, don't just scroll):**
- **awwwards.com**, **godly.website**, **fwa.com** — when you see an effect, *name the pattern* (#1–12 above). That naming reflex is the skill.

> Rule (from your DSA system): **watching ≠ owning.** Every tutorial ends with you closing the tab and rebuilding it from a blank file. If you can't, it goes in the error log.

---

## 🗓️ How this fits your existing schedule

Slot GSAP into your **9:15–10:45 PM MERN/project block** (it *is* MERN frontend depth — Phase 2 of your STUDY_PLAN). Keep mornings for DSA. Suggested cadence:
- **~30 min**: one pattern drill (active recall a previous one first, ~5 min).
- Weekends: the bigger **build** work.
- Same logging discipline: `error_log.csv` (animation misses + d3/d7/d21 re-dos), daily tracker.

Realistic: **Phases A+B in ~3 weeks**, C in ~2 weeks, Build 1 deployable inside a month of consistent evenings.

---

## ⏭️ UP NEXT (as of 2026-07-01)

Phases **A + B are complete** (patterns 01–08 owned). **THE committed path (decided 2026-07-01):**
1. **Phase C** → 09 SplitText · 10 Flip · 11 Interaction · 12 Page transitions  ← **next: 09 SplitText**
2. **🏗️ Build 1** — Studio landing page (SplitText hero + A/B spine)
3. **Phase E** → 18 SplitText lines (do first) · 14 Scramble/counter · 15 DrawSVG · 16 MorphSVG · 17 MotionPath
4. **Phase F** — UI Interaction Cookbook (Groups 1→5: buttons/cursor → menus → Flip → drag → micro-feedback)
5. **🏗️ Build 2** — interactive case-study page
6. **Three.js stretch → Build 3**

> Cookbook (Phase F) sits AFTER C + E on purpose: its groups gate on SplitText/DrawSVG/MorphSVG/Flip/Draggable, so after C+E it becomes pure application (great spaced-rep). You still get the flashy stuff early — Pattern 11 IS magnetic button + custom cursor; Phase F just turns those into a reusable component library.

**d3 re-dos due 2026-07-03/04** — rebuild 01–08 cold; clear the owed L2s (04 stagger-ease, 07 why-far/yPercent). Do these before new work on those days.

*The technique is the edge — not the hours. Same as DSA.*
