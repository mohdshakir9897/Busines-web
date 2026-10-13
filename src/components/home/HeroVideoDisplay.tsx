import React, { useState } from 'react';
import { Copy, Check, Terminal, Server, CheckCircle2, Globe, Shield, Code2 } from 'lucide-react';

interface HeroVideoDisplayProps {
  posterImage?: string;
  accentColor?: string;
  slideId?: string;
}

export const HeroVideoDisplay: React.FC<HeroVideoDisplayProps> = () => {
  const [activeTab, setActiveTab] = useState<'sdk' | 'health' | 'curl'>('sdk');
  const [copied, setCopied] = useState(false);

  const sampleTypeScript = `import { Hexbyte } from '@hexbyte/cloud';

// Deploy resilient multi-region infrastructure mesh
const cluster = await Hexbyte.clusters.deploy({
  name: 'production-core-mesh',
  regions: ['us-east-1', 'eu-central-1', 'ap-northeast-1'],
  failover: 'active-active',
  encryption: 'hardware-tpm-2.0'
});

// Real-time cluster status & verified SLA
console.log(cluster.status);
// => { status: "ready", latency: "0.38ms", sla: "99.999%" }`;

  const sampleCurl = `curl -X POST https://api.hexbyte.com/v1/clusters/deploy \\
  -H "Authorization: Bearer hex_live_sk94819..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "environment": "production",
    "regions": ["us-east-1", "eu-central-1", "ap-northeast-1"],
    "zero_downtime_failover": true
  }'`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'sdk' ? sampleTypeScript : sampleCurl;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const regions = [
    { name: 'US East (N. Virginia)', cloud: 'AWS us-east-1', latency: '0.38ms', uptime: '99.999%', status: 'Operational' },
    { name: 'Europe (Frankfurt)', cloud: 'GCP europe-west3', latency: '0.44ms', uptime: '99.999%', status: 'Operational' },
    { name: 'Asia Pacific (Tokyo)', cloud: 'Azure japaneast', latency: '0.82ms', uptime: '99.999%', status: 'Operational' },
    { name: 'Private Enclave', cloud: 'Bare-Metal Equinix', latency: '0.19ms', uptime: '100.0%', status: 'Operational' }
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col font-sans">
      {/* Stripe-style Window Topbar */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-4">
        {/* Window controls & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-slate-700/80 inline-block" />
          </div>
          <span className="text-xs font-medium text-slate-400 hidden sm:inline">
            hexbyte-infrastructure-mesh
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('sdk')}
            className={`px-3 py-1 rounded-md transition-colors font-medium flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'sdk'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>TypeScript</span>
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`px-3 py-1 rounded-md transition-colors font-medium flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'health'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Cluster Health</span>
          </button>
          <button
            onClick={() => setActiveTab('curl')}
            className={`px-3 py-1 rounded-md transition-colors font-medium flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'curl'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>cURL API</span>
          </button>
        </div>

        {/* Copy Button */}
        {activeTab !== 'health' && (
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Copy code"
            aria-label="Copy code snippet"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Main Body */}
      <div className="p-5 flex-1 min-h-[380px] flex flex-col justify-between">
        {/* Tab 1: TypeScript SDK */}
        {activeTab === 'sdk' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <pre className="text-slate-300">
                <code>
                  <span className="text-indigo-400 font-semibold">import</span> &#123; Hexbyte &#125; <span className="text-indigo-400 font-semibold">from</span> <span className="text-sky-300">'@hexbyte/cloud'</span>;{'\n\n'}
                  <span className="text-slate-500">// Deploy resilient multi-region infrastructure mesh</span>{'\n'}
                  <span className="text-indigo-400 font-semibold">const</span> cluster = <span className="text-indigo-400 font-semibold">await</span> Hexbyte.clusters.<span className="text-blue-400">deploy</span>(&#123;{'\n'}
                  {'  '}name: <span className="text-sky-300">'production-core-mesh'</span>,{'\n'}
                  {'  '}regions: [<span className="text-sky-300">'us-east-1'</span>, <span className="text-sky-300">'eu-central-1'</span>, <span className="text-sky-300">'ap-northeast-1'</span>],{'\n'}
                  {'  '}failover: <span className="text-sky-300">'active-active'</span>,{'\n'}
                  {'  '}encryption: <span className="text-sky-300">'hardware-tpm-2.0'</span>{'\n'}
                  &#125;);{'\n\n'}
                  <span className="text-slate-500">// Real-time cluster status &amp; verified SLA</span>{'\n'}
                  console.<span className="text-blue-400">log</span>(cluster.status);
                </code>
              </pre>
            </div>

            {/* Response Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-400">Response:</span>
                <span className="font-mono text-emerald-400 font-medium">200 OK — Ready in 0.38ms</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">3 Regions Synchronized</span>
            </div>
          </div>
        )}

        {/* Tab 2: Cluster Health Dashboard */}
        {activeTab === 'health' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">All Systems Operational</span>
              </div>
              <span className="text-slate-400 font-medium">Overall Uptime: 99.999%</span>
            </div>

            {/* Region Health Table */}
            <div className="divide-y divide-slate-800/80 text-xs">
              {regions.map((r, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-medium text-white">{r.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{r.cloud}</div>
                  </div>
                  <div className="flex items-center gap-6 text-right">
                    <div>
                      <div className="font-mono text-slate-300 font-medium">{r.latency}</div>
                      <div className="text-[10px] text-slate-500">Latency</div>
                    </div>
                    <div>
                      <div className="font-mono text-slate-300 font-medium">{r.uptime}</div>
                      <div className="text-[10px] text-slate-500">Uptime</div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {r.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: cURL API */}
        {activeTab === 'curl' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <pre>
                <code>
                  <span className="text-emerald-400">curl</span> -X POST https://api.hexbyte.com/v1/clusters/deploy \{'\n'}
                  {'  '}-H <span className="text-sky-300">"Authorization: Bearer hex_live_sk94819..."</span> \{'\n'}
                  {'  '}-H <span className="text-sky-300">"Content-Type: application/json"</span> \{'\n'}
                  {'  '}-d <span className="text-amber-300">'&#123;</span>{'\n'}
                  {'    '}<span className="text-sky-300">"environment"</span>: <span className="text-sky-300">"production"</span>,{'\n'}
                  {'    '}<span className="text-sky-300">"regions"</span>: [<span className="text-sky-300">"us-east-1"</span>, <span className="text-sky-300">"eu-central-1"</span>],{'\n'}
                  {'    '}<span className="text-sky-300">"zero_downtime_failover"</span>: <span className="text-indigo-400">true</span>{'\n'}
                  {'  '}<span className="text-amber-300">&#125;'</span>
                </code>
              </pre>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-400">Response Status:</span>
                <span className="font-mono text-emerald-400 font-medium">HTTP/2 200 OK</span>
              </div>
              <span className="text-slate-400 text-xs">Zero Egress Fees Guaranteed</span>
            </div>
          </div>
        )}

        {/* Footer Summary Bar */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">SOC 2 Type II &amp; ISO 27001 Certified</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">Underwritten by 99.999% SLA</span>
        </div>
      </div>
    </div>
  );
};

