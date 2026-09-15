import React from 'react';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import heroImg from './assets/images/food_kits_hero_1789495335631.jpg';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbBv5G65kg7Eg0kfpj0T';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between relative overflow-hidden selection:bg-[#D4AF37] selection:text-slate-900">
      
      {/* Halo subtil bleu clair et or en haut de page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* En-tête de marque - Fond blanc épuré avec liseré bleu clair et or */}
      <header className="relative z-10 w-full max-w-4xl mx-auto pt-6 sm:pt-8 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#38BDF8] border-2 border-[#D4AF37] flex items-center justify-center text-white font-display font-extrabold text-lg shadow-md">
            <span>P</span><span className="text-[#D4AF37]">D</span>
          </div>
          <div>
            <span className="font-display font-bold text-[#0284C7] text-base tracking-wide">Pentagad Distribution</span>
            <p className="text-[11px] text-amber-700 font-semibold">Kits Alimentaires de Fin d'Année</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] border-2 border-[#D4AF37] text-[#0369A1] text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Fêtes 2026</span>
        </div>
      </header>

      {/* Contenu Principal : Carte blanche épurée avec accents bleu clair et contours or */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-3xl">
          
          <div className="rounded-3xl bg-white border-3 border-[#D4AF37] shadow-[0_20px_50px_rgba(2,132,199,0.12)] overflow-hidden">
            
            {/* Ruban haut bleu clair avec bordure dorée */}
            <div className="bg-gradient-to-r from-[#E0F2FE] via-[#BAE6FD] to-[#E0F2FE] py-2.5 px-4 text-center border-b-2 border-[#D4AF37] text-[#0369A1] text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
              <Gift className="w-4 h-4 text-amber-600" />
              <span>Catalogues & Tarifs Spéciaux de Fin d'Année Disponibles</span>
            </div>

            <div className="p-6 sm:p-10 lg:p-12 text-center space-y-6">
              
              {/* Image d'illustration des kits avec contour or et liseré bleu clair */}
              <div className="max-w-md mx-auto p-1.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E0F2FE] to-[#D4AF37] shadow-md">
                <div className="relative rounded-xl overflow-hidden bg-white border-2 border-[#38BDF8]">
                  <img
                    src={heroImg}
                    alt="Kits alimentaires de fin d'année"
                    className="w-full h-48 sm:h-56 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7]/80 via-transparent to-transparent flex items-end justify-center pb-3">
                    <span className="text-xs sm:text-sm font-bold text-white bg-[#0369A1]/95 px-3 py-1 rounded-full border border-[#D4AF37] shadow-sm">
                      Riz parfumé • Huiles • Pâtes • Boissons & Douceurs
                    </span>
                  </div>
                </div>
              </div>

              {/* Titre Principal en bleu clair profond */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0284C7] leading-tight font-display">
                En Savoir Plus sur Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-[#D4AF37]">Kits Alimentaires</span> de Fin d'Année
              </h1>

              {/* Texte explicatif concis */}
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Abonnez-vous dès maintenant à notre chaîne WhatsApp officielle pour recevoir nos catalogues détaillés, nos grilles tarifaires et réserver vos kits festifs en toute tranquillité.
              </p>

              {/* LE BOUTON D'APPEL À L'ACTION CLAIR ET ATTRACTIF */}
              <div className="pt-2 flex flex-col items-center gap-3">
                <div className="animate-cta-pulse inline-block w-full sm:w-auto">
                  <a
                    id="btn-whatsapp-cta-direct"
                    href={WHATSAPP_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-base sm:text-xl tracking-wide border-3 border-[#D4AF37] shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/30 border border-white/50 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 fill-current" />
                      </div>
                      <span>Rejoindre la Chaîne WhatsApp</span>
                      <ArrowRight className="w-6 h-6 stroke-[2.5] transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </a>
                </div>

                {/* Mentions de réassurance discrètes */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    100% Gratuit & Confidentiel
                  </span>
                  <span>•</span>
                  <span>Votre numéro reste masqué</span>
                  <span>•</span>
                  <span>Zéro spam</span>
                </div>
              </div>

            </div>

            {/* Liseré inférieur bleu clair avec bordure or */}
            <div className="bg-[#F0F9FF] px-6 py-3.5 border-t-2 border-[#D4AF37] text-center text-xs text-slate-700">
              <span className="font-medium">Lien officiel : </span>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0284C7] hover:text-[#0369A1] hover:underline font-bold"
              >
                https://whatsapp.com/channel/0029VbBv5G65kg7Eg0kfpj0T
              </a>
            </div>

          </div>

        </div>
      </main>

      {/* Pied de page minimaliste sur fond blanc */}
      <footer className="relative z-10 text-center py-4 px-4 text-xs text-slate-500 border-t-2 border-[#D4AF37]/40 bg-white">
        <p>© {new Date().getFullYear()} Pentagad Distribution • Tous droits réservés.</p>
      </footer>

    </div>
  );
}
