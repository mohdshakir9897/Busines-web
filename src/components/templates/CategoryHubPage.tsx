import React from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { SERVICE_CATEGORIES, ALL_SERVICES } from '../../data/allServicesData';
import { ALL_PROJECTS } from '../../data/allProjectsData';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Database, Globe, Smartphone, Cloud, Layers, Sliders } from 'lucide-react';

interface CategoryHubPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const CategoryHubPage: React.FC<CategoryHubPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [, params] = useRoute('/services/:category');
  const categoryKey = params?.category || 'ai';

  const categoryMeta = SERVICE_CATEGORIES.find(c => c.category === categoryKey) || SERVICE_CATEGORIES[0];
  const servicesInCategory = ALL_SERVICES.filter(s => s.category === categoryMeta.category);
  const relatedProject = ALL_PROJECTS.find(p => p.serviceCategory === categoryMeta.category) || ALL_PROJECTS[0];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Database': return <Database className="w-6 h-6 text-sky-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-400" />;
      default: return <Sliders className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={`${categoryMeta.name} Services & Solutions`}
        description={categoryMeta.description}
        schemaType="Service"
        schemaData={{
          serviceType: categoryMeta.name,
          provider: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: categoryMeta.name }
        ]}
        kicker="Enterprise Capabilities Hub"
        title={categoryMeta.name}
        subtitle={categoryMeta.description}
        metricBadge={{
          value: `${servicesInCategory.length} Solutions`,
          label: 'Specialized Enterprise Blueprints'
        }}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.category}
              href={`/services/${cat.category}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                cat.category === categoryMeta.category
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat.name.split(' ')[0]}
            </Link>
          ))}
        </div>
      </PageHero>

      {/* Services Grid (All services under this category) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                Explore {categoryMeta.name}
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                {servicesInCategory.length} Specialized Engineering Capabilities
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Every service includes documented API interfaces, automated compliance guardrails, and production SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesInCategory.map((svc, idx) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.category}/${svc.slug}`}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-xs">
                    <span className="font-mono text-slate-500">0{idx + 1}.</span>
                    <span className="font-mono text-emerald-400 text-[11px] font-semibold">{svc.heroStat.value}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
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

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>View Full Specification</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Production Transformation in this domain */}
      {relatedProject && (
        <section className="py-20 bg-slate-900/40 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 lg:p-12 rounded-3xl bg-slate-950 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                  Featured Client Transformation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {relatedProject.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {relatedProject.overview}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {relatedProject.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xl font-bold font-mono text-emerald-400">{res.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={`/portfolio/${relatedProject.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    <span>Read Full Architecture Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-indigo-300 uppercase">Executive Feedback</div>
                  <p className="text-sm italic text-slate-200 mt-3 leading-relaxed">
                    "{relatedProject.testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-indigo-500/20 text-xs">
                  <div className="font-bold text-white">{relatedProject.testimonial.author}</div>
                  <div className="text-slate-400">{relatedProject.testimonial.role}, {relatedProject.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <PageCta
        title={`Accelerate Your ${categoryMeta.name} Architecture`}
        subtitle="Schedule a private technical review with our principal solutions engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
