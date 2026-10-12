import type { ReactNode, CSSProperties } from "react";
// Visible by default. The route motion controller enhances offscreen elements.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-scroll-reveal=""
      data-reveal-delay={delay}
      className={className}
      style={{ "--reveal-delay": delay + "s" } as CSSProperties}
    >
      {children}
    </div>
  );
}
