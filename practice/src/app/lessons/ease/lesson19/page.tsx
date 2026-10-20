"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPSlowMoRougeExpoScaleEase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".glitchy", {
        autoAlpha: 1,
        x: 5,
        duration: 1.5,
        ease: `rough({
          points: 30,
          strength: 2,
          template: power2.out,
          taper:out,
          randomize:true,
          clamp: true
        })`,
        repeat: -1,
        repeatDelay: 2,
      });
      const timing = { scale: 50, repeat: -1, duration: 3, repeatDelay: 1 };
      gsap.to(".expo1", {
        ...timing,
        ease: "slow(0.7,0.7)",
      });
      gsap.to(".expo2", {
        ...timing,
        ease: "expoScale(1,50)",
      });
    },
    { scope: container },
  );

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center "
      ref={container}
    >
      <div>
        <h1 className="text-6xl font-bold text-green-400 opacity-0 glitchy">
          Text Me
        </h1>
      </div>
      <div className="flex h-full w-full flex-row">
        <div className="h-full w-full items-center overflow-hidden justify-center flex flex-row">
          <div className="h-6 w-6  rounded-full border-4 border-blue-500 expo1"></div>
        </div>
        <div className="h-full w-full items-center overflow-hidden justify-center flex flex-row">
          <div className="h-6 w-6 rounded-full border-4 border-blue-500 expo2"></div>
        </div>
      </div>
    </div>
  );
}
