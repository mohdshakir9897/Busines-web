import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Terminal } from 'lucide-react';
import { Link } from 'wouter';
import { HERO_SLIDES } from '../../data/homeContent';
import { HeroVideoDisplay } from './HeroVideoDisplay';

interface HeroCarouselProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 6500; // 6.5s per slide

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-slide ticker
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((old) => (old + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, currentSlideIndex]);

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  return (
    <section 
      className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-80" />
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: currentSlide.accentColor }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[520px]">
          {/* Column 1: Animated Headline, Value Prop & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
                    {currentSlide.title}
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-indigo-200/90 leading-snug">
                    {currentSlide.subtitle}
                  </p>
                </div>

                <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                  {currentSlide.description}
                </p>

                {/* Quantitative Metric Callout */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-6 max-w-lg">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      {currentSlide.statLabel}
                    </div>
                    <div className="text-2xl font-bold font-mono text-white mt-0.5 tabular-nums">
                      {currentSlide.statValue}
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-400 border-l border-slate-800 pl-4">
                    <div className="text-slate-300 font-medium">Deterministic Invariant</div>
                    <div className="text-[11px] text-slate-500">Formally proven at runtime</div>
                  </div>
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/request-consultation"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    }}
                    className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group whitespace-nowrap cursor-pointer"
                  >
                    <span>{currentSlide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => {
                      if (currentSlide.secondaryCtaAction === 'resources') {
                        onOpenWhitepaper();
                      } else {
                        const target = document.querySelector('#services');
                        target?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {currentSlide.secondaryCtaText}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 2: Animated Video & High-Tech Telemetry Stream */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden">
                <HeroVideoDisplay
                  posterImage={currentSlide.imageUrl}
                  accentColor={currentSlide.accentColor}
                  slideId={currentSlide.id}
                />
              </div>

              {/* Lower HUD status strip */}
              <div className="relative z-20 px-5 py-3.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-mono text-[11px] text-slate-300">HEXBYTE-EVENT-STREAM-ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px]">Hardware Enclave Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controller & Slide Progress Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Slide Indicator Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                className={`text-left px-3.5 py-2 rounded-lg text-xs transition-all ${
                  currentSlideIndex === idx
                    ? 'bg-slate-800 text-white font-semibold border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-500">0{idx + 1}</span>
                  <span className="truncate max-w-[140px]">{slide.badge}</span>
                </div>
                {currentSlideIndex === idx && (
                  <div className="w-full bg-slate-700 h-[2px] mt-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-400 h-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
