import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenWhitepaper?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenWhitepaper }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside 
      aria-label="Platform Announcement"
      className="relative z-50 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-slate-200 border-b border-indigo-500/20 px-4 py-2 text-xs font-medium"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="text-indigo-400 font-semibold tracking-wide">Hexbyte Autumn '26 Platform Release</span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">/</span>
          <span className="text-slate-300">Deterministic eBPF mesh and automated sovereign compliance now available globally.</span>
          <button
            onClick={onOpenWhitepaper}
            className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors font-medium underline underline-offset-2 shrink-0 cursor-pointer"
          >
            <span>Read Architecture Brief</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-800 shrink-0"
          aria-label="Dismiss platform announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
