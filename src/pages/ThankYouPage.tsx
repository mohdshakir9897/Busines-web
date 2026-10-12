import React from 'react';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Logo } from '../components/common/Logo';
import { CheckCircle2, ArrowRight, Download, Calendar, Mail, FileText } from 'lucide-react';
import { Link } from 'wouter';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-20 px-6">
      <SeoMetadata
        title="Consultation Request Confirmed"
        description="Your technical architecture consultation request has been confirmed. Next steps and assignment details."
      />

      <div className="w-full max-w-2xl p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
        <Logo variant="icon" href="/" alt="HEXBYTE logo" height={64} width={64} className="mx-auto" />

        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Request Docket Acknowledged
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consultation Request Confirmed
          </h1>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Thank you for connecting with Hexbyte. Your request has been assigned to our Principal Solutions Architecture team.
          </p>
        </div>

        {/* Docket Summary */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3 text-xs">
          <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span>Docket Reference:</span>
            <span className="font-mono text-white font-semibold">HEX-REQ-{Math.floor(10000 + Math.random() * 90000)}</span>
          </div>
          <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span>Assigned Desk:</span>
            <span className="text-white">Enterprise Systems Architecture (Tier-1)</span>
          </div>
          <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800">
            <span>Estimated Contact:</span>
            <span className="text-emerald-400 font-semibold">Within 4 Business Hours</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Direct WhatsApp:</span>
            <span className="font-mono text-white">+1 (415) 890-4211</span>
          </div>
        </div>

        {/* Recommended Next Actions */}
        <div className="pt-4 space-y-3">
          <div className="text-xs font-medium text-slate-400">
            While our engineers prepare your cluster benchmark, explore:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resources"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Explore Resource Center</span>
            </Link>

            <Link
              href="/case-studies"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <span>Review Production Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
