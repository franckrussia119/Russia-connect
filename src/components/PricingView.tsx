import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Calculator, ShieldCheck, TrendingDown, Sparkles, Check } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function PricingView() {
  const { language, t } = useLanguage();

  // Calculator state
  const [fromRoute, setFromRoute] = useState("Douala, CM");
  const [toRoute, setToRoute] = useState("Moscow, RU");
  const [weight, setWeight] = useState(5);
  const [insuranceLevel, setInsuranceLevel] = useState<'basic' | 'standard' | 'premium'>('basic');

  // FAQ state
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  // Helper function to format costs to CFA or Roubles based on current language
  const formatCost = (eurAmount: number) => {
    const cfa = Math.round(eurAmount * 650);
    const rouble = Math.round(eurAmount * 100);
    if (language === 'ru') {
      return `${rouble.toLocaleString('ru-RU')} ₽`;
    } else if (language === 'fr') {
      return `${cfa.toLocaleString('fr-FR')} FCFA`;
    } else {
      // English / dual currency format using FCFA and Roubles (no Euros)
      return `${cfa.toLocaleString('en-US')} FCFA (${rouble.toLocaleString('en-US')} ₽)`;
    }
  };

  // Simple clean short cost for visual tight boxes
  const formatCostShort = (eurAmount: number) => {
    const cfa = Math.round(eurAmount * 650);
    const rouble = Math.round(eurAmount * 100);
    if (language === 'ru') {
      return `${rouble.toLocaleString('ru-RU')} ₽`;
    } else if (language === 'fr') {
      return `${cfa.toLocaleString('fr-FR')} FCFA`;
    } else {
      return `${cfa.toLocaleString('en-US')} FCFA`;
    }
  };

  // Route rates per kg data
  const routeRates: { [key: string]: number } = {
    "Douala, CM_Moscow, RU": 12,
    "Moscow, RU_Douala, CM": 11,
    "Yaounde, CM_Paris, FR": 10,
    "Paris, FR_Yaounde, CM": 11,
    "Moscow, RU_Lagos, NG": 16,
    "Douala, CM_Brussels, BE": 9,
    "Yaounde, CM_Moscow, RU": 12,
    "Moscow, RU_Yaounde, CM": 11,
    "Paris, FR_Douala, CM": 10,
    "Douala, CM_Paris, FR": 11,
  };

  // Get rate per kg
  const key = `${fromRoute}_${toRoute}`;
  const ratePerKg = routeRates[key] || routeRates[`${toRoute}_${fromRoute}`] || 11; // Default rate if match not found

  // Calculations
  const basePrice = weight * ratePerKg;
  const platformFee = basePrice * 0.10;
  
  let insuranceCost = 0;
  if (insuranceLevel === 'standard') insuranceCost = 3;
  if (insuranceLevel === 'premium') insuranceCost = 8;

  const totalPrice = basePrice + platformFee + insuranceCost;

  // Traditional DHL/FedEx comparison calculations
  // Traditional formula is roughly: Base 65 + (weight * 28)
  const traditionalCost = Math.round(65 + (weight * 27));
  const estimatedSavings = Math.max(0, traditionalCost - totalPrice);

  const popularRoutes = [
    { from: "Douala (DLA)", to: "Moscow (SVO)", rate: `${formatCostShort(12)}/kg`, dhl: formatCostShort(195), rc: formatCostShort(60) },
    { from: "Moscow (DME)", to: "Douala (DLA)", rate: `${formatCostShort(10)}/kg`, dhl: formatCostShort(185), rc: formatCostShort(50) },
    { from: "Paris (CDG)", to: "Yaounde (NSI)", rate: `${formatCostShort(8)}/kg`, dhl: formatCostShort(180), rc: formatCostShort(40) },
    { from: "Yaounde (NSI)", to: "Paris (CDG)", rate: `${formatCostShort(9)}/kg`, dhl: formatCostShort(190), rc: formatCostShort(45) },
    { from: "Moscow (SVO)", to: "Lagos (LOS)", rate: `${formatCostShort(15)}/kg`, dhl: formatCostShort(240), rc: formatCostShort(75) },
    { from: "Douala (DLA)", to: "Brussels (BRU)", rate: `${formatCostShort(8)}/kg`, dhl: formatCostShort(175), rc: formatCostShort(40) },
    { from: "Moscow (SVO)", to: "Paris (CDG)", rate: `${formatCostShort(12)}/kg`, dhl: formatCostShort(160), rc: formatCostShort(60) },
    { from: "Yaounde (NSI)", to: "Moscow (DME)", rate: `${formatCostShort(11)}/kg`, dhl: formatCostShort(210), rc: formatCostShort(55) },
    { from: "Abidjan (ABJ)", to: "Paris (CDG)", rate: `${formatCostShort(10)}/kg`, dhl: formatCostShort(170), rc: formatCostShort(50) },
    { from: "Lagos (LOS)", to: "Moscow (SVO)", rate: `${formatCostShort(16)}/kg`, dhl: formatCostShort(250), rc: formatCostShort(80) },
  ];

  const pricingFaqs = [
    {
      q: language === "fr" ? "Comment est déterminé le tarif par kilogramme ?" : language === "ru" ? "Как определяется тариф за килограмм?" : "How is the rate per kilogram determined?",
      a: language === "fr"
        ? "Les voyageurs fixent leurs propres tarifs en fonction de leur franchise de bagages, de la demande sur l'itinéraire et des frais de la compagnie aérienne. En moyenne, les tarifs oscillent entre 5 000 et 12 000 FCFA par kilogramme, ce qui est jusqu'à 75% moins cher que les transporteurs express traditionnels."
        : language === "ru"
        ? "Путешественники сами устанавливают тарифы в зависимости от допустимого веса багажа, спроса на маршруте и сборов авиакомпании. В среднем тарифы колеблются от 800 до 1 800 ₽ за килограмм, что до 75% дешевле традиционных служб экспресс-доставки."
        : "Travellers set their own rates based on current luggage allowances, route demand, and airline fees. On average, rates fluctuate between 8 and 18 euros per kilogram, which is up to 75% cheaper than traditional cargo express carriers."
    },
    {
      q: language === "fr" ? "Que couvre la commission de plateforme de 10% ?" : language === "ru" ? "Что покрывает комиссия платформы 10%?" : "What does the 10% platform fee cover?",
      a: language === "fr"
        ? "La commission de plateforme finance nos opérations continues, l'infrastructure de paiement sécurisé avec séquestre en temps réel, les lignes de notification automatisées, les vérifications d'identité et de passeport des voyageurs, ainsi que le support client."
        : language === "ru"
        ? "Комиссия платформы финансирует нашу непрерывную работу, инфраструктуру безопасных эскроу-платежей в реальном времени, автоматические уведомления, проверку паспортов и личностей попутчиков, а также службу разрешения споров."
        : "The platform fee funds our continuous operations, real-time in-app escrow payment infrastructure, automated SMS status notification lines, passport/identity background checks, and active dispute mediation support."
    },
    {
      q: language === "fr" ? "Comment fonctionne la fonction de sécurité séquestre ?" : language === "ru" ? "Как работает безопасный эскроу-платеж?" : "How does the escrow safety feature work?",
      a: language === "fr"
        ? "Lorsqu'un expéditeur accepte une transaction, ses fonds sont débités et bloqués en toute sécurité dans notre coffre-fort. Le voyageur peut voir que le paiement est entièrement financé, mais ne peut toucher l'argent que lorsque le destinataire du colis saisit le code de confirmation unique lors de la remise finale."
        : language === "ru"
        ? "Когда отправитель соглашается на сделку, его средства списываются и надежно блокируются на специальном счете. Путешественник видит, что выплата полностью гарантирована, но не может получить деньги до тех пор, пока получатель посылки не введет уникальный PIN-код подтверждения при передаче посылки."
        : "When a sender agrees to a transaction, their funds are charged and locked securely in our secure vault. The traveller can see that the payout is fully funded, but cannot touch the money until the package recipient enters the unique confirmation pin at the final hand-off."
    },
    {
      q: language === "fr" ? "Y a-t-il des frais de douane cachés ?" : language === "ru" ? "Есть ли скрытые таможенные пошлины?" : "Are there any hidden customs fees?",
      a: language === "fr"
        ? "Aucun de la part de RussiaConnect ! Les expéditeurs sont responsables de s'assurer que leurs articles sont destinés à un usage personnel et restent dans les limites légales de franchise de droits. Les voyageurs peuvent discuter des directives de l'itinéraire et des protocoles douaniers via le chat en direct avant de récupérer le colis."
        : language === "ru"
        ? "Никаких со стороны RussiaConnect! Отправители несут ответственность за то, чтобы их вещи были предназначены для личного пользования и укладывались в лимиты беспошлинного ввоза. Путешественники могут обсудить правила маршрута и таможенные протоколы в чате перед получением посылки."
        : "None from RussiaConnect! Senders are responsible for ensuring their items are for personal use and stay within legal duty-free thresholds. Travellers can discuss route guidelines and customs protocols using the direct chat room before picking up the box."
    },
    {
      q: language === "fr" ? "Que se passe-t-il si une livraison est retardée ou annulée ?" : language === "ru" ? "Что произойдет, если доставка задержится или отменится?" : "What happens if a delivery is delayed or cancelled?",
      a: language === "fr"
        ? "Si un voyageur annule ou si son vol est retardé au-delà de la date limite de livraison requise, le paiement est intégralement remboursé à l'expéditeur instantanément. Il n'y a absolument aucun frais d'annulation ou pénalité de transaction dans ces circonstances."
        : language === "ru"
        ? "Если попутчик отменяет поездку или его рейс задерживается дольше требуемого срока доставки, оплата мгновенно и полностью возвращается отправителю. В таких обстоятельствах нет никаких сборов за отмену или штрафов."
        : "If a traveller cancels or their flight gets delayed past your required delivery deadline, the payment is fully refunded to the sender instantly. There are absolutely no cancellation fees or transaction penalties in these circumstances."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0A0F1E] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Simple & Fair</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
            Transparent Pricing. <span className="text-gradient-blue">No Surprises.</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {"Save up to 75% on shipping compared to traditional international couriers. Know the exact costs before booking a traveller."}
          </p>
        </div>
      </section>

      {/* Interactive Calculator Widget - Styled Bento Style */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Calculator Inputs (Bento Grid Col 7) */}
          <div className="lg:col-span-7 bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-2">
                <Calculator className="w-6 h-6 text-[#FF6B35]" />
                <h2 className="font-display font-extrabold text-2xl text-white">Instant Shipping Cost Estimator</h2>
              </div>

              {/* Route Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">From Location</label>
                  <select
                    value={fromRoute}
                    onChange={(e) => setFromRoute(e.target.value)}
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none cursor-pointer"
                  >
                    <option value="Douala, CM">Douala, Cameroon (DLA)</option>
                    <option value="Yaounde, CM">Yaoundé, Cameroon (NSI)</option>
                    <option value="Moscow, RU">Moscow, Russia (SVO)</option>
                    <option value="Paris, FR">Paris, France (CDG)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">To Location</label>
                  <select
                    value={toRoute}
                    onChange={(e) => setToRoute(e.target.value)}
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none cursor-pointer"
                  >
                    <option value="Moscow, RU">Moscow, Russia (SVO)</option>
                    <option value="Douala, CM">Douala, Cameroon (DLA)</option>
                    <option value="Yaounde, CM">Yaoundé, Cameroon (NSI)</option>
                    <option value="Paris, FR">Paris, France (CDG)</option>
                  </select>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Package Weight</label>
                  <span className="font-display font-extrabold text-lg text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 rounded-lg">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
                />
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>1 kg</span>
                  <span>10 kg</span>
                  <span>20 kg</span>
                  <span>25 kg</span>
                </div>
              </div>

              {/* Insurance Level */}
              <div className="space-y-3">
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {language === "fr" ? "Plan de Protection Optionnel" : language === "ru" ? "Дополнительная программа защиты" : "Optional Protection Plan"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setInsuranceLevel('basic')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      insuranceLevel === 'basic'
                        ? 'border-[#0052CC] bg-[#0052CC]/10 text-white'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">
                      {language === "fr" ? "Couverture Basique" : language === "ru" ? "Базовая защита" : "Basic Coverage"}
                    </div>
                    <div className="text-[10px] text-gray-400">
                      {language === "fr" ? "Inclus Gratuitement" : language === "ru" ? "Включено бесплатно" : "Included Free"}
                    </div>
                    <div className="text-xs font-semibold mt-1">
                      {language === "fr" ? `Jusqu'à ${formatCostShort(100)}` : language === "ru" ? `До ${formatCostShort(100)} покрытия` : `Up to ${formatCostShort(100)} cover`}
                    </div>
                  </button>

                  <button
                    onClick={() => setInsuranceLevel('standard')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      insuranceLevel === 'standard'
                        ? 'border-[#0052CC] bg-[#0052CC]/10 text-white'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">
                      {language === "fr" ? "Plan Standard" : language === "ru" ? "Стандартная защита" : "Standard Plan"}
                    </div>
                    <div className="text-[10px] text-gray-400">+ {formatCostShort(3)}</div>
                    <div className="text-xs font-semibold mt-1">
                      {language === "fr" ? `Jusqu'à ${formatCostShort(250)}` : language === "ru" ? `До ${formatCostShort(250)} покрытия` : `Up to ${formatCostShort(250)} cover`}
                    </div>
                  </button>

                  <button
                    onClick={() => setInsuranceLevel('premium')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      insuranceLevel === 'premium'
                        ? 'border-[#0052CC] bg-[#0052CC]/10 text-white'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">
                      {language === "fr" ? "Plan Premium" : language === "ru" ? "Премиум защита" : "Premium Plan"}
                    </div>
                    <div className="text-[10px] text-gray-400">+ {formatCostShort(8)}</div>
                    <div className="text-xs font-semibold mt-1">
                      {language === "fr" ? `Jusqu'à ${formatCostShort(500)}` : language === "ru" ? `До ${formatCostShort(500)} покрытия` : `Up to ${formatCostShort(500)} cover`}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center space-x-2 text-xs text-gray-400 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#00C853]" />
              <span>
                {language === "fr" 
                  ? `Tarif de base fixé dynamiquement à environ ${formatCostShort(ratePerKg)}/kg sur cet itinéraire.` 
                  : language === "ru" 
                  ? `Базовый тариф на этом маршруте составляет около ${formatCostShort(ratePerKg)}/кг.` 
                  : `Base rate set dynamically at approximately ${formatCost(ratePerKg)}/kg on this route.`}
              </span>
            </div>
          </div>

          {/* Calculator Output / Bill Presentation (Bento Grid Col 5) */}
          <div className="lg:col-span-5 bg-white text-black rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 bg-[#0052CC]/10 text-[#0052CC] text-xs font-bold uppercase tracking-wider rounded-full">
                Cost Breakdown
              </span>

              {/* Route Summary */}
              <div className="border-b border-gray-100 pb-4">
                <div className="text-sm text-gray-400 uppercase font-mono tracking-wider">Requested Route</div>
                <div className="font-display font-extrabold text-xl text-[#0A0F1E] mt-1 flex items-center">
                  <span>{fromRoute}</span>
                  <span className="mx-2 text-gray-400">➔</span>
                  <span>{toRoute}</span>
                </div>
              </div>

              {/* Lines item list */}
              <div className="space-y-3 font-sans text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>{language === "fr" ? "Espace Bagage" : language === "ru" ? "Багажное место" : "Luggage Space"} ({weight} kg)</span>
                  <span className="font-medium text-gray-900">{formatCost(basePrice)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>{language === "fr" ? "Frais de Plateforme" : language === "ru" ? "Сервисный сбор" : "Platform Fee"} (10%)</span>
                  <span className="font-medium text-gray-900">{formatCost(platformFee)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>{language === "fr" ? "Plan de Protection" : language === "ru" ? "Программа защиты" : "Protection Plan"}</span>
                  <span className="font-medium text-gray-900">{formatCost(insuranceCost)}</span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-display font-extrabold text-gray-900 text-lg">
                    {language === "fr" ? "Coût Total" : language === "ru" ? "Итоговая стоимость" : "Total Cost"}
                  </span>
                  <span className="font-display font-extrabold text-2xl text-[#0052CC]">
                    {formatCost(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Savings comparison card */}
              <div className="bg-[#F0F4FF] border border-[#0052CC]/10 rounded-2xl p-5 space-y-3 mt-4">
                <div className="flex items-center space-x-2 text-[#0052CC]">
                  <TrendingDown className="w-5 h-5" />
                  <span className="font-display font-bold text-sm">
                    {language === "fr" ? "Par rapport aux transporteurs express" : language === "ru" ? "По сравнению с экспресс-доставкой" : "Versus Traditional Express Cargo"}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{language === "fr" ? `Coût DHL / FedEx (${weight} kg) :` : language === "ru" ? `Стоимость DHL / FedEx (${weight} кг):` : `DHL / FedEx Cost (${weight} kg):`}</span>
                  <span className="line-through font-semibold">{formatCost(traditionalCost)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-[#00C853] pt-1">
                  <span>{language === "fr" ? "Économie Estimée :" : language === "ru" ? "Примерная экономия:" : "Estimated Senders Savings:"}</span>
                  <span className="bg-[#00C853]/10 px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase">
                    {language === "fr" ? `Économisez ~${formatCostShort(estimatedSavings)}` : language === "ru" ? `Сэкономьте ~${formatCostShort(estimatedSavings)}` : `Save ~${formatCostShort(estimatedSavings)}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl mb-4">
                <p className="text-xs text-orange-800 text-center italic font-semibold leading-relaxed">
                  {language === "fr" 
                    ? "\"Envoi d'un colis de 5 kg pour seulement 43 000 FCFA au lieu des 128 000 FCFA demandés par DHL. Livraison effectuée en 4 jours !\""
                    : language === "ru"
                    ? "\"Отправил посылку весом 5 кг всего за 6 600 ₽ вместо 19 500 ₽ по тарифу DHL. Доставка заняла 4 дня!\""
                    : "\"Sent a 5kg package for just 66€ (43,000 FCFA) instead of DHL's 195€ quote. Delivery finished in 4 days!\""}
                </p>
              </div>
              <button
                onClick={() => {
                  const waitlistSec = document.getElementById('waitlist');
                  if (waitlistSec) {
                    waitlistSec.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }
                }}
                className="w-full bg-[#0A0F1E] hover:bg-black text-white py-3 rounded-xl font-display font-bold text-center text-sm transition-all shadow-md cursor-pointer"
              >
                {language === "fr" ? "Rejoindre la liste d'attente & Économiser 20%" : language === "ru" ? "Вступить в лист ожидания и сэкономить 20%" : "Join Waitlist & Save 20%"}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Comparison Table Section */}
      <section className="py-20 bg-[#070b16] px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">
              {language === "fr" ? "Comparatif du Marché" : language === "ru" ? "Сравнение рынка" : "Market Matchup"}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {language === "fr" ? "Comparez nos Tarifs de Livraison" : language === "ru" ? "Сравнение тарифов доставки" : "Compare Shipping Rates"}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              {language === "fr" ? "Comparatif basé sur les grilles tarifaires express 2026" : language === "ru" ? "Сравнение основано на стандартных тарифах экспресс-доставки 2026 года" : "Comparison based on standard 2026 international courier tariffs"}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider text-xs">
                  <th className="py-4 px-6 font-mono font-medium">{language === "fr" ? "Option de Colis" : language === "ru" ? "Тип отправления" : "Package Option"}</th>
                  <th className="py-4 px-6 font-mono font-medium">DHL</th>
                  <th className="py-4 px-6 font-mono font-medium">FedEx</th>
                  <th className="py-4 px-6 font-mono font-medium text-[#FF6B35]">RussiaConnect</th>
                  <th className="py-4 px-6 font-mono font-medium text-[#00C853] text-right">{language === "fr" ? "Économie" : language === "ru" ? "Ваша экономия" : "You Save"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold">{language === "fr" ? "Colis 5kg (Douala ➔ Moscou)" : language === "ru" ? "Посылка 5кг (Дуала ➔ Москва)" : "5kg Package (Douala ➔ Moscow)"}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(195)}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(210)}</td>
                  <td className="py-4 px-6 text-white font-bold bg-[#0052CC]/10 rounded-lg">{formatCostShort(50)} – {formatCostShort(90)}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold text-right">~{formatCostShort(145)}</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold">{language === "fr" ? "Colis 10kg (Douala ➔ Moscou)" : language === "ru" ? "Посылка 10кг (Дуала ➔ Москва)" : "10kg Package (Douala ➔ Moscow)"}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(340)}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(375)}</td>
                  <td className="py-4 px-6 text-white font-bold bg-[#0052CC]/10 rounded-lg">{formatCostShort(90)} – {formatCostShort(150)}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold text-right">~{formatCostShort(220)}</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold">{language === "fr" ? "Colis 5kg (Paris ➔ Yaoundé)" : language === "ru" ? "Посылка 5кг (Париж ➔ Яунде)" : "5kg Package (Paris ➔ Yaoundé)"}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(180)}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(195)}</td>
                  <td className="py-4 px-6 text-white font-bold bg-[#0052CC]/10 rounded-lg">{formatCostShort(40)} – {formatCostShort(65)}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold text-right">~{formatCostShort(135)}</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold">{language === "fr" ? "Documents & Papiers uniquement (Toutes lignes)" : language === "ru" ? "Документы и письма (Любой маршрут)" : "Documents & Papers Only (Any route)"}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(65)}</td>
                  <td className="py-4 px-6 text-gray-400">{formatCostShort(70)}</td>
                  <td className="py-4 px-6 text-white font-bold bg-[#0052CC]/10 rounded-lg">{formatCostShort(8)} – {formatCostShort(15)}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold text-right">~{formatCostShort(55)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Average Route Rates (Grid block) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Network Index</span>
          <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
            Popular Route Pricing Index
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            These are the average price ranges recorded across verified travellers this month. Senders negotiate terms in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {popularRoutes.map((route, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs text-gray-400 font-semibold">{route.from} ➔ {route.to}</div>
                <div className="font-display font-extrabold text-xl text-[#FF6B35]">{route.rate}</div>
              </div>
              <div className="border-t border-white/5 mt-4 pt-3 flex justify-between text-[11px] text-gray-500 font-mono uppercase">
                <span>DHL: {route.dhl}</span>
                <span className="text-[#00C853] font-bold">RC: {route.rc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protection Plans detail */}
      <section className="py-20 bg-[#070b16] px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">Delivery Insurance</span>
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
              RussiaConnect Protection Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
              <h3 className="font-display font-bold text-lg text-white mb-2">{t.pricing.plan1Title}</h3>
              <p className="text-[#00C853] font-mono text-xs font-semibold mb-4">{t.pricing.plan1Fee}</p>
              <p className="text-sm text-gray-400 font-sans mb-6">
                {t.pricing.plan1Desc}
              </p>
              <ul className="space-y-3 text-xs text-gray-300 font-sans">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan1Bullet1}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan1Bullet2}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0A0F1E] border border-[#0052CC]/40 rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-[#0052CC]/5">
              <div className="absolute top-0 right-0 bg-[#0052CC] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-xl tracking-wider">
                Popular Choice
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{t.pricing.plan2Title}</h3>
              <p className="text-[#2E82FF] font-mono text-xs font-semibold mb-4">{t.pricing.plan2Fee}</p>
              <p className="text-sm text-gray-400 font-sans mb-6">
                {t.pricing.plan2Desc}
              </p>
              <ul className="space-y-3 text-xs text-gray-300 font-sans">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan2Bullet1}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan2Bullet2}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan2Bullet3}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0A0F1E] border border-[#FF6B35]/30 rounded-2xl p-8 relative overflow-hidden">
              <h3 className="font-display font-bold text-lg text-white mb-2">{t.pricing.plan3Title}</h3>
              <p className="text-[#FF6B35] font-mono text-xs font-semibold mb-4">{t.pricing.plan3Fee}</p>
              <p className="text-sm text-gray-400 font-sans mb-6">
                {t.pricing.plan3Desc}
              </p>
              <ul className="space-y-3 text-xs text-gray-300 font-sans">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan3Bullet1}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan3Bullet2}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00C853]" />
                  <span>{t.pricing.plan3Bullet3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Specific FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl text-white">Pricing FAQs</h2>
          <p className="text-sm text-gray-400 mt-2">Common answers regarding platform fee structures and refunds</p>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-display font-bold text-base text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF6B35]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-400 font-sans leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
