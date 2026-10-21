"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function GSAPStaggerCardsStack() {
  const container = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween>(null);

  useGSAP(
    () => {
      const rotation = gsap.utils.distribute({
        base: -30,
        amount: 60,
      });
      const scale = gsap.utils.distribute({
        base: 0.9,
        amount: 0.2,
        from: "edges",
      });

      tweenRef.current = gsap.to(".card", {
        rotation,
        duration: 0.8,
        scale,
        stagger: {
          amount: 1,
        },
      });
    },
    { scope: container },
  );

  const restartHandler = () => {
    const t = tweenRef.current;
    if (!t) return;
    if (t.reversed() || t.progress() === 0) t.play();
    else t.reverse();
  };

  return (
    <div
      className="h-screen w-full relative flex items-center justify-center"
      ref={container}
    >
      {Array.from({ length: 7 }, (_, index) => (
        <div
          className="h-60 w-40 rounded-sm absolute card origin-bottom bg-linear-to-r from-purple-600 to-purple-300"
          key={index}
        />
      ))}
      <div className="h-auto w-full mt-100 flex items-center justify-center">
        <button
          className="h-14 w-20 bg-blue-700 text-zinc-50 rounded-md cursor-pointer"
          onClick={restartHandler}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
