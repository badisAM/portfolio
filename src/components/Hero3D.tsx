"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NodeNetwork() {
  const group = useRef<THREE.Group>(null);
  const count = 90;

  const positions = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 1.6) {
          verts.push(positions[i].x, positions[i].y, positions[i].z);
          verts.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions]);

  const pointsGeometry = useMemo(() => {
    const verts: number[] = [];
    positions.forEach((p) => verts.push(p.x, p.y, p.z));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#24405c" transparent opacity={0.55} />
      </lineSegments>
      <points geometry={pointsGeometry}>
        <pointsMaterial color="#e8a33d" size={0.06} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.6} />
        <NodeNetwork />
      </Canvas>
    </div>
  );
}
