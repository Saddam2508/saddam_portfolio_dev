"use client";

import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return undefined;
    }

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor-dot ${visible ? "is-visible" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  );
}
