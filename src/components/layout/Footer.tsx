import React, { useState } from 'react';
import { ArrowRight, Check, Globe, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NAVIGATION_DATA } from '../../data/navigationData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.85 } });
    } catch {
      // ignore
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Newsletter & Executive Briefing Row */}
        <div className="pb-14 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              The Autonomous Enterprise Journal
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Bi-weekly engineering briefs on distributed systems and eBPF
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Curated by Synthex principal engineers. Zero marketing fluff. Pure architecture analysis, peer benchmarks, and incident teardowns.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-sm">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Subscription Confirmed</div>
                  <div className="text-xs text-emerald-400/90">A welcome edition and our 2026 Systems Dossier have been queued for your inbox.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="name@enterprise.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400">{error}</p>}
                <p className="text-[11px] text-slate-500">
                  By subscribing, you agree to our Privacy Policy. One-click unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* 40-Page Blueprint Categorized Navigation Columns */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-slate-800/80 text-xs">
          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              {NAVIGATION_DATA.services.slice(0, 5).map((s, idx) => (
                <li key={idx}>
                  <a href={s.href} className="hover:text-white transition-colors block truncate">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Industries
            </h4>
            <ul className="space-y-2 text-slate-400">
              {NAVIGATION_DATA.industries.map((ind, idx) => (
                <li key={idx}>
                  <a href={ind.href} className="hover:text-white transition-colors block truncate">
                    {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Proof & Impact
            </h4>
            <ul className="space-y-2 text-slate-400">
              {NAVIGATION_DATA.proof.map((pf, idx) => (
                <li key={idx}>
                  <a href={pf.href} className="hover:text-white transition-colors block truncate">
                    {pf.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400">
              {NAVIGATION_DATA.company.map((c, idx) => (
                <li key={idx}>
                  <a href={c.href} className="hover:text-white transition-colors block truncate">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Resources
            </h4>
            <ul className="space-y-2 text-slate-400">
              {NAVIGATION_DATA.resources.slice(0, 5).map((r, idx) => (
                <li key={idx}>
                  <a href={r.href} className="hover:text-white transition-colors block truncate">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion & Support Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Conversion & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Tiers</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Book a Demo</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Request a Quote</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Disclosures</a></li>
            </ul>
          </div>
        </div>

        {/* Global Regional Presence Markers */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-medium text-slate-300">Global Engineering Operations:</span>
            <span>San Francisco · New York · London · Singapore · Zurich</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>SOC2 Type II Certified</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-[11px] font-mono text-slate-400">ISO 27001 / HIPAA</span>
          </div>
        </div>

        {/* Bottom Copyright & Locale Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Synthex Global Inc. All rights reserved. Enterprise Distributed Systems.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-400">Locale: EN-US (Global English)</span>
            <span className="font-mono text-slate-400">Currency: USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
