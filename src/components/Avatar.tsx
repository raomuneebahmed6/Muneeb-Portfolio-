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

  const hair = "#1b1410";
  const hairLight = "#3b2a20";

  return (
    <div ref={ref} className="avatar" role="img" aria-label="Illustrated avatar of Rao Muneeb that looks towards your cursor">
      <svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="av-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6d0ae" />
            <stop offset="1" stopColor="#eab88f" />
          </linearGradient>
          <linearGradient id="av-jacket" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#0a1f4d" />
          </linearGradient>
          <linearGradient id="av-hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b2a20" />
            <stop offset="1" stopColor={hair} />
          </linearGradient>
        </defs>

        {/* Clothes: navy jacket over a white tee */}
        <path d="M128 336c24 12 120 12 144 0l10 104H118Z" fill="#fff" />
        <path d="M150 334c14 20 86 20 100 0" stroke="#dfe6f3" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M36 440c4-58 40-92 104-110 8 40 16 76 22 110Z" fill="url(#av-jacket)" />
        <path d="M364 440c-4-58-40-92-104-110-8 40-16 76-22 110Z" fill="url(#av-jacket)" />
        <path d="M140 330l-20 18 30 58 8-52Z" fill="#2563eb" />
        <path d="M260 330l20 18-30 58-8-52Z" fill="#2563eb" />
        <path d="M74 400c10-20 26-34 46-42" stroke="#2c4aa0" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
        <rect x="276" y="384" width="34" height="6" rx="3" fill="#2c4aa0" opacity=".7" />

        {/* Neck */}
        <path d="M172 276h56v54c-12 14-44 14-56 0Z" fill="#dda57c" />
        <path d="M172 300c18 10 38 10 56 0v-20h-56Z" fill="#000" opacity=".08" />

        <motion.g style={{ x: headX, y: headY, rotate: headRotate, transformOrigin: "200px 300px" }}>
          {/* Ears */}
          <motion.g style={{ x: earX }}>
            <ellipse cx="111" cy="200" rx="14" ry="22" fill="#e6ac82" />
            <ellipse cx="289" cy="200" rx="14" ry="22" fill="#e6ac82" />
            <path d="M108 192c4-4 8-2 8 6s-2 12-6 12" stroke="#cf9168" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M292 192c-4-4-8-2-8 6s2 12 6 12" stroke="#cf9168" strokeWidth="3" fill="none" strokeLinecap="round" />
          </motion.g>

          {/* Face */}
          <path d="M112 178c0-62 38-96 88-96s88 34 88 96c0 70-30 118-88 128-58-10-88-58-88-128Z" fill="url(#av-skin)" />
          <motion.path
            style={{ x: shadowX }}
            d="M112 178c0-62 38-96 88-96s88 34 88 96c0 70-30 118-88 128-58-10-88-58-88-128Z"
            fill="#000"
            opacity="0.05"
          />

          {/* Trimmed beard */}
          <motion.path
            style={{ x: faceX, y: faceY }}
            d="M113 196c2 62 34 104 87 110 53-6 85-48 87-110-4 30-12 52-26 68-14 14-28 20-40 20-8 4-14 6-21 6s-13-2-21-6c-12 0-26-6-40-20-14-16-22-38-26-68Z"
            fill={hair}
            opacity="0.92"
          />

          <motion.g style={{ x: faceX, y: faceY }}>
            {/* Cheeks */}
            <ellipse cx="146" cy="232" rx="15" ry="8" fill="#f08f7a" opacity="0.3" />
            <ellipse cx="254" cy="232" rx="15" ry="8" fill="#f08f7a" opacity="0.3" />

            {/* Eyebrows */}
            <motion.g style={{ y: browY }}>
              <path d="M140 166c12-10 30-12 44-5" stroke={hair} strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M260 166c-12-10-30-12-44-5" stroke={hair} strokeWidth="8" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Eyes (smiling) */}
            {[164, 236].map((cx) => (
              <g key={cx} className={`eye${blink ? " blink" : ""}`}>
                <ellipse cx={cx} cy="196" rx="15" ry="11" fill="#fff" />
                <motion.g style={{ x: pupilX, y: pupilY }}>
                  <circle cx={cx} cy="196" r="8" fill="#5a3c28" />
                  <circle cx={cx} cy="196" r="4" fill="#120c08" />
                  <circle cx={cx + 3} cy="192.5" r="2.4" fill="#fff" />
                </motion.g>
                <path d={`M${cx - 17} 186c8-8 26-8 34 0`} stroke={hair} strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d={`M${cx - 16} 206c9 7 23 7 32 0v6h-32Z`} fill="url(#av-skin)" />
              </g>
            ))}

            {/* Nose */}
            <path d="M201 204c-3 14-8 22-4 27 4 3 10 2 13-1" stroke="#d29873" strokeWidth="4.5" strokeLinecap="round" fill="none" />

            {/* Big smile */}
            <path d="M170 250c12 26 48 26 60 0Z" fill="#7d2b2b" />
            <path d="M174 251c10 8 42 8 52 0l-2 6c-12 6-36 6-48 0Z" fill="#fff" />
            <path d="M186 268c8-5 20-5 28 0-8 4-20 4-28 0Z" fill="#e0716a" />
            <path d="M166 247c4 2 6 5 6 8M234 247c-4 2-6 5-6 8" stroke="#c98563" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Moustache */}
            <path d="M166 246c12-10 26-11 34-5 8-6 22-5 34 5-12-1-24 0-34 3-10-3-22-4-34-3Z" fill={hair} />
          </motion.g>

          {/* Modern quiff with faded sides */}
          <motion.g style={{ x: hairX, y: hairY }}>
            <path d="M114 146c-4 18-4 36 0 54h10c-3-18-3-36 2-52Z" fill={hair} opacity="0.85" />
            <path d="M286 146c4 18 4 36 0 54h-10c3-18 3-36-2-52Z" fill={hair} opacity="0.85" />
            <path
              d="M114 150c-2-50 30-84 78-90 18-26 64-30 92-12 22 14 28 40 18 64-2 14-4 26-10 36-10-22-30-34-56-36-30-2-56 4-80 12-18 6-32 14-42 26Z"
              fill="url(#av-hair)"
            />
            <path d="M162 72c22-22 70-28 100-10-30-4-60 2-82 18Z" fill={hairLight} opacity="0.9" />
            <path d="M196 60c20-18 56-20 78-4-24-2-46 2-64 12Z" fill="#4a362a" opacity="0.8" />
            <path d="M150 104c30-14 74-18 110-6" stroke={hairLight} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
            <path d="M138 120c22-26 60-40 98-38M176 70c18 8 40 10 64 4M240 52c18 4 34 18 40 34" stroke="#56402f" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
