"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export default function Page() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        duration: 1,
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="bg-emerald-100 w-full h-screen items-center justify-center flex"
    >
      <div className="box bg-green-700 p-10 rounded-sm"></div>
    </div>
  );
}
