import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { RESOURCES_DATA } from '../data/resourcesData';
import { FileText, Download, Code, Play, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResourcesPageProps {
  onOpenWhitepaper?: () => void;
  onOpenDemo?: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenWhitepaper, onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Resource Center & Technical Whitepapers"
        description="Download comprehensive technical architecture whitepapers, benchmarks, reference Terraform repos, and on-demand webinars."
        schemaType="CollectionPage"
        schemaData={{
          name: 'Hexbyte Enterprise Resources',
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Insights', href: '/blog' },
          { label: 'Resources' }
        ]}
        kicker="Technical Library & Code Repositories"
        title="Architecture Dockets, Benchmarks & Reference Code"
        subtitle="Access in-depth engineering documentation, performance benchmarks across 10,000-node clusters, and open-source Terraform manifests."
        metricBadge={{
          value: '4 Flagship Dockets',
          label: 'Independent Benchmarks & Code Manifests'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES_DATA.map(res => (
              <div
                key={res.id}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <span className="font-mono text-indigo-400 font-semibold">{res.type}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-400">
                      {res.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{res.pagesOrDuration}</span>

                  {res.gated ? (
                    <button
                      onClick={onOpenWhitepaper}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Gated PDF</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => alert(`Accessing ${res.title} repository and code manifests.`)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
                    >
                      <Code className="w-3.5 h-3.5 text-sky-400" />
                      <span>Access Public Resource</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Need Custom Technical Guidance?"
        subtitle="Schedule an architecture sizing consultation with our Principal Systems Engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
