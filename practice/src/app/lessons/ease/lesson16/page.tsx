"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const buttonArr = [
  {
    label: "Subtle",
    color: "bg-blue-400",
    easeIn: "back.out(1.2)",
    easeOut: "back.out(1)",
  },
  {
    label: "Strong",
    color: "bg-red-400",
    easeIn: "back.out(4)",
    easeOut: "back.out(1)",
  },
  {
    label: "Wobbly",
    color: "bg-yellow-400",
    easeIn: "elastic.out(1,0.1)",
    easeOut: "back.out(1)",
  },
];

export default function GSAPElastic() {
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".walker", {
        x: (_i: number, walker: HTMLElement) =>
          walker.parentElement!.offsetWidth - walker.offsetWidth,
        ease: "none",
        duration: 6,
        repeat: -1,
      });
      gsap.to(".sprite", {
        backgroundPosition: "-96px -36px",
        ease: "steps(3)",
        duration: 0.45,
        repeat: -1,
      });
    },
    { scope: container },
  );
  const hoverScale = contextSafe(
    (e: React.MouseEvent<HTMLButtonElement>, ease: string, isIn: boolean) => {
      gsap.to(e.currentTarget, {
        scale: isIn ? 1.5 : 1,
        overwrite: "auto",
        ease,
        duration: 0.6,
      });
    },
  );

  return (
    <div
      className="h-screen flex w-full flex-col items-center justify-center"
      ref={container}
    >
      <div className="h-full flex items-center justify-center flex-col gap-4">
        {buttonArr.map((btn) => (
          <button
            className={`h-14 w-20 ${btn.color} rounded-md cursor-pointer`}
            key={btn.label}
            onMouseEnter={(e) => hoverScale(e, btn.easeIn, true)}
            onMouseLeave={(e) => hoverScale(e, btn.easeOut, false)}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div className="h-auto w-full flex items-center">
        <div className="walker w-fit">
          <div className="sprite h-9 w-8 bg-[url('/rpgsprites1/healer_f.png')] zoom-[4] [image-rendering:pixelated] bg-position-[0px_-36px]"></div>
        </div>
      </div>
    </div>
  );
}
