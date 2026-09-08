"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds, Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function Spin({ speed, children }: { speed: number; children: React.ReactNode }) {
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

/**
 * Modèle 3D en décor d'arrière-plan.
 * - se déplace en parallaxe pendant le scroll
 * - halo lumineux derrière, pour que les modèles sombres restent lisibles
 * - non cliquable (pointer-events-none), il ne gêne jamais le contenu
 */
export default function BackgroundModel({
  url,
  className = "",
  speed = 0.22,
  opacity = 0.55,
  parallax = 80,
  halo = true,
}: {
  url: string;
  className?: string;
  speed?: number;
  opacity?: number;
  parallax?: number;
  halo?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden
    >
      {halo && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(255,255,255,.10), rgba(74,222,128,.05) 45%, transparent 70%)",
          }}
        />
      )}
      <Canvas camera={{ position: [3, 2, 4], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        {/* éclairage renforcé : les modèles low-poly sombres disparaissaient sur fond noir */}
        <ambientLight intensity={1.5} />
        <hemisphereLight intensity={1.1} groundColor="#0b0d12" />
        <directionalLight position={[5, 6, 4]} intensity={2.2} />
        <directionalLight position={[-4, 3, -3]} intensity={1.1} color="#4ade80" />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.5}>
            <Spin speed={speed}>
              <Model url={url} />
            </Spin>
          </Bounds>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
