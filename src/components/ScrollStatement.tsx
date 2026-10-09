"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

// A paragraph whose words light up one by one as it scrolls into view.
export function ScrollStatement({ text, highlight = [] }: { text: string; highlight?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className="statement">
      {words.map((w, i) => {
        const start = i / words.length;
        const word = (
          <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {w}
          </Word>
        );
        return highlight.includes(w.replace(/[.,]/g, "")) ? <b key={i}>{word}</b> : word;
      })}
    </p>
  );
}
