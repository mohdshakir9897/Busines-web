import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Server, Globe, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveLead } from '../utils/leadStorage';

export const QuotePage: React.FC = () => {
  const [nodes, setNodes] = useState<number>(500);
  const [regions, setRegions] = useState<number>(3);
  const [throughput, setThroughput] = useState<number>(20); // millions events / day
  const [complianceTier, setComplianceTier] = useState<'standard' | 'hipaa' | 'capital_markets'>('standard');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  // Interactive formula estimation
  const baseMonthly = 4800;
  const nodeCost = Math.max(0, (nodes - 100) * 8);
  const regionMultiplier = 1 + (regions - 1) * 0.25;
  const complianceAddon = complianceTier === 'hipaa' ? 2500 : complianceTier === 'capital_markets' ? 4500 : 0;
  const calculatedMonthly = Math.round((baseMonthly + nodeCost + (throughput * 40)) * regionMultiplier + complianceAddon);
  const annualDiscounted = Math.round(calculatedMonthly * 0.8);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !company) return;
    setSubmitted(true);
    
    saveLead({
      name: `${company} Lead Architect`,
      company,
      email,
      nodes: `${nodes} Nodes (${regions} Regions)`,
      timeline: 'Rate Lock 60 Days',
      source: 'Architecture Quote Calculator',
      notes: `Estimated: $${calculatedMonthly.toLocaleString()}/mo, Throughput: ${throughput}M ev/day, Tier: ${complianceTier}`
    });

    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Interactive Enterprise Sizing & Quote Estimator"
        description="Calculate customized multi-cloud compute, throughput, and sovereign compliance pricing with instant ROI modeling."
      />

      <PageHero
        breadcrumbs={[{ label: 'Conversion' }, { label: 'Get a Quote' }]}
        kicker="Workload Sizing & Cost Modeling"
        title="Interactive Infrastructure Sizing & Quote Calculator"
        subtitle="Transparent cost estimation based on nodes, throughput, active regions, and regulatory boundary requirements."
        metricBadge={{
          value: 'Instant Estimate',
          label: 'Guaranteed 20% Multi-Year Rate Lock'
        }}
      />

      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls / Inputs */}
          <div className="lg:col-span-7 space-y-8 p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Step 1: Define Workload Characteristics
              </span>
              <h3 className="text-2xl font-bold text-white">Cluster & Throughput Parameters</h3>
            </div>

            {/* Nodes Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-400" />
                  <span>Managed Compute Nodes / Instances</span>
                </span>
                <span className="font-mono text-indigo-400 font-bold text-sm">{nodes} Nodes</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={nodes}
                onChange={(e) => setNodes(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>50 Nodes</span>
                <span>2,500 Nodes</span>
                <span>5,000+ Nodes</span>
              </div>
            </div>

            {/* Regions Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>Active Multi-Cloud Regions</span>
                </span>
                <span className="font-mono text-sky-400 font-bold text-sm">{regions} Cloud Regions</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={regions}
                onChange={(e) => setRegions(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 Region</span>
                <span>6 Regions</span>
                <span>12+ Regions</span>
              </div>
            </div>

            {/* Daily Throughput */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Daily Ingested Telemetry Events</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold text-sm">{throughput}M Events / Day</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={throughput}
                onChange={(e) => setThroughput(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5M Events</span>
                <span>100M Events</span>
                <span>200M+ Events</span>
              </div>
            </div>

            {/* Compliance Tier */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-slate-300">
                Sovereign Regulatory Boundary Requirement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'SOC2 Type II (Standard)', desc: 'Enterprise baseline' },
                  { id: 'hipaa', label: 'HIPAA & Life Sciences', desc: '+ BAA & Genomic fence' },
                  { id: 'capital_markets', label: 'Capital Markets HFT', desc: '+ Microsecond low-jitter' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setComplianceTier(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      complianceTier === tier.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Calculation Panel & Lock-in Form */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-slate-900 border-2 border-indigo-500/50 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Estimated Enterprise Sizing
              </span>
              <div className="mt-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-medium">Annual Contract (20% Off):</span>
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    ${annualDiscounted.toLocaleString()}
                    <span className="text-xs text-slate-400 font-normal font-mono"> / mo</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-slate-400">
                  <span>Quarterly Flex Option:</span>
                  <span className="font-mono text-slate-300">${calculatedMonthly.toLocaleString()} / mo</span>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Includes all {regions} regions with zero egress charge guarantee</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Formal Sizing Proposal Generated</span>
                </div>
                <p>
                  Docket sent to <span className="text-white font-mono">{email}</span> for <span className="text-white font-medium">{company}</span>. An executive solutions architect will deliver your detailed bill-of-materials within two hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div className="text-xs font-semibold text-slate-200">
                  Step 2: Lock In This Estimated Rate
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Apex Global Systems"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
                >
                  <span>Generate Formal Bill of Materials</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-500 text-center">
                  Protected under mutual NDA. Rate lock valid for 60 calendar days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <PageCta />
    </div>
  );
};
