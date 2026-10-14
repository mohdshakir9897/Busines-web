import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_LIST } from '../../data/homeContent';

interface IndustrySolutionsProps {
  onOpenDemo: () => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = INDUSTRIES_LIST[activeTab];

  return (
    <section id="industries" className="py-24 lg:py-36 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Industry Blueprints & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Engineered for Highly Regulated & High-Stakes Global Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Every vertical ships with certified pre-configured governance guardrails, sovereign data residency fencing, and compliance audit frameworks.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800 no-scrollbar">
          {INDUSTRIES_LIST.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              <span className="text-slate-500 mr-2 font-medium">0{idx + 1}</span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="p-8 lg:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Industry Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {activeIndustry.name}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-2">
                {activeIndustry.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {activeIndustry.description}
            </p>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
                  The Key Challenge
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {activeIndustry.keyChallenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Hexbyte Architecture
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {activeIndustry.hexbyteSolution}
                </p>
              </div>
            </div>

            {/* Compliance Badges */}
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Certified Regulatory Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.complianceTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request {activeIndustry.name} Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Metric Highlight Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-950 border border-indigo-500/30 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Production Outcome
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight tabular-nums">
                {activeIndustry.metric}
              </div>
              <div className="text-sm font-semibold text-indigo-200 mt-2">
                {activeIndustry.metricLabel}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero downtime cluster provisioning</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous auditor evidence generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
