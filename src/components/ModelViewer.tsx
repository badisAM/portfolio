"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Spin({ speed = 0.25, float = true, children }: { speed?: number; float?: boolean; children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += d * speed;
    if (float) ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.04;
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
  float = true,
}: {
  url: string;
  className?: string;
  speed?: number;
  shadow?: boolean;
  float?: boolean;
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3, 2, 4], fov: 40 }}
        // qualité : rendu jusqu'à 2x la densité de pixels + anticrénelage
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows
      >
        <ambientLight intensity={1.1} />
        <hemisphereLight intensity={0.9} groundColor="#0b0d12" />
        <directionalLight position={[5, 6, 4]} intensity={2.1} castShadow />
        <directionalLight position={[-5, 3, -3]} intensity={1.0} color="#4ade80" />
        <directionalLight position={[0, 2, -6]} intensity={0.7} color="#38bdf8" />
        <Suspense fallback={<Skeleton />}>
          <Bounds fit clip observe margin={1.3}>
            <Spin speed={speed} float={float}>
              <Model url={url} />
            </Spin>
          </Bounds>
          <Environment preset="city" />
          {shadow && <ContactShadows position={[0, -1, 0]} opacity={0.35} blur={2.8} far={4} />}
        </Suspense>
      </Canvas>
    </div>
  );
}