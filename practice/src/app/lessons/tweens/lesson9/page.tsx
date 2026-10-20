"use client";
import { useGSAP, gsap } from "@/lib/gsap";
import { useRef, useState } from "react";

export default function GSAPTweenCallBack() {
  const container = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const tweens = useRef<gsap.core.Tween>(null);

  useGSAP(
    () => {
      tweens.current = gsap.to(".progress", {
        scaleX: 1,
        duration: 2,
        onUpdate: function () {
          setLabel(Math.round(this.progress() * 100));
        },
        ease: "none",
        onComplete: () => setIsDisabled(false),
      });
    },
    { scope: container },
  );
  return (
    <div
      className="h-screen flex flex-col w-full gap-4  items-center justify-center"
      ref={container}
    >
      <div className="relative h-4 w-full overflow-hidden  rounded-full bg-gray-50">
        <div className="progress h-full inset-0 origin-left scale-x-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500"></div>
        <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-semibold text-gray-900">
          {label}
        </span>
      </div>
      <button
        className="h-16 w-20 bg-blue-700 text-zinc-100 disabled:bg-gray-400  cursor-pointer"
        disabled={isDisabled}
      >
        Click here
      </button>
    </div>
  );
}
