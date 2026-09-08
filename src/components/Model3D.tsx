"use client";

import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

// Charge n'importe quel fichier .glb placé dans /public/models/
function Model({ path, scale = 1 }: { path: string; scale?: number }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

export default function Model3D({ path, scale }: { path: string; scale?: number }) {
  return (
    <Suspense fallback={null}>
      <Model path={path} scale={scale} />
    </Suspense>
  );
}
