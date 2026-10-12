import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ALL_PROJECTS } from '../data/allProjectsData';
import { ArrowRight, CheckCircle2, Shield, Terminal } from 'lucide-react';

interface PortfolioOverviewPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const PortfolioOverviewPage: React.FC<PortfolioOverviewPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [industryFilter, setIndustryFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  const filteredProjects = ALL_PROJECTS.filter(p => {
    const matchesIndustry = industryFilter === 'all' || p.industry === industryFilter;
    const matchesService = serviceFilter === 'all' || p.serviceCategory === serviceFilter;
    return matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Enterprise Case Studies & Production Portfolio"
        description="Verified enterprise engineering case studies and architecture blueprints with quantified production ROI."
        schemaType="CollectionPage"
        schemaData={{
          name: 'Hexbyte Enterprise Portfolio',
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Portfolio' }]}
        kicker="Reference Architectures & Sample Prototypes"
        title="Engineering Concepts & Prototypes at Hyperscale"
        subtitle="Explore 29 conceptual reference implementations demonstrating deterministic multi-cloud failover, eBPF telemetry meshes, and sovereign distributed systems."
        metricBadge={{
          value: '29 Concept Projects',
          label: 'Sample Reference Architectures'
        }}
      />

      {/* Filter Controls Bar */}
      <section className="py-6 bg-slate-900/60 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-slate-400 mr-2">Filter by Industry:</span>
            {['all', 'fintech-bfsi', 'healthcare', 'logistics', 'real-estate', 'education'].map(ind => (
              <button
                key={ind}
                onClick={() => setIndustryFilter(ind)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  industryFilter === ind
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {ind === 'all' ? 'All Industries' : ind.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-slate-400 mr-2">Domain:</span>
            {['all', 'cloud', 'ai', 'data', 'blockchain', 'other'].map(cat => (
              <button
                key={cat}
                onClick={() => setServiceFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  serviceFilter === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">
              Showing {filteredProjects.length} Verified Deployments
            </h3>
            {(industryFilter !== 'all' || serviceFilter !== 'all') && (
              <button
                onClick={() => { setIndustryFilter('all'); setServiceFilter('all'); }}
                className="text-xs text-indigo-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(proj => (
              <Link
                key={proj.slug}
                href={`/portfolio/${proj.slug}`}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-mono">{proj.client}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        Concept project
                      </span>
                    </div>
                    <span className="text-emerald-400 font-mono font-semibold">{proj.results[0].value} {proj.results[0].label}</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {proj.overview}
                  </p>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2 my-4">
                    {proj.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="text-base font-bold font-mono text-emerald-400">{res.value}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Project Mockups & Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Your Transformation?"
        subtitle="Schedule a technical consultation to explore benchmark architectures matching your exact requirements."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
