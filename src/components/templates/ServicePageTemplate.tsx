import React, { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { ALL_SERVICES, ServiceItemData } from '../../data/allServicesData';
import { SERVICES_DETAILED } from '../../data/servicesData';
import { ALL_PROJECTS } from '../../data/allProjectsData';
import { ArrowRight, CheckCircle2, ChevronDown, Plus, Minus, ShieldCheck, Terminal } from 'lucide-react';

interface ServicePageTemplateProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [, paramsCat] = useRoute('/services/:category/:slug');
  const [, paramsDirect] = useRoute('/services/:slug');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const slug = paramsCat?.slug || paramsDirect?.slug || 'website-design';

  // Search in ALL_SERVICES
  const serviceFromAll = ALL_SERVICES.find(s => s.slug === slug);

  // Search in SERVICES_DETAILED as fallback
  const serviceFromDetailed = SERVICES_DETAILED.find(s => s.slug === slug);

  const service: ServiceItemData = serviceFromAll || (serviceFromDetailed ? {
    category: 'platform',
    categoryName: serviceFromDetailed.category,
    slug: serviceFromDetailed.slug,
    title: serviceFromDetailed.title,
    summary: serviceFromDetailed.summary,
    description: serviceFromDetailed.description,
    heroStat: serviceFromDetailed.heroStat,
    capabilities: serviceFromDetailed.capabilities,
    techStack: ['Linux eBPF', 'io_uring', 'Rust', 'Kubernetes', 'Multi-Cloud Fabric'],
    process: serviceFromDetailed.process.map(p => ({ step: p.step, title: p.title, description: p.description })),
    faqs: serviceFromDetailed.faq,
    relatedProjects: ['helios-core-banking', 'apex-supply-chain']
  } : ALL_SERVICES[0]);

  const relatedProjectSlug = service.relatedProjects?.[0] || 'helios-core-banking';
  const project = ALL_PROJECTS.find(p => p.slug === relatedProjectSlug) || ALL_PROJECTS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={`${service.title} - Enterprise ${service.categoryName}`}
        description={service.summary}
        schemaType="Service"
        schemaData={{
          serviceType: service.title,
          category: service.categoryName,
          provider: 'HEXBYTE'
        }}
      />

      {/* 1. Hero Banner */}
      <PageHero
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.categoryName, href: `/services/${service.category}` },
          { label: service.title }
        ]}
        kicker={`${service.categoryName} Specification`}
        title={service.title}
        subtitle={service.description}
        metricBadge={service.heroStat}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {onOpenDemo && (
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
          {onOpenWhitepaper && (
            <button
              onClick={onOpenWhitepaper}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors"
            >
              Download Architecture Brief (PDF)
            </button>
          )}
        </div>
      </PageHero>

      {/* 2. Capabilities & Benefits (Detailed 4-box bento) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
              Technical Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Core Architectural Pillars
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Every deployment operates under strict latency, security, and continuous self-healing invariants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-3">
                    <span>CAPABILITY 0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Production verified under high-concurrency workloads</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Verified Enterprise Tech Stack:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded text-xs font-mono bg-slate-950 border border-slate-800 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Implementation Process (4 Steps) */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Deployment Lifecycle
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              4-Phase Delivery & SLA Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold font-mono text-sky-400 pb-3 mb-3 border-b border-slate-800">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                  Phase Milestone {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Related Case Study & Proof Metrics */}
      {project && (
        <section className="py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 lg:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                  Production Impact & Proven ROI
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xl font-bold font-mono text-emerald-400">{res.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    <span>Inspect Full Project Architecture & Mockups</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="text-xs font-mono text-indigo-400 uppercase">Executive Endorsement</div>
                <p className="text-sm italic text-slate-200 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="pt-3 border-t border-slate-800 text-xs">
                  <div className="font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-slate-400">{project.testimonial.role}, {project.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Due Diligence Technical FAQ */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
              Due Diligence
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
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
        title={`Deploy ${service.title}`}
        subtitle="Consult directly with our Principal Systems Engineers to size and architect your production deployment."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
