'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingKPI() {
  const groupRef = useRef<THREE.Group>(null);
  const funnelRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (funnelRef.current) {
      funnelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Conversion Funnel Geometry */}
      <group position={[-4.2, 0.5, 0]}>
        <mesh ref={funnelRef} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[1.8, 2.8, 16, 3, true]} />
          <meshStandardMaterial
            color="#00f2fe"
            wireframe
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Tier rings */}
        {[-1.0, -0.2, 0.6, 1.2].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.5 + i * 0.35, 0.02, 8, 32]} />
            <meshBasicMaterial color="#00f2fe" transparent opacity={0.6} />
          </mesh>
        ))}

        <Html position={[0, -2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-full bg-black/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-400 whitespace-nowrap backdrop-blur-md">
            FUNNEL: TOFU • MOFU • BOFU
          </div>
        </Html>
      </group>

      {/* Floating Card 1: GA4 Analytics */}
      <group position={[4.2, 2.0, 1]}>
        <Html center distanceFactor={14}>
          <div className="p-3.5 rounded-2xl bg-black/80 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,242,254,0.15)] text-left min-w-[170px] select-none pointer-events-none">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                GA4 ANALYTICS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            </div>
            <div className="text-sm font-black text-white font-sans">
              Custom Funnel
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">
              CONCEPT • GTM Events
            </div>
          </div>
        </Html>
      </group>

      {/* Floating Card 2: ₹10L Campaign Strategy */}
      <group position={[-3.8, -2.4, 1.5]}>
        <Html center distanceFactor={14}>
          <div className="p-3.5 rounded-2xl bg-black/80 border border-blue-400/30 backdrop-blur-xl shadow-[0_0_20px_rgba(79,172,254,0.15)] text-left min-w-[180px] select-none pointer-events-none">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                PAID MEDIA
              </span>
              <span className="text-[9px] font-mono text-slate-500">PLAN</span>
            </div>
            <div className="text-sm font-black text-white font-sans">
              ₹10L Expansion
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">
              Google Ads STAG Structure
            </div>
          </div>
        </Html>
      </group>

      {/* Floating Card 3: SEO Growth */}
      <group position={[3.6, -1.8, 0.5]}>
        <Html center distanceFactor={14}>
          <div className="p-3 rounded-2xl bg-black/80 border border-indigo-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.15)] text-left min-w-[160px] select-none pointer-events-none">
            <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider mb-1">
              SEO GROWTH
            </div>
            <div className="text-xs font-bold text-white font-sans">
              Topical Authority
            </div>
            <div className="text-[9px] font-mono text-slate-400 mt-0.5">
              90-Day Organic Roadmap
            </div>
          </div>
        </Html>
      </group>

      {/* Floating Card 4: Creative Production */}
      <group position={[0, 3.2, -1]}>
        <Html center distanceFactor={15}>
          <div className="px-4 py-2 rounded-full bg-black/80 border border-white/20 backdrop-blur-xl shadow-xl select-none pointer-events-none">
            <span className="text-xs font-mono text-cyan-300 font-bold tracking-wider">
              20+ MO. STUDIO PRODUCTION EDGE
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}
