"use client";
import { useGLTF, Center } from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
export default function HouseModel({
  angle = 0,
  roofVisible = true,
}: {
  angle?: number;
  roofVisible?: boolean;
}) {
  const { scene } = useGLTF("/Models/nm-house-web.glb");
  const instance = useMemo(() => scene.clone(true), [scene]);
  const invalidate = useThree((state) => state.invalidate);
  useLayoutEffect(() => {
    instance.traverse((child) => {
      if (child.name.startsWith("Roof_")) child.visible = roofVisible;
    });
    invalidate();
  }, [instance, roofVisible, invalidate]);
  return (
    <Center rotation={[0, angle, 0]}>
      {/* The supplied model uses Z-up; the web scene uses Y-up. */}
      <primitive object={instance} rotation={[-Math.PI / 2, 0, 0]} />
    </Center>
  );
}
