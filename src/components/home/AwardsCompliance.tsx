import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { ENTERPRISE_AWARDS } from '../../data/homeContent';

export const AwardsCompliance: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
            Independent Verification & Audits
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Recognized by Industry Analysts & Global Standards Bodies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTERPRISE_AWARDS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    {idx < 2 ? <Award className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div className="text-base font-bold text-white">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.category}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Independently Verified 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
