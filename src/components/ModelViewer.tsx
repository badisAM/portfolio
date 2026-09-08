"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Spin({ speed = 0.25, children }: { speed?: number; children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * speed;
  });
  return <group ref={ref}>{children}</group>;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Skeleton() {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#1f232c" wireframe />
    </mesh>
  );
}

export default function ModelViewer({
  url,
  className = "h-[380px] w-full",
  speed = 0.25,
  shadow = true,
}: {
  url: string;
  className?: string;
  speed?: number;
  shadow?: boolean;
}) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [3, 2, 4], fov: 40 }} dpr={[1, 1.6]}>
        <ambientLight intensity={1.4} />
        <hemisphereLight intensity={1.0} groundColor="#0b0d12" />
        <directionalLight position={[5, 6, 4]} intensity={2.0} />
        <directionalLight position={[-4, 3, -3]} intensity={0.9} color="#4ade80" />
        <Suspense fallback={<Skeleton />}>
          {/* Bounds recadre automatiquement la caméra sur le modèle,
              quelle que soit son échelle d'origine. */}
          <Bounds fit clip observe margin={1.35}>
            <Spin speed={speed}>
              <Model url={url} />
            </Spin>
          </Bounds>
          <Environment preset="city" />
          {shadow && <ContactShadows position={[0, -1, 0]} opacity={0.4} blur={2.6} far={4} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
