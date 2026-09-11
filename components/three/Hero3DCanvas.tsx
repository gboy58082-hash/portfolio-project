'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Crimson Core with Gyroscopic Rings
function CrimsonGrowthCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating bob
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.35;
      groupRef.current.rotation.y += delta * 0.15;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.z = t * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35;
      ring1Ref.current.rotation.y = t * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.3;
      ring2Ref.current.rotation.z = t * 0.25;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.25;
      ring3Ref.current.rotation.z = -t * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0.2, -1]}>
      {/* Central Metallic Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#180b0c"
          roughness={0.15}
          metalness={0.9}
          emissive="#e51b24"
          emissiveIntensity={0.45}
          wireframe={false}
        />
      </mesh>

      {/* Outer Crimson Wireframe Overlay */}
      <mesh>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshStandardMaterial
          color="#e51b24"
          roughness={0.1}
          metalness={0.8}
          emissive="#ff2a34"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Gyroscopic Ring 1 - Crimson Red */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#e51b24"
          emissive="#e51b24"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Gyroscopic Ring 2 - Golden Amber */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.1, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#c59b27"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Gyroscopic Ring 3 - Deep Obsidian Crimson */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.7, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#ff3b44"
          emissive="#8a0c12"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// 3D Floating Embers & Sparks Rising in Depth
function FloatingEmbers({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const crimson = new THREE.Color('#e51b24');
    const brightRed = new THREE.Color('#ff3b44');
    const gold = new THREE.Color('#e6b800');
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const r = Math.random();
      const chosenColor =
        r > 0.6 ? crimson : r > 0.3 ? brightRed : r > 0.1 ? gold : white;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Camera Parallax based on cursor movement
function InteractiveCamera() {
  useFrame((state) => {
    const targetX = state.pointer.x * 1.8;
    const targetY = state.pointer.y * 1.2;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-85">
      <Canvas
        camera={{ position: [0, 0, 11], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[3, 2, 4]} color="#e51b24" intensity={4} distance={15} />
        <pointLight position={[-4, -3, -2]} color="#d4af37" intensity={2} distance={12} />

        <InteractiveCamera />
        <CrimsonGrowthCore />
        <FloatingEmbers count={180} />
      </Canvas>
    </div>
  );
}
