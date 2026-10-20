"use client";
import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
export default function GSAPCustomWiggleAndStretch() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      const timing = { duration: 3, repeat: -1, repeatDelay: 1 };
      gsap.to(".ballJump", {
        y: 176,
        ease: "ballBounce",
        ...timing,
      });
      gsap.to(".ballJump", {
        scaleX: 1.4,
        scaleY: 0.3,
        ease: "ballBounce-squash",
        transformOrigin: "center bottom",
        ...timing,
      });
    },
    { scope: container },
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = contextSafe(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError("");
      if (password !== "Dilip@123") {
        setError("Password is wrong!!");
        gsap.fromTo(
          ".inputShake",
          {
            x: 0,
          },
          {
            duration: 0.6,
            x: 10,
            ease: "shake",
            overwrite: "auto",
          },
        );
      }
    },
  );

  return (
    <div
      className="h-screen w-full flex items-center justify-center flex-col"
      ref={container}
    >
      <div className=" flex items-center justify-center flex-col">
        <form onSubmit={onSubmitHandler} className="gap-4 flex">
          <input
            className="bg-zinc-700 p-4 text-base text-zinc-50 inputShake rounded-md"
            placeholder="enter your password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            type="submit"
            className="h-16 w-20 cursor-pointer rounded-md bg-zinc-300 text-zinc-700"
          >
            Submit
          </button>
        </form>
        <span className="text-red-700">{error}</span>
      </div>
      <div className="w-full flex items-start justify-center h-64 border-b-4">
        <div className="h-20 w-20 rounded-full bg-red-900 ballJump" />
      </div>
    </div>
  );
}
