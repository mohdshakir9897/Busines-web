import React, { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { ALL_INDUSTRIES } from '../../data/allIndustriesData';
import { ALL_PROJECTS } from '../../data/allProjectsData';
import { ArrowRight, CheckCircle2, ShieldCheck, Plus, Minus, AlertTriangle } from 'lucide-react';

interface IndustryPageTemplateProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [, params] = useRoute('/industries/:slug');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const slug = params?.slug || 'fintech-bfsi';
  const slugMap: Record<string, string> = {
    'banking-capital-markets': 'fintech-bfsi',
    'healthcare-life-sciences': 'healthcare',
    'supply-chain-logistics': 'logistics',
    'enterprise-saas-media': 'real-estate',
  };
  const resolvedSlug = slugMap[slug] || slug;
  const industry = ALL_INDUSTRIES.find(i => i.slug === resolvedSlug || i.slug === slug) || ALL_INDUSTRIES[0];
  const featuredProjects = ALL_PROJECTS.filter(p => industry.featuredProjects?.includes(p.slug));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={`${industry.name} Architecture Solutions`}
        description={industry.summary}
        schemaType="Industry"
        schemaData={{
          industryName: industry.name,
          provider: 'HEXBYTE'
        }}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.name }
        ]}
        kicker="Vertical Architecture Dossier"
        title={industry.name}
        subtitle={industry.description}
        metricBadge={industry.heroMetric}
      >
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {ALL_INDUSTRIES.map(ind => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                ind.slug === industry.slug
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {ind.name.split(',')[0].split(' ')[0]}
            </Link>
          ))}
        </div>
      </PageHero>

      {/* 2. Key Challenges vs Hexbyte Solutions (Bento) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-rose-400 tracking-wider">
              Critical Industry Bottlenecks & Solutions
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Engineered for High-Stakes Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {industry.challenges.map((ch, idx) => {
              const sol = industry.solutions[idx] || industry.solutions[0];
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>THE BOTTLENECK 0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {ch.description}
                    </p>

                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>HEXBYTE RESOLUTION</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-200">
                        {sol.title}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Regulatory Frameworks */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
              Certified Compliance Guardrails
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Audit-Ready Regulatory Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.complianceFrameworks.map((fw, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-white">{fw.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {fw.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-emerald-400">
                  AUTOMATED AUDITOR EVIDENCE PACKS
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects in this industry */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                Production Case Studies
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Verified Enterprise Transformations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map(proj => (
                <Link
                  key={proj.slug}
                  href={`/portfolio/${proj.slug}`}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-slate-800">
                      <span className="font-bold text-white font-mono">{proj.client}</span>
                      <span className="text-emerald-400 font-mono font-semibold">{proj.results[0].value} {proj.results[0].label}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {proj.overview}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>Inspect Full Architecture & Results</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Industry FAQ */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
              Vertical FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Frequently Asked Compliance & Technical Questions
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                  >
                    <span className="text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5 text-indigo-400" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Page CTA */}
      <PageCta
        title={`Modernize Your ${industry.name} Architecture`}
        subtitle="Schedule an executive briefing with our specialized industry practice leads."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
