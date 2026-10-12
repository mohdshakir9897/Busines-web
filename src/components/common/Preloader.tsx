import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  minDuration = 1100,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070712] text-white pointer-events-none select-none"
        >
          {/* Subtle background ambient mesh glow */}
          <div className="absolute inset-0 bg-radial from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

          {/* Logo container with subtle entrance animation (under 1.2s) */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.88, y: 10 }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.4 : 0.8,
              ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out
            }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Hexbyte 1x1 Icon Mark */}
            <Logo
              variant="icon"
              transparent={true}
              height={96}
              width={96}
              priority={true}
              alt="HEXBYTE logo"
            />

            {/* Subtle loading indicator line with brand gradient */}
            <div className="w-36 h-1 bg-slate-900 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.8, repeat: Infinity, ease: 'linear' }
                    : { duration: 1.0, repeat: Infinity, ease: 'easeInOut' }
                }
                className="w-1/2 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
