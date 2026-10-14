import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/homeContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Executive Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Underwriting Uptime for the World's Most Demanding Engineering Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Read direct feedback from Heads of Infrastructure, CISOs, and Chief Technology Officers operating global distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/60 transition-all"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified C-Level</span>
                  </div>
                </div>

                <div className="text-sm font-bold text-white mb-2">
                  {item.highlight}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author attribution */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-bold text-xs text-indigo-300 shrink-0">
                  {item.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.role}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
