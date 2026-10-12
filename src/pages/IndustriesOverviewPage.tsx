import React from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ALL_INDUSTRIES } from '../data/allIndustriesData';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface IndustriesOverviewPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const IndustriesOverviewPage: React.FC<IndustriesOverviewPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Regulated Industry Blueprints & Solutions"
        description="Enterprise architecture blueprints engineered for high-concurrency and heavily regulated global industries."
        schemaType="Industry"
        schemaData={{
          name: 'Hexbyte Enterprise Industry Blueprints',
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Industries' }]}
        kicker="Vertical Architecture Blueprints"
        title="Engineered for Mission-Critical & Regulated Industries"
        subtitle="Every vertical ships with certified pre-configured governance guardrails, sovereign data residency fencing, and compliance audit frameworks."
        metricBadge={{
          value: '5 Verticals',
          label: 'With Tailored Regulatory Enclaves'
        }}
      />

      {/* Industries Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {ALL_INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.slug}
              className="p-8 lg:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-mono text-indigo-400">0{idx + 1}. VERTICAL BLUEPRINT</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-emerald-400 font-mono">{ind.heroMetric.value} {ind.heroMetric.label}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {ind.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ind.description}
                </p>

                {/* Compliance Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {ind.complianceFrameworks.map((fw, fIdx) => (
                    <span
                      key={fIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{fw.name}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl transition-colors shadow"
                  >
                    <span>View {ind.name.split(',')[0]} Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Stats Box */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase">Verified Production Invariants</span>
                <div className="space-y-3">
                  {ind.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-2xl font-bold font-mono text-emerald-400">{st.value}</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{st.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{st.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Consult with Our Vertical Practice Leaders"
        subtitle="Schedule a private briefing with our specialized banking, healthcare, and supply chain solutions engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
