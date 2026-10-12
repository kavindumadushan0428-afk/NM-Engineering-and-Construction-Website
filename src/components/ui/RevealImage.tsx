import type { ReactNode } from "react";
import Reveal from "./Reveal";
export default function RevealImage({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={"relative overflow-hidden image-reveal " + className}
    >
      {children}
    </Reveal>
  );
}
