"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Two lines of big text that slide in opposite directions as you scroll past.
export function ScrollText({ top, bottom }: { top: string[]; bottom: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-35%", "5%"]);
  const line = (words: string[]) => [...words, ...words].map((w, i) => <span key={i}>{w}</span>);

  return (
    <div ref={ref} className="scroll-text" aria-label={top.concat(bottom).join(", ")}>
      <motion.div className="st-line" style={{ x: x1 }} aria-hidden="true">{line(top)}</motion.div>
      <motion.div className="st-line outline" style={{ x: x2 }} aria-hidden="true">{line(bottom)}</motion.div>
    </div>
  );
}
