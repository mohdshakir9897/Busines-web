import React, { useState } from 'react';
import { ArrowRight, Cloud, ShieldCheck, CheckCircle2, TrendingUp, DollarSign, Clock, Layers, Sparkles } from 'lucide-react';

interface ServicesBentoProps {
  onOpenDemo: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenDemo }) => {
  // Interactive ROI Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(100000); // $100k/mo default

  // Calculated Business Metrics
  const annualSpend = monthlySpend * 12;
  const annualSavings = Math.round(annualSpend * 0.42);
  const engineeringHoursSaved = Math.round((monthlySpend / 10000) * 32);
  const paybackDays = monthlySpend > 200000 ? 30 : 45;

  return (
    <section id="services" className="py-24 lg:py-36 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Enterprise SaaS Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Intelligent Cloud Architecture Built for Quantifiable Business ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Replace fragmented tooling with a unified SaaS operations console. Automate multi-cloud failover, slash compute spend by up to 42%, and guarantee continuous regulatory compliance.
          </p>
        </div>

        {/* Feature Showcase 1: Multi-Cloud Fabric & Cost Optimization Banner */}
        <div className="mb-24 p-8 lg:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <Cloud className="w-4 h-4" />
                <span>01 · Global Multi-Cloud Fabric</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Dynamic Compute Spot Arbitrage &amp; Zero-Downtime Multi-Region Sync
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                Seamlessly orchestrate workloads across AWS, Microsoft Azure, Google Cloud, and private bare metal. Our autonomous routing engine continuously detects spot pricing anomalies and latency routes, eliminating vendor lock-in while cutting compute bills.
              </p>

              {/* Business Value Proof Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dynamic Spot Arbitrage:</strong> Automatically shifts workloads to optimal cloud regions with zero downtime.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sovereign Data Fencing:</strong> Enforce strict regional boundaries to satisfy GDPR and domestic regulations.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Active-Active Multi-Region Sync:</strong> Sub-millisecond event serialization with 99.999% SLA guarantee.</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">-42%</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Avg. Cloud Compute Savings</div>
                </div>
                <div className="h-10 w-px bg-slate-800" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">42</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Global Cloud Regions</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Schedule Multi-Cloud Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Image Banner */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-950">
                <img
                  src="/src/assets/images/saas_multicloud_banner.jpg"
                  alt="HEXBYTE Global Cloud Topology & Cost Optimization Interface"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Topology: 3 Clouds Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase 2: Security & Compliance Governance Banner */}
        <div className="mb-24 p-8 lg:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Visual Image Banner */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-950">
                <img
                  src="/src/assets/images/saas_security_banner.jpg"
                  alt="HEXBYTE Enterprise Security Command Center & Compliance Scorecards"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Compliance Status: 100% Certified</span>
                </div>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>02 · Enterprise Security &amp; Compliance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Continuous Automated Compliance &amp; Zero-Trust Governance
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                Eliminate stressful quarterly audit preparations. HEXBYTE continuously checks infrastructure posture against SOC 2 Type II, ISO 27001, HIPAA, and GDPR frameworks, automatically producing auditor evidence trails without slowing down software deployments.
              </p>

              {/* Business Value Proof Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1-Click Audit Evidence:</strong> Export certified audit compliance packages on demand for SOC 2 and ISO examiners.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hardware TPM 2.0 Security:</strong> Cryptographically verified zero-trust identity with continuous mutual TLS.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Automated Threat Containment:</strong> Real-time anomaly detection isolates lateral risk before business impact.</span>
                </div>
              </div>

              {/* Compliance Chip Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-bold text-white">SOC 2 Type II</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Verified</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-bold text-white">ISO 27001</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Certified</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-bold text-white">HIPAA BAA</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Compliant</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-bold text-white">GDPR / EU</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Sovereign</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Request Security &amp; Compliance Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase 3: Interactive Enterprise ROI & Cost Savings Calculator */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
              <DollarSign className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive ROI Modeler</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Calculate Your Enterprise Cloud Cost Savings
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Select your organization's approximate monthly multi-cloud spend to model projected financial savings and operational velocity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Slider Control */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Monthly Multi-Cloud Infrastructure Spend
                  </div>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    ${monthlySpend.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Annual Baseline Run-Rate
                  </div>
                  <div className="text-xl font-bold text-slate-300 mt-1">
                    ${annualSpend.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ year</span>
                  </div>
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="20000"
                max="1000000"
                step="10000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />

              <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                <span>$20,000 / mo</span>
                <span>$250,000 / mo</span>
                <span>$500,000 / mo</span>
                <span>$1,000,000+ / mo</span>
              </div>
            </div>

            {/* Calculated Value Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Est. Annual Savings</span>
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">~42% compute reduction</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/30">
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Engineering Saved</span>
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  {engineeringHoursSaved} hrs
                </div>
                <div className="text-xs text-slate-400 mt-1">per month in NOC triage</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Platform Uptime</span>
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  99.999%
                </div>
                <div className="text-xs text-slate-400 mt-1">enforceable SLA credit</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Payback Period</span>
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">
                  &lt; {paybackDays} Days
                </div>
                <div className="text-xs text-slate-400 mt-1">rapid ROI realization</div>
              </div>
            </div>

            {/* CTA Action */}
            <div className="mt-8 text-center">
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Request Custom Enterprise Business Case Assessment
              </button>
              <div className="text-xs text-slate-400 mt-2">
                Includes dedicated sizing model with our enterprise infrastructure architects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



