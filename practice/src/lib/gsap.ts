import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import CustomBounce from "gsap/CustomBounce";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  CustomEase,
  CustomWiggle,
  CustomBounce,
  RoughEase,
);
CustomEase.create("popup", ".66,.38,.48,.98");
if (typeof window !== "undefined") {
  CustomWiggle.create("shake", {
    wiggles: 5,
    type: "easeOut",
  });
  CustomBounce.create("ballBounce", {
    strength: 0.9,
    squash: 6,
    squashID: "ballBounce-squash",
  });
}

gsap.defaults({ ease: "popup" });

export { gsap, useGSAP, ScrollTrigger };
