"use client";
import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPStaggerEachAmount() {
  const container = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(5);
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        {
          y: -100,
          autoAlpha: 0,
        },
        {
          y: 0,
          duration: 0.5,
          autoAlpha: 1,
          stagger: {
            amount: 1,
          },
        },
      );

      gsap.fromTo(
        ".box-each",
        {
          y: -100,
          autoAlpha: 0,
        },
        {
          y: 0,
          duration: 0.5,
          autoAlpha: 1,
          stagger: {
            each: 0.1,
          },
        },
      );
    },
    { scope: container, dependencies: [count] },
  );

  const changeTheCount = (val: number) => {
    setCount(val);
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center flex-col"
      ref={container}
    >
      <div className="flex flex-wrap w-full p-4 items-center justify-center">
        {Array.from({ length: count }, (_, index) => (
          <div
            className="box  h-6 w-6 bg-green-500 opacity-0 rounded-md m-2"
            key={index}
          ></div>
        ))}
      </div>
      <div className="flex gap-10">
        <button
          className="h-10 w-14 cursor-pointer bg-blue-400 text-zinc-100"
          onClick={() => changeTheCount(5)}
        >
          5
        </button>
        <button
          className="h-10 cursor-pointer w-14 bg-blue-400 text-zinc-100"
          onClick={() => changeTheCount(50)}
        >
          50
        </button>
      </div>
      <div className="flex flex-wrap w-full p-4 items-center justify-center">
        {Array.from({ length: count }, (_, index) => (
          <div
            className="box-each  h-6 w-6 bg-green-500 opacity-0 rounded-md m-2"
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
