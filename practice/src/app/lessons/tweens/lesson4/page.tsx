"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPFromAndImeediateRender() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.from(".hero-button", {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="flex h-auto w-full flex-col gap-8 p-10 items-center justify-center"
    >
      <div className="hero flex flex-col h-full w-3xl gap-10 p-24 items-center justify-center">
        <h1 className="hero-heading">Hero Component</h1>
        <p className="hero-text">
          He knew what he was supposed to do. That had been apparent from the
          beginning. That was what made the choice so difficult. What he was
          supposed to do and what he would do were not the same. This would have
          been fine if he were willing to face the inevitable consequences, but
          he wasn't.
        </p>
        <button className="hero-button bg-blue-400 text-blue-900 p-2 rounded-md">
          Next Button
        </button>
      </div>
    </div>
  );
}
