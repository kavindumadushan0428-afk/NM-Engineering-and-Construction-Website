"use client";

import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-12-01T00:00:00");

function getTimeLeft() {
    const diff = LAUNCH_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center shrink-0">
            <div className="w-[64px] h-[64px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
                <span
                    key={value}
                    className="text-2xl font-light text-white tracking-widest tabular-nums animate-digit-flip"
                >
                    {String(value).padStart(2, "0")}
                </span>
            </div>
            <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">{label}</span>
        </div>
    );
}

export default function HeroCountdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-start lg:justify-end w-full animate-page-enter opacity-0" style={{ animationDelay: '450ms' }}>
            <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-3xl shadow-[0_16px_60px_rgba(0,0,0,0.3)] p-8 w-full max-w-[380px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-8">
                    Global Platform Launch
                </p>
                <div className="flex items-start justify-between w-full">
                    <CountdownUnit value={timeLeft.days} label="Days" />
                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                    <CountdownUnit value={timeLeft.minutes} label="Mins" />
                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                    <CountdownUnit value={timeLeft.seconds} label="Secs" />
                </div>
            </div>
        </div>
    );
}
