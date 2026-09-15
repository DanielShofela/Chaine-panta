import React from 'react';
import { motion } from 'motion/react';
import { FileText, Tag, ShieldCheck, Lock, Check, Sparkles, MessageCircle } from 'lucide-react';
import { CHANNEL_BENEFITS, WHATSAPP_CHANNEL_URL } from '../data/kitsData';

const iconMap = {
  FileText: FileText,
  Tag: Tag,
  ShieldCheck: ShieldCheck,
  Lock: Lock,
};

export const WhyWhatsAppSection: React.FC = () => {
  return (
    <section id="pourquoi-whatsapp" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E3D] text-amber-300 border border-[#D4AF37] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Accès Privilégié & Transparent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3D] tracking-tight font-display">
            Pourquoi s'Abonner à Notre <span className="text-[#0D2852] underline decoration-[#D4AF37] decoration-4 underline-offset-8">Chaîne WhatsApp</span> ?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            La chaîne WhatsApp est le canal exclusif où nous diffusons en direct toutes les informations nécessaires pour préparer vos commandes de kits alimentaires de fin d'année sans stress.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNEL_BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName as keyof typeof iconMap] || FileText;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#FAFCFF] rounded-2xl p-6 border-2 border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with gold contour */}
                  <div className="w-14 h-14 rounded-xl bg-[#0B1E3D] text-amber-300 border-2 border-[#D4AF37] flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1E3D] mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center text-xs font-semibold text-[#0B1E3D]">
                  <Check className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                  <span>Inclus pour tous les abonnés</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner: Privacy & Difference between Group and Channel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#0B1E3D] to-[#122B54] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-[#D4AF37] flex items-center justify-center shrink-0 text-amber-300">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-amber-200">
                  Votre Confidentialité est 100% Préservée
                </h4>
                <p className="text-slate-200 text-sm mt-1 max-w-2xl">
                  Une <strong className="text-white font-semibold">Chaîne WhatsApp</strong> n’est pas un groupe de discussion : votre numéro de téléphone et votre profil sont totalement invisibles pour les autres abonnés. Zéro spam, zéro sollicitation indésirable, uniquement nos annonces officielles.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-6 py-3.5 rounded-xl border-2 border-[#D4AF37] shadow-lg transition-transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>S'abonner en 1 Clic (Gratuit)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
