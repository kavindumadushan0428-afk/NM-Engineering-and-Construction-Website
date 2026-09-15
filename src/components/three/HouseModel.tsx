"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function HouseModel({
    isReducedMotion
}: {
    isReducedMotion: boolean
}) {
    const { scene } = useGLTF("/Models/nm-house-web.glb");

    const modelRef = useRef<THREE.Group>(null);
    const roofMainRef = useRef<THREE.Object3D | null>(null);
    const roofLeftRef = useRef<THREE.Object3D | null>(null);
    const roofRightRef = useRef<THREE.Object3D | null>(null);

    // Store original Y positions so we can animate relative to them
    const originalRoofY = useRef<{ main: number, left: number, right: number }>({ main: 0, left: 0, right: 0 });

    useEffect(() => {
        scene.traverse((child) => {
            if (child.name === "Roof_Main") {
                roofMainRef.current = child;
                originalRoofY.current.main = child.position.y;
            }
            if (child.name === "Roof_Left") {
                roofLeftRef.current = child;
                originalRoofY.current.left = child.position.y;
            }
            if (child.name === "Roof_Right") {
                roofRightRef.current = child;
                originalRoofY.current.right = child.position.y;
            }

            // Add shadows and materials
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if ((child as THREE.Mesh).material) {
                    const mat = ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).clone();
                    mat.envMapIntensity = 0.8;
                    (child as THREE.Mesh).material = mat;
                }
            }
        });
    }, [scene]);

    const currentRot = useRef(0);
    const currentRoofY = useRef(0);

    // Smooth progress tracker for React state (HTML opacity driven by this to avoid constant re-renders)
    const [activeLabels, setActiveLabels] = useState<string[]>([]);

    // Just a flag to fix initial hydration jump
    const isReady = useRef(false);

    useFrame((state, delta) => {
        if (!isReady.current) {
            state.camera.position.set(0, 3, 15);
            state.camera.lookAt(0, 0, 0);
            isReady.current = true;
        }

        // Just subtle idol floating or breathing if not reduced motion
        if (!isReducedMotion && modelRef.current) {
            modelRef.current.position.y = THREE.MathUtils.lerp(
                modelRef.current.position.y,
                -1 + Math.sin(state.clock.elapsedTime) * 0.05,
                delta * 2
            );
        }
    });

    const labels = [
        { name: "Living Area", position: [1.5, 0.8, 1.5] as [number, number, number] },
        { name: "Open Kitchen", position: [-1.5, 0.8, 0.5] as [number, number, number] },
        { name: "Bedroom", position: [-1, 2.5, -2] as [number, number, number] },
        { name: "Outdoor Deck", position: [2.5, 0.5, -2.5] as [number, number, number] }
    ];

    return (
        <group ref={modelRef} dispose={null} position={[0, -1, 0]}>
            <primitive object={scene} />
            {labels.map((label, idx) => {
                return (
                    <Html key={idx} position={label.position} center zIndexRange={[100, 0]}>
                        <div className={`px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-xs font-semibold text-neutral-600 border border-neutral-100 whitespace-nowrap opacity-90`}>
                            {label.name}
                        </div>
                    </Html>
                )
            })}
        </group>
    );
}

useGLTF.preload("/Models/nm-house-web.glb");
