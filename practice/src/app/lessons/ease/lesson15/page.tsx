"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const families = [
  "power1",
  "power2",
  "power3",
  "power4",
  "sine",
  "expo",
  "circ",
  "back",
  "elastic",
  "bounce",
];

const variants = ["in", "out", "inOut"];

const easeGroups = variants.map((variant) => ({
  variant,
  eases: families.map((family) => `${family}.${variant}`),
}));
export default function GSAPEaseOne() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      easeGroups.forEach((group) => {
        group.eases.forEach((ease) => {
          gsap.to(`[data-ease="${ease}"]`, {
            x: (_i: number, dot: HTMLElement) =>
              dot.parentElement!.offsetWidth - dot.offsetWidth,
            ease,
            duration: 2,
            repeat: -1,
            repeatDelay: 1,
          });
        });
      });
    },
    { scope: container },
  );
  return (
    <div
      className="min-h-screen w-full flex flex-col gap-8 p-8 bg-white text-zinc-900"
      ref={container}
    >
      {easeGroups.map((group) => (
        <section key={group.variant} className="flex flex-col gap-1">
          <h2>{group.variant}</h2>
          {group.eases.map((ease) => (
            <EaseLane key={ease} ease={ease} />
          ))}
        </section>
      ))}
    </div>
  );
}

function EaseLane({ ease }: { ease: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-32 shrink-0 text-sm font-mono">{ease}</span>
      <div className="relative h-4 flex-1 rounded-full bg-zinc-100">
        <div className="h-4 w-4 rounded-full bg-yellow-500" data-ease={ease} />
      </div>
    </div>
  );
}
