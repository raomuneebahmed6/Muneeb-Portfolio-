"use client";

import { useEffect, useState } from "react";

// Types out each role, pauses, deletes it, then moves to the next one.
export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => {
        const next = (index + 1) % roles.length;
        setIndex(next);
        setText(roles[next]);
      }, 2500);
      return () => clearTimeout(id);
    }
    const full = roles[index];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === full) delay = 1600;
    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, roles]);

  return (
    <span className="rotator">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
