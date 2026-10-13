import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/homeContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Enterprise Due Diligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Frequently Asked Technical & Architectural Questions
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Clear, unambiguous specifications covering our runtime kernel probes, compliance attestations, and deployment lifecycles.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-semibold text-indigo-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-base font-semibold text-white text-balance">
                      {item.question}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-indigo-400" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="uppercase">{item.category}</span>
                      <span>·</span>
                      <span className="text-emerald-400">Audited Spec</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
