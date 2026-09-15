import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package, Check, ArrowRight, Sparkles, MessageCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { FOOD_KITS, WHATSAPP_CHANNEL_URL } from '../data/kitsData';
import { FoodKit } from '../types';

export const KitsPreviewSection: React.FC = () => {
  const [selectedKit, setSelectedKit] = useState<FoodKit | null>(null);
  const [expandedKitId, setExpandedKitId] = useState<string | null>('kit-gourmand-prestige');

  const toggleExpand = (kitId: string) => {
    setExpandedKitId(expandedKitId === kitId ? null : kitId);
  };

  return (
    <section id="kits-alimentaires" className="py-20 bg-[#F4F7FB] border-t border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0B1E3D] border-2 border-[#D4AF37] text-xs font-bold tracking-wider uppercase shadow-sm">
            <Package className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sélection Gastronomique & Essentielle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3D] tracking-tight font-display">
            Aperçu de Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1E3D] via-[#1E40AF] to-[#0B1E3D]">Kits Alimentaires</span> de Fin d'Année
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Chaque kit est composé avec des denrées de premier choix garanties fraîches et scellées, pensées pour régaler vos proches et récompenser vos équipes.
          </p>
        </div>

        {/* Kits Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {FOOD_KITS.map((kit, index) => {
            const isExpanded = expandedKitId === kit.id;

            return (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative flex flex-col justify-between rounded-2xl bg-white transition-all duration-300
                  ${kit.isPopular 
                    ? 'border-3 border-[#D4AF37] shadow-[0_12px_35px_rgba(212,175,55,0.25)] ring-2 ring-[#D4AF37]/40 transform lg:-translate-y-2' 
                    : 'border-2 border-[#D4AF37]/70 hover:border-[#D4AF37] shadow-md hover:shadow-xl'
                  }
                `}
              >
                {/* Top Badge */}
                {kit.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-[#D4AF37] shadow-sm whitespace-nowrap bg-[#0B1E3D] text-amber-300">
                    {kit.badge}
                  </div>
                )}

                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#0B1E3D] font-display leading-tight">
                      {kit.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {kit.tagline}
                    </p>
                  </div>

                  {/* Pricing info callout */}
                  <div className="mt-4 p-3 rounded-xl bg-[#0B1E3D]/5 border border-[#D4AF37]/40 text-center">
                    <span className="text-xs text-slate-500 block uppercase font-medium">Grille tarifaire & Devis</span>
                    <span className="text-sm font-bold text-[#0B1E3D] flex items-center justify-center gap-1 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      {kit.estimatedPriceRange}
                    </span>
                  </div>

                  {/* Ideal For Target */}
                  <div className="mt-4 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <strong className="text-[#0B1E3D] font-semibold">Idéal pour : </strong>
                    <span>{kit.idealFor}</span>
                  </div>

                  {/* Key items included */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1E3D] uppercase tracking-wider">
                      <span>Exemples de denrées ({kit.items.length})</span>
                      <button 
                        onClick={() => toggleExpand(kit.id)}
                        className="text-amber-700 hover:text-amber-800 flex items-center gap-0.5 font-semibold"
                      >
                        {isExpanded ? (
                          <><span>Masquer</span><ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <><span>Voir tout</span><ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>

                    {/* Display first 3 items or full list */}
                    <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                      {(isExpanded ? kit.items : kit.items.slice(0, 4)).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {!isExpanded && kit.items.length > 4 && (
                      <p 
                        onClick={() => toggleExpand(kit.id)} 
                        className="text-[11px] text-amber-700 font-semibold cursor-pointer hover:underline pt-1"
                      >
                        + {kit.items.length - 4} autres articles inclus...
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action button directing to the WhatsApp channel */}
                <div className="p-6 pt-3 border-t border-[#D4AF37]/30 bg-[#FAFCFF] rounded-b-2xl">
                  <a
                    href={WHATSAPP_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm
                      ${kit.isPopular
                        ? 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 border-2 border-[#D4AF37] hover:scale-102'
                        : 'bg-[#0B1E3D] hover:bg-[#122B54] text-white border-2 border-[#D4AF37] hover:scale-102'
                      }
                    `}
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Détails & Tarifs sur WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom helper card with WhatsApp redirect */}
        <div className="mt-14 max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 border-2 border-[#D4AF37] shadow-sm">
          <p className="text-sm font-semibold text-[#0B1E3D]">
            Vous avez un budget précis ou une commande groupée (plus de 50 kits) ?
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Nos équipes commerciales conçoivent des compositions sur-mesure adaptées à votre grille salariale ou budget d'entreprise.
          </p>
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs sm:text-sm font-bold text-[#0B1E3D] bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-lg border border-[#D4AF37] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>Discuter d'un kit sur-mesure sur notre chaîne WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
