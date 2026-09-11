'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import GrowthOrb from './GrowthOrb';
import FloatingKPI from './FloatingKPI';
import Particles from '../three/Particles';
import CameraRig from '../three/CameraRig';

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 13], fov: 48 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} color="#00f2fe" intensity={3} />
          <pointLight position={[10, -5, 5]} color="#4facfe" intensity={2} />

          <CameraRig />
          <GrowthOrb />
          <FloatingKPI />
          <Particles count={220} />
        </Suspense>
      </Canvas>
    </div>
  );
}
