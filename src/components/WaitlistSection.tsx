import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { WaitlistFormData } from "../types";

interface WaitlistSectionProps {
  language: string;
}

export default function WaitlistSection({ language }: WaitlistSectionProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [waitlistForm, setWaitlistForm] = useState<WaitlistFormData>({
    name: '',
    email: '',
    cityCountry: '',
    role: 'both'
  });

  // Ticker Index State
  const [tickerIdx, setTickerIdx] = useState(0);

  const signupTickerData = [
    { name: "Jean-Paul", city: "Douala", time: "3 min ago", timeFr: "il y a 3 min", timeRu: "3 мин. назад" },
    { name: "Ekaterina", city: "Moscow", time: "5 min ago", timeFr: "il y a 5 min", timeRu: "5 мин. назад" },
    { name: "Ibrahim", city: "Garoua", time: "8 min ago", timeFr: "il y a 8 min", timeRu: "8 мин. назад" },
    { name: "Marie-Claire", city: "Yaoundé", time: "12 min ago", timeFr: "il y a 12 min", timeRu: "12 мин. назад" },
    { name: "Dmitry", city: "St. Petersburg", time: "14 min ago", timeFr: "il y a 14 min", timeRu: "14 мин. назад" },
    { name: "Florence", city: "Paris", time: "18 min ago", timeFr: "il y a 18 min", timeRu: "18 мин. назад" },
    { name: "Chinedu", city: "Lagos", time: "21 min ago", timeFr: "il y a 21 min", timeRu: "21 мин. назад" },
    { name: "Sarah", city: "London", time: "24 min ago", timeFr: "il y a 24 min", timeRu: "24 мин. назад" },
    { name: "Marc", city: "Brussels", time: "27 min ago", timeFr: "il y a 27 min", timeRu: "27 мин. назад" },
    { name: "Olga", city: "Moscow", time: "31 min ago", timeFr: "il y a 31 min", timeRu: "31 мин. назад" },
    { name: "Amadou", city: "Douala", time: "34 min ago", timeFr: "il y a 34 min", timeRu: "34 мин. назад" },
    { name: "Elena", city: "St. Petersburg", time: "38 min ago", timeFr: "il y a 38 min", timeRu: "38 мин. назад" }
  ];

  useEffect(() => {
    // Rotate through 12 names every 3.33 seconds (so they cycle completely in 40 seconds)
    const tickerTimer = setInterval(() => {
      setTickerIdx(prev => (prev + 1) % signupTickerData.length);
    }, 3330);

    return () => clearInterval(tickerTimer);
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistStatus('submitting');
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(waitlistForm)
      });
      if (response.ok) {
        setWaitlistStatus('success');
      } else {
        setWaitlistStatus('idle');
      }
    } catch (err) {
      setWaitlistStatus('idle');
    }
  };

  const activeTicker = signupTickerData[tickerIdx];

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-b from-[#0A0F1E] to-[#151d38] px-4 sm:px-6 lg:px-8 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0052CC]/5 opacity-30 blur-2xl pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        <div className="space-y-3">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block">
            {isFr ? "PROGRAMME FONDATEUR D'ACCÈS ANTICIPÉ" : isRu ? "ПРОГРАММА РАННЕГО ДОСТУПА" : "EARLY ACCESS FOUNDING PROGRAM"}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {isFr ? "Soyez le premier. Rejoignez l'accès anticipé." : isRu ? "Будьте первыми. Получите ранний доступ." : "Be First. Get Early Access."}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {isFr 
              ? "Rejoignez plus de 3 000 membres du diaspora et étudiants déjà inscrits. Bénéficiez de frais de plateforme nuls sur votre premier envoi." 
              : isRu 
              ? "Присоединяйтесь к более чем 3000 участникам нашей диаспоры и студентам. Нулевая комиссия платформы на ваш первый запуск." 
              : "Join over 3,000+ diaspora members and students already on the waitlist. Benefit from zero platform fees on your initial match."}
          </p>
        </div>

        {/* Signup form */}
        {waitlistStatus === 'success' ? (
          <div className="bg-[#00C853]/15 border border-[#00C853]/30 rounded-3xl p-8 max-w-md mx-auto space-y-4">
            <span className="text-4xl block animate-bounce">🎉</span>
            <h3 className="font-display font-extrabold text-lg text-white">
              {isFr ? "Vous êtes sur la liste !" : isRu ? "Вы в списке!" : "You are on the list!"}
            </h3>
            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              {isFr 
                ? "Votre invitation d'accès anticipé est sécurisée. Nous avons envoyé une notification à nos fondateurs. Vous recevrez bientôt un code de réduction de lancement exclusif !" 
                : isRu 
                ? "Ваше приглашение в ранний доступ подтверждено. Мы уведомили основателей. Скоро вы получите эксклюзивный код скидки к запуску!" 
                : "Your early access invitation is secured. We sent a Telegram webhook alert to our founders. You will receive an exclusive launch code discount soon!"}
            </p>
            <button
              onClick={() => setWaitlistStatus('idle')}
              className="mt-2 border border-white/20 text-white hover:bg-white/5 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
            >
              {isFr ? "Inscrire une autre personne" : isRu ? "Зарегистрировать еще одного" : "Sign up another person"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto space-y-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isFr ? "Nom Complet *" : isRu ? "Полное имя *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={waitlistForm.name}
                  onChange={(e) => setWaitlistForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Jean-Baptiste Mbarga"
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isFr ? "Adresse Email *" : isRu ? "Email адрес *" : "Email Address *"}
                </label>
                <input
                  type="email"
                  required
                  value={waitlistForm.email}
                  onChange={(e) => setWaitlistForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. jean@example.com"
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isFr ? "Ville / Pays d'origine" : isRu ? "Город / Страна" : "Current City / Country"}
                </label>
                <input
                  type="text"
                  value={waitlistForm.cityCountry}
                  onChange={(e) => setWaitlistForm(prev => ({ ...prev, cityCountry: e.target.value }))}
                  placeholder="e.g. Douala, Cameroon"
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {isFr ? "Je suis un..." : isRu ? "Я..." : "I am a..."}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setWaitlistForm(prev => ({ ...prev, role: "traveller" }))}
                    className={`py-3 text-xs font-semibold rounded-xl border cursor-pointer transition-all ${
                      waitlistForm.role === 'traveller' 
                        ? 'border-[#FF6B35] bg-[#FF6B35]/15 text-white' 
                        : 'border-white/5 bg-white/[0.02] text-gray-400'
                    }`}
                  >
                    {isFr ? "Voyageur" : isRu ? "Попутчик" : "Traveller"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaitlistForm(prev => ({ ...prev, role: "sender" }))}
                    className={`py-3 text-xs font-semibold rounded-xl border cursor-pointer transition-all ${
                      waitlistForm.role === 'sender' 
                        ? 'border-[#FF6B35] bg-[#FF6B35]/15 text-white' 
                        : 'border-white/5 bg-white/[0.02] text-gray-400'
                    }`}
                  >
                    {isFr ? "Envoyeur" : isRu ? "Отправитель" : "Sender"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaitlistForm(prev => ({ ...prev, role: "both" }))}
                    className={`py-3 text-xs font-semibold rounded-xl border cursor-pointer transition-all ${
                      waitlistForm.role === 'both' 
                        ? 'border-[#FF6B35] bg-[#FF6B35]/15 text-white' 
                        : 'border-white/5 bg-white/[0.02] text-gray-400'
                    }`}
                  >
                    {isFr ? "Les Deux" : isRu ? "И то, и другое" : "Both"}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit btn */}
            <button
              type="submit"
              disabled={waitlistStatus === 'submitting'}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFA06E] hover:from-[#e55924] hover:to-[#ff8d50] text-white py-4 rounded-xl font-display font-bold text-center text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {waitlistStatus === 'submitting' 
                ? (isFr ? 'Inscription en cours...' : isRu ? 'Регистрация...' : 'Submitting details...') 
                : (isFr ? "Rejoindre la liste d'attente maintenant" : isRu ? 'Вступить в лист ожидания' : 'Join the Waitlist Now')}
            </button>
          </form>
        )}

        {/* Scrolling Ticker below Form (UPGRADE 9) */}
        <div className="max-w-md mx-auto bg-black/20 border border-white/5 p-3 rounded-full flex items-center justify-center gap-2 overflow-hidden backdrop-blur-sm min-h-11">
          <span className="w-2 h-2 rounded-full bg-[#00C853] animate-ping shrink-0" />
          <div className="font-mono text-[11px] text-gray-300 tracking-tight transition-all duration-500 ease-in-out">
            {isFr 
              ? `${activeTicker.name} de ${activeTicker.city} a rejoint ${activeTicker.timeFr}` 
              : isRu 
              ? `${activeTicker.name} из города ${activeTicker.city} присоединился ${activeTicker.timeRu}` 
              : `${activeTicker.name} from ${activeTicker.city} joined ${activeTicker.time}`}
          </div>
        </div>

        {/* Progress stats (UPGRADE 9) */}
        <div className="max-w-lg mx-auto pt-4 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-[#FF6B35] uppercase font-bold">
            <span>
              {isFr ? "68% de notre objectif de lancement de 500" : isRu ? "68% до нашей цели запуска в 500 участников" : "68% to our 500 launch target"}
            </span>
            <span>340 / 500</span>
          </div>
          <div className="w-full h-2.5 bg-white/5 border border-white/10 rounded-full overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-r from-[#0052CC] to-[#00C853] rounded-full w-[68%] animate-pulse" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-sans">
            <span className="flex items-center gap-1.5 text-[#00C853] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
              {isFr ? "247 personnes devant vous" : isRu ? "247 человек перед вами" : "247 people ahead of you"}
            </span>
            <span>
              {isFr ? "Temps d'attente moyen : 1h" : isRu ? "Ср. время ожидания: 1ч" : "Avg wait time: 1hr"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
