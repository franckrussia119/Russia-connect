import React from "react";
import { ArrowRight } from "lucide-react";

interface PreFooterSectionProps {
  language: string;
}

export default function PreFooterSection({ language }: PreFooterSectionProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  const handleCTA = () => {
    const target = document.getElementById("waitlist");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black text-center px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/5 to-[#0052CC]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#0052CC]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Giant Centered Comparison text (UPGRADE 10) */}
        <div className="space-y-4">
          <span className="font-mono text-[#FF6B35] text-xs font-bold uppercase tracking-widest block">
            {isFr ? "RECONNU PAR LE DIASPORA" : isRu ? "ПОЧУВСТВУЙТЕ РАЗНИЦУ" : "FEEL THE REAL SAVINGS"}
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2">
            {/* DHL Strikethrough in Red */}
            <span className="line-through text-red-500 font-extrabold text-3xl sm:text-5xl tracking-tight">
              DHL: 195 €
            </span>
            {/* Divider sign */}
            <span className="text-gray-500 text-xl font-bold font-mono">VS</span>
            {/* RussiaConnect in pulsing Green */}
            <span className="text-[#00C853] font-black text-4xl sm:text-6xl tracking-tight flex items-center gap-2 animate-pulse">
              RussiaConnect: 1000 ₽
            </span>
          </div>
        </div>

        {/* Compelling tagline below */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            {isFr ? "Pourquoi payer 10x plus cher pour un service plus lent ?" : isRu ? "Зачем платить в 10 раз больше за медленную доставку?" : "Why pay 10x more for slower services?"}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            {isFr 
              ? "Arrêtez de gaspiller votre argent avec les courriers traditionnels ou de chercher des groupes WhatsApp informels et risqués. Entrez en relation directe avec des voyageurs de confiance pour faire transiter vos colis en quelques jours à des tarifs imbattables." 
              : isRu 
              ? "Хватит переплачивать обычным курьерам или рисковать в сомнительных группах WhatsApp. Связывайтесь напрямую с проверенными попутчиками и отправляйте вещи за считанные дни по лучшим тарифам." 
              : "Stop wasting money on corporate delivery services or risking scams in unverified WhatsApp groups. Direct matches with verified travelers mean safe, hand-carried transits in days, for absolute micro-budgets."}
          </p>
        </div>

        {/* Single CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleCTA}
            className="group flex items-center space-x-3 bg-gradient-to-r from-[#FF6B35] to-[#FFA06E] hover:from-[#e55924] hover:to-[#ff8d50] text-white px-8 py-5 rounded-full font-display font-extrabold text-base sm:text-lg shadow-xl shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5 transition-all cursor-pointer mx-auto"
          >
            <span>{isFr ? "Sécurisez votre accès anticipé maintenant" : isRu ? "Получить ранний доступ" : "Secure Your Early Access Spot"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
