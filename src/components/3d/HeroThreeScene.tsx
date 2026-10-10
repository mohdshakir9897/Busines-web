import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroThreeSceneProps {
  accentColor?: string;
}

export const HeroThreeScene: React.FC<HeroThreeSceneProps> = ({ accentColor = '#3B82F6' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check reduced motion preference and mobile screen
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isReducedMotion || isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Geometric Core (Icosahedron wireframe & inner core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e1b4b,
      emissive: 0x1e293b,
      wireframe: true,
      wireframeLinewidth: 1,
      transparent: true,
      opacity: 0.65,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // 2. Inner crystalline core
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: false,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 3. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 4. Ambient particles / constellation
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x60a5fa, 2, 20);
    pointLight.position.set(4, 3, 5);
    scene.add(pointLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 2, 20);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    // Mouse movement state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 2;
      targetY = (y - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate models
      coreMesh.rotation.x = elapsedTime * 0.15;
      coreMesh.rotation.y = elapsedTime * 0.2;

      innerMesh.rotation.x = -elapsedTime * 0.3;
      innerMesh.rotation.y = elapsedTime * 0.25;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.x = elapsedTime * 0.12;

      particles.rotation.y = elapsedTime * 0.02;

      // React to mouse and gentle breathing
      group.rotation.y = mouseX * 0.6 + Math.sin(elapsedTime * 0.3) * 0.1;
      group.rotation.x = -mouseY * 0.6 + Math.cos(elapsedTime * 0.3) * 0.1;
      group.position.y = Math.sin(elapsedTime * 0.8) * 0.1;

      // Update point light dynamically
      pointLight.position.x = 4 + mouseX * 2;
      pointLight.position.y = 3 - mouseY * 2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isReducedMotion, isMobile, accentColor]);

  if (isReducedMotion || isMobile) {
    // Static Fallback Container
    return (
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl"
        aria-label="3D Core Architectural Cluster Fallback"
      >
        <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="w-56 h-56 rounded-full border border-indigo-500/20 flex items-center justify-center p-6">
          <div className="w-40 h-40 rounded-full border border-sky-400/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600/30 to-cyan-500/30 border border-indigo-400/50 backdrop-blur-md flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-10 h-10 rounded-full bg-indigo-500/40 border border-white/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[380px] lg:min-h-[460px] relative cursor-grab active:cursor-grabbing pointer-events-auto"
      aria-label="Interactive 3D Enterprise Architecture Model"
    />
  );
};
