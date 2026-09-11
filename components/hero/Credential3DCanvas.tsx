'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural 3D Star Badge / Credential Seal
function CredentialMedallion({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const starRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const speed = hovered ? 1.8 : 1.0;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35 * speed;
      groupRef.current.rotation.x = Math.sin(t * 0.8) * 0.12;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.6 * speed;
      ring1Ref.current.rotation.x = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.8 * speed;
      ring2Ref.current.rotation.y = t * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.sin(t * 0.5) * 0.3;
      ring3Ref.current.rotation.y += delta * 0.5;
    }
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 2.5) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Holographic Star Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#e51b24"
          roughness={0.2}
          metalness={0.9}
          emissive="#e51b24"
          emissiveIntensity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      {/* Outer Faceted Gem Seal */}
      <mesh ref={starRef}>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#180d0e"
          roughness={0.15}
          metalness={0.95}
          wireframe={true}
          emissive="#e51b24"
          emissiveIntensity={hovered ? 0.8 : 0.4}
        />
      </mesh>

      {/* Orbiting Gimbal Ring 1 (Gold/Amber) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.85, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#ffb703"
          roughness={0.2}
          metalness={0.9}
          emissive="#fb8500"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Orbiting Gimbal Ring 2 (Crimson Red) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.2, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#e51b24"
          roughness={0.1}
          metalness={0.95}
          emissive="#e51b24"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Orbiting Outer Ring with 4 Status Satellite Nodes */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.55, 0.02, 16, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>

      {/* 4 Orbital Nodes representing GA4, Meta, SEO, Studio */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(angle) * 1.85,
            Math.sin(angle) * 1.85 * Math.sin(Math.PI / 4),
            Math.sin(angle) * 1.85 * Math.cos(Math.PI / 4),
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#e51b24"
            emissive="#ffffff"
            emissiveIntensity={0.8}
            metalness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3D Ambient Dust Particles
function ParticlesCluster({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 8;
      pos[i + 1] = (Math.random() - 0.5) * 8;
      pos[i + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#e51b24"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Credential3DCanvas({ hovered = false }: { hovered?: boolean }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-5, -4, -3]} color="#e51b24" intensity={4} />
        <pointLight position={[4, -2, 3]} color="#fb8500" intensity={2.5} />
        <pointLight position={[0, 4, 2]} color="#ffffff" intensity={1.5} />

        <CredentialMedallion hovered={hovered} />
        <ParticlesCluster count={60} />
      </Canvas>
    </div>
  );
}
