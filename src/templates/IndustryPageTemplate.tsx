import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { INDUSTRIES_DETAILED } from '../data/industriesData';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ShieldCheck, ArrowRight, Plus, Minus, CheckCircle } from 'lucide-react';

interface IndustryPageTemplateProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  const [, params] = useRoute('/industries/:slug');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const industry = INDUSTRIES_DETAILED.find(i => i.slug === params?.slug) || INDUSTRIES_DETAILED[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title={`${industry.name} Solutions`}
        description={industry.summary}
        schemaType="Industry"
        schemaData={{
          industry: industry.name,
          provider: { '@type': 'Corporation', name: 'HEXBYTE' }
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.shortName }
        ]}
        kicker="Enterprise Vertical Blueprint"
        title={industry.name}
        subtitle={industry.tagline}
        metricBadge={industry.heroMetric}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Request {industry.shortName} Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onOpenWhitepaper}
            className="px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
          >
            Download Regulatory Dossier
          </button>
        </div>
      </PageHero>

      {/* 2. Overview & Sector Imperative */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Sector Architectural Demands
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Addressing Complex Regulatory & Latency Constraints
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {industry.description}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Regulatory Benchmarks
              </div>
              <div className="flex flex-wrap gap-2">
                {industry.complianceFrameworks.map((fw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200 flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{fw.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Challenges vs Hexbyte Solutions */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Comparative Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sector Bottlenecks vs. Hexbyte Autonomous Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.keyChallenges.map((ch, idx) => {
              const sol = industry.hexbyteSolutions[idx] || industry.hexbyteSolutions[0];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block mb-1">
                        Critical Challenge
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1">{ch.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{ch.description}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30">
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                        Hexbyte Invariant
                      </span>
                      <h4 className="text-sm font-bold text-white mb-1">{sol.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Quantified Metrics */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.stats.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  {st.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {st.label}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {st.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Case Study */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Verified Transformation Case Study
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {industry.caseStudy.client}: {industry.caseStudy.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Key Result: <span className="text-emerald-400 font-semibold">{industry.caseStudy.result}</span>
              </p>
            </div>
            <Link
              href={`/case-studies/${industry.caseStudy.slug}`}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Technical FAQ */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Compliance & Security
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {industry.shortName} Architectural Questions
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-slate-400 shrink-0">
                      {isOpen ? <Minus className="w-3 h-3 text-indigo-400" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Conversion CTA */}
      <PageCta
        title={`Modernize Your ${industry.shortName} Infrastructure`}
        subtitle="Consult directly with our Principal Solutions Architects on regulatory compliance and SLA guarantees."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
