import React from "react";
import { X, Check, Star } from "lucide-react";

interface PriceComparisonProps {
  language: string;
}

export default function PriceComparison({ language }: PriceComparisonProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F1E] to-[#111827] px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0052CC]/5 opacity-20 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="font-mono text-[#FF6B35] text-xs font-bold uppercase tracking-widest block">
            {isFr ? "COMPARAISON DES TARIFS" : isRu ? "СРАВНЕНИЕ ТАРИФОВ" : "RATE COMPARISON"}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {isFr ? "Pourquoi payer plus ? Comparez et économisez" : isRu ? "Зачем платить больше? Сравните и сэкономьте" : "Why pay more? Compare and Save"}
          </h2>
          
          {/* Progress bar container */}
          <div className="max-w-md mx-auto pt-4 space-y-2">
            <div className="flex justify-between text-sm font-sans">
              <span className="text-[#00C853] font-bold">
                {isFr ? "ÉCONOMISEZ 75% d'argent et de temps" : isRu ? "СЭКОНОМЬТЕ 75% денег и времени" : "SAVE 75% of money and time"}
              </span>
              <span className="font-mono text-gray-400">75%</span>
            </div>
            <div className="w-full h-3 bg-white/5 border border-white/10 rounded-full overflow-hidden p-[1px]">
              <div className="h-full bg-gradient-to-r from-[#FF6B35] to-[#00C853] rounded-full w-[75%] animate-pulse" />
            </div>
          </div>
          
          <p className="text-xs text-gray-400 max-w-xl mx-auto font-sans leading-relaxed pt-2">
            {isFr 
              ? "⚡ Pas besoin de passer d'un groupe WhatsApp à un autre pour éviter les arnaques et les retards."
              : isRu 
              ? "⚡ Нет необходимости переходить из одной группы WhatsApp в другую, избегая мошенничества и задержек."
              : "⚡ No need to move from one WhatsApp group to another and avoid scam and delay issues."}
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Left Card: DHL/Traditional */}
          <div className="bg-[#111827]/60 border border-red-500/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group">
            <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {isFr ? "Inefficace" : isRu ? "Неэффективно" : "Inefficient"}
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-xl text-gray-400">
                  {isFr ? "Messageries traditionnelles (DHL, FedEx)" : isRu ? "Обычные курьеры (DHL, FedEx)" : "Traditional Courier (DHL, FedEx)"}
                </h3>
                <div className="text-red-500 font-mono text-xs font-bold mt-1">
                  {isFr ? "Cher & Lent" : isRu ? "Дорого и Медленно" : "Expensive & Slow"}
                </div>
              </div>

              {/* Price comparison */}
              <div className="py-4 border-y border-white/5 space-y-4 font-sans text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{isFr ? "Frais d'envoi" : isRu ? "Стоимость" : "Shipping Fee"}</span>
                  <span className="font-mono font-bold text-red-400 line-through">145,000 FCFA / 22,000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{isFr ? "Délai de livraison" : isRu ? "Сроки доставки" : "Delivery Time"}</span>
                  <span className="text-gray-300">7-14 {isFr ? "Jours" : isRu ? "дней" : "Days"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{isFr ? "Dédouanement" : isRu ? "Таможня" : "Customs Clearance"}</span>
                  <span className="text-gray-300 text-right">{isFr ? "Paperasse complexe" : isRu ? "Сложные документы" : "Complex paperwork"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{isFr ? "Note des clients" : isRu ? "Рейтинг" : "Customer Rating"}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-red-400">1.2/5</span>
                    <Star className="w-3 h-3 fill-red-500 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-500/5 rounded-2xl border border-red-500/10 flex items-start gap-3">
              <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-normal font-sans">
                {isFr 
                  ? "Frais fixes élevés, blocages douaniers réguliers et service client automatisé injoignable." 
                  : isRu 
                  ? "Высокие тарифы, постоянные таможенные задержки и недоступная поддержка." 
                  : "High flat fees, random customs lockups, and unreachable customer service lines."}
              </p>
            </div>
          </div>

          {/* Right Card: RussiaConnect */}
          <div className="bg-[#111827]/90 border-2 border-[#00C853]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00C853] transition-all duration-300 relative shadow-2xl shadow-[#00C853]/5 overflow-hidden group">
            {/* Glowing effect */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00C853]/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="absolute top-4 right-4 bg-[#00C853]/20 text-[#00C853] font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              {isFr ? "Recommandé" : isRu ? "Рекомендуем" : "Recommended"}
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-xl text-white flex items-center gap-2">
                  <span>RussiaConnect</span>
                  <span className="text-[#00C853] text-sm font-bold">✓</span>
                </h3>
                <div className="text-[#00C853] font-mono text-xs font-bold mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                  <span>{isFr ? "Abordable, Rapide & Direct" : isRu ? "Доступно, Быстро и Напрямую" : "Affordable, Fast & Direct"}</span>
                </div>
              </div>

              {/* Price comparison */}
              <div className="py-4 border-y border-white/5 space-y-4 font-sans text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{isFr ? "Frais d'envoi" : isRu ? "Стоимость" : "Shipping Fee"}</span>
                  <span className="font-mono font-bold text-[#00C853] text-base">35,000 FCFA / 5,500 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{isFr ? "Délai de livraison" : isRu ? "Сроки доставки" : "Delivery Time"}</span>
                  <span className="text-white font-semibold">{isFr ? "2-5 jours en cabine" : isRu ? "2-5 дней в кабине" : "2-5 days in cabin"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{isFr ? "Dédouanement" : isRu ? "Таможня" : "Customs"}</span>
                  <span className="text-white font-semibold">{isFr ? "Bagage à main (simplifié)" : isRu ? "Ручная кладь (упрощено)" : "Hand-carried (simplified)"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{isFr ? "Note des clients" : isRu ? "Рейтинг" : "Customer Rating"}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[#00C853]">4.9/5</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#00C853]/5 rounded-2xl border border-[#00C853]/10 flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5 animate-bounce" />
              <p className="text-xs text-gray-300 leading-normal font-sans">
                {isFr 
                  ? "Profitez de l'espace de bagage libre des voyageurs de confiance pour envoyer en toute sécurité à prix d'or." 
                  : isRu 
                  ? "Используйте свободное место проверенных попутчиков для экономичной и безопасной отправки." 
                  : "Leverage unused suitcase weight of verified flyers for incredibly affordable and safe cabin transits."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
