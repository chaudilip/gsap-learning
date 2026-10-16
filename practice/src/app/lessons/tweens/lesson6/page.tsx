"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
export default function GSAPSetTween() {
  const container = useRef<HTMLDivElement>(null);
  const tweens = useRef<Record<string, gsap.core.Tween>>({});

  useGSAP(
    () => {
      gsap.set(".box", { autoAlpha: 0 });

      tweens.current = {
        start: gsap.to(".box", { autoAlpha: 1, duration: 0.5, paused: true }),
      };
    },
    { scope: container },
  );

  const toggle = (name: string) => {
    const t = tweens.current[name];
    if (t.reversed() || t.progress() === 0) t.play();
    else t.reverse();
  };

  return (
    <div
      className="h-screen w-full gap-4 flex items-center justify-center"
      ref={container}
    >
      <div className="box h-30 w-30 invisible rounded-md bg-yellow-400 text-zinc-800" />
      <div className="box h-30 w-30 invisible rounded-md bg-blue-400 text-zinc-800" />
      <div className="box h-30 w-30 invisible rounded-md bg-red-400 text-zinc-800" />
      <div className="box h-30 w-30 invisible rounded-md bg-zinc-400 text-zinc-800" />
      <div className="box h-30 w-30 invisible rounded-md bg-lime-400 text-zinc-800" />
      <button
        className="w-14 h-10 bg-fuchsia-800 text-zinc-100 cursor-pointer rounded-md"
        onClick={() => toggle("start")}
      >
        Reveal
      </button>
    </div>
  );
}
