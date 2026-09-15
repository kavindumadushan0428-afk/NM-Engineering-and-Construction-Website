"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    duration?: number;
}

export default function FadeUp({ children, delay = 0, className = "", duration = 0.8 }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                ease: [0.22, 1, 0.36, 1],
                delay: delay
            }}
            className={className}
            style={{ willChange: "transform, opacity, filter" }}
        >
            {children}
        </motion.div>
    );
}
