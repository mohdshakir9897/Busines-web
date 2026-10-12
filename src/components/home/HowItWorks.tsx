import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../../data/homeContent';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Enterprise Implementation Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            From Zero-State to Live Autonomous Production in Under 45 Days
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Deterministic deployment without rewrites. Hexbyte embeds seamlessly into your existing clusters, Kubernetes namespaces, and cloud virtual networks.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-sky-500/70 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <span className="font-mono text-xl font-extrabold text-sky-400">
                      {step.step}
                    </span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-sky-500/20 text-sky-300' : 'text-slate-500'
                    }`}>
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <div className="text-xs text-sky-300/80 font-medium mt-1">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Verified Deliverable
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Invariant Guarantee Strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div>
              <div className="text-sm font-bold text-white">Non-Intrusive eBPF Kernel Probe Architecture</div>
              <div className="text-xs text-slate-400">Zero modification required to your application Docker containers or CI pipelines.</div>
            </div>
          </div>
          <a
            href="#faq"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
          >
            <span>Review implementation safety invariants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
