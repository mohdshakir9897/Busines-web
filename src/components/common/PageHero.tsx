import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  kicker: string;
  title: string;
  subtitle: string;
  metricBadge?: { value: string; label: string };
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbs,
  kicker,
  title,
  subtitle,
  metricBadge,
  children
}) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-slate-950 border-b border-slate-800 overflow-hidden">
      {/* Background subtle radial mesh */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              {kicker}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
            {children && <div className="pt-4">{children}</div>}
          </div>

          {metricBadge && (
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Verified Benchmark Invariant
              </span>
              <div className="text-4xl lg:text-5xl font-extrabold font-mono text-emerald-400 mt-2 tabular-nums">
                {metricBadge.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {metricBadge.label}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Tested across multi-region active-active clusters.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
