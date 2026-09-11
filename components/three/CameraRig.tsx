'use client';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig() {
  useFrame((state) => {
    // Subtle mouse parallax on camera
    const mouseX = state.pointer.x * 1.5;
    const mouseY = state.pointer.y * 1.2;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseY, 0.04);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
