import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { SERVICE_CATEGORIES, ALL_SERVICES } from '../data/allServicesData';
import { ArrowRight, Cpu, Database, Globe, Smartphone, Cloud, Layers, Sliders, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
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
      <section className="py-8 bg-slate-900/60 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
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
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                  selectedCategory === cat.category
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-950 text-slate-300">
                  {cat.serviceCount}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Hub Summary Cards */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xl font-bold text-white mb-8">7 Core Domain Hubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map(cat => (
                <Link
                  key={cat.category}
                  href={`/services/${cat.category}`}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <span className="text-xs font-mono text-indigo-400 font-semibold">
                        {cat.serviceCount} Capabilities
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400">
                    <span>Explore Domain Hub</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid (Filterable) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' ? 'All 54 Specialized Services' : `${filteredServices.length} Services in this Category`}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click any service to view detailed technical specifications, architecture diagrams, and FAQs.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Showing {filteredServices.length} of 54
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc, idx) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.category}/${svc.slug}`}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <span className="font-mono text-slate-500">{svc.category.toUpperCase()}</span>
                    <span className="font-mono text-emerald-400 font-semibold">{svc.heroStat.value}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {svc.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Specification</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
