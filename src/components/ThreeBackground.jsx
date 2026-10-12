import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry 1: Ambient Floating Tech Nodes (Particle Cloud)
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color('#6366f1'); // Indigo
    const colorB = new THREE.Color('#a855f7'); // Purple
    const colorC = new THREE.Color('#38bdf8'); // Sky

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      const mixed = Math.random();
      const c = mixed < 0.4 ? colorA : mixed < 0.8 ? colorB : colorC;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Geometry 2: Floating Minimalist Polyhedron Mesh (Centerpiece Orb)
    const polyGeometry = new THREE.IcosahedronGeometry(22, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const polyMesh = new THREE.Mesh(polyGeometry, wireframeMaterial);
    scene.add(polyMesh);

    // Geometry 3: Inner Core Dots
    const coreGeometry = new THREE.IcosahedronGeometry(12, 1);
    const coreMaterial = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 1.8,
      transparent: true,
      opacity: 0.4,
    });
    const coreMesh = new THREE.Points(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.005;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.005;

      polyMesh.rotation.x = elapsedTime * 0.04;
      polyMesh.rotation.y = elapsedTime * 0.06;
      polyMesh.position.x = targetX * 0.15;
      polyMesh.position.y = -targetY * 0.15;

      coreMesh.rotation.x = -elapsedTime * 0.05;
      coreMesh.rotation.y = -elapsedTime * 0.07;
      coreMesh.position.x = targetX * 0.15;
      coreMesh.position.y = -targetY * 0.15;

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
      geometry.dispose();
      material.dispose();
      polyGeometry.dispose();
      wireframeMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}
