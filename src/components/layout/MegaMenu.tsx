import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Cpu, Database, Cloud, FileText, Sparkles } from 'lucide-react';
import { NAVIGATION_DATA } from '../../data/navigationData';

interface MegaMenuProps {
  activeTab: string | null;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeTab, onClose, onNavigate }) => {
  if (!activeTab) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        onMouseLeave={onClose}
        className="absolute top-full left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl py-8 px-6 text-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          {activeTab === 'Services' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 pr-6 border-r border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Core Architecture</span>
                <h4 className="text-xl font-bold text-white mt-1">Autonomous Cloud Platform</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Engineered to eliminate latency, vendor lock-in, and operational fragmentation across hyperscale multi-cloud environments.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); onNavigate('#services'); onClose(); }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    <span>View all 7 service specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {NAVIGATION_DATA.services.map((svc, i) => (
                  <a
                    key={i}
                    href={svc.href}
                    onClick={(e) => { e.preventDefault(); onNavigate(svc.href); onClose(); }}
                    className="group p-3.5 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-transform">
                      {i === 0 && <Layers className="w-4 h-4" />}
                      {i === 1 && <Database className="w-4 h-4" />}
                      {i === 2 && <Cloud className="w-4 h-4" />}
                      {i === 3 && <ShieldCheck className="w-4 h-4" />}
                      {i === 4 && <Cpu className="w-4 h-4" />}
                      {i >= 5 && <Sparkles className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors flex items-center gap-2">
                        <span>{svc.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1 leading-normal">
                        {svc.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Industries' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 pr-6 border-r border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">Vertical Specialization</span>
                <h4 className="text-xl font-bold text-white mt-1">Enterprise Sectors</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Purpose-built compliance and architecture blueprints tailored for regulated and mission-critical industries.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <a
                    href="#industries"
                    onClick={(e) => { e.preventDefault(); onNavigate('#industries'); onClose(); }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <span>Explore industry blueprints</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {NAVIGATION_DATA.industries.map((ind, i) => (
                  <a
                    key={i}
                    href={ind.href}
                    onClick={(e) => { e.preventDefault(); onNavigate(ind.href); onClose(); }}
                    className="group p-3.5 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-xs font-mono font-bold">0{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors flex items-center gap-2">
                        <span>{ind.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1 leading-normal">
                        {ind.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Proof' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Featured Transformation</span>
                <h4 className="text-base font-bold text-white mt-1">Helios Global Bank</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Eliminated cloud migration latency across 18M consumer accounts with verified 4.2ms global settlement.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold">$14.2M Saved</span>
                  <span>·</span>
                  <span className="text-white">Zero Downtime</span>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {NAVIGATION_DATA.proof.map((pf, i) => (
                  <a
                    key={i}
                    href={pf.href}
                    onClick={(e) => { e.preventDefault(); onNavigate(pf.href); onClose(); }}
                    className="group p-4 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
                  >
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors flex items-center justify-between">
                      <span>{pf.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pf.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Company' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NAVIGATION_DATA.company.map((co, i) => (
                <a
                  key={i}
                  href={co.href}
                  onClick={(e) => { e.preventDefault(); onNavigate(co.href); onClose(); }}
                  className="group p-4 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                      {co.name}
                    </span>
                    {co.badge && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        {co.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {co.description}
                  </p>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'Resources' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NAVIGATION_DATA.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.href}
                  onClick={(e) => { e.preventDefault(); onNavigate(res.href); onClose(); }}
                  className="group p-4 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all flex items-start gap-3"
                >
                  <FileText className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                      {res.name}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
