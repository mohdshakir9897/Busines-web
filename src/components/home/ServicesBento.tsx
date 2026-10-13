import React, { useState } from 'react';
import { ArrowRight, Database, Cloud, ShieldCheck, Cpu, CheckCircle2, Copy, Check } from 'lucide-react';

interface ServicesBentoProps {
  onOpenDemo: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenDemo }) => {
  const [copied, setCopied] = useState(false);

  const sampleSnippet = `import { Hexbyte } from '@hexbyte/cloud';

// Initialize zero-copy event streaming mesh
const stream = await Hexbyte.stream.connect({
  topic: 'orders.settlement',
  serialization: 'binary-avro',
  maxLatencyMs: 1
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Enterprise Architecture &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Infrastructure Designed for Extreme Scale and Low Latency
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Eliminate operational bottlenecks with modular, hardware-accelerated distributed engines that deploy directly beneath your workload layer without refactoring your application.
          </p>
        </div>

        {/* 4-Card Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Autonomous Event Mesh (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl p-7 bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Autonomous Data &amp; Event Mesh</h3>
                    <p className="text-xs text-slate-400">High-throughput distributed event streaming</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                  &lt; 0.4ms P99 Latency
                </span>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Ingest petabyte-scale telemetry with sub-millisecond serialization. Self-healing partition rebalancing across hybrid clouds without pipeline stalls or manual schema interventions.
              </p>

              {/* Clean Metrics Breakdown */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Throughput</div>
                  <div className="text-lg font-semibold text-white mt-1">4.8M ev/sec</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">P99 Latency</div>
                  <div className="text-lg font-semibold text-emerald-400 mt-1">&lt; 0.38ms</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Packet Loss</div>
                  <div className="text-lg font-semibold text-white mt-1">0.00%</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Zero-downtime rebalancing</span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <span>Explore Data Mesh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Multi-Cloud Orchestration (Span 5) */}
          <div className="lg:col-span-5 rounded-2xl p-7 bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multi-Cloud Fabric Orchestrator</h3>
                    <p className="text-xs text-slate-400">Active-active multi-region synchronization</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Unified control plane spanning AWS, Microsoft Azure, Google Cloud, and private bare metal. Intelligent dynamic spot arbitrage lowers compute bills by up to 42%.
              </p>

              {/* Status List */}
              <div className="mt-6 space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">AWS us-east-1</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Connected
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Azure eastus2</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Connected
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">GCP europe-west3</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Connected
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">-42% Average Cloud Compute Spend</span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <span>View Multi-Cloud Fabric</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Zero-Trust Security (Span 5) */}
          <div className="lg:col-span-5 rounded-2xl p-7 bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Zero-Trust Security &amp; Compliance</h3>
                    <p className="text-xs text-slate-400">Cryptographically verified identity</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Hardware-rooted identity with continuous mutual TLS verification. Ephemeral certificate rotation and tamper-proof audit trails for regulated financial and health institutions.
              </p>

              {/* Compliance Badges */}
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">SOC 2 Type II</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">ISO 27001 Certified</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">HIPAA Compliant</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">Hardware TPM 2.0</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Bank-grade data boundaries</span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>Review Compliance Reports</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Kernel-Accelerated Network Core (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl p-7 bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Kernel-Accelerated Network Core</h3>
                    <p className="text-xs text-slate-400">Zero-copy low latency telemetry</p>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy SDK'}</span>
                </button>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Direct in-kernel packet inspection bypassing traditional networking stack overhead. Zero context switches and deterministic latency under high concurrent load.
              </p>

              {/* Clean Code Snippet */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <pre>
                  <code>
                    <span className="text-indigo-400">import</span> &#123; Hexbyte &#125; <span className="text-indigo-400">from</span> <span className="text-sky-300">'@hexbyte/cloud'</span>;{'\n\n'}
                    <span className="text-slate-500">// Initialize zero-copy event streaming mesh</span>{'\n'}
                    <span className="text-indigo-400">const</span> stream = <span className="text-indigo-400">await</span> Hexbyte.stream.<span className="text-blue-400">connect</span>(&#123;{'\n'}
                    {'  '}topic: <span className="text-sky-300">'orders.settlement'</span>,{'\n'}
                    {'  '}serialization: <span className="text-sky-300">'binary-avro'</span>,{'\n'}
                    {'  '}maxLatencyMs: <span className="text-amber-300">1</span>{'\n'}
                    &#125;);
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Deterministic throughput</span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <span>Read Technical Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white">Need a customized hybrid deployment architecture?</h4>
            <p className="text-sm text-slate-400 mt-1">
              Our principal systems architects work directly with your infrastructure leads to formulate a bespoke sizing model.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Architecture Consultation
          </button>
        </div>
      </div>
    </section>
  );
};


