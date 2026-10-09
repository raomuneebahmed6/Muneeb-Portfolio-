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

  const hair = "#4a2c1d";
  const skinLine = "#d98d68";

  return (
    <div ref={ref} className="avatar" role="img" aria-label="Illustrated avatar of Rao Muneeb that looks towards your cursor">
      <svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="av-skin" cx="0.45" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#ffe0c7" />
            <stop offset="0.7" stopColor="#f6c39d" />
            <stop offset="1" stopColor="#eaa984" />
          </radialGradient>
          <linearGradient id="av-arm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f8c9a5" />
            <stop offset="1" stopColor="#e3a27c" />
          </linearGradient>
          <linearGradient id="av-tee" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5f7190" />
            <stop offset="1" stopColor="#3f4e68" />
          </linearGradient>
          <linearGradient id="av-hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6b4330" />
            <stop offset="1" stopColor="#3a2216" />
          </linearGradient>
          <radialGradient id="av-iris" cx="0.4" cy="0.35" r="0.7">
            <stop offset="0" stopColor="#c27a3f" />
            <stop offset="0.6" stopColor="#8a4a22" />
            <stop offset="1" stopColor="#4e2511" />
          </radialGradient>
        </defs>

        {/* T-shirt */}
        <path d="M56 440c6-78 60-122 144-126 84 4 138 48 144 126Z" fill="url(#av-tee)" />
        <path d="M100 360c20-22 50-36 84-42" stroke="#71839f" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />

        {/* Neck with V-neck */}
        <path d="M176 270h48v46l-24 40-24-40Z" fill="#e8a882" />
        <path d="M176 290c14 10 34 10 48 0v-20h-48Z" fill="#000" opacity=".08" />
        <path d="M168 312l32 50 32-50" stroke="#36445c" strokeWidth="6" fill="none" strokeLinejoin="round" />

        {/* Crossed arms */}
        <path d="M100 396c50-18 160-22 214-6 10 4 10 26-2 30-56 12-154 12-210 2-12-4-14-22-2-26Z" fill="url(#av-arm)" />
        <path d="M88 424c56-14 170-14 224-2 12 4 12 26 0 28-56 10-168 10-224 0-12-4-12-24 0-26Z" fill="url(#av-arm)" />
        <path d="M60 440c0-34 14-62 46-74 14 18 22 44 22 74Z" fill="#53647f" />
        <path d="M340 440c0-34-14-62-46-74-14 18-22 44-22 74Z" fill="#53647f" />
        <path d="M108 372c10 18 16 42 16 68M292 372c-10 18-16 42-16 68" stroke="#3f4e68" strokeWidth="4" fill="none" strokeLinecap="round" />

        <motion.g style={{ x: headX, y: headY, rotate: headRotate, transformOrigin: "200px 300px" }}>
          {/* Ears */}
          <motion.g style={{ x: earX }}>
            <ellipse cx="97" cy="196" rx="17" ry="25" fill="#eeac85" />
            <ellipse cx="303" cy="196" rx="17" ry="25" fill="#eeac85" />
            <path d="M94 186c6-4 11 0 11 9s-4 14-9 14" stroke={skinLine} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M306 186c-6-4-11 0-11 9s4 14 9 14" stroke={skinLine} strokeWidth="3" fill="none" strokeLinecap="round" />
          </motion.g>

          {/* Face */}
          <path d="M96 180c0-74 48-112 104-112s104 38 104 112c0 70-42 116-104 118-62-2-104-48-104-118Z" fill="url(#av-skin)" />
          <motion.path
            style={{ x: shadowX }}
            d="M96 180c0-74 48-112 104-112s104 38 104 112c0 70-42 116-104 118-62-2-104-48-104-118Z"
            fill="#7a3a1a"
            opacity="0.05"
          />

          {/* Light stubble */}
          <motion.path
            style={{ x: faceX, y: faceY }}
            d="M112 222c8 46 44 74 88 76 44-2 80-30 88-76-14 34-46 58-88 60-42-2-74-26-88-60Z"
            fill={hair}
            opacity="0.18"
          />

          <motion.g style={{ x: faceX, y: faceY }}>
            {/* Blush and freckles */}
            <ellipse cx="134" cy="240" rx="19" ry="11" fill="#ff8d7a" opacity="0.32" />
            <ellipse cx="266" cy="240" rx="19" ry="11" fill="#ff8d7a" opacity="0.32" />
            {[[138, 230], [148, 238], [128, 238], [262, 230], [252, 238], [272, 238]].map(([fx, fy]) => (
              <circle key={`${fx}-${fy}`} cx={fx} cy={fy} r="2.2" fill="#b86a45" opacity="0.55" />
            ))}

            {/* Eyebrows */}
            <motion.g style={{ y: browY }}>
              <path d="M130 140c14-12 36-14 52-6" stroke={hair} strokeWidth="9" strokeLinecap="round" fill="none" />
              <path d="M270 140c-14-12-36-14-52-6" stroke={hair} strokeWidth="9" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Big eyes */}
            {[158, 242].map((cx) => (
              <g key={cx} className={`eye${blink ? " blink" : ""}`}>
                <ellipse cx={cx} cy="188" rx="23" ry="24" fill="#fff" />
                <motion.g style={{ x: pupilX, y: pupilY }}>
                  <circle cx={cx} cy="190" r="15.5" fill="url(#av-iris)" />
                  <circle cx={cx} cy="190" r="7.5" fill="#1a0d06" />
                  <circle cx={cx + 6} cy="183" r="5" fill="#fff" />
                  <circle cx={cx - 5} cy="196" r="2.4" fill="#fff" opacity="0.9" />
                </motion.g>
                <path d={`M${cx - 24} 182c6-18 42-18 48 0`} stroke="#2a160d" strokeWidth="4.5" fill="none" strokeLinecap="round" />
              </g>
            ))}

            {/* Round glasses */}
            <g fill="none" stroke="#23252c" strokeWidth="6">
              <circle cx="158" cy="190" r="34" fill="#cfe3ff" fillOpacity="0.12" />
              <circle cx="242" cy="190" r="34" fill="#cfe3ff" fillOpacity="0.12" />
              <path d="M191 184c6-6 12-6 18 0" />
              <path d="M124 184l-24-6M276 184l24-6" />
            </g>
            <path d="M140 172c6-8 16-12 24-12M224 172c6-8 16-12 24-12" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />

            {/* Nose */}
            <path d="M194 226c4 8 12 8 16 2" stroke={skinLine} strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <ellipse cx="203" cy="218" rx="5" ry="3" fill="#fff" opacity="0.35" />

            {/* Gentle smile */}
            <path d="M174 252c14 16 38 16 52 0" stroke="#8c3a2c" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M186 264c8 3 20 3 28 0" stroke="#e98a7a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M168 248c3 2 5 5 5 8M232 248c-3 2-5 5-5 8" stroke={skinLine} strokeWidth="3" strokeLinecap="round" fill="none" />
          </motion.g>

          {/* Messy hair with a fringe */}
          <motion.g style={{ x: hairX, y: hairY }}>
            <path
              d="M90 182c-12-72 26-128 108-134 82-6 128 46 114 128-6-24-14-40-26-52-8 12-24 16-38 12 4-10 2-20-4-26-12 16-34 24-58 22 6-8 8-18 4-26-14 18-40 28-66 26-14 12-26 28-34 50Z"
              fill="url(#av-hair)"
            />
            <path d="M144 76c-12-22 4-40 24-34-4 10-6 20-2 32Z" fill="#5a3726" />
            <path d="M200 60c0-24 24-34 38-22-10 4-18 12-20 22Z" fill="#5a3726" />
            <path d="M262 76c14-18 36-14 40 0-12-2-22 2-28 10Z" fill="#5a3726" />
            <path d="M94 150c-20-10-22-32-10-42 2 14 10 24 22 28Z" fill="#4a2c1d" />
            <path d="M120 112c26-30 76-44 124-30M150 84c30-14 70-14 100 0M196 116c14-16 34-24 56-22" stroke="#8a5a40" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
