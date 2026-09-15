import React from 'react';
import { MessageCircle, Sparkles, PhoneCall, Award } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0B1E3D] text-white border-b-2 border-[#D4AF37] shadow-md">
      {/* Top micro announcement bar with gold borders */}
      <div className="bg-[#071326] border-b border-[#D4AF37]/30 py-1.5 px-4 text-center text-xs sm:text-sm text-amber-200 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse shrink-0" />
        <span className="font-semibold text-white">Édition Fêtes 2026 :</span>
        <span className="hidden sm:inline text-amber-100">Les réservations prioritaires de kits alimentaires sont ouvertes sur la chaîne WhatsApp.</span>
        <span className="sm:hidden text-amber-100">Réservations ouvertes sur WhatsApp !</span>
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#0B1E3D] shadow-sm font-display font-extrabold text-xl tracking-tight">
            <span className="text-[#0B1E3D]">P</span>
            <span className="text-[#D4AF37]">D</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg tracking-wide text-white">Pentagad</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold border border-[#D4AF37]/50">Kits Fêtes</span>
            </div>
            <p className="text-[11px] text-slate-300 tracking-wider uppercase font-medium">Distribution & Paniers Alimentaires</p>
          </div>
        </div>

        {/* Navigation / Value badges */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#kits-alimentaires" className="hover:text-amber-300 transition-colors">
            Nos Kits de Fêtes
          </a>
          <a href="#pourquoi-whatsapp" className="hover:text-amber-300 transition-colors">
            Pourquoi WhatsApp ?
          </a>
          <a href="#simulateur" className="hover:text-amber-300 transition-colors">
            Simulateur de Devis
          </a>
          <a href="#faq" className="hover:text-amber-300 transition-colors">
            Questions Fréquentes
          </a>
        </nav>

        {/* Direct WhatsApp Channel Button */}
        <div className="flex items-center gap-3">
          <a
            id="nav-whatsapp-btn"
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border-2 border-[#D4AF37] text-xs sm:text-sm shadow-md transition-transform duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden sm:inline">Rejoindre la Chaîne</span>
            <span className="sm:hidden">Chaîne WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
