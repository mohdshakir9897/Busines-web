import React from 'react';
import { useRoute, Link } from 'wouter';
import { CASE_STUDIES_DETAILED } from '../data/caseStudiesData';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudyPageTemplateProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const CaseStudyPageTemplate: React.FC<CaseStudyPageTemplateProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  const [, params] = useRoute('/case-studies/:slug');
  const study = CASE_STUDIES_DETAILED.find(c => c.slug === params?.slug) || CASE_STUDIES_DETAILED[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title={`${study.client} Case Study`}
        description={study.tagline}
        schemaType="Article"
        schemaData={{
          headline: study.title,
          publisher: { '@type': 'Corporation', name: 'HEXBYTE' }
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: study.client }
        ]}
        kicker={`${study.industry} · Production Case Study`}
        title={study.title}
        subtitle={study.tagline}
        metricBadge={study.heroStat}
      />

      {/* 2. Executive Overview */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Executive Summary
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Background & Workload Context
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* 3. Challenge & Solution Deep Dive */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Challenge */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              The Architecture Bottleneck
            </span>
            <h3 className="text-xl font-bold text-white">
              The Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.theChallenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-indigo-500/30 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Hexbyte Autonomous Platform
            </span>
            <h3 className="text-xl font-bold text-white">
              The Solution & Architecture
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.theSolution}
            </p>

            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Architectural Elements Deployed:
              </span>
              {study.architectureDetails.map((det, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{det}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Tag Cloud */}
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Technology Stack Components
            </span>
            <div className="flex flex-wrap gap-2">
              {study.technologiesUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quantified Results Strip */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 block">
              Verified Production Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Quantified Outcomes at Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((res, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-4xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  {res.value}
                </div>
                <div className="text-sm font-semibold text-white mt-2">
                  {res.label}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {res.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Attributable Executive Quote Block */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-indigo-950/30 border border-indigo-500/30 relative">
            <Quote className="w-8 h-8 text-indigo-400 mb-4 opacity-50" />
            <blockquote className="text-lg sm:text-xl font-medium italic text-slate-100 leading-relaxed">
              "{study.quote.text}"
            </blockquote>
            <div className="mt-6 pt-6 border-t border-indigo-500/20 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-sm font-bold text-white">
                  {study.quote.author}
                </div>
                <div className="text-xs text-slate-400">
                  {study.quote.role}, {study.quote.company}
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                Verified Enterprise Case Study
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Conversion CTA */}
      <PageCta
        title={`Achieve Similar Results at ${study.client} Scale`}
        subtitle="Request a technical briefing on how our engineering team eliminated latency and downtime."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
