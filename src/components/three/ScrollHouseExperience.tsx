"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    render() {
        if (this.state.hasError) return <div className="flex w-full h-full items-center justify-center text-sm text-neutral-500">3D Experience currently unavailable.</div>;
        return this.props.children;
    }
}

const HouseScene = dynamic(() => import("./HouseScene"), { ssr: false });

export default function ScrollHouseExperience() {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden">
            <ErrorBoundary>
                <HouseScene />
            </ErrorBoundary>

            {/* Instruction overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-neutral-100/50 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">Drag to Explore</span>
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            </div>
        </div>
    );
}
