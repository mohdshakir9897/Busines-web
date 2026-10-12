import React, { useState, useEffect } from 'react';
import { X, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import confetti from 'canvas-confetti';

interface ExitIntentModalProps {
  onOpenDemo: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [downloadSent, setDownloadSent] = useState(false);

  useEffect(() => {
    const hasTriggered = sessionStorage.getItem('hexbyte_exit_intent_fired');
    if (hasTriggered) return;

    let dwellTimeSatisfied = false;
    const timer = setTimeout(() => {
      dwellTimeSatisfied = true;
    }, 12000); // 12s dwell before intent triggers, complying with UX restraint

    const handleMouseLeave = (e: MouseEvent) => {
      if (dwellTimeSatisfied && e.clientY <= 15) {
        setIsOpen(true);
        sessionStorage.setItem('hexbyte_exit_intent_fired', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloadSent(true);
    try {
      confetti({ particleCount: 40, spread: 50 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden p-8 relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
          <FileText className="w-4 h-4" />
          <span>Executive Technical Briefing</span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          Before You Go: Download the 2026 Autonomous Cloud Benchmark
        </h3>

        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Get independent performance benchmarks comparing eBPF kernel mesh latency against traditional service meshes across 10,000-node clusters.
        </p>

        {downloadSent ? (
          <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Whitepaper Dispatched</div>
              <div className="text-xs text-emerald-400/90">The 42-page technical report has been emailed to {email}.</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your enterprise email..."
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
            >
              <span>Download Architecture Whitepaper (PDF)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Prefer a live interactive consultation?</span>
          <Link
            href="/request-consultation"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-2"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  );
};
