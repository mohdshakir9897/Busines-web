import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { ALL_SEARCHABLE_ITEMS } from '../../data/navigationData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (href: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // open modal if closed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = query.trim() === ''
    ? ALL_SEARCHABLE_ITEMS.slice(0, 8)
    : ALL_SEARCHABLE_ITEMS.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()) ||
        item.type?.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across all 40 enterprise pages, services, case studies..."
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-300 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching enterprise architecture results found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelect(item.href);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>

                <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all shrink-0 ml-4" />
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>Navigate: <kbd className="font-mono text-slate-400">↑</kbd> <kbd className="font-mono text-slate-400">↓</kbd></span>
            <span>Select: <kbd className="font-mono text-slate-400"><CornerDownLeft className="inline w-3 h-3" /></kbd></span>
          </div>
          <span>Close: <kbd className="font-mono text-slate-400">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};
