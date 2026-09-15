import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyWhatsAppSection } from './components/WhyWhatsAppSection';
import { KitsPreviewSection } from './components/KitsPreviewSection';
import { InteractiveKitEstimator } from './components/InteractiveKitEstimator';
import { TrustAndGuarantees } from './components/TrustAndGuarantees';
import { FaqSection } from './components/FaqSection';
import { FooterCta } from './components/FooterCta';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans">
      {/* Top Header / Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero with festive photo, title and primary CTA */}
        <HeroSection />

        {/* Why subscribe to the WhatsApp Channel */}
        <WhyWhatsAppSection />

        {/* Showcase of Food Kits with detail previews */}
        <KitsPreviewSection />

        {/* Interactive Estimator / Need Calculator */}
        <InteractiveKitEstimator />

        {/* Guarantees & Real Customer Testimonials */}
        <TrustAndGuarantees />

        {/* FAQ with accordion */}
        <FaqSection />

        {/* Final High-Impact CTA Banner */}
        <FooterCta />
      </main>

      {/* Footer with company details and contact */}
      <Footer />

      {/* Floating CTA bar on scroll */}
      <FloatingCta />
    </div>
  );
}
