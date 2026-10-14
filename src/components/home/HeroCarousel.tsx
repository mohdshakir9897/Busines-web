import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { HERO_SLIDES } from '../../data/homeContent';
import { HeroVideoDisplay } from './HeroVideoDisplay';

interface HeroCarouselProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSlide = HERO_SLIDES[activeTab];

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-slate-800">
      {/* Background Gradient Mesh & Ambient Glow */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-lg shadow-indigo-950/40 hover:border-indigo-400/50 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>HEXBYTE 3.0 Enterprise SaaS Platform Released</span>
            <span className="text-slate-500">|</span>
            <button 
              onClick={onOpenWhitepaper}
              className="inline-flex items-center gap-1 text-white hover:text-indigo-200 transition-colors cursor-pointer"
            >
              <span>Read 2026 Executive Brief</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Centered Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Autonomous Cloud Operations &amp; Cost Intelligence for Modern Enterprise
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unify hybrid multi-cloud infrastructure across AWS, Azure, GCP, and private bare metal. Eliminate unexpected downtime, automate continuous security compliance, and slash compute spend by up to 42%.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-consultation"
              className="px-8 py-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group whitespace-nowrap cursor-pointer"
            >
              <span>Start 14-Day Free Sandbox</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={onOpenDemo}
              className="px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Schedule Architecture Consultation</span>
            </button>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              99.999% SLA Financial Guarantee
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              SOC 2 Type II &amp; HIPAA Certified
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              Deploy in Under 30 Minutes
            </span>
          </div>
        </div>

        {/* Executive Value Pillar Switcher Tabs */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-md border border-slate-700/80'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                    {slide.badge}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {slide.statValue} {slide.statLabel.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Summary */}
          <div className="mt-3 text-center">
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-200">{currentSlide.title}:</span> {currentSlide.subtitle}
            </p>
          </div>
        </div>

        {/* Grand SaaS Platform Showcase Banner */}
        <div className="mt-12 relative max-w-6xl mx-auto">
          {/* Subtle Ambient Glow Behind Dashboard */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Live SaaS Platform Console */}
          <HeroVideoDisplay
            posterImage={currentSlide.imageUrl}
            accentColor={currentSlide.accentColor}
            slideId={currentSlide.id}
          />
        </div>
      </div>
    </section>
  );
};

