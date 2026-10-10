import React, { useState } from 'react';
import { ArrowRight, Database, Cloud, ShieldCheck, Cpu, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../../data/homeContent';

interface ServicesBentoProps {
  onOpenDemo: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenDemo }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-sky-400" />;
      default: return <TrendingUp className="w-5 h-5 text-amber-400" />;
    }
  };

  const activeService = SERVICES_LIST.find(s => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Enterprise Architecture & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Six Autonomous Engines Engineered for Unyielding Resilience
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Eliminate operational silos and legacy latency with modular distributed systems that deploy beneath your workload layer with zero application code refactoring.
          </p>
        </div>

        {/* 6-Service Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`p-7 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                selectedServiceId === service.id
                  ? 'bg-slate-900 border-indigo-500/60 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500/30'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header: Num + Category + Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500">{service.num}.</span>
                    <span className="text-xs text-slate-400 font-medium">{service.category}</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {service.description}
                </p>

                {/* Impact Metric Strip */}
                <div className="my-5 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400">{service.impactLabel}</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                      {service.impactMetric}
                    </div>
                  </div>
                </div>

                {/* Concrete Features list */}
                <ul className="space-y-2 mt-4">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDemo();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Action Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">Need a customized hybrid deployment architecture?</h4>
            <p className="text-sm text-slate-300 mt-1">
              Our principal systems architects work directly with your infrastructure leads to formulate a bespoke sizing model.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow transition-colors whitespace-nowrap"
          >
            Request Architectural Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
