import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 250px down
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-3 inset-x-3 sm:inset-x-auto sm:right-6 z-50 max-w-md w-full sm:w-auto"
        >
          <div className="bg-[#0B1E3D] text-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(11,30,61,0.5)] flex items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center border-2 border-[#D4AF37] shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                </span>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Kits Alimentaires 2026</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40">Actif</span>
                </p>
                <p className="text-[11px] text-slate-300">Catalogues & Tarifs sur WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                id="floating-whatsapp-btn"
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border-2 border-[#D4AF37] text-xs shadow-md transition-transform hover:scale-105 whitespace-nowrap"
              >
                S'abonner
              </a>

              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Fermer"
                className="text-slate-400 hover:text-white p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
