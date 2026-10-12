import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useLocation, Link } from 'wouter';
import { MegaMenu } from './MegaMenu';
import { Logo } from '../common/Logo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [location, setLocation] = useLocation();

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
    { label: 'Services', key: 'Services', href: '/services' },
    { label: 'Industries', key: 'Industries', href: '/industries' },
    { label: 'Proof', key: 'Proof', href: '/case-studies' },
    { label: 'Company', key: 'Company', href: '/about' },
    { label: 'Resources', key: 'Resources', href: '/resources' },
  ];

  const handleNavigate = (href: string) => {
    setActiveTab(null);
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location !== '/') {
        setLocation('/' + href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setLocation(href);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
        {/* Zone 1: Reusable Brand Logo */}
        <div onMouseEnter={() => setActiveTab(null)}>
          <Logo 
            variant="horizontal" 
            href="/" 
            priority={true} 
            transparent={true}
            alt="HEXBYTE logo"
            className="h-8 sm:h-10 hover:opacity-95 transition-opacity" 
          />
        </div>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <div 
              key={item.label} 
              className="relative py-2"
              onMouseEnter={() => item.key ? setActiveTab(item.key) : setActiveTab(null)}
            >
              <button
                onClick={() => handleNavigate(item.href)}
                className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
                  activeTab === item.key || location.startsWith(item.href) ? 'text-indigo-400' : 'text-slate-300'
                }`}
              >
                <span>{item.label}</span>
                {item.key && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeTab === item.key ? 'rotate-180 text-indigo-400' : 'text-slate-500'
                  }`} />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + search affordance */}
        <div 
          className="flex items-center gap-3 shrink-0"
          onMouseEnter={() => setActiveTab(null)}
        >
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer"
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
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle theme mode"
            title="Toggle theme contrast"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/request-consultation"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('/request-consultation');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm hover:shadow-indigo-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Talk to an Expert
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden rounded-lg hover:bg-slate-800 cursor-pointer"
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
              <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="block w-full text-left py-2 text-base font-medium text-slate-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              href="/request-consultation"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('/request-consultation');
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors cursor-pointer block"
            >
              Talk to an Expert
            </Link>
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
