"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
export default function ParallaxWrapper({
  children,
  className = "",
  offset = 35,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-Math.min(offset, 35), Math.min(offset, 35)],
  );
  return (
    <motion.div
      ref={ref}
      style={{ y: reduced ? 0 : y }}
      className={"parallax-layer " + className}
    >
      {children}
    </motion.div>
  );
}
