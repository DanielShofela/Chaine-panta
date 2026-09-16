import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Check, ChevronRight } from 'lucide-react';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbBv5G65kg7Eg0kfpj0T';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header minimaliste et propre */}
      <header className="w-full max-w-3xl mx-auto pt-8 sm:pt-12 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1A73E8] flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-xs">
            PD
          </div>
          <div>
            <span className="font-semibold text-slate-900 text-sm tracking-tight">Pentagad Distribution</span>
            <p className="text-[11px] text-slate-500 font-normal">Kits Alimentaires de Fin d'Année</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#1A73E8]" />
          Édition Fêtes 2026
        </span>
      </header>

      {/* Contenu Principal : Minimaliste, Moderne, Centré sur l'action */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 sm:py-16">
        <div className="w-full max-w-xl text-center space-y-8">
          
          {/* Badge discret & épuré */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1A73E8] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#1A73E8]"></span>
            Chaîne WhatsApp Officielle
          </div>

          {/* Titre & Sous-titre */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
              Nos kits alimentaires de <span className="text-[#1A73E8]">fin d'année</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto font-normal leading-relaxed">
              Abonnez-vous à notre chaîne WhatsApp pour découvrir les catalogues détaillés, nos tarifs et réserver vos paniers.
            </p>
          </div>

          {/* BOUTON WHATSAPP EN PREMIER : Minimaliste, Attractif et Moderne */}
          <div className="pt-2 flex flex-col items-center gap-4">
            <a
              id="btn-whatsapp-direct"
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <span>Rejoindre la Chaîne WhatsApp</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Micro réassurance discrète */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Accès gratuit • Numéro 100% privé • Zéro spam</span>
            </div>
          </div>

          {/* Petit aperçu sobre en carte douce sans bordures lourdes */}
          <div className="pt-4">
            <div className="bg-slate-50 rounded-2xl p-5 text-left text-xs sm:text-sm text-slate-600 space-y-2.5">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]"></span>
                <span>Ce que vous trouverez sur la chaîne :</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Catalogues & fiches produits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tarifs particuliers & comités</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Disponibilités & stocks en direct</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Réservations prioritaires</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lien texte épuré */}
          <div className="pt-2">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#1A73E8] transition-colors"
            >
              <span>whatsapp.com/channel/0029VbBv5G65kg7Eg0kfpj0T</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </main>

      {/* Footer minimaliste et propre */}
      <footer className="w-full max-w-3xl mx-auto py-8 px-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Pentagad Distribution. Tous droits réservés.</p>
      </footer>

    </div>
  );
}
