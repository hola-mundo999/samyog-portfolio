import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050711, 0.0022);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 75);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Kinetic Torus Knot Lattice (Cinematic Focal Point)
    // Radius: 18, Tube: 5.2, TubularSegments: 96, RadialSegments: 16, p: 2, q: 3
    const torusGeometry = new THREE.TorusKnotGeometry(18, 4.8, 100, 16, 2, 3);
    const torusWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Icy Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusWireMaterial);
    scene.add(torusMesh);

    // 2. Torus Point Constellation Nodes
    const torusPointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.4,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const torusPoints = new THREE.Points(torusGeometry, torusPointsMaterial);
    scene.add(torusPoints);

    // 3. Ambient Orbiting Celestial Dust
    const particleCount = 450;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(particleCount * 3);
    const dustColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#22d3ee');
    const blueColor = new THREE.Color('#3b82f6');
    const violetColor = new THREE.Color('#818cf8');

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical ambient volume
      const radius = 40 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      dustPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      dustPositions[i * 3 + 2] = radius * Math.cos(phi);

      const rChoice = Math.random();
      const col = rChoice < 0.5 ? cyanColor : rChoice < 0.8 ? blueColor : violetColor;
      dustColors[i * 3] = col.r;
      dustColors[i * 3 + 1] = col.g;
      dustColors[i * 3 + 2] = col.b;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const dustSystem = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustSystem);

    // Mouse coordinates & Smooth Inertia Target
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) / halfW;
      mouseY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const time = clock.getElapsedTime();

      // Smooth inertial damping (lerp)
      targetRotationX += (mouseY * 0.4 - targetRotationX) * 0.035;
      targetRotationY += (mouseX * 0.5 - targetRotationY) * 0.035;

      // Slow cinematic rotation of kinetic torus knot
      torusMesh.rotation.x = time * 0.07 + targetRotationX;
      torusMesh.rotation.y = time * 0.1 + targetRotationY;
      torusPoints.rotation.x = torusMesh.rotation.x;
      torusPoints.rotation.y = torusMesh.rotation.y;

      // Subtle breathing scale
      const scaleBreath = 1 + Math.sin(time * 0.4) * 0.03;
      torusMesh.scale.set(scaleBreath, scaleBreath, scaleBreath);
      torusPoints.scale.set(scaleBreath, scaleBreath, scaleBreath);

      // Ambient celestial dust slow spin
      dustSystem.rotation.y = time * 0.015 - targetRotationY * 0.2;
      dustSystem.rotation.x = time * 0.008 - targetRotationX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      torusGeometry.dispose();
      torusWireMaterial.dispose();
      torusPointsMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}
