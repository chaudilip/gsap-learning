"use client";
import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function GSAPColors() {
  const container = useRef<HTMLDivElement>(null);
  const tweens = useRef<gsap.core.Tween>(null);

  useGSAP(
    () => {
      tweens.current = gsap.to(document.documentElement, {
        paused: true,
        duration: 0.8,
        "--background": "#0a0a0a",
        "--foreground": "#ededed",
        "--card": "#6366f1",
        "--button-foreground": "#e5e5e5",
      });
      gsap.to(document.documentElement, {
        duration: 3,
        "--g1": "#903843",
        "--g2": "#939232",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: container },
  );

  const toggle = () => {
    const t = tweens.current;
    if (!t) return;
    if (t.reversed() || t.progress() === 0) t.play();
    else t.reverse();
  };

  return (
    <div
      ref={container}
      className="h-screen w-full bg-background flex items-center justify-center"
    >
      <div className="h-20 w-20 bg-card card" />
      <div className="h-20 w-20 bg-linear-to-r from-(--g1) to-(--g2)" />
      <button
        className="bg-button-foreground text-background"
        onClick={() => toggle()}
      >
        Change
      </button>
    </div>
  );
}
