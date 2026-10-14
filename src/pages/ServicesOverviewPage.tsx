import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { SERVICE_CATEGORIES, ALL_SERVICES } from '../data/allServicesData';
import { ArrowRight, Cpu, Database, Globe, Smartphone, Cloud, Layers, Sliders, CheckCircle2 } from 'lucide-react';

import { getServiceShowcaseData } from '../utils/serviceImageResolver';

interface ServicesOverviewPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'data': return <Database className="w-5 h-5 text-sky-400" />;
      case 'web': return <Globe className="w-5 h-5 text-blue-400" />;
      case 'mobile': return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-purple-400" />;
      case 'blockchain': return <Layers className="w-5 h-5 text-amber-400" />;
      default: return <Sliders className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <SeoMetadata
        title="Enterprise Engineering Services & Capabilities"
        description="Comprehensive suite of 54 specialized enterprise engineering capabilities across AI, Data, Web, Mobile, Cloud, and Blockchain."
        schemaType="Service"
        schemaData={{
          name: 'Hexbyte Enterprise Services Suite',
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        kicker="Enterprise Engineering Suite"
        title="54 Mission-Critical Engineering Capabilities"
        subtitle="Explore our comprehensive matrix of specialized engineering capabilities. Every service ships with production SLAs, formal invariant proofs, and automated compliance frameworks."
        metricBadge={{
          value: '54 Services',
          label: 'Across 7 Core Technology Domains'
        }}
      />

      {/* Category Hubs Navigation Bar */}
      <section className="py-6 bg-slate-900/80 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Services (54)
            </button>
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.category
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                  {cat.serviceCount}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Hub Summary Cards with Visual Showcases */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">Domain Architecture</span>
                <h3 className="text-2xl font-bold text-white mt-1">7 Core Domain Hubs</h3>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                Each engineering domain is supported by specialized architects, pre-audited blueprints, and automated compliance toolchains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map(cat => {
                const showcase = getServiceShowcaseData(cat.category);
                return (
                  <Link
                    key={cat.category}
                    href={`/services/${cat.category}`}
                    className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div>
                      {/* Domain Showcase Thumbnail */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                        <img
                          src={showcase.image}
                          alt={`${cat.name} Platform Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        
                        {/* Domain Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-200">
                          {getCategoryIcon(cat.category)}
                          <span className="font-semibold text-white">{cat.name}</span>
                        </div>

                        {/* Capability Count Pill */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-indigo-600/90 backdrop-blur-sm text-[11px] font-semibold text-white shadow">
                          {cat.serviceCount} Capabilities
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {cat.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                        <span>Explore Domain Hub</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid (Filterable) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">Capabilities Directory</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedCategory === 'all' ? 'All 54 Specialized Services' : `${filteredServices.length} Services in this Category`}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click any service to view live platform showcases, technical specifications, architecture diagrams, and SLAs.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              Showing {filteredServices.length} of 54
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.category}/${svc.slug}`}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-sm hover:shadow-indigo-500/10"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <span className="font-semibold text-slate-400 uppercase tracking-wide">{svc.category}</span>
                    <span className="font-semibold text-emerald-400">{svc.heroStat.value}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {svc.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950 border border-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Specification</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Need a Custom Architecture Sizing?"
        subtitle="Our Principal Systems Architects can formulate a bespoke deployment blueprint tailored to your workloads."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
