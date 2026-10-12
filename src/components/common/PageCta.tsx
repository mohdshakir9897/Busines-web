import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Download, CheckCircle2, Shield } from 'lucide-react';

interface PageCtaProps {
  title?: string;
  subtitle?: string;
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const PageCta: React.FC<PageCtaProps> = ({
  title = 'Ready to Eliminate Infrastructure Friction at Global Scale?',
  subtitle = 'Schedule a technical architecture review with a Principal Systems Engineer or explore our multi-cloud deployment benchmarks.',
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-6">
          <Shield className="w-3.5 h-3.5 text-indigo-400" />
          <span>Underwritten 99.999% SLA Financial Invariant</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
          {title}
        </h2>

        <p className="text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-consultation"
            className="px-6 py-3.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {onOpenWhitepaper ? (
            <button
              onClick={onOpenWhitepaper}
              className="px-6 py-3.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download 2026 Technical Benchmark</span>
            </button>
          ) : (
            <Link
              href="/resources"
              className="px-6 py-3.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Explore Resource Center</span>
            </Link>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>14-day production pilot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dedicated principal systems architect</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero refactoring required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
