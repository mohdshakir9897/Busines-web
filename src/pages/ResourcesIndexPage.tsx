import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { RESOURCES_DATA } from '../data/resourcesData';
import { Download, FileText, Video, BookOpen, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'wouter';

interface ResourcesIndexPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const ResourcesIndexPage: React.FC<ResourcesIndexPageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Technical Resources & Whitepapers"
        description="Download benchmark reports, multi-cloud reference architectures, and watch on-demand technical webinars."
      />

      <PageHero
        breadcrumbs={[{ label: 'Resources' }]}
        kicker="Engineering Artifacts"
        title="Technical Whitepapers, Reference Architectures & Benchmarks"
        subtitle="Independent performance evaluations, production manifests, and compliance implementation playbooks for enterprise infrastructure teams."
        metricBadge={{ value: '4 Assets', label: 'Peer-Reviewed Engineering Dockets' }}
      />

      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES_DATA.map((res) => (
              <div
                key={res.id}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {res.type}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800">
                      {res.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {res.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Format: {res.pagesOrDuration}</span>
                    {res.gated ? (
                      <span className="flex items-center gap-1 text-amber-400">
                        <Lock className="w-3 h-3" />
                        <span>Executive Access</span>
                      </span>
                    ) : (
                      <span className="text-emerald-400">Open Technical Spec</span>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <button
                    onClick={onOpenWhitepaper}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Access Resource ({res.pagesOrDuration})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Need a Custom Architecture Sizing Model?"
        subtitle="Our solutions team will generate an interactive cluster simulation tailored to your specific node count and cloud providers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
