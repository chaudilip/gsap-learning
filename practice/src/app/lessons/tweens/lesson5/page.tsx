"use client";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function GSAPFromTo() {
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [overwrite, setOverwrite] = useState<boolean>(false);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((l) => [...l, `${new Date().toLocaleTimeString()}  ${msg}`]);

  const handleA = contextSafe(() => {
    addLog("A started → x:300 over 3s");
    gsap.to(".box", {
      x: 300,
      duration: 3,
      ease: "none",
      onInterrupt: () => addLog("A INTERRUPTED — killed before finishing"),
      onComplete: () => addLog("A completed"),
    });
  });
  const handleB = contextSafe(() => {
    addLog(`B started → x:0 over 0.4s (overwrite: ${overwrite})`);
    gsap.to(".box", {
      x: 0,
      duration: 0.4,
      overwrite, // false = zombie, true = A dies instantly
      onInterrupt: () => addLog("B INTERRUPTED"),
      onComplete: () => addLog("B completed"),
    });
  });

  return (
    <div style={{ padding: 20 }} className="flex flex-col" ref={container}>
      <button
        onClick={handleA}
        className="h-24 w-24 bg-amber-200 p-2 text-zinc-700"
      >
        A → 300 (3s)
      </button>
      <button
        onClick={handleB}
        style={{ marginLeft: 8 }}
        className="bg-blue-100 text-zinc-700 h-24 w-24"
      >
        B → 0 (0.4s)
      </button>
      <label style={{ marginLeft: 16 }}>
        <input
          type="checkbox"
          checked={overwrite}
          onChange={(e) => setOverwrite(e.target.checked)}
        />
        overwrite on B
      </label>

      <div
        className="box"
        style={{ width: 80, height: 80, background: "tomato", marginTop: 20 }}
      />

      <pre style={{ marginTop: 20, fontSize: 12 }}>{log.join("\n")}</pre>
    </div>
  );
}
