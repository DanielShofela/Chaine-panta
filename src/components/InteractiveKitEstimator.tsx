import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Users, Building, HeartHandshake, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const InteractiveKitEstimator: React.FC = () => {
  const [profile, setProfile] = useState<'famille' | 'entreprise' | 'ong'>('entreprise');
  const [kitQuantity, setKitQuantity] = useState<number>(20);
  const [deliveryNeeded, setDeliveryNeeded] = useState<boolean>(true);

  // Recommended kit logic
  const getRecommendation = () => {
    if (profile === 'entreprise') {
      if (kitQuantity >= 30) {
        return {
          kitName: 'Kit Excellence Entreprise & CE',
          highlight: 'Tarif dégressif grand compte & facturation avec TVA',
          bonus: 'Personnalisation avec logo & livraison directe sur site'
        };
      }
      return {
        kitName: 'Kit Prestige Gourmand',
        highlight: 'Le choix préféré des comités d’entreprise et salariés',
        bonus: 'Emballage cadeau festif doré inclus'
      };
    } else if (profile === 'ong') {
      return {
        kitName: 'Kit Essentiel Solidarité / Sur-Mesure',
        highlight: 'Maximisation du volume de denrées essentielles par kit',
        bonus: 'Conditionnement scellé résistant pour distribution'
      };
    } else {
      return {
        kitName: 'Kit Prestige Gourmand',
        highlight: 'L’équilibre idéal pour régaler toute la famille pour Noël & Nouvel An',
        bonus: 'Produits de fête & gourmandises sélectionnées'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="simulateur" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E3D] text-amber-300 border border-[#D4AF37] text-xs font-bold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Simulateur en 3 clics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3D] tracking-tight font-display">
            Estimez Vos Besoins de Fin d'Année
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Configurez votre estimation pour obtenir immédiatement la formule la plus adaptée sur notre chaîne WhatsApp.
          </p>
        </div>

        {/* The Estimator Box with Royal Blue and Gold Contours */}
        <div className="mt-10 rounded-2xl border-2 border-[#D4AF37] bg-[#FAFCFF] p-6 sm:p-10 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Profile Selector */}
              <div>
                <label className="block text-xs font-bold text-[#0B1E3D] uppercase tracking-wider mb-2">
                  1. Quel est votre profil ?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setProfile('entreprise')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all border-2 ${
                      profile === 'entreprise'
                        ? 'bg-[#0B1E3D] text-white border-[#D4AF37] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <Building className="w-4 h-4 text-amber-400" />
                    <span>Entreprise / CE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile('famille')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all border-2 ${
                      profile === 'famille'
                        ? 'bg-[#0B1E3D] text-white border-[#D4AF37] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Famille / Particulier</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile('ong')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all border-2 ${
                      profile === 'ong'
                        ? 'bg-[#0B1E3D] text-white border-[#D4AF37] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4 text-amber-400" />
                    <span>ONG / Don</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Quantity slider / buttons */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#0B1E3D] uppercase tracking-wider">
                    2. Quantité estimée de kits
                  </label>
                  <span className="text-sm font-extrabold text-[#0B1E3D] bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300">
                    {kitQuantity} kit{kitQuantity > 1 ? 's' : ''}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="150"
                  value={kitQuantity}
                  onChange={(e) => setKitQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B1E3D]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1 kit</span>
                  <span>25 kits</span>
                  <span>50 kits</span>
                  <span>100 kits</span>
                  <span>150+ kits</span>
                </div>

                {/* Quick select pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[5, 15, 30, 60, 100].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setKitQuantity(num)}
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${
                        kitQuantity === num
                          ? 'bg-amber-400 text-slate-900 border-[#D4AF37]'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {num} kits
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Delivery toggle */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="delivery-check"
                  checked={deliveryNeeded}
                  onChange={(e) => setDeliveryNeeded(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0B1E3D] accent-[#0B1E3D] cursor-pointer"
                />
                <label htmlFor="delivery-check" className="text-xs sm:text-sm text-slate-700 cursor-pointer font-medium">
                  Je souhaite une livraison sur site / à domicile avant le 23 décembre
                </label>
              </div>

            </div>

            {/* Right Column: Dynamic Result Card with Gold Border */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B1E3D] text-white rounded-2xl p-6 border-2 border-[#D4AF37] shadow-xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Recommandation Festive</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  {rec.kitName}
                </h3>

                <p className="text-xs text-amber-200/90 mt-1">
                  Volume calculé : <strong>{kitQuantity} paniers</strong>
                </p>

                <div className="mt-4 space-y-2 border-t border-b border-[#D4AF37]/30 py-3 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rec.highlight}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rec.bonus}</span>
                  </div>
                  {deliveryNeeded && (
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Créneau de livraison prioritaire réservable</span>
                    </div>
                  )}
                </div>

                {/* Call To Action Directing to WhatsApp */}
                <div className="mt-5">
                  <a
                    href={WHATSAPP_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border-2 border-[#D4AF37] shadow-md transition-transform hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Valider cette simulation sur WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    ✓ Réponse & grille tarifaire détaillée sur notre chaîne
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
