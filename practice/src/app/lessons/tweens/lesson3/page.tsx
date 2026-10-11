"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { Button } from "@/components/button";

export default function GSAPToProperty() {
  const container = useRef<HTMLDivElement>(null);
  const tweens = useRef<Record<string, gsap.core.Tween>>({});

  useGSAP(
    () => {
      const vars = {
        duration: 1,
        paused: true,
        ease: "power2.inOut",
      };
      tweens.current = {
        right: gsap.to(".right", { x: 300, ...vars }),
        rotate: gsap.to(".rotate", { rotation: 360, ...vars }),
        fades: gsap.to(".fades", { opacity: 0, scale: 0.5, ...vars }),
      };
    },
    { scope: container },
  );

  const toggle = (name: string) => {
    const t = tweens.current[name];
    if (t.reversed() || t.progress() === 0) t.play();
    else t.reverse();
  };

  return (
    <div
      ref={container}
      className="flex flex-col gap-10 h-screen w-full items-start p-6 justify-center"
    >
      <div className="right bg-red-500 h-30 w-30 rounded-md"></div>
      <div className="rotate bg-green-500 h-30 w-30 rounded-md"></div>
      <div className="fades bg-blue-500 h-30 w-30 rounded-md"></div>

      <div className="h-20 w-full flex flex-row gap-2">
        {Object.keys({ right: 0, rotate: 0, fades: 0 }).map((name) => (
          <Button key={name} onClick={() => toggle(name)}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}
