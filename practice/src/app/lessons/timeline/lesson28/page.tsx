"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const actions = ["play", "pause", "reverse"];

export default function GSAPScrubber() {
  const container = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const rangeRef = useRef<HTMLInputElement>(null);

  useGSAP(
    () => {
      timelineRef.current = gsap.timeline({ paused: true });
      const tl = timelineRef.current;
    },
    { scope: container },
  );

  const inputHanlder = (event: React.InputEvent<HTMLInputElement>) => {};

  const changeTheAction = (action: string) => {
    if (!timelineRef.current) return;
    const t = timelineRef.current;
    if (action === "play") {
      t.play();
    } else if (action === "reverse") {
      t.reverse();
    } else if (action === "pause") {
      t.pause();
    } else {
      t.restart();
    }
  };

  return (
    <div
      ref={container}
      className="h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <div className="flex  gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              className={`h-10 w-10 bg-amber-400 rounded-md box-${index}`}
              key={index}
            ></div>
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={100}
          ref={rangeRef}
          value="0"
          onInput={(e) => inputHanlder(e)}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        {actions.map((item) => (
          <button
            key={item}
            onClick={() => changeTheAction(item)}
            className="w-20 h-16 bg-amber-700 rounded-md "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
