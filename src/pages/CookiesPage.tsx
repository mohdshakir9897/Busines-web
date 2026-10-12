import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Shield, Check } from 'lucide-react';

export const CookiesPage: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: true,
    functional: true
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('hexbyte_cookie_consent_prefs', JSON.stringify(preferences));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Cookie Governance & Preferences"
        description="Granular cookie preferences and transparency regarding browser storage mechanisms on HEXBYTE."
      />

      <PageHero
        breadcrumbs={[{ label: 'Legal' }, { label: 'Cookies' }]}
        kicker="Privacy Governance"
        title="Cookie Governance & Storage Transparency"
        subtitle="Last revised: October 1, 2026. How HEXBYTE uses strictly necessary tokens and performance telemetry."
      />

      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Zero Third-Party Advertising Trackers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              HEXBYTE does not deploy cross-site tracking pixels or commercial ad retargeters. Cookies and local storage keys are used strictly for session authentication, theme preferences, and aggregated operational performance metrics.
            </p>
          </div>

          {/* Interactive Preference Controls */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Manage Storage Preferences</h3>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Strictly Necessary Storage</div>
                <div className="text-xs text-slate-400 mt-0.5">Required for user sessions, security verification, and CSRF protection.</div>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">Always Active</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Performance & Anomaly Telemetry</div>
                <div className="text-xs text-slate-400 mt-0.5">Aggregated latency measurements to detect slow region routing.</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.performance}
                onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
              />
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Functional Preferences</div>
                <div className="text-xs text-slate-400 mt-0.5">Remembers dark/light theme choice and search preferences.</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
              />
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleSave}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Save Preferences
              </button>
              {saved && (
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Preferences Saved</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
