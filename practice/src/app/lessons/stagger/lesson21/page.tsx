"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
export default function GSAPStaggerGridRippleEffect() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const handleRippleEffect = contextSafe((index: number) => {
    gsap.to(".box", {
      duration: 1,
      scale: 0.1,
      yoyo: true,
      overWrite: "auto",
      repeat: 1,
      stagger: {
        ease: "power2.inOut",
        from: index,
        amount: 1,
      },
    });
  });

  return (
    <div
      className="h-screen w-full flex items-center justify-center flex-col"
      ref={container}
    >
      <div className="h-full w-full flex justify-center items-center">
        {Array.from({ length: 15 }, (_, index) => (
          <div
            key={index}
            onClick={() => handleRippleEffect(index)}
            className="box h-6 w-6 rounded-full bg-green-500 m-2"
          ></div>
        ))}
      </div>
    </div>
  );
}
