import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { CheckCircle2, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';

interface ProcessPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const steps = [
    {
      phase: 'Phase 01',
      title: 'Autonomous Ingestion & Dependency Discovery',
      duration: 'Days 1 – 7',
      objective: 'Deploy non-intrusive eBPF daemonsets to observe production traffic without downtime.',
      deliverable: 'Real-time topological call graph, latency hot-spot map, and baseline SLA profiling.',
      tasks: [
        'Install lightweight eBPF probes across host kernels (Linux 5.4+).',
        'Map upstream/downstream service RPC relationships and identify cascading bottlenecks.',
        'Profile memory allocation, socket latency, and thread contention at nanosecond precision.'
      ]
    },
    {
      phase: 'Phase 02',
      title: 'Policy-as-Code & Sovereign Boundary Formalization',
      duration: 'Days 8 – 20',
      objective: 'Codify regulatory boundaries (GDPR, HIPAA, DORA) and operational SLA invariants.',
      deliverable: 'Declarative OPA policy suite and automated hardware TPM attestation bindings.',
      tasks: [
        'Define cross-region traffic routing policies in declarative YAML or OpenTofu modules.',
        'Bind cryptographic encryption keys to sovereign hardware HSMs.',
        'Execute CI/CD compliance pre-checks to fail any build attempting unauthorized cross-border calls.'
      ]
    },
    {
      phase: 'Phase 03',
      title: 'Live Orchestration & Multi-Cloud Mesh Activation',
      duration: 'Days 21 – 35',
      objective: 'Activate active-active multi-cloud routing with intelligent spot compute arbitrage.',
      deliverable: 'Zero-downtime traffic cutover with Anycast BGP sub-second DNS failover.',
      tasks: [
        'Shift live ingress traffic onto the Hexbyte event mesh with 1% canary slicing.',
        'Run automated chaos engineering drills simulating complete regional datacenter blackouts.',
        'Validate continuous database replication consensus under peak simulated load.'
      ]
    },
    {
      phase: 'Phase 04',
      title: 'Autonomous Continuous Optimization & SRE Copilot',
      duration: 'Day 36 Onward',
      objective: 'Continuous closed-loop anomaly detection, safe automated runbooks, and cost optimization.',
      deliverable: 'Executive weekly efficiency reporting, 99.999% SLA proof, and 40%+ cloud cost savings.',
      tasks: [
        'Activate autonomous causal incident remediation with sandboxed pre-execution verification.',
        'Continuous spot instance arbitrage dynamically rightsizing compute fleets.',
        'Quarterly SOC2 Type II, ISO 27001, and HIPAA compliance evidence packages generated automatically.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Implementation Methodology & Process"
        description="Our proven 4-phase enterprise rollout process: from zero state to live autonomous multi-cloud production in under 45 days."
      />

      <PageHero
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Implementation Process' }]}
        kicker="Deployment Methodology"
        title="From Zero-State to Live Autonomous Production in Under 45 Days"
        subtitle="A deterministic, low-risk implementation lifecycle engineered for regulated Fortune 500 infrastructure. No rewrites, no downtime, underwritten by enforceable SLAs."
        metricBadge={{ value: '< 45 Days', label: 'Average Enterprise Time-to-Production' }}
      />

      {/* 1. Step-by-Step Methodology */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl font-extrabold text-indigo-400">
                    {st.phase}
                  </span>
                  <span className="text-slate-600">/</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {st.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Audited Milestone</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {st.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {st.objective}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-800/80">
                <div className="md:col-span-7 space-y-2.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Key Execution Tasks:
                  </span>
                  {st.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-5 p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Contractual Deliverable
                    </span>
                    <p className="text-xs font-semibold text-white mt-1 leading-snug">
                      {st.deliverable}
                    </p>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono mt-4 pt-2 border-t border-slate-800">
                    Zero Application Downtime
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        title="Schedule Your 45-Day Architecture Roadmap"
        subtitle="Meet directly with an Enterprise Principal Systems Architect to assess cluster compatibility and timeline."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
