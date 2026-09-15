"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    offset?: number;
}

export default function ParallaxWrapper({ children, className = "", offset = 80 }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        // The animation plays backwards/forwards identically as the element enters and completely exits the viewport
        offset: ["start end", "end start"]
    });

    // Translate Y mapped tightly back to physical scroll momentum
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <motion.div
            ref={ref}
            style={{ y: prefersReducedMotion ? 0 : y }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
}
