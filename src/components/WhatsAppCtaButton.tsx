import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../data/kitsData';

interface WhatsAppCtaButtonProps {
  label?: string;
  subLabel?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubLabel?: boolean;
  variant?: 'primary' | 'gold' | 'compact';
  id?: string;
}

export const WhatsAppCtaButton: React.FC<WhatsAppCtaButtonProps> = ({
  label = "Rejoindre la Chaîne WhatsApp",
  subLabel = "Accès libre • Votre numéro reste 100% privé",
  size = 'lg',
  className = '',
  showSubLabel = true,
  variant = 'primary',
  id = 'btn-whatsapp-cta'
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3.5'
  };

  const isPrimary = variant === 'primary';
  const isGold = variant === 'gold';

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <motion.a
        id={id}
        href={WHATSAPP_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          group relative inline-flex items-center justify-center font-bold tracking-wide
          rounded-xl shadow-lg transition-all duration-300 cursor-pointer text-center
          ${sizeClasses[size]}
          ${isPrimary ? 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 border-2 border-[#D4AF37] shadow-[0_8px_25px_rgba(37,211,102,0.35)]' : ''}
          ${isGold ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-105 text-[#0A192F] border-2 border-white shadow-[0_8px_25px_rgba(212,175,55,0.4)]' : ''}
          ${variant === 'compact' ? 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 border border-amber-400 font-semibold' : ''}
        `}
      >
        {/* Subtle gold shine effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-200% h-200% bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* WhatsApp Icon with gold border dot */}
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-current border border-white/40">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
          </span>
        </div>

        <span className="font-extrabold">{label}</span>

        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[2.5]" />
      </motion.a>

      {showSubLabel && (
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>{subLabel}</span>
        </div>
      )}
    </div>
  );
};
