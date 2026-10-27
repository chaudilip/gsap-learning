"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { time } from "console";

const slides = [
  {
    title: "Welcome aboard",
    description: "Your journey starts here.",
  },
  {
    title: "Make it yours",
    description: "Personalize your workspace.",
  },
  {
    title: "Discover your tools",
    description: "Explore features that simplify your workflow.",
  },
  {
    title: "You're all set",
    description: "Explore your dashboard and get started.",
  },
];

export default function GSAPOnBoardingTimeline() {
  const container = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const { contextSafe } = useGSAP(
    () => {
      timelineRef.current = gsap.timeline({
        paused: true,
      });
      const tl = timelineRef.current;
      tl.addLabel(`slide-0`);
      slides.forEach((_, index) => {
        if (index === 0) return;
        tl.to(`.slide-${index - 1}`, {
          x: 0,
          y: 0,
          autoAlpha: 0,
        });
        tl.fromTo(
          `.slide-${index}`,
          {
            x: 100,
            y: -100,
          },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
          },
          "<",
        );
        tl.addLabel(`slide-${index}`);
      });
    },
    { scope: container },
  );

  const prevHandler = contextSafe(() => {
    const tl = timelineRef.current;
    if (!tl) return;
    const currentTime = tl.time();
    const previousLabel = tl.previousLabel(currentTime);

    if (previousLabel !== undefined) {
      tl.tweenTo(previousLabel);
    }
  });
  const nextHandler = contextSafe(() => {
    const tl = timelineRef.current;
    if (!tl) return;
    const currentTime = tl.time();
    const nextLabel = tl.nextLabel(currentTime);
    if (nextLabel !== undefined) {
      tl.tweenTo(nextLabel);
    }
  });

  return (
    <div
      className="h-screen w-full flex  flex-col items-center justify-center"
      ref={container}
    >
      <div className="flex relative h-full w-full items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide h-80 w-60 rounded-md bg-blue-500 p-4 absolute slide-${index} ${index === 0 ? "" : "invisible"}`}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}{" "}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={prevHandler}
          className="p-2 rounded-md h-auto w-auto cursor-pointer bg-yellow-600 text-zinc-100"
        >
          Prev
        </button>
        <button
          onClick={nextHandler}
          className="p-2 rounded-md h-auto w-auto cursor-pointer bg-yellow-600 text-zinc-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}
