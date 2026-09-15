import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, FileCheck2, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/kitsData';

export const TrustAndGuarantees: React.FC = () => {
  const commitments = [
    {
      icon: Award,
      title: 'Sélection Premium',
      description: 'Riz parfumé 1er choix, huiles pures raffinées et marques reconnues pour leur rigueur sanitaire.'
    },
    {
      icon: ShieldCheck,
      title: 'Conditionnement Renforcé',
      description: 'Emballages robustes scellés hermétiquement pour un transport sans casse ni perte.'
    },
    {
      icon: Truck,
      title: 'Ponctualité Respectée',
      description: 'Planning rigoureux pour assurer une livraison avant le réveillon de Noël et la Saint-Sylvestre.'
    },
    {
      icon: FileCheck2,
      title: 'Facturation Officielle',
      description: 'Devis clairs et factures complètes avec mentions fiscales adaptées aux Directions et Comités d’Entreprise.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B1E3D] text-white border-t-2 border-b-2 border-[#D4AF37] relative overflow-hidden">
      {/* Soft golden ambient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Guarantees Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-[#D4AF37] text-xs font-bold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nos Engagements Qualité</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            La Garantie d'une Fin d'Année sans Mauvaise Surprise
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Parce que les fêtes de fin d'année doivent être un moment de joie et de partage, nous veillons à chaque détail logistique.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/20 border border-[#D4AF37] flex items-center justify-center text-amber-300 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 font-display">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-display text-amber-200">
              Ils Nous Font Confiance pour Leurs Fêtes
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Retours d’expérience de responsables RH, associations et familles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white text-slate-900 rounded-2xl p-6 border-2 border-[#D4AF37] shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      {t.kitsOrdered}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B1E3D] text-amber-300 font-bold text-xs flex items-center justify-center border border-[#D4AF37]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1E3D]">{t.author}</h4>
                    <p className="text-[11px] text-slate-500">{t.role} • {t.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
