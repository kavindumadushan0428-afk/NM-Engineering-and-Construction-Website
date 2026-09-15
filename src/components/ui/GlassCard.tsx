"use client";
import { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({
    children,
    className = "",
}: GlassCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseXSpring = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 1 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 1 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    // Smooth spotlight that follows cursor
    const spotlightOpacity = useMotionValue(0);
    const spotlightOpacitySpring = useSpring(spotlightOpacity, { stiffness: 300, damping: 30 });

    const background = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseXSpring, v => (v + 0.5) * 100)}% ${useTransform(mouseYSpring, v => (v + 0.5) * 100)}%, rgba(255,255,255,0.4) 0%, transparent 60%)`;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate percentages from center (-0.5 to 0.5)
        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
        spotlightOpacity.set(1);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        spotlightOpacity.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            whileHover={{
                scale: 1.01,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.6 }}
            className={`
                relative
                rounded-[28px]
                bg-[#FDFCFA]/80
                border border-white/70
                shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.04)]
                backdrop-blur-md
                will-change-[transform,box-shadow,border-color]
                transition-colors
                duration-500
                ${className}
            `}
        >
            {/* Spotlight Refraction overlay */}
            <motion.div
                className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none mix-blend-overlay z-0"
                style={{
                    background,
                    opacity: spotlightOpacitySpring
                }}
            />

            {/* Parallax Content Container */}
            <div
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                className="w-full h-full relative z-10"
            >
                {children}
            </div>
        </motion.div>
    );
}