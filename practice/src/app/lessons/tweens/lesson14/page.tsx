"use client";
import { ButtonHTMLAttributes, useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPTweeenKiller() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () =>
      gsap.to(".box", {
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease: "none",
      }),
    { scope: container },
  );

  const mouseClick = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    gsap.to(".box", {
      x: e.clientX - rect.left - 40,
      y: e.clientY - rect.top - 40,
      overwrite: "auto",
      duration: e.shiftKey ? 0.3 : 3,
      ease: "none",
    });
  });

  const onClickStop = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    gsap.killTweensOf(".box", "x,y");
  });

  return (
    <div
      className="h-screen w-full bg-background"
      onClick={mouseClick}
      ref={container}
    >
      <div className="h-20 w-20 bg-blue-900 box" />
      <button
        className="h-20 w-20 rounded-md cursor-pointer bg-red-300 text-red-700"
        onClick={(e) => onClickStop(e)}
      >
        Stop
      </button>
    </div>
  );
}
