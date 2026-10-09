"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { portraitPath } from "./portraitPath";

// Portrait that drifts, tilts and shrinks as you scroll, and leans in 3D towards the cursor.
// A blue copy behind it moves at a different speed for a layered, parallax look.
export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 140, damping: 24 });
  const y = useTransform(smoothScroll, [0, 700], [0, 140]);
  const rotate = useTransform(smoothScroll, [0, 700], [0, -10]);
  const scale = useTransform(smoothScroll, [0, 700], [1, 0.85]);
  const echoX = useTransform(smoothScroll, [0, 700], [14, 60]);
  const echoY = useTransform(smoothScroll, [0, 700], [12, -30]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tiltY = useSpring(useTransform(px, (v) => v * 14), { stiffness: 120, damping: 14 });
  const tiltX = useSpring(useTransform(py, (v) => v * -10), { stiffness: 120, damping: 14 });
  const shiftX = useSpring(useTransform(px, (v) => v * -12), { stiffness: 120, damping: 14 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      px.set(Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2))));
      py.set(Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2))));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <motion.div ref={ref} className="portrait" style={{ y, rotate, scale }}>
      <motion.div className="portrait-tilt" style={{ rotateX: tiltX, rotateY: tiltY }}>
        <motion.svg className="portrait-echo" viewBox="140 0 390 386" style={{ x: echoX, y: echoY }} aria-hidden="true">
          <path d={portraitPath} />
        </motion.svg>
        <motion.svg className="portrait-main" viewBox="140 0 390 386" style={{ x: shiftX }} role="img" aria-label="Illustrated portrait of Rao Muneeb">
          <path d={portraitPath} />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
