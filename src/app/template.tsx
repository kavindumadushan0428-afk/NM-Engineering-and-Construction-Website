import type { ReactNode } from "react";
import CinematicScroll from "@/components/motion/CinematicScroll";
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CinematicScroll />
    </>
  );
}
