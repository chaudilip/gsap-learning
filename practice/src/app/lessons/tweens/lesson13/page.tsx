"use client";
import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPJsObj() {
  const countRef = useRef<HTMLSpanElement>(null);
  const counter = useRef({ value: 0 });
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(counter.current, {
        value: 1000,
        ease: "none",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(
              counter.current.value,
            ).toString();
          }
        },
        duration: 4,
      });
    },
    { scope: container },
  );

  return (
    <div
      className="bg-white w-full h-full flex flex-col items-center justify-center"
      ref={container}
    >
      <span className="text-2xl tabular-nums text-blue-800" ref={countRef}>
        0
      </span>
      <GSAPStateJSObj />
    </div>
  );
}

function GSAPStateJSObj() {
  const [count, setCount] = useState(0);
  const counterRef = useRef({ count: 0 });
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(counterRef.current, {
        count: 1000,
        duration: 4,
        ease: "none",
        onUpdate: () => {
          setCount(Math.round(counterRef.current.count));
        },
      });
    },
    { scope: container },
  );
  return (
    <div
      className="bg-white w-full h-full flex flex-col items-center justify-center"
      ref={container}
    >
      <span className="text-2xl tabular-nums text-blue-800">{count}</span>
    </div>
  );
}
