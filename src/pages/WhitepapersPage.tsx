import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { FileText, Download, CheckCircle2, Shield, Lock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WhitepapersPageProps {
  onOpenWhitepaper?: () => void;
}

export const WhitepapersPage: React.FC<WhitepapersPageProps> = ({ onOpenWhitepaper }) => {
  const [downloadedSlug, setDownloadedSlug] = useState<string | null>(null);

  const whitepapers = [
    {
      slug: '2026-systems-dossier',
      title: '2026 Distributed Systems Architecture Dossier',
      subtitle: 'Eliminating Microservice Latency with Linux eBPF and Kernel Bypass Transport',
      pages: '48 Pages',
      format: 'PDF (Archival Grade)',
      abstract: 'A rigorous empirical benchmark of eBPF socket maps vs traditional TCP/IP iptables packet traversal across 10,000 node Kubernetes clusters under 100GbE line-rate loads.',
      badge: 'Flagship Research'
    },
    {
      slug: 'sovereign-cloud-residency',
      title: 'Cryptographic Sovereign Data Borders & GDPR Article 9 Governance',
      subtitle: 'Technical Implementation Guide for Cross-Border Multi-Cloud Telemetry',
      pages: '36 Pages',
      format: 'PDF + Reference Code',
      abstract: 'How global banking and health systems prevent sovereign data leaks across US, EU, and APAC cloud boundaries using hardware TPM attestation and deterministic egress fencing.',
      badge: 'Compliance & Security'
    },
    {
      slug: 'gpu-elasticity-benchmarks',
      title: 'Hyperscale GPU Cluster Efficiency & Memory Thrashing Mitigation',
      subtitle: 'Optimizing Distributed LLM Training & Inference Across Heterogeneous Cloud Fabrics',
      pages: '42 Pages',
      format: 'PDF + Benchmarks',
      abstract: 'Deep-dive analysis on solving GPU pipeline stalls, NCCL network deadlocks, and dynamic tensor checkpointing across AWS Trainium, NVIDIA H100, and Google TPU v5p pods.',
      badge: 'AI Infrastructure'
    },
    {
      slug: 'high-frequency-market-primitives',
      title: 'Microsecond Determinism in Cloud-Native Capital Markets',
      subtitle: 'Achieving Sub-Millisecond Financial Order Matching on Virtualized Compute',
      pages: '32 Pages',
      format: 'PDF + C++ Code Samples',
      abstract: 'Techniques for eliminating jitter, NUMA memory stalls, and hypervisor CPU steal in cloud-hosted algorithmic execution systems.',
      badge: 'Fintech Engineering'
    }
  ];

  const handleInstantDownload = (slug: string) => {
    setDownloadedSlug(slug);
    try {
      confetti({ particleCount: 40, spread: 50 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Technical Whitepapers & Architectural Research Dossiers"
        description="Download peer-reviewed technical whitepapers on distributed systems, eBPF kernel bypass, sovereign data fencing, and GPU cluster elasticity."
      />

      <PageHero
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Whitepapers' }]}
        kicker="Peer-Reviewed Engineering Dossiers"
        title="Technical Whitepapers & Systems Research"
        subtitle="Uncompromising deep-dives written by distributed systems fellows and kernel researchers. Download complete specifications and reproduction benchmarks."
        metricBadge={{
          value: '4 Flagship Dossiers',
          label: 'Independent Empirical Research'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {whitepapers.map((paper) => {
            const isDownloaded = downloadedSlug === paper.slug;

            return (
              <div
                key={paper.slug}
                className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {paper.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {paper.pages} · {paper.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium">
                    {paper.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-800/80">
                  {isDownloaded ? (
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Whitepaper Dispatched (PDF 8.4MB)</span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold">READY</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleInstantDownload(paper.slug)}
                        className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Technical Paper (PDF)</span>
                      </button>
                      {onOpenWhitepaper && (
                        <button
                          onClick={onOpenWhitepaper}
                          className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                        >
                          Request Hardcover Copy
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PageCta />
    </div>
  );
};
