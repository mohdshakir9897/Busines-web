import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-[100] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
