"use client";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import HouseModel from "./HouseModel";
export default function HouseScene({
  angle,
  roofVisible,
}: {
  angle: number;
  roofVisible: boolean;
}) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [10, 7, 12], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      fallback={
        <p>
          Interactive house model. Use the controls below to explore, or visit
          our project images if 3D is unavailable on your device.
        </p>
      }
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[8, 12, 6]} intensity={2.3} />
      <directionalLight position={[-6, 3, -4]} intensity={0.8} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.25}>
          <HouseModel angle={angle} roofVisible={roofVisible} />
        </Bounds>
      </Suspense>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0.35}
        maxPolarAngle={Math.PI / 2}
        enableDamping={false}
      />
    </Canvas>
  );
}
