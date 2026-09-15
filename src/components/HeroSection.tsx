import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WhatsAppCtaButton } from './WhatsAppCtaButton';
import heroImg from '../assets/images/food_kits_hero_1789495335631.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1E3D] via-[#0D244D] to-[#0A192F] text-white pt-10 pb-20 border-b-2 border-[#D4AF37]">
      {/* Subtle gold ornamental geometric accents in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Soft warm glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Sales Pitch & High-Conversion CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Gold bordered badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border-2 border-[#D4AF37] text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>OFFRE SPÉCIALE FÊTES 2026 • ENTREPRISES & FAMILLES</span>
            </div>

            {/* Main title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight lg:leading-[1.15]">
              Célébrez la Fin d'Année en Toute Sérénité avec Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-display">Kits Alimentaires</span>
            </h1>

            {/* Explanatory description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Pour vos collaborateurs, familles ou actions solidaires : recevez directement sur notre 
              <strong className="text-amber-300 font-semibold"> chaîne WhatsApp officielle </strong>
              nos catalogues complets, nos grilles tarifaires et réservez vos paniers festifs avant rupture.
            </p>

            {/* Quick 3 key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left">
              <div className="bg-white/5 border border-[#D4AF37]/50 rounded-xl p-3 flex items-start gap-2.5 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-100 font-medium">Catalogues 2026 & tarifs en temps réel</span>
              </div>
              <div className="bg-white/5 border border-[#D4AF37]/50 rounded-xl p-3 flex items-start gap-2.5 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-100 font-medium">Stocks sécurisés & livraison garantie</span>
              </div>
              <div className="bg-white/5 border border-[#D4AF37]/50 rounded-xl p-3 flex items-start gap-2.5 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-100 font-medium">100% Anonyme & Sans spams</span>
              </div>
            </div>

            {/* The Main Attractive CTA Button */}
            <div className="pt-4 flex flex-col items-center lg:items-start gap-3">
              <div className="animate-cta-pulse inline-block rounded-xl">
                <WhatsAppCtaButton
                  id="hero-whatsapp-main-cta"
                  size="xl"
                  label="REJOINDRE LA CHAÎNE WHATSAPP"
                  subLabel="Cliquez ici pour accéder aux catalogues & tarifs • 100% Gratuit"
                />
              </div>

              {/* Social Proof & Subscriber Count */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>+1 250 membres déjà abonnés</span>
                </div>
                <span className="text-slate-500">•</span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Réservations ouvertes jusqu'au 20 décembre</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Framed with Gold and White */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border container */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#FDFBF7] to-[#B8860B] shadow-[0_15px_45px_rgba(212,175,55,0.25)]">
                <div className="relative rounded-xl overflow-hidden bg-[#0A192F] border-2 border-white">
                  <img
                    src={heroImg}
                    alt="Kits alimentaires de fin d'année - Panier garni festif"
                    className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlaid gold badge */}
                  <div className="absolute top-4 right-4 bg-[#0B1E3D]/90 backdrop-blur-md border-2 border-[#D4AF37] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm shadow-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-bold text-amber-200">Kits Fin d'Année 2026</span>
                  </div>

                  {/* Bottom glass summary overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/90 to-transparent p-5 text-white">
                    <p className="font-display text-base sm:text-lg font-bold text-amber-200">Riz Parfumé, Huiles Nobles & Délices Festifs</p>
                    <p className="text-xs text-slate-300 mt-0.5">Compositions variées adaptées aux familles et entreprises</p>
                  </div>
                </div>
              </div>

              {/* Floating micro notification card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white text-[#0B1E3D] p-3.5 rounded-xl border-2 border-[#D4AF37] shadow-xl flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-300 text-emerald-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1E3D]">100% Qualité & Fraîcheur</p>
                  <p className="text-[11px] text-slate-600">Marques certifiées et emballages étanches</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
