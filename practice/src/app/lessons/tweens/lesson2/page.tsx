"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { Button } from "@/components/button";

type Mode = "left" | "x" | "both";

export default function AnimationLeftRightAndTransform() {
  const container = useRef<HTMLDivElement>(null);
  // Record one box at a time so the Layout events in DevTools can be attributed to one property
  const [mode, setMode] = useState<Mode>("left");

  useGSAP(
    () => {
      // Identical tweens except for the property: left (layout) vs x (transform)
      const vars = { duration: 2, repeat: -1, yoyo: true, ease: "none" };

      if (mode !== "x") gsap.to(".box-left", { left: 300, ...vars });
      if (mode !== "left") gsap.to(".box-x", { x: 300, ...vars });
    },
    // revertOnUpdate kills the old tweens and resets the boxes when the mode changes
    { scope: container, dependencies: [mode], revertOnUpdate: true },
  );

  return (
    <div ref={container} className="flex h-full w-full flex-col gap-8 p-10">
      <div className="flex gap-4">
        <Button onClick={() => setMode("left")}>Animate left</Button>
        <Button onClick={() => setMode("x")}>Animate x</Button>
        <Button onClick={() => setMode("both")}>Both</Button>
        <span className="self-center text-sm text-zinc-600">Now: {mode}</span>
      </div>

      <div className="box-left relative w-24 h-24 bg-red-500"></div>
      <div className="box-x relative w-24 h-24 bg-green-600"></div>
    </div>
  );
}
