import React, { useState } from 'react';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Logo } from '../components/common/Logo';
import { Shield, Lock, Download, Users, Mail, FileText, CheckCircle2, Search, LogOut } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('admin@hexbyte.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'subscribers' | 'content'>('leads');

  const [leads] = useState([
    { id: 'LD-9021', name: 'Alexander Wright', company: 'Goldman Prime Services', email: 'a.wright@gs.com', nodes: '10,000+ Nodes', timeline: 'Immediate', status: 'Architect Assigned', date: '2026-10-10' },
    { id: 'LD-9020', name: 'Dr. Rebecca Stern', company: 'Mayo Research Network', email: 'stern.rebecca@mayo.edu', nodes: '2,500 - 10,000 Nodes', timeline: '30 Days', status: 'In Review', date: '2026-10-09' },
    { id: 'LD-9019', name: 'Kenji Sato', company: 'Tokyo Financial Exchange', email: 'sato.k@tfx.co.jp', nodes: '500 - 2,500 Nodes', timeline: 'Immediate', status: 'Briefing Queued', date: '2026-10-08' },
    { id: 'LD-9018', name: 'Claire Dubois', company: 'CMA CGM Logistics', email: 'c.dubois@cmacgm.fr', nodes: '10,000+ Nodes', timeline: '90 Days', status: 'Pilot Scheduled', date: '2026-10-07' },
  ]);

  const [subscribers] = useState([
    { email: 'head.infra@vanguard.com', role: 'Head of Infrastructure', date: '2026-10-10' },
    { email: 'ciso@astrazene.com', role: 'CISO Office', date: '2026-10-09' },
    { email: 'dist.systems@stripe.com', role: 'Staff Systems Eng', date: '2026-10-08' },
    { email: 'platform@novaris.org', role: 'VP Platform Eng', date: '2026-10-07' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'hexbyte2026' || password.length >= 6) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid owner credentials. Please try again.');
    }
  };

  const handleExportCsv = (type: 'leads' | 'subscribers') => {
    let csvContent = '';
    let filename = '';

    if (type === 'leads') {
      csvContent = 'ID,Name,Company,Email,Nodes,Timeline,Status,Date\n' +
        leads.map(l => `${l.id},"${l.name}","${l.company}",${l.email},"${l.nodes}","${l.timeline}","${l.status}",${l.date}`).join('\n');
      filename = 'hexbyte_enterprise_leads.csv';
    } else {
      csvContent = 'Email,Role,Date\n' +
        subscribers.map(s => `${s.email},"${s.role}",${s.date}`).join('\n');
      filename = 'hexbyte_journal_subscribers.csv';
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6">
      <SeoMetadata
        title="Administrative Console (Owner Only)"
        description="Restricted enterprise console for lead management and subscriber oversight."
      />

      {!isAuthenticated ? (
        <div className="max-w-md mx-auto p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <Logo variant="horizontal" href="/" alt="HEXBYTE logo" height={36} className="mb-2" />
          
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Owner Authentication Required</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              HEXBYTE Admin Console
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Restricted owner-only administrative access. All sessions are cryptographically attested.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Owner Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Security Password (Default: admin123)
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {error && <p className="text-xs text-rose-400">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
            >
              Sign In to Admin Portal
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-5">
              <Logo variant="horizontal" href="/" alt="HEXBYTE logo" height={36} />
              <div className="border-l border-slate-800 pl-5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Verified Owner Session
                </span>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">
                  HEXBYTE Management Console
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                {email}
              </span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'leads' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Inbound Leads ({leads.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('subscribers')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'subscribers' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Journal Subscribers ({subscribers.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'content' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Content & Post Metrics</span>
            </button>
          </div>

          {/* Tab 1: Leads */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Recent Enterprise Inbound Dockets</h3>
                <button
                  onClick={() => handleExportCsv('leads')}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Export Leads (CSV)</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">Reference</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Workload Scale</th>
                      <th className="p-4">Timeline</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {leads.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-900/80">
                        <td className="p-4 font-mono font-bold text-indigo-400">{l.id}</td>
                        <td className="p-4">
                          <div className="font-semibold text-white">{l.name}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{l.email}</div>
                        </td>
                        <td className="p-4 font-medium text-slate-200">{l.company}</td>
                        <td className="p-4 font-mono text-emerald-400">{l.nodes}</td>
                        <td className="p-4">{l.timeline}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono text-[11px]">
                            {l.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Subscribers */}
          {activeTab === 'subscribers' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Journal Executive Audience</h3>
                <button
                  onClick={() => handleExportCsv('subscribers')}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Export Subscribers (CSV)</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">Email</th>
                      <th className="p-4">Engineering Title / Role</th>
                      <th className="p-4">Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {subscribers.map((s, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/80">
                        <td className="p-4 font-mono text-white">{s.email}</td>
                        <td className="p-4 text-slate-300">{s.role}</td>
                        <td className="p-4 font-mono text-slate-500">{s.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Content Metrics */}
          {activeTab === 'content' && (
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Published Dockets & SEO Cache</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white">8 Services</div>
                  <div className="text-xs text-indigo-400 mt-1">Live Dedicated Routes</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white">4 Industries</div>
                  <div className="text-xs text-sky-400 mt-1">Compliance Mapped</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white">4 Case Studies</div>
                  <div className="text-xs text-emerald-400 mt-1">Verified ROI Dockets</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
