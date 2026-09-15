"use client";

import { motion } from "framer-motion";

export default function AnimatedTeamGraphic() {
    return (
        <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full flex items-center justify-center"
                style={{ perspective: "1000px" }}
            >
                {/* Center Core */}
                <motion.div
                    animate={{ y: [-15, 15, -15], rotateZ: [0, 360] }}
                    transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 40, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute z-20 w-32 h-32 rounded-full bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_2px_10px_rgba(255,255,255,1)] flex items-center justify-center"
                >
                    <svg className="w-12 h-12 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </motion.div>

                {/* Orbiting Ring 1 */}
                <motion.div
                    animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
                    transition={{ rotateZ: { duration: 25, repeat: Infinity, ease: "linear" } }}
                    className="absolute w-64 h-64 border border-red-700/20 rounded-full"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Node 1 */}
                    <motion.div
                        initial={{ rotateX: -60 }}
                        animate={{ rotateZ: [360, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-red-700/80 backdrop-blur-md shadow-[0_0_20px_rgba(185,28,28,0.3)] flex items-center justify-center"
                    >
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </motion.div>
                </motion.div>

                {/* Orbiting Ring 2 */}
                <motion.div
                    animate={{ rotateX: [75, 75], rotateY: [20, 20], rotateZ: [360, 0] }}
                    transition={{ rotateZ: { duration: 35, repeat: Infinity, ease: "linear" } }}
                    className="absolute w-80 h-80 border border-neutral-300/50 rounded-full"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Node 2 */}
                    <motion.div
                        initial={{ rotateX: -75 }}
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 right-0 w-12 h-12 rounded-full bg-white/60 backdrop-blur-lg border border-white shadow-lg flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </motion.div>

                    {/* Node 3 */}
                    <motion.div
                        initial={{ rotateX: -75 }}
                        animate={{ rotateZ: [0, 360] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-0 w-10 h-10 rounded-full bg-white/60 backdrop-blur-lg border border-white shadow-lg flex items-center justify-center"
                    >
                        <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
