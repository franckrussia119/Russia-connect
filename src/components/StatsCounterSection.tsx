import React, { useState, useEffect } from "react";

interface StatsCounterSectionProps {
  language: string;
}

export default function StatsCounterSection({ language }: StatsCounterSectionProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  // State counters starting from realistic high numbers
  const [deliveriesCount, setDeliveriesCount] = useState(2478);
  const [travellersCount, setTravellersCount] = useState(482);
  const [lastDeliveryMins, setLastDeliveryMins] = useState(3);
  
  // Countdown state starting at 14h 35m 12s
  const [countdown, setCountdown] = useState({ hours: 14, minutes: 35, seconds: 12 });

  useEffect(() => {
    // Soft animated count-up initial values or slow organic growth
    const organicTravellerTimer = setInterval(() => {
      setTravellersCount(prev => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 15000);

    // Tick countdown every second
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    // Randomize last delivery minutes (2-8) every 25 seconds
    const deliveryMinutesTimer = setInterval(() => {
      const mins = Math.floor(Math.random() * 7) + 2; // 2 to 8
      setLastDeliveryMins(mins);
    }, 25000);

    // Every 300 seconds (5 minutes) randomly increment successful deliveries by 1-3
    const deliveriesIncrTimer = setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1; // 1 to 3
      setDeliveriesCount(prev => prev + increment);
    }, 300000);

    return () => {
      clearInterval(organicTravellerTimer);
      clearInterval(countdownTimer);
      clearInterval(deliveryMinutesTimer);
      clearInterval(deliveriesIncrTimer);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#003c96] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Absolute Background Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Countdown Header */}
        <div className="mb-12 bg-black/20 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl animate-bounce">✈️</span>
            <div className="text-center md:text-left">
              <div className="font-display font-extrabold text-sm sm:text-base">
                {isFr ? "PROCHAIN DÉPART EN DIRECT" : isRu ? "БЛИЖАЙШИЙ ВЫЛЕТ ОНЛАЙН" : "LIVE NEXT DEPARTURE"}
              </div>
              <p className="text-xs text-white/70 font-sans">
                {isFr ? "Douala → Moscou (Vol direct en cabine)" : isRu ? "Дуала → Москва (Прямой рейс в кабине)" : "Douala → Moscow (Direct cabin flight)"}
              </p>
            </div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10 font-mono text-center sm:text-right shrink-0">
            <span className="text-xs uppercase block text-white/60 tracking-wider">
              {isFr ? "Décollage dans" : isRu ? "Вылет через" : "Departs in"}
            </span>
            <span className="font-bold text-lg text-amber-300">
              {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </span>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Stat 1: Deliveries with Pulsing Live Dot */}
          <div className="space-y-1 relative group">
            <div className="flex items-center justify-center gap-2">
              <div className="font-display font-extrabold text-3xl sm:text-5xl">
                {deliveriesCount}
              </div>
              
              {/* Pulsing red LIVE dot (UPGRADE 3) */}
              <div className="flex h-3 w-3 relative" title="Live status tracker">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-white/75 uppercase font-mono tracking-wider">
              {isFr ? "Colis Livrés" : isRu ? "Успешных доставок" : "Successful Deliveries"}
            </div>
            
            {/* Last Delivery minute ticker */}
            <div className="text-[10px] font-mono text-emerald-300 font-bold bg-white/5 py-0.5 px-2 rounded-full inline-block mt-1 animate-pulse border border-white/5">
              ⏱ {isFr ? `Dernier colis : il y a ${lastDeliveryMins} min` : isRu ? `Последняя доставка: ${lastDeliveryMins} мин. назад` : `Last delivery: ${lastDeliveryMins} minutes ago`}
            </div>
          </div>

          {/* Stat 2: Verified Travellers */}
          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-5xl">
              {travellersCount}+
            </div>
            <div className="text-[10px] sm:text-xs text-white/75 uppercase font-mono tracking-wider">
              {isFr ? "Voyageurs Vérifiés" : isRu ? "Проверенных попутчиков" : "Verified Travellers"}
            </div>
            <div className="text-[10px] font-mono text-white/60">
              {isFr ? "Passeports contrôlés" : isRu ? "Проверка паспортов" : "Full passport checks"}
            </div>
          </div>

          {/* Stat 3: Active corridors */}
          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-5xl">
              6+
            </div>
            <div className="text-[10px] sm:text-xs text-white/75 uppercase font-mono tracking-wider">
              {isFr ? "Couloirs Actifs" : isRu ? "Активных направлений" : "Active Corridors"}
            </div>
            <div className="text-[10px] font-mono text-white/60">
              {isFr ? "Afrique, Europe, Russie" : isRu ? "Африка, Европа, Россия" : "Africa, Europe, Russia"}
            </div>
          </div>

          {/* Stat 4: Satisfaction */}
          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-5xl">
              99.8%
            </div>
            <div className="text-[10px] sm:text-xs text-white/75 uppercase font-mono tracking-wider">
              {isFr ? "Taux de Réussite" : isRu ? "Процент успеха" : "Success Rate"}
            </div>
            <div className="text-[10px] font-mono text-[#00C853] font-bold bg-white/10 py-0.5 px-2 rounded-full inline-block">
              ★ 4.95 / 5.0
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
