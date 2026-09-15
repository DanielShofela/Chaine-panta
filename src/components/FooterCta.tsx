import React from 'react';
import { Sparkles, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppCtaButton } from './WhatsAppCtaButton';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const FooterCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A192F] via-[#0B1E3D] to-[#071326] text-white relative overflow-hidden border-t-2 border-[#D4AF37]">
      {/* Golden glow decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-[#D4AF37] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Anticipez les Fêtes dès Aujourd'hui</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
          Ne Laissez Pas la Rupture de Stock Gâcher Vos Fêtes
        </h2>

        <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Chaque fin d'année, les prix flambent et les meilleurs lots de riz et d'huiles sont vite épuisés. Rejoignez dès maintenant notre chaîne WhatsApp pour garantir vos approvisionnements aux meilleurs tarifs.
        </p>

        {/* Central High Impact CTA Button */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <div className="animate-cta-pulse inline-block rounded-2xl">
            <WhatsAppCtaButton
              id="footer-whatsapp-main-cta"
              size="xl"
              label="S'ABONNER À LA CHAÎNE WHATSAPP"
              subLabel="Accès 100% gratuit • Désabonnement en 1 clic • Zéro spam"
              variant="primary"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300/90 pt-3">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Numéro de téléphone strictement masqué
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Disponibilité prioritaire pour les abonnés
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
