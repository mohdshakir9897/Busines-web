import React from 'react';
import { Link } from 'wouter';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Logo } from '../components/common/Logo';
import { ArrowLeft, Home, Search, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-24 px-6">
      <SeoMetadata
        title="404 - Page Not Found"
        description="The requested enterprise route or architectural docket does not exist."
      />

      <div className="max-w-xl w-full p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
        <Logo variant="icon" href="/" alt="HEXBYTE logo" height={60} width={60} className="mx-auto" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>HTTP 404 · ROUTE NOT FOUND</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Architectural Path Not Found
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            The resource, specification document, or endpoint you requested has been relocated or does not exist on this cluster.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
          >
            <span>Explore Services</span>
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
