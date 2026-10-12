import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { INDUSTRIES_DETAILED } from '../data/industriesData';
import { Link } from 'wouter';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface IndustriesIndexPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const IndustriesIndexPage: React.FC<IndustriesIndexPageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Industry Solutions & Compliance"
        description="Explore purpose-built infrastructure solutions for Banking, Healthcare, Global Logistics, and Hyperscale SaaS."
      />

      <PageHero
        breadcrumbs={[{ label: 'Industries' }]}
        kicker="Vertical Architectural Blueprints"
        title="Engineered for Regulated & High-Stakes Global Industries"
        subtitle="Every vertical ships with certified pre-configured governance guardrails, sovereign data residency boundaries, and independent compliance frameworks."
        metricBadge={{ value: '4 Verticals', label: 'Certified Industry Frameworks' }}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Request Industry Blueprint Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </PageHero>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES_DETAILED.map((ind) => (
              <div
                key={ind.slug}
                className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      {ind.shortName}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {ind.heroMetric.value}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium mt-1">
                    {ind.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {ind.summary}
                  </p>

                  {/* Compliance Badges */}
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Certified Regulatory Standards:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.complianceFrameworks.map((fw, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1"
                        >
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>{fw.name.split('/')[0]}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 font-mono">
                    {ind.heroMetric.label}
                  </div>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                  >
                    <span>View Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
