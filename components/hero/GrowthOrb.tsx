'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GrowthOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      coreRef.current.rotation.z = Math.cos(t * 0.4) * 0.2;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x = -t * 0.15;
      outerWireRef.current.rotation.y = t * 0.25;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Metallic Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#0a121e"
          roughness={0.15}
          metalness={0.9}
          emissive="#00354f"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Outer Wireframe Cage */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#00f2fe"
          wireframe
          roughness={0.1}
          metalness={0.8}
          emissive="#00f2fe"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Orbiting Concentric Energy Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 64]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.6} />
      </mesh>

      {/* Orbiting Concentric Energy Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[3.8, 0.018, 16, 64]} />
        <meshBasicMaterial color="#4facfe" transparent opacity={0.45} />
      </mesh>

      {/* Point Light Glow Inside Orb */}
      <pointLight color="#00f2fe" intensity={3} distance={15} />
      <pointLight color="#6366f1" intensity={2} distance={12} position={[0, -2, 0]} />
    </group>
  );
}
