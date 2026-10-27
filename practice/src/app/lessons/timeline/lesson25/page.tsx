"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

const actions = ["play", "pause", "reverse", "restart"];

export default function GSAPSequanceTimelinePositionParameter() {
  const container = useRef<HTMLDivElement>(null);

  const timelineRef = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power2.out",
          duration: 1,
        },
      });

      timelineRef.current
        .fromTo(
          ".nav",
          {
            y: -100,
          },
          {
            y: 0,
            autoAlpha: 1,
          },
        )
        .fromTo(
          ".hero-heading",
          {
            y: 100,
          },
          {
            y: 0,
            autoAlpha: 1,
          },
        )
        .fromTo(
          ".hero-words",
          {
            y: 100,
          },
          {
            y: 0,
            autoAlpha: 1,
          },
          "<",
        )
        .fromTo(
          ".hero-button",
          {
            y: 100,
          },
          { y: 0, autoAlpha: 1 },
          "-=0.3",
        )
        .to(
          ".hero-img",
          {
            autoAlpha: 1,
          },
          "+=0.5",
        );
    },
    { scope: container },
  );

  const changeTheAction = (action: string) => {
    if (!timelineRef.current) return;
    const t = timelineRef.current;
    if (action === "play") {
      t.play();
    } else if (action === "pause") {
      t.pause();
    } else if (action === "reverse") {
      t.reverse();
    } else {
      t.restart();
    }
  };
  return (
    <div className="flex h-screen w-full flex-col" ref={container}>
      <nav className="flex h-10 shrink-0 items-center justify-center bg-blue-500 p-2 text-zinc-100 nav invisible">
        <div className="flex items-center justify-center gap-8">
          <a href="#home">Home</a>
          <a href="#about-us">About us</a>
          <a href="#contact-use">Contact</a>
        </div>
      </nav>

      <section className="relative flex h-[calc(100vh-40px)] overflow-hidden w-full flex-col items-center gap-10  justify-center text-center">
        <img
          src={"/golf.jpg"}
          alt="golf image"
          className="h-full hero-img -z-3 w-full rounded-md absolute object-cover inset-0 invisible"
        />
        <div className="relative">
          <h1 className="text-blue-900 font-bold text-6xl hero-heading invisible">
            Welcome to GSAP
          </h1>
          <p className="text-blue-500 w-140 text-2xl  wrap-break-word hero-words  invisible">
            A Timeline is a powerful sequencing tool that acts as a container
            for tweens and other timelines, making it simple to control them as
            a whole and precisely manage their timing.
          </p>
          <button className="p-2 h-auto w-auto bg-emerald-950 text-zinc-100 rounded-md hero-button invisible">
            Check out{" "}
          </button>
        </div>
      </section>
      <div className="div absolute bottom-0 right-0 flex gap-2 items-center">
        {actions.map((item) => (
          <button
            key={item}
            onClick={() => changeTheAction(item)}
            className="w-auto p-4 h-14 bg-amber-600 text-zinc-200  cursor-pointer rounded-md"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
