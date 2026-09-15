"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import HouseModel from "./HouseModel";

export default function HouseScene() {
    const [dpr] = useState([1, 1.5]);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const timer = setTimeout(() => setIsReducedMotion(mediaQuery.matches), 0);
        const handleReducedMotion = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleReducedMotion);
        return () => {
            clearTimeout(timer);
            mediaQuery.removeEventListener("change", handleReducedMotion);
        };
    }, []);

    return (
        <div className="w-full h-full relative cursor-default">
            <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center text-sm font-medium text-neutral-400">
                    Loading 3D Experience...
                </div>
            }>
                <Canvas
                    shadows
                    dpr={dpr as [number, number]}
                    gl={{ antialias: true, alpha: true }}
                    camera={{ position: [0, 3, 15], fov: 45 }}
                >
                    <ambientLight intensity={0.5} color="#fafafa" />
                    <directionalLight
                        position={[10, 15, 10]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                        shadow-camera-near={0.5}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                        shadow-bias={-0.0001}
                        color="#fffdf8"
                    />

                    <Environment preset="city" background={false} />

                    <HouseModel isReducedMotion={isReducedMotion} />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2 - 0.1}
                        minPolarAngle={Math.PI / 4}
                    />

                    <ContactShadows
                        position={[0, -1.05, 0]}
                        opacity={0.4}
                        scale={20}
                        blur={2}
                        far={4}
                        resolution={256}
                        color="#000000"
                    />
                </Canvas>
            </Suspense>
        </div>
    );
}
