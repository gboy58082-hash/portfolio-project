import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let width = currentMount.clientWidth;
    let height = currentMount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080d, 0.035);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 5, 50);
    cyanLight.position.set(6, 6, 8);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x4facfe, 4, 40);
    blueLight.position.set(-6, -5, 6);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x818cf8, 2.5, 30);
    purpleLight.position.set(0, 8, -4);
    scene.add(purpleLight);

    // Master Group for mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Digital Marketing Core - Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      wireframe: true,
      emissive: 0x004466,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // Inner glowing core sphere
    const innerGeo = new THREE.SphereGeometry(1.4, 24, 24);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x060c18,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x002b40,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerCore);

    // 2. Conversion Funnel 3D Mesh
    const funnelGroup = new THREE.Group();
    const funnelGeo = new THREE.ConeGeometry(2.2, 3.2, 16, 4, true);
    const funnelMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const funnelMesh = new THREE.Mesh(funnelGeo, funnelMat);
    funnelMesh.rotation.x = Math.PI;
    funnelMesh.position.set(-4.5, 1.2, 0);
    funnelGroup.add(funnelMesh);

    // Funnel tier rings
    [-1.2, -0.4, 0.4, 1.2].forEach((yOffset, i) => {
      const radius = 0.6 + i * 0.45;
      const ringGeo = new THREE.TorusGeometry(radius, 0.03, 8, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.7 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(-4.5, 1.2 + yOffset, 0);
      funnelGroup.add(ring);
    });
    masterGroup.add(funnelGroup);

    // 3. 3D Floating Analytics Bar Graph
    const barGroup = new THREE.Group();
    barGroup.position.set(4.5, -0.5, 0);
    const barHeights = [1.5, 2.8, 2.2, 3.6, 3.0];
    const barColors = [0x00d2ff, 0x00f2fe, 0x4facfe, 0x6366f1, 0x38bdf8];

    barHeights.forEach((h, i) => {
      const barGeo = new THREE.BoxGeometry(0.45, h, 0.45);
      const barMat = new THREE.MeshStandardMaterial({
        color: barColors[i],
        roughness: 0.3,
        metalness: 0.8,
        emissive: barColors[i],
        emissiveIntensity: 0.2,
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set((i - 2) * 0.7, h / 2 - 1.5, 0);
      barGroup.add(bar);
    });
    masterGroup.add(barGroup);

    // 4. Concentric Orbit Rings
    const orbit1Geo = new THREE.TorusGeometry(3.6, 0.025, 12, 64);
    const orbit1Mat = new THREE.MeshBasicMaterial({ color: 0x4facfe, transparent: true, opacity: 0.5 });
    const orbit1 = new THREE.Mesh(orbit1Geo, orbit1Mat);
    orbit1.rotation.x = Math.PI / 3;
    masterGroup.add(orbit1);

    const orbit2Geo = new THREE.TorusGeometry(4.8, 0.02, 12, 64);
    const orbit2Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.35 });
    const orbit2 = new THREE.Mesh(orbit2Geo, orbit2Mat);
    orbit2.rotation.y = Math.PI / 4;
    masterGroup.add(orbit2);

    // 5. Floating Holographic Data Cards (Created dynamically on HTML Canvas)
    const createHoloTexture = (badgeText, subText, accentColor) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgba(10, 16, 28, 0.88)';
      ctx.beginPath();
      ctx.roundRect(10, 10, 492, 236, 24);
      ctx.fill();

      ctx.lineWidth = 4;
      ctx.strokeStyle = accentColor;
      ctx.stroke();

      ctx.fillStyle = accentColor;
      ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(badgeText, 40, 80);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '24px "Space Grotesk", monospace';
      ctx.fillText(subText, 40, 140);

      ctx.fillStyle = '#00f2fe';
      ctx.beginPath();
      ctx.arc(440, 70, 14, 0, Math.PI * 2);
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const cardsData = [
      { badge: 'GA4 + GTM', sub: 'Custom Funnel Tracking', color: '#00f2fe', pos: [3.8, 2.5, 2] },
      { badge: 'Google Ads', sub: '₹10L Strategy Ready', color: '#4facfe', pos: [-3.8, -2.4, 2] },
      { badge: 'Full-Funnel', sub: 'TOFU • MOFU • BOFU', color: '#6366f1', pos: [0, -3.4, 1.5] },
      { badge: '70+ Shoots', sub: 'Creative Production Edge', color: '#38bdf8', pos: [0, 3.5, -1] }
    ];

    const cardMeshes = [];
    cardsData.forEach((cd) => {
      const texture = createHoloTexture(cd.badge, cd.sub, cd.color);
      const cardGeo = new THREE.PlaneGeometry(2.4, 1.2);
      const cardMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });
      const card = new THREE.Mesh(cardGeo, cardMat);
      card.position.set(cd.pos[0], cd.pos[1], cd.pos[2]);
      masterGroup.add(card);
      cardMeshes.push({ mesh: card, origPos: [...cd.pos], speed: Math.random() * 0.8 + 0.6 });
    });

    // 6. Data Particle Cloud
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 30;
      particlePositions[i + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window resize handler
    const onResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      masterGroup.rotation.y = targetX * 1.5 + elapsedTime * 0.15;
      masterGroup.rotation.x = targetY * 1.2;

      // Rotate sub-elements
      coreMesh.rotation.x = elapsedTime * 0.3;
      coreMesh.rotation.y = elapsedTime * 0.4;

      orbit1.rotation.z = elapsedTime * 0.2;
      orbit2.rotation.z = -elapsedTime * 0.25;

      funnelMesh.rotation.y = elapsedTime * 0.4;

      // Animate floating holographic cards
      cardMeshes.forEach((item, idx) => {
        const floatY = Math.sin(elapsedTime * item.speed + idx) * 0.25;
        item.mesh.position.y = item.origPos[1] + floatY;
        item.mesh.lookAt(camera.position);
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      funnelGeo.dispose();
      funnelMat.dispose();
      orbit1Geo.dispose();
      orbit1Mat.dispose();
      orbit2Geo.dispose();
      orbit2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
