"use client";
import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function GSAPCustomEase() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".box", {
        x: 100,
        rotate: 360,
        scale: 2,
        ease: "power2.out",
        duration: 3,
        repeat: -1,
        autoAlpha: 1,
        repeatDelay: 1,
      });
      gsap.to(".pop", {
        x: 100,
        autoAlpha: 1,
        rotate: 360,
        scale: 2,
        duration: 3,
        repeat: -1,
        repeatDelay: 1,
      });
    },
    { scope: container },
  );
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      ref={container}
    >
      <div className="h-full w-full flex flex-row items-center justify-start gap-20">
        <div className="h-20 w-20 bg-blue-200 box opacity-0"></div>
        <div className="h-20 w-20 bg-yellow-200 pop opacity-0"></div>
      </div>
    </div>
  );
}
