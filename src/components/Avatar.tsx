"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Illustrated avatar whose head and eyes follow the pointer.
// Inner features move further than the head outline, which gives a slight 3D turn.
// On touch devices it follows the finger, and otherwise looks around on its own.
export function Avatar() {
  const ref = useRef<HTMLDivElement>(null);
  const lookX = useMotionValue(0); // -1 (left) … 1 (right)
  const lookY = useMotionValue(0); // -1 (up) … 1 (down)
  const spring = { stiffness: 120, damping: 16, mass: 0.6 };
  const x = useSpring(lookX, spring);
  const y = useSpring(lookY, spring);

  const headX = useTransform(x, (v) => v * 9);
  const headY = useTransform(y, (v) => v * 7);
  const headRotate = useTransform(x, (v) => v * 4);
  const faceX = useTransform(x, (v) => v * 15);
  const faceY = useTransform(y, (v) => v * 10);
  const hairX = useTransform(x, (v) => v * 11);
  const hairY = useTransform(y, (v) => v * 6);
  const earX = useTransform(x, (v) => v * -4);
  const pupilX = useTransform(x, (v) => v * 6);
  const pupilY = useTransform(y, (v) => v * 4.5);
  const browY = useTransform(y, (v) => (v < 0 ? v * 5 : v * 1.5));
  const shadowX = useTransform(x, (v) => v * -10);

  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastMove = 0;

    const lookAt = (clientX: number, clientY: number) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.42;
      const nx = (clientX - cx) / (window.innerWidth * 0.45);
      const ny = (clientY - cy) / (window.innerHeight * 0.45);
      lookX.set(Math.max(-1, Math.min(1, nx)));
      lookY.set(Math.max(-1, Math.min(1, ny)));
      lastMove = performance.now();
    };
    const onPointer = (e: PointerEvent) => lookAt(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => e.touches[0] && lookAt(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });

    // When nobody is moving the pointer (e.g. on phones), glance around now and then.
    const idle = setInterval(() => {
      if (reduce || performance.now() - lastMove < 3000) return;
      const spots = [[0, 0], [-0.8, -0.2], [0.8, -0.3], [0.3, 0.6], [-0.5, 0.5], [0, -0.7]];
      const [ix, iy] = spots[Math.floor(Math.random() * spots.length)];
      lookX.set(ix);
      lookY.set(iy);
    }, 1800);

    let blinkTimer: ReturnType<typeof setTimeout>;
    const scheduleBlink = () => {
      blinkTimer = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        scheduleBlink();
      }, 2200 + Math.random() * 3000);
    };
    if (!reduce) scheduleBlink();

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchstart", onTouch);
      clearInterval(idle);
      clearTimeout(blinkTimer);
    };
  }, [lookX, lookY]);

  const skin = "#efc29c";
  const skinShade = "#dda57c";
  const hair = "#1d1612";

  return (
    <div ref={ref} className="avatar" role="img" aria-label="Illustrated avatar of Rao Muneeb that looks towards your cursor">
      <svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg">
        {/* Shirt: blue polo */}
        <path d="M44 440c4-62 46-92 112-108l44 30 44-30c66 16 108 46 112 108Z" fill="#2563eb" />
        <path d="M44 440c4-62 46-92 112-108l10 7c-50 18-84 50-90 101Z" fill="#1d4ed8" />
        <path d="M200 362v78" stroke="#1e40af" strokeWidth="3" />
        <circle cx="200" cy="384" r="4" fill="#1e3a8a" />
        <circle cx="200" cy="408" r="4" fill="#1e3a8a" />

        {/* Neck */}
        <path d="M168 282h64v60c-14 16-50 16-64 0Z" fill={skinShade} />

        {/* Collar */}
        <path d="M156 326l44 36-22 26-34-44Z" fill="#1e40af" />
        <path d="M244 326l-44 36 22 26 34-44Z" fill="#1e40af" />

        <motion.g style={{ x: headX, y: headY, rotate: headRotate, transformOrigin: "200px 300px" }}>
          {/* Ears */}
          <motion.g style={{ x: earX }}>
            <ellipse cx="108" cy="208" rx="16" ry="26" fill={skinShade} />
            <ellipse cx="292" cy="208" rx="16" ry="26" fill={skinShade} />
          </motion.g>

          {/* Face */}
          <ellipse cx="200" cy="200" rx="94" ry="112" fill={skin} />
          <motion.ellipse cx="200" cy="200" rx="94" ry="112" fill="#000" opacity="0.06" style={{ x: shadowX }} />

          {/* Beard */}
          <motion.path
            style={{ x: faceX, y: faceY }}
            d="M106 200C104 270 140 334 200 338C260 334 296 270 294 200C290 214 286 236 276 252C262 270 248 276 236 274C224 272 214 264 200 264C186 264 176 272 164 274C152 276 138 270 124 252C114 236 110 214 106 200Z"
            fill={hair}
          />

          <motion.g style={{ x: faceX, y: faceY }}>
            {/* Cheek blush */}
            <ellipse cx="146" cy="240" rx="16" ry="8" fill="#e8907a" opacity="0.25" />
            <ellipse cx="254" cy="240" rx="16" ry="8" fill="#e8907a" opacity="0.25" />

            {/* Eyebrows */}
            <motion.g style={{ y: browY }}>
              <path d="M136 176c14-12 34-14 50-6" stroke={hair} strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M264 176c-14-12-34-14-50-6" stroke={hair} strokeWidth="10" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Eyes */}
            <g className={`eye${blink ? " blink" : ""}`}>
              <ellipse cx="162" cy="204" rx="18" ry="12" fill="#fff" />
              <motion.g style={{ x: pupilX, y: pupilY }}>
                <circle cx="162" cy="204" r="8.5" fill="#4a3426" />
                <circle cx="162" cy="204" r="4.2" fill="#120c08" />
                <circle cx="165" cy="200.5" r="2.4" fill="#fff" />
              </motion.g>
            </g>
            <g className={`eye${blink ? " blink" : ""}`}>
              <ellipse cx="238" cy="204" rx="18" ry="12" fill="#fff" />
              <motion.g style={{ x: pupilX, y: pupilY }}>
                <circle cx="238" cy="204" r="8.5" fill="#4a3426" />
                <circle cx="238" cy="204" r="4.2" fill="#120c08" />
                <circle cx="241" cy="200.5" r="2.4" fill="#fff" />
              </motion.g>
            </g>

            {/* Nose */}
            <path d="M201 214c-4 16-9 25-5 30 4 4 11 3 14-1" stroke={skinShade} strokeWidth="5" strokeLinecap="round" fill="none" />

            {/* Mouth and moustache */}
            <path d="M182 280c10 7 26 7 36 0" stroke="#b5655a" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M156 268c16-16 34-14 44-8 10-6 28-8 44 8-16-2-30 0-44 6-14-6-28-8-44-6Z" fill={hair} />
            <path d="M193 292h14l-4 20h-6Z" fill={hair} />
          </motion.g>

          {/* Hair with a side part */}
          <motion.path
            style={{ x: hairX, y: hairY }}
            d="M106 196c-8-70 26-118 92-124 70-6 112 34 104 120-6-26-16-44-30-56-6 10-26 16-50 12 10-6 16-14 16-22-24 18-70 20-104 10-12 12-22 30-28 60Z"
            fill={hair}
          />
          <motion.path
            style={{ x: hairX, y: hairY }}
            d="M150 92c30-18 86-20 116 4-30-8-70-6-104 8Z"
            fill="#3a2c23"
            opacity="0.7"
          />
        </motion.g>
      </svg>
    </div>
  );
}
