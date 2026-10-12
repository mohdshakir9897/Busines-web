import React from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { DeviceMockup } from '../common/DeviceMockup';
import { ALL_PROJECTS } from '../../data/allProjectsData';
import { ArrowRight, CheckCircle2, Shield, Terminal, ArrowLeft } from 'lucide-react';

interface ProjectPageTemplateProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [, params] = useRoute('/portfolio/:slug');
  const slug = params?.slug || 'helios-core-banking';

  const project = ALL_PROJECTS.find(p => p.slug === slug) || ALL_PROJECTS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={`${project.title} - ${project.client}`}
        description={project.overview}
        schemaType="CreativeWork"
        schemaData={{
          headline: project.title,
          creator: 'HEXBYTE',
          customer: project.client
        }}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.title }
        ]}
        kicker="Concept Architecture & Reference Implementation"
        title={project.title}
        subtitle={project.tagline}
        metricBadge={project.results[0]}
      >
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mr-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Concept project
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
            Industry: {project.industry.toUpperCase()}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            Category: {project.serviceCategory.toUpperCase()}
          </span>
        </div>

        {/* Clear Non-Factual Architectural Notice */}
        <div className="mt-4 p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-200/90 leading-relaxed max-w-2xl text-left">
          <strong className="text-amber-300 font-semibold">Concept Architecture Notice:</strong> This profile is an illustrative reference blueprint. All workflows, simulated testbed benchmarks, and architectural assessments represent synthetic evaluations and are not presented as historical client facts.
        </div>
      </PageHero>

      {/* 2. Device Mockups Section (Laptop + Phone + Lightbox Gallery) */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              High-Fidelity Interface System
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Production Control Plane Mockups
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Designed with strict typographic discipline, high-density data telemetry, and responsive mobile interfaces.
            </p>
          </div>

          {/* Device Mockup with SVG/CSS and Lightbox */}
          <DeviceMockup
            projectTitle={project.title}
            client={project.client}
            slug={project.slug}
          />
        </div>
      </section>

      {/* 3. The Challenge & The Solution */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase text-rose-400 tracking-wider">
                The Operational Bottleneck
              </span>
              <h3 className="text-2xl font-bold text-white">The Challenge</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Legacy systems were unable to support scaling targets without risk of catastrophic latency degradation.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                Hexbyte Architecture
              </span>
              <h3 className="text-2xl font-bold text-white">The Solution</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Engineered from the kernel layer up with automated failover and verified invariant bounds.
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-6">Key Engineering Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>0{idx + 1}. SPEC</span>
                  </div>
                  <h5 className="text-base font-bold text-white">{feat.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Production Results Metrics */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
              Simulated Performance Bounds
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Illustrative Benchmark Metrics (Simulated Testbed)
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Performance measurements obtained under synthetic stress injection within isolated hardware testbeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="text-4xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  {res.value}
                </div>
                <div className="text-base font-bold text-white mt-2">
                  {res.label}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {res.subtext}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Technology Stack Deployed:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded text-xs font-mono bg-slate-950 border border-slate-800 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Architectural Evaluation Excerpt */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
            Representative Architectural Assessment (Synthetic Evaluation)
          </span>
          <p className="text-xl sm:text-2xl italic font-medium text-slate-200 mt-6 leading-relaxed">
            "{project.testimonial.quote}"
          </p>
          <div className="mt-6 text-xs">
            <div className="font-bold text-white text-sm">{project.testimonial.author}</div>
            <div className="text-slate-400">{project.testimonial.role}, {project.testimonial.company}</div>
          </div>
        </div>
      </section>

      {/* 6. Related Services */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-white mb-6">Related Enterprise Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.relatedServices.map((svc, idx) => (
              <Link
                key={idx}
                href={`/services/${svc.category}/${svc.slug}`}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500">{svc.category}</span>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mt-0.5">
                    {svc.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Page CTA */}
      <PageCta
        title={`Explore Reference Architectures for ${project.title}`}
        subtitle="Schedule a 1-on-1 architecture review with our Principal Systems Engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
