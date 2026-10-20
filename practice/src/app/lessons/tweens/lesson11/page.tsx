"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
const arrows = [
  { label: "⬅️", property: "x", amount: "-=100" },
  { label: "⬆️", property: "y", amount: "-=100" },
  { label: "⬇️", property: "y", amount: "+=100" },
  { label: "➡️", property: "x", amount: "+=100" },
];

type Arrow = (typeof arrows)[number];

export default function GSAPFunctionAndRelativeValues() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () =>
      gsap.to(".dot", {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        ease: "power3.out",
      }),
    { scope: container },
  );
  const box = useRef<HTMLDivElement>(null);
  useGSAP(() => {}, { scope: container });

  const moveIt = contextSafe(({ property, amount }: Arrow) => {
    gsap.to(box.current, {
      [property]: amount,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <div
      className="h-screen w-full bg-zinc-100 flex flex-col items-center justify-center gap-2"
      ref={container}
    >
      <div className=" w-full flex items-center justify-center gap-12">
        {Array.from({ length: 12 }, (_, index) => (
          <div className="dot h-4 w-4 bg-amber-700  rounded-full" key={index} />
        ))}
      </div>

      <div className="m-12 flex h-full  w-auto  gap-10 items-center flex-col justify-center">
        <div className="h-20 w-20 bg-green-700 " ref={box} />
        <div className="flex">
          {arrows.map((arrow) => (
            <button
              key={arrow.label}
              className="text-2xl"
              onClick={() => moveIt(arrow)}
            >
              {arrow.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
