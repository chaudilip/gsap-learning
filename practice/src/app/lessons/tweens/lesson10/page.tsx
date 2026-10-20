"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPToRepearAndYoYo() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".float", {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pulse", {
        scale: 1.2,
        duration: 0.5,
        repeat: 5,
        yoyo: true,
      });
      gsap.to(".jump", {
        x: "random(-200,200)",
        y: "random(-200,200)",
        repeat: -1,
        repeatRefresh: true,
        repeatDelay: 0.5,
      });
    },
    { scope: container },
  );
  return (
    <div
      className="h-screen w-full flex items-center bg-zinc-100 p-20 gap-10"
      ref={container}
    >
      <div className="float bg-green-700 h-16 w-auto p-4 rounded-full text-2xl">
        🚀
      </div>
      <div className="pulse bg-red-700   h-20 w-20  rounded-full flex items-center justify-center">
        New
      </div>
      <div className="jump bg-blue-700 h-20 w-20 rounded-md p-4"></div>
    </div>
  );
}
