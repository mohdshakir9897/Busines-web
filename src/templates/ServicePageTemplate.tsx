import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { SERVICES_DETAILED } from '../data/servicesData';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { CheckCircle2, ArrowRight, Plus, Minus, ShieldCheck, ChevronRight } from 'lucide-react';

interface ServicePageTemplateProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  const [, params] = useRoute('/services/:slug');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DETAILED.find(s => s.slug === params?.slug) || SERVICES_DETAILED[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title={service.title}
        description={service.summary}
        schemaType="Service"
        schemaData={{
          provider: { '@type': 'Corporation', name: 'HEXBYTE' },
          serviceType: service.category
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.shortTitle }
        ]}
        kicker={`${service.category} · Spec ${service.num}`}
        title={service.title}
        subtitle={service.tagline}
        metricBadge={service.heroStat}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Schedule Technical Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onOpenWhitepaper}
            className="px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
          >
            Download Architecture Spec
          </button>
        </div>
      </PageHero>

      {/* 2. Executive Architecture Overview */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                System Invariant Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Engineering Rationale & Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.description}
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero application rewrite required. Plugs into existing CI/CD pipelines via non-intrusive eBPF daemonsets.</span>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {service.stats.map((st, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                    {st.value}
                  </div>
                  <div className="text-xs font-semibold text-indigo-300 mt-1">
                    {st.label}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {st.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Platform Primitives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Four Core Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deployment Lifecycle / Process */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1 block">
              Implementation Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Production Rollout Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((pr, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-lg font-extrabold text-sky-400">
                    {pr.step}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Audited Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Case Study Card */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Production Case Study Proof
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {service.relatedCaseStudy.client}: {service.relatedCaseStudy.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Outcome: <span className="text-emerald-400 font-semibold">{service.relatedCaseStudy.result}</span>
              </p>
            </div>
            <Link
              href={`/case-studies/${service.relatedCaseStudy.slug}`}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-colors"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Technical FAQ Accordion */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Architectural Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => {
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

      {/* 7. Conversion CTA Banner */}
      <PageCta
        title={`Deploy ${service.title} in Your Architecture`}
        subtitle="Work directly with our Principal Systems Engineers. 14-day production sandbox with verified benchmark reporting."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
