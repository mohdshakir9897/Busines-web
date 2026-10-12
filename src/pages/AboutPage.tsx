import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { ShieldCheck, Cpu, Globe, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

interface AboutPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="About HEXBYTE"
        description="Our mission to eliminate infrastructure friction and underwrite 99.999% uptime for the world's most critical distributed systems."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'About Us' }]}
        kicker="The Enterprise Infrastructure Standard"
        title="Engineered to Underwrite the World's Most Critical Workloads"
        subtitle="Hexbyte was founded by distributed systems veterans from AWS, Google, and Bell Labs to replace fragile legacy infrastructure with deterministic kernel-accelerated computing."
        metricBadge={{ value: '$42B+', label: 'Annual Transaction Volume Secured' }}
      />

      {/* 1. Founding Narrative */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Our Founding Vision
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Why We Built Hexbyte
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            In 2021, enterprise computing reached an inflection point. Organizations were promised that public cloud and microservices would accelerate velocity. Instead, engineering teams became bogged down by multi-cloud complexity, fragile sidecar proxies, and unpredictable cloud egress fees.
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            We asked a fundamental question: What if cloud infrastructure could heal itself at the Linux kernel level? What if distributed systems could provide mathematical guarantees of data residency, active-active multi-region synchronization, and zero-loss failover without requiring millions of lines of custom glue code?
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            Today, Hexbyte coordinates infrastructure across 42 global cloud regions, trusted by Fortune 500 banks, life sciences networks, and hyperscale media platforms.
          </p>
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1 block">
              Architectural Values
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Three Non-Negotiable Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Mathematical Determinism</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                We reject heuristic trial-and-error. Every failover decision, queue backpressure mitigation, and routing event is formally proven against strict mathematical invariants.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Hardware-Enforced Security</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Security cannot depend on software promises alone. We bind encryption keys and execution posture to physical hardware TPM chips and AMD SEV-SNP enclaves.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Radical Vendor Neutrality</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                We believe enterprises must never be held hostage by proprietary cloud silos. Hexbyte treats cloud providers as fungible compute pools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Scale Numbers */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-4xl font-extrabold font-mono text-white tabular-nums">42</div>
              <div className="text-xs font-semibold text-indigo-400 mt-1">Global Cloud Regions</div>
              <p className="text-[11px] text-slate-400 mt-2">Active-active synchronization across 4 continents</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-4xl font-extrabold font-mono text-white tabular-nums">140+</div>
              <div className="text-xs font-semibold text-emerald-400 mt-1">Fortune 1000 Deployments</div>
              <p className="text-[11px] text-slate-400 mt-2">Powering tier-1 banking, healthcare, and retail</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-4xl font-extrabold font-mono text-white tabular-nums">99.999%</div>
              <div className="text-xs font-semibold text-sky-400 mt-1">Historical Uptime SLA</div>
              <p className="text-[11px] text-slate-400 mt-2">Underwritten by contractual financial credits</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-4xl font-extrabold font-mono text-white tabular-nums">240+</div>
              <div className="text-xs font-semibold text-purple-400 mt-1">Systems Engineers</div>
              <p className="text-[11px] text-slate-400 mt-2">Distributed across SF, NY, London, Zurich, and Singapore</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Office Callouts */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">Executive Team</span>
              <h3 className="text-2xl font-bold text-white mt-1">Meet Our Leadership</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Led by distributed systems veterans with deep roots in kernel programming, cloud operations, and financial engineering.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link href="/leadership" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5">
                <span>View Leadership Profiles & Advisory Board →</span>
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400">Worldwide Footprint</span>
              <h3 className="text-2xl font-bold text-white mt-1">Global Office Network</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Headquartered in San Francisco with regional engineering hubs in New York, London, Zurich, and Singapore.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link href="/offices" className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5">
                <span>Explore Global Offices & Datacenter Hubs →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
