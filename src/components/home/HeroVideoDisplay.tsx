import React, { useState } from 'react';
import { Shield, TrendingUp, Globe, CheckCircle2, DollarSign, Activity, Zap, ArrowUpRight } from 'lucide-react';

interface HeroVideoDisplayProps {
  posterImage?: string;
  accentColor?: string;
  slideId?: string;
}

export const HeroVideoDisplay: React.FC<HeroVideoDisplayProps> = () => {
  const [activeModule, setActiveModule] = useState<'overview' | 'savings' | 'regions' | 'security'>('overview');

  const modules = [
    {
      id: 'overview' as const,
      label: 'Performance Overview',
      stat: '99.999% Uptime',
      desc: 'Real-time telemetry across all connected production clouds with zero packet degradation.'
    },
    {
      id: 'savings' as const,
      label: 'Cost Optimization',
      stat: '$1.1M / yr Saved',
      desc: 'Dynamic compute spot arbitrage and idle capacity pruning reducing bills by up to 42%.'
    },
    {
      id: 'regions' as const,
      label: 'Global Multi-Region',
      stat: '42 Active Regions',
      desc: 'Active-active synchronous data replication across AWS, Azure, GCP, and Equinix bare metal.'
    },
    {
      id: 'security' as const,
      label: 'Security & Compliance',
      stat: 'A+ Audit Score',
      desc: 'Continuous real-time SOC 2 Type II, ISO 27001, and HIPAA compliance policy attestation.'
    }
  ];

  return (
    <div className="w-full rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-700/80 shadow-2xl flex flex-col font-sans transition-all duration-300">
      {/* Topbar: SaaS Window Header */}
      <div className="px-5 py-3.5 bg-slate-950/95 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* macOS Control dots & Console Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
            <span>HEXBYTE Cloud Operations Console</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Production Active
            </span>
          </span>
        </div>

        {/* Live Executive KPI Chips */}
        <div className="flex items-center gap-3 text-xs">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Efficiency:</span>
            <span className="font-semibold text-emerald-400">+42%</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400">SLA:</span>
            <span className="font-semibold text-white">99.999%</span>
          </div>
        </div>
      </div>

      {/* Main SaaS Interface Banner Display */}
      <div className="relative group overflow-hidden bg-slate-950">
        <img
          src="/src/assets/images/saas_dashboard_hero.jpg"
          alt="HEXBYTE Enterprise Cloud Intelligence & Operations Platform Dashboard"
          className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
        />

        {/* Floating Active Feature Highlight Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-2xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {modules.find((m) => m.id === activeModule)?.label}
                </span>
              </div>
              <div className="text-lg font-bold text-white mt-1">
                {modules.find((m) => m.id === activeModule)?.stat}
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {modules.find((m) => m.id === activeModule)?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Module Switcher Bar (Zero Code!) */}
      <div className="p-4 bg-slate-950/90 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {modules.map((mod) => {
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600/20 border border-indigo-500/40 text-white shadow-sm'
                  : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <div className="text-xs font-semibold flex items-center justify-between">
                <span>{mod.label}</span>
                {isActive && <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />}
              </div>
              <div className={`text-sm font-bold mt-1 ${isActive ? 'text-indigo-300' : 'text-slate-300'}`}>
                {mod.stat}
              </div>
            </button>
          );
        })}
      </div>

      {/* Enterprise Certifications Footer Bar */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            SOC 2 Type II
          </span>
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ISO 27001 Certified
          </span>
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            HIPAA &amp; GDPR Compliant
          </span>
        </div>
        <span className="text-slate-400 font-semibold">Underwritten by 99.999% Financial SLA</span>
      </div>
    </div>
  );
};

