import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../../data/homeContent';

interface CaseStudiesSectionProps {
  onOpenDemo: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenDemo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = CASE_STUDIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-slate-900/50 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Verified Production Transformations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              How Global Industry Leaders Deploy Hexbyte at Hyperscale
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="p-8 lg:p-12 rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="font-bold text-white tracking-wider">{currentCase.client}</span>
                <span aria-hidden="true">·</span>
                <span className="text-indigo-400 font-medium">{currentCase.industry}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {currentCase.headline}
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <div>
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">The Challenge</span>
                  <p>{currentCase.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Hexbyte Solution</span>
                  <p>{currentCase.solution}</p>
                </div>
              </div>

              {/* Quote Block */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative">
                <Quote className="w-5 h-5 text-indigo-400 mb-2 opacity-50" />
                <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed">
                  "{currentCase.quote}"
                </p>
                <div className="mt-3 text-xs text-slate-400 font-medium">
                  <span className="text-white font-semibold">{currentCase.author}</span>
                  <span className="mx-1">/</span>
                  <span>{currentCase.role}</span>
                </div>
              </div>
            </div>

            {/* Right Quantitative Metrics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Quantified Impact Summary
                </div>

                <div className="space-y-4">
                  {currentCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                      <div className="text-3xl font-extrabold text-emerald-400 tracking-tight tabular-nums">
                        {res.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-300 mt-1">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Full Case Study Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
