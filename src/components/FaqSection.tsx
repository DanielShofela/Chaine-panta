import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E3D] text-amber-300 border border-[#D4AF37] text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Foire Aux Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3D] tracking-tight font-display">
            Tout Savoir sur Notre Chaîne WhatsApp
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Les réponses aux questions les plus courantes pour préparer votre commande en toute sérénité.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="border-2 border-[#D4AF37] rounded-xl overflow-hidden bg-[#FAFCFF] transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1E3D] hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 border border-amber-300">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0B1E3D]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#D4AF37]/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Prompt to ask custom question on WhatsApp */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-[#0B1E3D]/5 border-2 border-[#D4AF37] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-[#0B1E3D]">Vous avez une question particulière ?</p>
            <p className="text-xs text-slate-600">Notre équipe commerciale vous répond directement sur WhatsApp.</p>
          </div>

          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-4 py-2.5 rounded-xl border border-amber-400 text-xs sm:text-sm shadow-sm transition-transform hover:scale-105 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Poser ma question sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
