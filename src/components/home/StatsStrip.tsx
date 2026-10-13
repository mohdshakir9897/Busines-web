import React, { useEffect, useState, useRef } from 'react';
import { EXECUTIVE_STATS } from '../../data/homeContent';

export const StatsStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-16 bg-slate-900/60 border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXECUTIVE_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-indigo-300 mt-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed border-t border-slate-800/80 pt-3">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
