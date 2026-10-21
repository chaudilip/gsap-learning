"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPTilesRippleGrid() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const onTilesClick = contextSafe((index: number) => {
    gsap.to(".box", {
      scale: 0.1,
      duration: 1,
      repeat: 1,
      overwrite: "auto",
      yoyo: true,
      stagger: {
        grid: [10, 10],
        from: index,
        amount: 1,
        ease: "power2.inOut",
        // axis: "y",
      },
    });
  });
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      ref={container}
    >
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: 100 }, (_, index) => (
          <div
            className="h-10 w-10 box bg-linear-to-r rounded-sm from-green-500 to-green-300"
            key={index}
            onClick={() => onTilesClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
