import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { MegaMenu } from './MegaMenu';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-theme');
  };

  const navLinks = [
    { label: 'Services', key: 'Services', href: '#services' },
    { label: 'Industries', key: 'Industries', href: '#industries' },
    { label: 'Proof', key: 'Proof', href: '#case-studies' },
    { label: 'Resources', key: 'Resources', href: '#resources' },
    { label: 'Pricing', key: null, href: '#pricing' },
  ];

  const handleNavigate = (href: string) => {
    setActiveTab(null);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800 shadow-lg shadow-black/20' 
          : 'bg-slate-950/70 backdrop-blur-md border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="/" 
          className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-400 transition-colors"
        >
          SYNTHEX<span className="text-indigo-400">.</span>GLOBAL
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <div 
              key={item.label} 
              className="relative py-2"
              onMouseEnter={() => item.key ? setActiveTab(item.key) : setActiveTab(null)}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavigate(item.href);
                  }
                }}
                className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-white ${
                  activeTab === item.key ? 'text-indigo-400' : 'text-slate-300'
                }`}
              >
                <span>{item.label}</span>
                {item.key && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeTab === item.key ? 'rotate-180 text-indigo-400' : 'text-slate-500'
                  }`} />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + search affordance */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors"
            aria-label="Search platform solutions"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-700/60 rounded">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors"
            aria-label="Toggle theme mode"
            title="Toggle theme contrast"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenDemoModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm hover:shadow-indigo-500/20 transition-all whitespace-nowrap shrink-0"
          >
            Schedule Demo
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden rounded-lg hover:bg-slate-800"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <div onMouseLeave={() => setActiveTab(null)}>
        <MegaMenu
          activeTab={activeTab}
          onClose={() => setActiveTab(null)}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.href);
                }}
                className="block py-2 text-base font-medium text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              Schedule Enterprise Demo
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Enterprise Support Desk</span>
              <span className="font-mono text-slate-300">+1 (800) 582-7490</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
