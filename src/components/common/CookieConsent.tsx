import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hexbyte_cookie_consent');
    if (!consent) {
      // Show after gentle 2.5s delay
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('hexbyte_cookie_consent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Cookie Preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 p-5 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl text-slate-200 text-xs"
    >
      <div className="flex items-start gap-3">
        <Shield className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <div className="font-semibold text-white text-sm">Enterprise Data Privacy & Cookies</div>
          <p className="text-slate-400 leading-relaxed text-xs">
            We use strictly necessary telemetry and aggregated analytics to maintain operational performance and enterprise security. No cross-site advertising trackers.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => handleAccept('all')}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => handleAccept('essential')}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
            >
              Essential Only
            </button>
            <a
              href="#privacy"
              className="text-slate-400 hover:text-white underline underline-offset-2 ml-1"
            >
              Policy
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
