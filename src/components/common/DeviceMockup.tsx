import React, { useState } from 'react';
import { Maximize2, X, Terminal, Shield, Activity, Cpu, Database, CheckCircle2, ChevronRight } from 'lucide-react';

interface DeviceMockupProps {
  projectTitle: string;
  client: string;
  slug: string;
  accentColor?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  projectTitle,
  client,
  slug,
  accentColor = '#3B82F6'
}) => {
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);

  return (
    <div className="w-full space-y-12">
      {/* Device Duo: Laptop (Desktop) + Phone (Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* 1. Laptop Mockup (75% width on desktop) */}
        <div className="lg:col-span-8 flex flex-col items-center">
          <div className="w-full max-w-3xl rounded-t-2xl bg-slate-900 border-2 border-slate-700/80 p-3 shadow-2xl relative">
            {/* Laptop Bezel Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
              <div className="font-mono text-[9px] text-slate-500">https://core.{slug}.hexbyte.com</div>
            </div>

            {/* Laptop Screen Content (Interactive High-Density UI) */}
            <div className="aspect-[16/10] bg-slate-950 rounded-lg p-4 overflow-hidden border border-slate-800/80 flex flex-col justify-between font-sans relative">
              {/* Top Navigation Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="font-bold text-white font-mono text-[11px]">{client}</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-400 text-[10px]">Production Control Plane</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>HEXBYTE-NODE-SYNC 99.999%</span>
                </div>
              </div>

              {/* Middle Dashboard Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 my-3">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[9px] text-slate-400 uppercase font-mono">Live Ingestion Rate</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">42.8M <span className="text-[10px] text-slate-400">req/s</span></div>
                  <div className="text-[9px] text-emerald-400 mt-1">↑ 14% peak surge</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[9px] text-slate-400 uppercase font-mono">Median P99 Jitter</div>
                  <div className="text-lg font-bold font-mono text-sky-400 mt-0.5">0.04 <span className="text-[10px] text-slate-400">µs</span></div>
                  <div className="text-[9px] text-slate-400 mt-1">Kernel bypass active</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[9px] text-slate-400 uppercase font-mono">Multi-Cloud Invariant</div>
                  <div className="text-lg font-bold font-mono text-indigo-400 mt-0.5">100% <span className="text-[10px] text-slate-400">Pass</span></div>
                  <div className="text-[9px] text-emerald-400 mt-1">0 uncommitted states</div>
                </div>
              </div>

              {/* Bottom Real-Time Telemetry Graph Simulation */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span className="font-semibold text-slate-200">Continuous Cluster Health Telemetry</span>
                  <span className="font-mono text-[9px]">42 Global Regions Active</span>
                </div>
                {/* SVG Line Graph */}
                <svg className="w-full h-16" viewBox="0 0 500 80" fill="none">
                  <path
                    d="M0,60 Q50,30 100,45 T200,20 T300,35 T400,10 T500,25"
                    stroke="#4F46E5"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M0,60 Q50,30 100,45 T200,20 T300,35 T400,10 T500,25 L500,80 L0,80 Z"
                    fill="url(#grad-laptop)"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="grad-laptop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#0B0F19" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating notification badge */}
              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-lg bg-indigo-950/90 border border-indigo-500/40 text-[10px] text-indigo-200 flex items-center gap-2 shadow-lg">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust Hardware Enclave Verified</span>
              </div>
            </div>
          </div>
          {/* Laptop Base Stand */}
          <div className="w-full max-w-3xl h-3.5 bg-slate-800 rounded-b-xl border-t border-slate-700 shadow-md flex justify-center">
            <div className="w-20 h-1.5 bg-slate-700 rounded-b" />
          </div>
        </div>

        {/* 2. Phone Mockup (Vertical mobile screen) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-64 rounded-[36px] bg-slate-900 border-4 border-slate-700 p-2.5 shadow-2xl relative">
            {/* Phone Notch/Island */}
            <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
            </div>

            {/* Mobile Screen Content */}
            <div className="aspect-[9/18] bg-slate-950 rounded-[28px] p-3.5 flex flex-col justify-between overflow-hidden border border-slate-800">
              <div>
                {/* Mobile Header */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-bold text-white font-mono">{client.slice(0, 10)}</span>
                  <span className="text-emerald-400">99.999% SLA</span>
                </div>

                <div className="my-3 space-y-2">
                  <div className="text-[11px] font-bold text-white">Executive Mobile Guard</div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[9px] text-slate-400">Cluster Status</div>
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>All 14 Nodes Healthy</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[9px] text-slate-400">Pending Authorization</div>
                    <div className="text-xs font-bold text-white">Canary Deployment 2.4</div>
                    <div className="text-[9px] text-slate-400">0.02% error rate threshold</div>
                  </div>
                </div>
              </div>

              {/* Bottom Biometric Action Button */}
              <div className="space-y-2">
                <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow">
                  <Shield className="w-3 h-3 text-indigo-300" />
                  <span>FaceID Authorize</span>
                </button>
                <div className="w-20 h-1 bg-slate-800 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Screenshot Gallery Cards with Lightbox trigger */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Architecture & Interface Visuals
          </h3>
          <span className="text-xs text-slate-400">Click any interface to expand high-resolution view</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gallery Card 1 */}
          <div
            onClick={() => setSelectedScreen('Core Infrastructure Topology & Node Orchestration Map')}
            className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all cursor-pointer group"
          >
            <div className="aspect-[16/10] bg-slate-950 rounded-xl p-3 border border-slate-800/80 flex flex-col justify-between overflow-hidden relative group-hover:scale-101 transition-transform">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono text-indigo-400">01. INFRASTRUCTURE TOPOLOGY</span>
                <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300" />
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="w-16 h-16 rounded-full border border-indigo-500/40 flex items-center justify-center animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-sky-400/50 flex items-center justify-center">
                    <Database className="w-5 h-5 text-sky-400" />
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 truncate">Multi-Region Kubernetes Invariant Mesh</div>
            </div>
            <div className="mt-3 text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              Global Node Orchestration Console
            </div>
          </div>

          {/* Gallery Card 2 */}
          <div
            onClick={() => setSelectedScreen('Microsecond Transaction Latency & Invariant Stream')}
            className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all cursor-pointer group"
          >
            <div className="aspect-[16/10] bg-slate-950 rounded-xl p-3 border border-slate-800/80 flex flex-col justify-between overflow-hidden relative group-hover:scale-101 transition-transform">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono text-emerald-400">02. LATENCY INVARIANT STREAM</span>
                <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300" />
              </div>
              <div className="space-y-1.5 my-auto">
                <div className="flex justify-between text-[9px] font-mono text-slate-300">
                  <span>Packet Traversal P99</span>
                  <span className="text-emerald-400">0.04µs</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[94%]" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-300">
                  <span>Cross-Cloud Consensus</span>
                  <span className="text-sky-400">1.2ms</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full w-[88%]" />
                </div>
              </div>
              <div className="text-[10px] text-slate-400 truncate">Hardware eBPF Kernel Probe Telemetry</div>
            </div>
            <div className="mt-3 text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              Microsecond Telemetry & Invariant Feed
            </div>
          </div>

          {/* Gallery Card 3 */}
          <div
            onClick={() => setSelectedScreen('Hardware Enclave & Sovereign Boundary Audit Log')}
            className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all cursor-pointer group"
          >
            <div className="aspect-[16/10] bg-slate-950 rounded-xl p-3 border border-slate-800/80 flex flex-col justify-between overflow-hidden relative group-hover:scale-101 transition-transform">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono text-sky-400">03. COMPLIANCE AUDIT VAULT</span>
                <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300" />
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300 space-y-1">
                <div className="text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>TPM 2.0 ATTESTATION: VERIFIED</span>
                </div>
                <div className="text-slate-400">JURISDICTION: EU-SOVEREIGN-SECURE</div>
                <div className="text-slate-500">HASH: 8f9b...a142 [WORM-LOCKED]</div>
              </div>
              <div className="text-[10px] text-slate-400 truncate">Continuous Regulatory Evidence Log</div>
            </div>
            <div className="mt-3 text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
              Sovereign Boundary Audit Inspector
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedScreen(null)}
        >
          <div
            className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedScreen(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>Full-Screen Interface Blueprint</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{selectedScreen}</h4>

            {/* High-Resolution Screen Render */}
            <div className="aspect-[16/9] w-full rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-sm text-white font-bold">{projectTitle}</span>
                <span className="text-xs font-mono text-emerald-400">LIVE PRODUCTION TELEMETRY</span>
              </div>
              <div className="grid grid-cols-4 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400">Total Transactions</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">1.84 Billion</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400">Peak Latency</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">0.04µs</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400">Fault Recovery</div>
                  <div className="text-2xl font-bold font-mono text-sky-400 mt-1">&lt; 180ms</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-400">Hardware Nodes</div>
                  <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">42,000+</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Verified against SOC2 Type II, ISO 27001, and HIPAA regulatory invariants.</span>
                <button
                  onClick={() => setSelectedScreen(null)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
