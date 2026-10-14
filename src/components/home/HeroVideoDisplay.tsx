import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Activity, Radio } from 'lucide-react';

interface HeroVideoDisplayProps {
  posterImage: string;
  accentColor: string;
  slideId: string;
}

// Local hero video streams referenced under /videos/
const VIDEO_STREAMS: Record<string, string> = {
  'datacenter-scale': '/videos/hero-1.mp4',
  'autonomous-ops': '/videos/hero-2.mp4',
  'fintech-security': '/videos/hero-3.mp4',
  'global-logistics': '/videos/hero-4.mp4',
};

export const HeroVideoDisplay: React.FC<HeroVideoDisplayProps> = ({
  posterImage,
  accentColor,
  slideId,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'telemetry'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const videoSrc = VIDEO_STREAMS[slideId] || VIDEO_STREAMS['datacenter-scale'];

  // Normalize poster image path so it always loads from /images/
  const resolvedPoster = posterImage
    ? posterImage.replace(/^\/src\/assets\/images\//, '/images/')
    : '/images/hero-1.jpg';

  // Listen to prefers-reduced-motion and viewport width for mobile
  useEffect(() => {
    // 1. Reduced motion check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', onMotionChange);

    // 2. Mobile viewport / touch device check
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const checkMobile = () => {
      const isSmall = mobileQuery.matches || window.innerWidth <= 768;
      const isTouchMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent || ''
      );
      setIsMobile(isSmall || isTouchMobile);
    };
    checkMobile();
    mobileQuery.addEventListener('change', checkMobile);
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', onMotionChange);
      mobileQuery.removeEventListener('change', checkMobile);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const skipVideo = isMobile || prefersReducedMotion;

  // Reset video state when slide changes
  useEffect(() => {
    setVideoError(false);
    setPosterError(false);
    setIsVideoReady(false);
    setIsPlaying(true);
  }, [slideId]);

  // Ensure video element plays and remains muted for autoplay compliance
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      if (isPlaying && !skipVideo && !videoError) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay rejection or media 404
          });
        }
      }
    }
  }, [videoSrc, isPlaying, skipVideo, videoError]);

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // High-performance animated holographic telemetry loop on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;
    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.003,
      vy: (Math.random() - 0.5) * 0.003,
      radius: Math.random() * 2.5 + 1.5,
    }));

    const render = () => {
      angle += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw radar sweep
      const cx = w * 0.5;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.42;

      // Concentric circles
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
      ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Sweeping radar line
      const sweepX = cx + Math.cos(angle) * radius;
      const sweepY = cy + Math.sin(angle) * radius;
      const gradient = ctx.createLinearGradient(cx, cy, sweepX, sweepY);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.5, angle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw interconnecting nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.1 || node.x > 0.9) node.vx *= -1;
        if (node.y < 0.1 || node.y > 0.9) node.vy *= -1;

        const nx = node.x * w;
        const ny = node.y * h;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(nx - n2.x * w, ny - n2.y * h);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.4 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(n2.x * w, n2.y * h);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#818cf8';
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [activeTab]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#070712]">
      {/* Top Media Switcher Bar */}
      <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 p-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-medium">
        <button
          onClick={() => setActiveTab('video')}
          className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
            activeTab === 'video' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Radio className="w-3 h-3 text-sky-400" />
          <span>Live Video Feed</span>
        </button>
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
            activeTab === 'telemetry' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-3 h-3 text-emerald-400" />
          <span>Animated Telemetry HUD</span>
        </button>
      </div>

      {/* Video Stream Element & Visual Fallback */}
      {activeTab === 'video' && (
        <div className="relative w-full h-full bg-[#070712] overflow-hidden">
          {/* 1. Premium Animated Gradient Mesh Fallback in Brand Colors #22D3EE, #3B82F6, #8B5CF6, #D946EF on #070712 */}
          <div className="hero-mesh-container" aria-hidden="true">
            <div className="hero-mesh-cyan" />
            <div className="hero-mesh-blue" />
            <div className="hero-mesh-violet" />
            <div className="hero-mesh-fuchsia" />
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
          </div>

          {/* 2. Poster Image from /images/ (displayed on mobile, reduced-motion, video fallback, or initial load) */}
          {!posterError && resolvedPoster && (
            <img
              src={resolvedPoster}
              alt="Hexbyte live telemetry visual"
              onError={() => setPosterError(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-500"
            />
          )}

          {/* 3. Hero Video Element: skipped on mobile or reduced-motion, hidden if error occurs */}
          {!skipVideo && !videoError && (
            <video
              ref={videoRef}
              key={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={resolvedPoster}
              onError={() => setVideoError(true)}
              onLoadedData={() => setIsVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                isVideoReady ? 'opacity-85' : 'opacity-0'
              }`}
            >
              <source src={videoSrc} type="video/mp4" onError={() => setVideoError(true)} />
            </video>
          )}

          {/* Video Control Play/Pause Button - shown only when video is active & ready */}
          {!skipVideo && !videoError && isVideoReady && (
            <button
              onClick={togglePlay}
              className="absolute bottom-3 right-3 z-30 p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label={isPlaying ? 'Pause live video stream' : 'Play live video stream'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-sky-400" />}
            </button>
          )}
        </div>
      )}

      {/* Animated Telemetry / Radar Canvas */}
      {activeTab === 'telemetry' && (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
          <canvas
            ref={canvasRef}
            width={640}
            height={480}
            className="w-full h-full object-cover"
          />
          {/* Overlay Grid lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>
      )}

      {/* Glassmorphic Scrim and Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-slate-950/70 pointer-events-none" />

      {/* Top right live status badge */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>{!skipVideo && !videoError && isVideoReady ? 'LIVE FEED 60FPS' : 'TELEMETRY STREAM'}</span>
      </div>
    </div>
  );
};
