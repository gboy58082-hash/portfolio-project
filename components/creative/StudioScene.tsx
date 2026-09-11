'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function StudioRig() {
  const rigGroup = useRef<THREE.Group>(null);
  const cameraMesh = useRef<THREE.Group>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  useFrame((state, delta) => {
    if (rigGroup.current) {
      rigGroup.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={rigGroup} position={[0, -0.5, 0]}>
      {/* 1. Cinema Camera Model (Procedural High-Precision Assembly) */}
      <group
        ref={cameraMesh}
        position={[-1.8, 0.8, 0]}
        onPointerOver={() => setHoveredPart('CAMERA SETUP')}
        onPointerOut={() => setHoveredPart(null)}
      >
        {/* Camera Main Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.9, 1.6]} />
          <meshStandardMaterial color="#111622" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Top Handle */}
        <mesh position={[0, 0.6, -0.1]}>
          <boxGeometry args={[0.2, 0.15, 1.1]} />
          <meshStandardMaterial color="#e51b24" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Cine Lens / Matte Box */}
        <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 0.8, 32]} />
          <meshStandardMaterial color="#1e1214" roughness={0.1} metalness={0.9} />
        </mesh>

        {/* Lens Glass */}
        <mesh position={[0, 0, 1.62]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial color="#e51b24" roughness={0.05} metalness={1} emissive="#8a0c12" />
        </mesh>

        {/* Follow Focus Wheel Rig */}
        <mesh position={[-0.7, -0.1, 0.8]}>
          <cylinderGeometry args={[0.3, 0.3, 0.15, 24]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Interactive Hover Tag */}
        <Html position={[0, 1.2, 0]} center distanceFactor={10}>
          <div className="px-3 py-1 rounded-full bg-black/90 border border-[#e51b24] text-[10px] font-mono font-bold text-white shadow-[0_0_15px_rgba(229,27,36,0.6)] whitespace-nowrap">
            CINEMA CAMERA & FOLLOW-FOCUS
          </div>
        </Html>
      </group>

      {/* 2. Studio Softbox & Lighting Rig */}
      <group
        position={[2.2, 1.4, -0.5]}
        rotation={[0.2, -0.6, 0]}
        onPointerOver={() => setHoveredPart('STUDIO LIGHTING')}
        onPointerOut={() => setHoveredPart(null)}
      >
        {/* Softbox Outer Shell */}
        <mesh>
          <boxGeometry args={[1.5, 1.8, 0.8]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.5} />
        </mesh>

        {/* Diffuser Face (Glowing White/Cyan) */}
        <mesh position={[0, 0, 0.42]}>
          <planeGeometry args={[1.4, 1.7]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Light Stand Pole */}
        <mesh position={[0, -2.2, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 3.2, 16]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>

        <pointLight color="#ffffff" intensity={4} distance={8} position={[0, 0, 1]} />

        {/* Interactive Tag */}
        <Html position={[0, 1.4, 0]} center distanceFactor={10}>
          <div className="px-3 py-1 rounded-full bg-black/90 border border-[#e51b24] text-[10px] font-mono font-bold text-white shadow-[0_0_15px_rgba(229,27,36,0.6)] whitespace-nowrap">
            3-POINT STUDIO LIGHTING
          </div>
        </Html>
      </group>

      {/* 3. Product Staging Turntable / Table */}
      <group
        position={[0, -0.8, 0]}
        onPointerOver={() => setHoveredPart('E-COMMERCE PRODUCTION')}
        onPointerOut={() => setHoveredPart(null)}
      >
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2.5, 2.7, 0.3, 48]} />
          <meshStandardMaterial color="#0f0a0b" roughness={0.15} metalness={0.9} />
        </mesh>

        {/* Glowing Rim on Turntable */}
        <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.52, 0.02, 16, 64]} />
          <meshBasicMaterial color="#e51b24" />
        </mesh>

        {/* Interactive Tag */}
        <Html position={[0, -0.6, 0]} center distanceFactor={10}>
          <div className="px-3 py-1 rounded-full bg-black/90 border border-[#e51b24] text-[10px] font-mono font-bold text-white shadow-[0_0_15px_rgba(229,27,36,0.6)] whitespace-nowrap">
            70+ E-COMMERCE TURNTABLE STAGES
          </div>
        </Html>
      </group>
    </group>
  );
}

export default function StudioScene() {
  return (
    <div className="w-full h-[400px] relative rounded-2xl overflow-hidden border border-[#e51b24]/40 bg-gradient-to-b from-[#140a0b] via-[#0a0707] to-[#050304] shadow-[0_0_40px_rgba(229,27,36,0.2)]">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-6, 4, 4]} color="#e51b24" intensity={3} />
        <StudioRig />
      </Canvas>
    </div>
  );
}
