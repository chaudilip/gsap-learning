"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPTransform() {
  const container = useRef<HTMLDivElement>(null);
  const tweens = useRef<Record<string, gsap.core.Tween>>({});

  useGSAP(
    () => {
      const vars = {
        paused: true,
      };

      gsap.set(".badge", {
        autoAlpha: 1,
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(".dot", {
        autoAlpha: 1,
        xPercent: -50,
        yPercent: -50,
      });

      tweens.current = {
        start: gsap.to(".door", {
          ease: "power2.inOut",
          duration: 0.8,
          rotationY: 120,
          transformPerspective: 800,
          transformOrigin: "left",
          ...vars,
        }),
        badgeStart: gsap.to(".badge", {
          ...vars,
          x: 150,
        }),
      };
    },
    { scope: container },
  );

  const rotateIt = (name: string) => {
    const t = tweens.current[name];
    if (t.reversed() || t.progress() === 0) t.play();
    else t.reverse();
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center gap-10 justify-center"
      ref={container}
    >
      <div className="door h-60 w-40 bg-amber-900"></div>
      <div className="h-40 w-3xs bg-fuchsia-300 relative">
        <div
          className="h-4 w-4 z-10 invisible bg-zinc-700 rounded-full dot"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        ></div>
        <div
          className="h-20 w-20 invisible bg-amber-200 badge"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        ></div>
      </div>
      <button
        type="button"
        onClick={() => rotateIt("start")}
        className="h-8 w-20 rounded-full bg-blue-900 cursor-pointer"
      >
        Click
      </button>
      <button
        type="button"
        onClick={() => rotateIt("badgeStart")}
        className="h-auto w-auto p-4 rounded-full bg-blue-900 cursor-pointer"
      >
        Badge Click
      </button>
    </div>
  );
}
