"use client";
import { useGSAP, gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function GSAPTweenCallBack() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, { scope: container });
  return (
    <div
      className="h-screen w-full gap-4 flex items-center justify-center"
      ref={container}
    >
      <div className=""></div>
    </div>
  );
}
