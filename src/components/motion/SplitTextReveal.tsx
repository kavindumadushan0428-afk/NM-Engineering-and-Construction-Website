"use client";

import { motion, Variants } from "framer-motion";

export interface TextLine {
    text: string;
    className?: string; // e.g. text-white/40 for visual sub-lines
}

interface SplitTextProps {
    lines: TextLine[];
    wrapperClassName?: string;
    delayStart?: number;
    stagger?: number;
}

export default function SplitTextReveal({
    lines,
    wrapperClassName = "",
    delayStart = 0.1,
    stagger = 0.05,
}: SplitTextProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delayStart },
        },
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 18,
                stiffness: 80,
                mass: 0.9
            },
        },
        hidden: {
            opacity: 0,
            y: "140%", // Move it entirely out of the mask for a cinematic reveal
            rotateZ: 3,
            filter: "blur(4px)",
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={wrapperClassName}
            style={{ willChange: "transform, opacity, filter" }}
        >
            {lines.map((lineObj, lineIndex) => (
                <div key={lineIndex} className="overflow-hidden block pb-1">
                    {/* Map through words in the line */}
                    {lineObj.text.split(" ").map((word, wordIndex) => (
                        <motion.span
                            key={`${lineIndex}-${wordIndex}`}
                            variants={child}
                            // Retain the space gap cleanly
                            className={`inline-block origin-top-left mr-[0.25em] ${lineObj.className || ""}`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}
