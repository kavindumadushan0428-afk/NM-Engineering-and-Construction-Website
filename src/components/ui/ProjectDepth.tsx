"use client";
import { useRef, type ReactNode, type CSSProperties } from "react";

/** Pointer depth is limited to two degrees and never runs on touch devices. */
export default function ProjectDepth({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={"project-depth " + className}
      onPointerMove={(event) => {
        if (
          event.pointerType !== "mouse" ||
          matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const box = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        event.currentTarget.style.setProperty("--rx", `${-y * 2}deg`);
        event.currentTarget.style.setProperty("--ry", `${x * 2}deg`);
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
      }}
      style={{ "--rx": "0deg", "--ry": "0deg" } as CSSProperties}
    >
      {children}
    </div>
  );
}
