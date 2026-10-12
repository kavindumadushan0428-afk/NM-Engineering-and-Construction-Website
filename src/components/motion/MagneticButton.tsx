"use client";
import { useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
export default function MagneticButton({
  children,
  className = "",
  strength = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 30 });
  const sy = useSpring(y, { stiffness: 350, damping: 30 });
  return (
    <motion.div
      ref={ref}
      className={"w-fit inline-block " + className}
      style={{ x: reduced ? 0 : sx, y: reduced ? 0 : sy }}
      onPointerMove={(e) => {
        if (
          reduced ||
          e.pointerType !== "mouse" ||
          !matchMedia("(pointer:fine)").matches
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(
          Math.max(
            -3,
            Math.min(3, (e.clientX - r.left - r.width / 2) * strength),
          ),
        );
        y.set(
          Math.max(
            -3,
            Math.min(3, (e.clientY - r.top - r.height / 2) * strength),
          ),
        );
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
