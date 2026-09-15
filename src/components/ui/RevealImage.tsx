"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealImageProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function RevealImage({ children, className = "", delay = 0 }: RevealImageProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ filter: "blur(10px)", scale: 1.15, clipPath: "inset(20% 10% 20% 10%)" }}
                whileInView={{ filter: "blur(0px)", scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                    filter: { duration: 1, ease: "easeOut" },
                    scale: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
                    clipPath: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
