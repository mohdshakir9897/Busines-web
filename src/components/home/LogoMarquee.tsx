import React from 'react';
import { CLIENT_LOGOS } from '../../data/homeContent';

export const LogoMarquee: React.FC = () => {
  // Duplicate logos for seamless infinite CSS marquee
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by mission-critical infrastructure teams globally
        </p>
      </div>

      {/* Marquee Wrapper with Edge Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right fade scrims */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 py-2">
          {duplicatedLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex flex-col items-center justify-center min-w-[170px] px-6 py-3 rounded-lg border border-slate-800/60 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all cursor-default group"
            >
              <span className="font-mono text-sm font-bold tracking-wider text-slate-300 group-hover:text-white transition-colors">
                {item.mark}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 tracking-tight">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
