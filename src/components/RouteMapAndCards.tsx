import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, UserPlus, Check } from "lucide-react";
import CountryFlag from "./CountryFlag";

interface RouteMapAndCardsProps {
  language: string;
}

export default function RouteMapAndCards({ language }: RouteMapAndCardsProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  // Initial stats that update dynamically
  const initialRoutes = [
    {
      id: "r1",
      from: "Douala",
      fromFlag: "cm",
      to: "Moscow",
      toFlag: "ru",
      price: "15 €/kg",
      transit: "3-5 Days",
      initials: "AF",
      avatarBg: "bg-orange-500",
      kgTotal: 23,
      kgUsed: 11,
      countdownHours: 14,
      sendersBooked: 4,
      travellerName: "Amadou F."
    },
    {
      id: "r2",
      from: "Yaoundé",
      fromFlag: "cm",
      to: "Paris",
      toFlag: "fr",
      price: "12 €/kg",
      transit: "2-4 Days",
      initials: "MB",
      avatarBg: "bg-blue-500",
      kgTotal: 32,
      kgUsed: 26,
      countdownHours: 38,
      sendersBooked: 6,
      travellerName: "Marie-Claire B."
    },
    {
      id: "r3",
      from: "Lagos",
      fromFlag: "ng",
      to: "London",
      toFlag: "gb",
      price: "10 £/kg",
      transit: "3-5 Days",
      initials: "CO",
      avatarBg: "bg-emerald-500",
      kgTotal: 15,
      kgUsed: 10,
      countdownHours: 8,
      sendersBooked: 2,
      travellerName: "Chinedu O."
    }
  ];

  const [routes, setRoutes] = useState(initialRoutes);

  // Slowly simulate remaining weight decrementing or booking updates occasionally
  useEffect(() => {
    const timer = setInterval(() => {
      setRoutes(prev => prev.map(route => {
        // Occasionally subtract a fractional kg or add a booked sender
        const shouldUpdate = Math.random() > 0.85;
        if (shouldUpdate && route.kgTotal > route.kgUsed) {
          return {
            ...route,
            kgUsed: Math.min(route.kgTotal, route.kgUsed + 1),
            sendersBooked: route.sendersBooked + 1
          };
        }
        return route;
      }));
    }, 45000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="routes" className="py-20 bg-gradient-to-b from-[#111827] to-[#0A0F1E] px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[#FF6B35]/5 opacity-10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block">
            {isFr ? "RECHERCHE DE COULOIRS" : isRu ? "ПОПУЛЯРНЫЕ МАРШРУТЫ" : "DIVERSE ACTIVE FLIGHTS"}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isFr ? "Couloirs de vol actifs maintenant" : isRu ? "Активные перелеты прямо сейчас" : "Corridors with Open luggage capacity"}
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
            {isFr 
              ? "Des voyageurs enregistrés sur ces lignes disposent de kilos libres pour acheminer vos paquets immédiatement." 
              : isRu 
              ? "У этих попутчиков есть свободный вес в багаже на указанных направлениях." 
              : "Verified flight journeys with available weight limits on their airlines ready to secure match approvals."}
          </p>
        </div>

        {/* Dynamic Route Cards Grid (UPGRADE 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => {
            const kgRemaining = route.kgTotal - route.kgUsed;
            const progressPct = (route.kgUsed / route.kgTotal) * 100;

            return (
              <div 
                key={route.id} 
                className="bg-[#111827] border border-white/5 hover:border-[#FF6B35]/30 rounded-3xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div className="space-y-6">
                  {/* Card Header: Flags and Route */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white font-display font-extrabold text-lg">
                        <span className="flex items-center gap-1.5">
                          <CountryFlag code={route.fromFlag} className="w-5.5 h-3.5 object-cover rounded shadow border border-white/10" />
                          <span>{route.from}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                        <span className="flex items-center gap-1.5">
                          <CountryFlag code={route.toFlag} className="w-5.5 h-3.5 object-cover rounded shadow border border-white/10" />
                          <span>{route.to}</span>
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF6B35]" />
                        {isFr ? "Aéroport direct" : isRu ? "Прямой рейс" : "Direct Airport handoff"}
                      </div>
                    </div>
                    {/* Rate pill */}
                    <div className="bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] font-mono text-xs font-extrabold px-3 py-1 rounded-full">
                      {route.price}
                    </div>
                  </div>

                  {/* Traveller Information: Colored Avatar (UPGRADE 5) */}
                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className={`w-10 h-10 rounded-full ${route.avatarBg} text-white font-display font-bold flex items-center justify-center shadow`}>
                      {route.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-sans font-bold text-sm leading-tight">
                        {route.travellerName}
                      </h4>
                      <p className="text-[10px] text-[#00C853] font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#00C853] rounded-full animate-pulse" />
                        {isFr ? "Identité Vérifiée" : isRu ? "Паспорт проверен" : "ID Verified Flyer"}
                      </p>
                    </div>
                  </div>

                  {/* Weight progress bar: Remaining (UPGRADE 5) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-gray-400 font-medium">
                        {isFr ? "Poids disponible :" : isRu ? "Осталось места:" : "Luggage Remaining:"}
                      </span>
                      <span className="text-white font-bold font-mono">
                        {kgRemaining} kg / {route.kgTotal} kg
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFA06E] transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Flight Countdown & Social Proof line (UPGRADE 5) */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5 font-mono text-xs">
                    <div>
                      <span className="text-gray-500 text-[10px] block uppercase">
                        {isFr ? "DECOLLAGE DANS" : isRu ? "ВЫЛЕТ ЧЕРЕЗ" : "DEPARTS IN"}
                      </span>
                      <span className="text-amber-300 font-bold block mt-0.5">
                        ⏱ {route.countdownHours} {isFr ? "Heures" : isRu ? "ч." : "Hours"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-[10px] block uppercase">
                        {isFr ? "RESERVATIONS" : isRu ? "ЗАКАЗЫ" : "SOCIAL PROOF"}
                      </span>
                      <span className="text-emerald-400 font-bold block mt-0.5">
                        🔥 {route.sendersBooked} {isFr ? "envoyeurs" : isRu ? "заказов" : "senders booked"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Match button */}
                <button
                  onClick={() => {
                    const waitlistSec = document.getElementById("waitlist");
                    if (waitlistSec) waitlistSec.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full mt-6 bg-white/5 border border-white/10 hover:bg-[#FF6B35] hover:border-[#FF6B35] text-white py-3 rounded-2xl font-sans font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{isFr ? "Réserver ce voyageur" : isRu ? "Связаться с попутчиком" : "Request Match Now"}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
