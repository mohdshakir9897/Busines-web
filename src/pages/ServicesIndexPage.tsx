import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { SERVICES_DETAILED } from '../data/servicesData';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Shield, Layers } from 'lucide-react';

interface ServicesIndexPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Enterprise Services & Platform Capabilities"
        description="Explore the 8 core engines of the Hexbyte autonomous cloud platform: event mesh, multi-cloud fabric, zero-trust security, and high-frequency computing."
      />

      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        kicker="Modular Distributed Systems Suite"
        title="Eight Autonomous Engines Engineered for Hyperscale Resilience"
        subtitle="Eliminate operational fragmentation and proprietary cloud lock-in with low-latency primitives that deploy non-intrusively beneath your application workloads."
        metricBadge={{ value: '8 Engines', label: 'Complete Architectural Suite' }}
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Request Full Platform Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </PageHero>

      {/* Services Grid (8 Services) */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DETAILED.map((svc) => (
              <div
                key={svc.slug}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <span className="font-mono text-xs font-bold text-indigo-400">
                      SPEC {svc.num} · {svc.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {svc.heroStat.value}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium mt-1">
                    {svc.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {svc.summary}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Marquee Capabilities:
                    </span>
                    {svc.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 font-mono">
                    {svc.heroStat.label}
                  </div>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                  >
                    <span>Inspect Specification</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1 block">
              Architectural Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Hexbyte Kernel Mesh vs. Legacy Solutions
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider font-mono border-b border-slate-800">
                <tr>
                  <th className="p-4">Capability Dimension</th>
                  <th className="p-4 text-indigo-400">Hexbyte Autonomous Platform</th>
                  <th className="p-4">Traditional Envoy Sidecars</th>
                  <th className="p-4">Proprietary Cloud Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-normal">
                <tr>
                  <td className="p-4 font-semibold text-white">Memory Overhead per Pod</td>
                  <td className="p-4 text-emerald-400 font-mono font-semibold">&lt; 0.4 MB (eBPF Kernel Ring)</td>
                  <td className="p-4 text-slate-400 font-mono">25 - 50 MB (Envoy JVM/C++)</td>
                  <td className="p-4 text-slate-400 font-mono">N/A (Opaque Blackbox)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Inter-Service P99 Latency</td>
                  <td className="p-4 text-emerald-400 font-mono font-semibold">0.04 ms (Zero-Copy Bypass)</td>
                  <td className="p-4 text-slate-400 font-mono">3.8 - 6.2 ms (4x Socket Hops)</td>
                  <td className="p-4 text-slate-400 font-mono">12 - 40 ms (VPC Peering)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Cross-Cloud Failover Time</td>
                  <td className="p-4 text-emerald-400 font-mono font-semibold">&lt; 250 ms (Anycast BGP)</td>
                  <td className="p-4 text-slate-400 font-mono">15 - 30 Minutes (Manual/DNS)</td>
                  <td className="p-4 text-slate-400 font-mono">Unsupported (Locked to Single Vendor)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Data Residency Guarantees</td>
                  <td className="p-4 text-emerald-400 font-mono font-semibold">Hardware TPM Enclaves</td>
                  <td className="p-4 text-slate-400 font-mono">Software Network Tags</td>
                  <td className="p-4 text-slate-400 font-mono">Contractual Paper Terms Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Test Hexbyte on Your Staging Cluster?"
        subtitle="Deploy our non-intrusive eBPF daemonsets in under 30 minutes with zero downtime."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
