import React from 'react';
import { Mail, MessageCircle, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-[#D4AF37]/50 pt-12 pb-24 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#0B1E3D] font-display font-extrabold text-lg">
                <span>P</span><span className="text-[#D4AF37]">D</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base">Pentagad Distribution</span>
                <p className="text-[11px] text-amber-300 font-medium uppercase tracking-wider">Kits Alimentaires & Paniers de Fin d'Année</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Spécialiste de la confection et distribution de kits alimentaires de qualité supérieure pour particuliers, comités d'entreprise, associations et ONG.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300">
              <a 
                href="mailto:pentagad.distribution@gmail.com"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>pentagad.distribution@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Livraison & Distribution Nationale</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-amber-300">
              Kits Disponibles
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Kit Essentiel Fêtes</li>
              <li>Kit Prestige Gourmand</li>
              <li>Kit Excellence Entreprise & CE</li>
              <li>Kits Sur-Mesure & Dons</li>
            </ul>
          </div>

          {/* Channel direct link */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-amber-300">
              Chaîne Officielle
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Suivez nos arrivages et téléchargez nos catalogues 2026.
            </p>
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-3.5 py-2 rounded-lg border border-amber-400 text-xs transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Accéder à la Chaîne</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright & privacy notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pentagad Distribution. Tous droits réservés.</p>
          <div className="flex items-center gap-2 text-amber-400/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Chaîne WhatsApp vérifiée • Protection des données personnelles</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
