"use client";
import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function GSAPTweenControls() {
  const container = useRef<HTMLDivElement>(null);
  const mods = ["play", "pause", "reverse", "restart", "slow", "timeScale"];
  const tweens = useRef<gsap.core.Tween>(null);

  useGSAP(
    () => {
      const vars = {
        rotation: 360,
        duration: 3,
        x: 800,
        paused: true,
        ease: "none",
      };
      tweens.current = gsap.to(".box", { ...vars });
    },
    { scope: container },
  );

  const handleClick = (name: string) => {
    const t = tweens.current;
    if (!t) return;
    if (name === "play") t.play();
    if (name === "pause") t.pause();
    if (name === "reverse") t.reverse();
    if (name === "restart") t.restart();
    if (name === "slow") t.timeScale(Math.sign(t.timeScale()) * 0.5);
    if (name === "timeScale") t.timeScale(Math.sign(t.timeScale()) * 2);
  };

  return (
    <div
      ref={container}
      className="flex flex-col gap-10 h-screen w-full items-start p-6 justify-center"
    >
      <div className="h-30 w-30 bg-amber-50  rounded-md box"></div>
      <div className="flex gap-8">
        {mods.map((item) => (
          <button
            key={item}
            className="w-auto p-4 h-20 bg-fuchsia-800 text-zinc-100 cursor-pointer rounded-md"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
