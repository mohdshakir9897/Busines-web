import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { CASE_STUDIES_DETAILED } from '../data/caseStudiesData';
import { Link } from 'wouter';
import { ArrowRight, Quote } from 'lucide-react';

interface CaseStudiesIndexPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const CaseStudiesIndexPage: React.FC<CaseStudiesIndexPageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Case Studies & Transformations"
        description="Verified quantitative ROI and architecture outcomes from Fortune 500 engineering teams deploying Hexbyte."
      />

      <PageHero
        breadcrumbs={[{ label: 'Case Studies' }]}
        kicker="Production Evidence"
        title="Verified Transformations Across Global Fortune 500 Leaders"
        subtitle="Read detailed teardowns of how tier-1 investment banks, hospital networks, and global logistics carriers eliminated latency and underwrote 99.999% uptime."
        metricBadge={{ value: '100%', label: 'Independently Audited Customer ROI' }}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Request Customer Reference Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </PageHero>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES_DETAILED.map((cs) => (
              <div
                key={cs.slug}
                className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {cs.heroStat.value}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">
                    {cs.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {cs.theChallenge}
                  </p>

                  {/* Quantified Metrics row */}
                  <div className="grid grid-cols-3 gap-2 my-6 pt-4 border-t border-slate-800">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                          {res.value}
                        </div>
                        <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote Snippet */}
                  <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs italic text-slate-300">
                    "{cs.quote.text}"
                    <div className="mt-2 text-[11px] font-semibold text-white not-italic">
                      — {cs.quote.author}, {cs.quote.role}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    {cs.heroStat.label}
                  </span>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                  >
                    <span>Read Full Case Study</span>
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
