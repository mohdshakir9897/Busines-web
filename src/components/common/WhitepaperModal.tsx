import React, { useState } from 'react';
import { X, ArrowRight, Download, CheckCircle2, FileText, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setDownloaded(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setDownloaded(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden p-8 relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
          <Lock className="w-3.5 h-3.5" />
          <span>Gated Technical Publication</span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          The 2026 Autonomous Cloud & eBPF Maturity Model
        </h3>

        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
          42 pages of in-depth architecture diagrams, real-world benchmark metrics across 10,000 nodes, and migration frameworks for Tier-1 financial and healthcare architectures.
        </p>

        {downloaded ? (
          <div className="mt-6 p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Whitepaper Ready</h4>
              <p className="text-xs text-slate-300 mt-1">
                A download link has been dispatched to <span className="text-white font-mono">{email}</span>. You may also view the document immediately below.
              </p>
            </div>
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Synthex_Autonomous_Cloud_Benchmark_2026.pdf (Enterprise Gated Docket)');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Direct PDF Download (4.2 MB)</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jordan Hayes"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Corporate Work Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <Download className="w-4 h-4" />
              <span>Unlock 42-Page Whitepaper</span>
            </button>

            <p className="text-[11px] text-slate-500 text-center pt-2">
              Protected by Enterprise Confidentiality. We never sell or share executive contact data.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
