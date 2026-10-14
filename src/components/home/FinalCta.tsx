import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Download } from 'lucide-react';
import { Link } from 'wouter';

interface FinalCtaProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-6">
          <Shield className="w-3.5 h-3.5 text-indigo-400" />
          <span>Enterprise Production Readiness Guaranteed</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
          Accelerate Your Enterprise Infrastructure to Zero Downtime
        </h2>

        <p className="text-base sm:text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          Join leading global engineering teams operating with mathematical predictability, automated compliance, and sub-millisecond multi-cloud performance.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-consultation"
            className="px-8 py-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group whitespace-nowrap cursor-pointer"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenWhitepaper}
            className="px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Download 2026 Architecture Whitepaper</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>14-day production sandbox access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dedicated principal systems architect</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Underwritten 99.999% SLA guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
