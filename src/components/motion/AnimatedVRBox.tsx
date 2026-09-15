"use client";

import { motion } from "framer-motion";

export default function AnimatedVRBox() {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative inset-0" style={{ perspective: '1200px' }}>
            <motion.div
                animate={{
                    rotateY: [0, 360],
                    rotateX: [15, 30, 15],
                    y: [-25, 25, -25]
                }}
                transition={{
                    rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border-2 border-white bg-white/30 shadow-[0_32px_80px_rgba(0,0,0,0.1),inset_0_4px_20px_rgba(255,255,255,1)] backdrop-blur-2xl flex items-center justify-center transform"
                    style={{ transform: "translateZ(110px)" }}
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/80 bg-white/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-red-700/30 bg-red-700/10 shadow-[0_0_20px_rgba(185,28,28,0.2)] animate-pulse" />
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border border-white/40 bg-black/5 backdrop-blur-3xl transform"
                    style={{ transform: "rotateY(180deg) translateZ(110px)" }}
                />

                {/* Right */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border-l border-white/60 bg-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-xl transform"
                    style={{ transform: "rotateY(90deg) translateZ(110px)" }}
                />

                {/* Left */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border-r border-white/60 bg-white/20 backdrop-blur-xl transform"
                    style={{ transform: "rotateY(-90deg) translateZ(110px)" }}
                />

                {/* Top */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border-t-2 border-white bg-white/40 backdrop-blur-2xl transform"
                    style={{ transform: "rotateX(90deg) translateZ(110px)" }}
                />

                {/* Bottom */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] border border-white/20 bg-black/5 backdrop-blur-md shadow-[0_40px_80px_rgba(0,0,0,0.2)] transform"
                    style={{ transform: "rotateX(-90deg) translateZ(110px)" }}
                />
            </motion.div>
        </div>
    );
}
