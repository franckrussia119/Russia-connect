import { useState, useEffect } from "react";
import { ArrowRight, Download, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import CountryFlag from "./CountryFlag";

// Import modular subcomponents (UPGRADES)
import PriceComparison from "./PriceComparison";
import TrustSection from "./TrustSection";
import StatsCounterSection from "./StatsCounterSection";
import RouteMapAndCards from "./RouteMapAndCards";
import TestimonialsSection from "./TestimonialsSection";
import WaitlistSection from "./WaitlistSection";
import PreFooterSection from "./PreFooterSection";

// @ts-ignore
import happyTravellerAirport from "../assets/images/happy_traveller_airport_1783165966913.jpg";
// @ts-ignore
import happyStudentFood from "../assets/images/happy_student_food_1783165940937.jpg";
// @ts-ignore
import happyFamilyGadget from "../assets/images/happy_family_gadget_1783165953208.jpg";

export default function HomeView() {
  const { language, t } = useLanguage();
  const isFr = language === "fr";
  const isRu = language === "ru";

  // HERO SLIDES State (UPGRADE 1)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [howItWorksTab, setHowItWorksTab] = useState<'traveller' | 'sender'>('traveller');

  // Left slide info corresponding to Douala-Moscow, Yaounde-Paris, Lagos-London
  const leftSlides = [
    {
      badge: (
        <span className="flex items-center gap-1.5">
          <CountryFlag code="cm" className="w-4 h-3 object-cover rounded-[1px]" />
          <span>{isFr ? "Ligne Directe Cameroun - Russie" : isRu ? "Прямой рейс Камерун - Россия" : "Direct Flight Cameroon - Russia"}</span>
          <CountryFlag code="ru" className="w-4 h-3 object-cover rounded-[1px]" />
        </span>
      ),
      title: isFr ? "Soutenez vos proches" : isRu ? "Помогайте вашим близким" : "Support Your Dear Ones",
      highlight: (
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span>{isFr ? "à Moscou" : isRu ? "в Москве" : "in Moscow"}</span>
          <CountryFlag code="ru" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
          <span>& {isFr ? "Douala" : isRu ? "Дуале" : "Douala"}</span>
          <CountryFlag code="cm" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
        </span>
      ),
      subtitle: isFr 
        ? "Envoyez des épices africaines, des relevés de notes ou des cadeaux en toute sécurité par des étudiants et voyageurs vérifiés." 
        : isRu 
        ? "Отправляйте африканские специи, документы или подарки через проверенных студентов и попутчиков." 
        : "Send authentic African spices, academic transits, or devices safely with verified community members traveling direct.",
      bgImage: happyStudentFood
    },
    {
      badge: (
        <span className="flex items-center gap-1.5">
          <CountryFlag code="cm" className="w-4 h-3 object-cover rounded-[1px]" />
          <span>{isFr ? "Ligne Directe Cameroun - France" : isRu ? "Прямой рейс Камерун - Франция" : "Direct Flight Cameroon - France"}</span>
          <CountryFlag code="fr" className="w-4 h-3 object-cover rounded-[1px]" />
        </span>
      ),
      title: isFr ? "Délivrez vos colis" : isRu ? "Доставляйте ваши вещи" : "Deliver Your Parcels",
      highlight: (
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span>{isFr ? "à Paris" : isRu ? "в Париж" : "in Paris"}</span>
          <CountryFlag code="fr" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
          <span>& {isFr ? "Yaoundé" : isRu ? "Яунде" : "Yaounde"}</span>
          <CountryFlag code="cm" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
        </span>
      ),
      subtitle: isFr 
        ? "Ne payez plus les tarifs indécents des courriers aériens commerciaux. Profitez de l'espace bagage libre." 
        : isRu 
        ? "Больше не платите заоблачные тарифы авиакурьерам. Пользуйтесь свободным весом в багаже попутчиков." 
        : "Avoid paying the insane flat fees of international air couriers. Ship via trusted hand-carried luggage space in days.",
      bgImage: happyTravellerAirport
    },
    {
      badge: (
        <span className="flex items-center gap-1.5">
          <CountryFlag code="ng" className="w-4 h-3 object-cover rounded-[1px]" />
          <span>{isFr ? "Ligne Directe Nigeria - Royaume-Uni" : isRu ? "Прямой рейс Нигерия - Великобритания" : "Direct Flight Nigeria - UK"}</span>
          <CountryFlag code="gb" className="w-4 h-3 object-cover rounded-[1px]" />
        </span>
      ),
      title: isFr ? "Expédiez rapidement" : isRu ? "Отправляйте мгновенно" : "Ship Packages Fast",
      highlight: (
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span>{isFr ? "à Londres" : isRu ? "в Лондон" : "in London"}</span>
          <CountryFlag code="gb" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
          <span>& {isFr ? "Lagos" : isRu ? "Лагос" : "Lagos"}</span>
          <CountryFlag code="ng" className="w-6 h-4 object-cover rounded shadow-sm border border-white/10" />
        </span>
      ),
      subtitle: isFr 
        ? "Faites voyager vos affaires essentielles en cabine. Remise en main propre sécurisée par code PIN." 
        : isRu 
        ? "Передавайте важные вещи лично в руки. Безопасность гарантирована кодом подтверждения." 
        : "Get your essential documents, devices, and traditional clothing hand-carried with secure PIN hand-offs.",
      bgImage: happyFamilyGadget
    }
  ];

  useEffect(() => {
    // Sync Left-Side Sliding Carousel & Right-Side SVG route display every 5 seconds (UPGRADE 1)
    const interval = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      q: isFr ? "Est-il légal de transporter des colis pour d'autres personnes ?" : isRu ? "Законно ли перевозить посылки для других людей?" : "Is it legal to carry packages for other people?",
      a: isFr 
        ? "Oui, il est tout à fait légal de transporter des articles personnels pour des tiers dans le cadre de vos bagages personnels. Nous exigeons que tous les voyageurs déclarent les colis si nécessaire et ne transportent jamais d'articles contraires à la réglementation aérienne."
        : isRu
        ? "Да, перевозить личные вещи для других людей в своем багаже абсолютно законно. Мы требуем, чтобы все попутчики при необходимости декларировали посылки и никогда не перевозили вещи, нарушающие местные правила."
        : "Yes, it is completely legal to carry personal items for others as part of your personal luggage. We require all travellers to declare packages to customs if required and never carry items that violate local regulations."
    },
    {
      q: isFr ? "Que se passe-t-il si mon colis est perdu ou endommagé ?" : isRu ? "Что если моя посылка будет утеряна или повреждена?" : "What if my package is lost or damaged?",
      a: isFr
        ? "RussiaConnect offre une couverture d'assurance allant jusqu'à 325 000 FCFA par livraison pour toute perte ou dommage causé par la négligence avérée du voyageur. Tous les colis sont photographiés."
        : isRu
        ? "RussiaConnect предоставляет страховое покрытие до 50 000 ₽ за доставку в случае утери или повреждения по вине попутчика. Все посылки фотографируются при приеме и выдаче."
        : "RussiaConnect provides coverage up to 325,000 FCFA (50,000 ₽) per delivery for loss or damage caused by traveller negligence. All packages are photographed at pickup and delivery as solid proof."
    },
    {
      q: isFr ? "Comment fonctionne le paiement ?" : isRu ? "Как работает оплата?" : "How does payment work?",
      a: isFr
        ? "Le paiement est conservé sous séquestre par RussiaConnect dès que l'expéditeur paie. Il n'est libéré au voyageur que lorsque le destinataire confirme la livraison via un code PIN unique."
        : isRu
        ? "Оплата удерживается на эскроу-счете RussiaConnect с момента внесения отправителем. Она переводится попутчику только тогда, когда получатель подтверждает доставку уникальным PIN-кодом."
        : "Payment is held in escrow by RussiaConnect from the moment the sender pays. It is only released to the traveller once the recipient confirms delivery at the destination via a unique PIN."
    },
    {
      q: isFr ? "Comment les voyageurs sont-ils vérifiés ?" : isRu ? "Как верифицируют путешественников?" : "How are travellers verified?",
      a: isFr
        ? "Chaque voyageur doit télécharger un passeport ou une carte d'identité valide, prendre un selfie biométrique de comparaison et valider son numéro de téléphone avant de coordonner sa première livraison."
        : isRu
        ? "Каждый путешественник обязан загрузить паспорт или удостоверение личности, сделать селфи-снимок с документом и подтвердить номер телефона перед совершением первой доставки."
        : "Every traveller must upload a valid passport or national ID, take a live matching selfie with their document, and verify their phone number before coordinating their first delivery."
    }
  ];

  return (
    <div className="bg-[#0A0F1E] text-white selection:bg-[#FF6B35] selection:text-white font-sans overflow-x-hidden pt-[72px]">
      
      {/* Dynamic Embedded Styles for Advanced Animations */}
      <style>{`
        @keyframes routeGlow {
          0% { stroke-dashoffset: 130; }
          100% { stroke-dashoffset: -130; }
        }
        .animate-route-glow {
          animation: routeGlow 4s linear infinite;
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }
      `}</style>

      {/* A. HERO SECTION */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0A0F1E]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          
          {/* Main Hero Card (Bento Grid Col 8) with Sliding Text and Sliding Background Image (UPGRADE 1) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#111827] to-[#0A0F1E] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            
            {/* Sliding Background Images */}
            {leftSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentHeroIndex ? "opacity-35 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <img 
                  src={slide.bgImage} 
                  alt="African diaspora life" 
                  className="w-full h-full object-cover filter brightness-[0.4]" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0A0F1E]/80 to-[#111827]/90" />
              </div>
            ))}

            {/* Content overlay */}
            <div className="relative z-10 space-y-6">
              {leftSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-in-out ${
                    idx === currentHeroIndex 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-12 absolute pointer-events-none"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0052CC]/20 border border-[#0052CC]/40 rounded-full text-[#7da7ff] text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-ping" />
                    <span>{slide.badge}</span>
                  </div>
                  <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.1] text-white tracking-tight">
                    {slide.title} <br />
                    <span className="text-[#FF6B35]">{slide.highlight}</span>
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mt-4">
                    {slide.subtitle}
                  </p>
                </div>
              ))}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    const waitlistSec = document.getElementById("waitlist");
                    if (waitlistSec) waitlistSec.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center space-x-2 bg-[#0052CC] hover:bg-[#0041a8] text-white px-8 py-4 rounded-full font-sans font-bold text-base shadow-lg shadow-[#0052CC]/20 hover:shadow-[#0052CC]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>{isFr ? "Rejoindre l'Accès Anticipé" : isRu ? "Получить ранний доступ" : "Join Waitlist"}</span>
                </button>
                <button
                  onClick={() => {
                    const howItWorksSec = document.getElementById("how-it-works");
                    if (howItWorksSec) howItWorksSec.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center space-x-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-sans font-bold text-base transition-all cursor-pointer"
                >
                  <span>{isFr ? "Comment ça marche" : isRu ? "Как это работает" : "Learn How It Works"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Bento Column (Col 4) with Rotating SVG route visualization (UPGRADE 1) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            {/* Image slideshow card top */}
            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold block mb-2">
                  {isFr ? "FIABILITÉ" : isRu ? "НАДЕЖНОСТЬ" : "RELIABILITY"}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white">
                  {isFr ? "Rapprocher les diasporas" : isRu ? "Объединяя семьи" : "Connecting Families"}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {isFr 
                    ? "Du Cameroun à la Russie en passant par l'Europe, faites parvenir l'essentiel à ceux qui comptent." 
                    : isRu 
                    ? "От Камеруна до России и Европы — передавайте самое важное тем, кто вам дорог." 
                    : "Unlocking empty weight spaces of verified flyers to ship traditional spices, books, and laptops direct."}
                </p>
              </div>
              
              <div className="mt-4 rounded-2xl overflow-hidden h-36 relative">
                {leftSlides.map((slide, idx) => (
                  <img 
                    key={idx}
                    src={slide.bgImage} 
                    alt="African diaspora life" 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      idx === currentHeroIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`} 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Rotating SVG Route Visualization Card (UPGRADE 1) */}
            <div className="bg-[#111827] border-2 border-white/10 rounded-3xl p-5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#FF6B35] font-bold">
                  {isFr ? "LIGNE ACTIVE" : isRu ? "АКТИВНЫЙ МАРШРУТ" : "ACTIVE LIVE ROUTE"}
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>

              {/* Route Map SVG */}
              <div className="h-28 w-full relative flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" fill="none">
                  <path
                    id="miniFlightPath"
                    d="M 40,80 Q 150,15 260,80"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                  <path
                    d="M 40,80 Q 150,15 260,80"
                    stroke="url(#routeGlow)"
                    strokeWidth="2"
                    strokeDasharray="10,120"
                    strokeDashoffset="130"
                    className="animate-route-glow"
                  />

                  <defs>
                    <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0052CC" stopOpacity="0" />
                      <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Plane Icon travelling along path */}
                  <text fontSize="14">
                    <textPath href="#miniFlightPath" startOffset="0%">
                      ✈️
                      <animate
                        attributeName="startOffset"
                        from="0%"
                        to="100%"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </textPath>
                  </text>

                  {/* Pulsing Start Dot */}
                  <circle cx="40" cy="80" r="4" fill="#FF6B35" />
                  <circle cx="40" cy="80" r="8" fill="#FF6B35" opacity="0.4" className="animate-ping" />
                  <text x="40" y="102" fill="#9CA3AF" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                    {currentHeroIndex === 0 ? "DLA" : currentHeroIndex === 1 ? "NSI" : "LOS"}
                  </text>

                  {/* Pulsing End Dot */}
                  <circle cx="260" cy="80" r="4" fill="#00C853" />
                  <circle cx="260" cy="80" r="8" fill="#00C853" opacity="0.4" className="animate-ping" />
                  <text x="260" y="102" fill="#9CA3AF" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                    {currentHeroIndex === 0 ? "SVO" : currentHeroIndex === 1 ? "CDG" : "LHR"}
                  </text>
                </svg>
              </div>

              {/* Dynamic stats rotating every 5 seconds */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center mt-1 font-sans text-xs">
                <div>
                  <span className="text-gray-500 text-[8px] uppercase font-mono block">Travellers</span>
                  <span className="text-white font-bold block mt-0.5">
                    {currentHeroIndex === 0 ? "8 active" : currentHeroIndex === 1 ? "12 active" : "4 active"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 text-[8px] uppercase font-mono block">Avg Rate</span>
                  <span className="text-[#00C853] font-bold block mt-0.5">
                    {currentHeroIndex === 0 ? "15 €/kg" : currentHeroIndex === 1 ? "12 €/kg" : "10 £/kg"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 text-[8px] uppercase font-mono block">Transit</span>
                  <span className="text-white font-bold block mt-0.5">
                    {currentHeroIndex === 0 ? "3-5 Days" : currentHeroIndex === 1 ? "2-4 Days" : "3-5 Days"}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* B. PRICE COMPARISON SECTION (UPGRADE 2) */}
      <PriceComparison language={language} />

      {/* C. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white text-[#0A0F1E] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">How RussiaConnect Works</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] tracking-tight">
              Simple. Safe. Smart.
            </h2>
            
            {/* Toggle tabs */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => setHowItWorksTab('traveller')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  howItWorksTab === 'traveller'
                    ? 'bg-[#0052CC] text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:text-[#0A0F1E]'
                }`}
              >
                🎒 I Am Travelling
              </button>
              <button
                onClick={() => setHowItWorksTab('sender')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  howItWorksTab === 'sender'
                    ? 'bg-[#0052CC] text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:text-[#0A0F1E]'
                }`}
              >
                📦 I Need to Send
              </button>
            </div>
          </div>

          {/* Timeline steps */}
          {howItWorksTab === 'traveller' ? (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Horizontal timeline step 1 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center mb-4 font-display font-bold">1</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Register Your Trip</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Enter your airline flight route, travel date, available luggage space in kilograms, and accepted item types."}
                  </p>
                </div>
                {/* Step 2 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center mb-4 font-display font-bold">2</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Receive Requests</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Senders along your exact flight corridor will search profiles, request matches, and post shipment guidelines."}
                  </p>
                </div>
                {/* Step 3 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center mb-4 font-display font-bold">3</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Agree & Collect</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Message securely inside the app, confirm contents, negotiate prices, and take timestamped pickup photographs."}
                  </p>
                </div>
                {/* Step 4 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center mb-4 font-display font-bold">4</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Deliver & Get Paid</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Hand-off package to recipient, confirm unique PIN, and witness secure escrow payouts release instantly."}
                  </p>
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-[#0A0F1E] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
                <div className="space-y-2 mb-6 md:mb-0">
                  <h4 className="font-display font-extrabold text-xl">Earn 200–600 € Per Flight</h4>
                  <p className="text-sm text-gray-400 font-sans max-w-xl">
                    Offset your expensive airline ticket costs entirely by helping community members deliver small documents and packets.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const waitlistSec = document.getElementById('waitlist');
                    if (waitlistSec) waitlistSec.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FF6B35] text-white px-6 py-3 rounded-full text-sm font-bold font-sans cursor-pointer hover:bg-[#e55924] transition-all shrink-0"
                >
                  Join Traveller Waiting List
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Step 1 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-4 font-display font-bold">1</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Post Your Package</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Upload parcel details including weight, exact item description, deadline timeline, and matched budget."}
                  </p>
                </div>
                {/* Step 2 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-4 font-display font-bold">2</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Browse Travellers</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Search verified travellers flying your exact route. View background rating checks and historical logs."}
                  </p>
                </div>
                {/* Step 3 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-4 font-display font-bold">3</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Connect & Agree</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Negotiate pricing and safe hand-off details directly using secure in-app WhatsApp style chat channels."}
                  </p>
                </div>
                {/* Step 4 */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-4 font-display font-bold">4</div>
                  <h4 className="font-display font-bold text-lg text-[#0A0F1E] mb-2">Track & Confirm</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {"Receive immediate flight updates. Payout releases from escrow vault only once recipient keys in the code."}
                  </p>
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-[#0A0F1E] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
                <div className="space-y-2 mb-6 md:mb-0">
                  <h4 className="font-display font-extrabold text-xl">Save Up to 75% On Every Package</h4>
                  <p className="text-sm text-gray-400 font-sans max-w-xl">
                    {"Join our community to send documents, student items, clothing, or spices for 60-75% less than courier standard rates."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const waitlistSec = document.getElementById('waitlist');
                    if (waitlistSec) waitlistSec.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#0052CC] text-white px-6 py-3 rounded-full text-sm font-bold font-sans cursor-pointer hover:bg-[#0041a8] transition-all shrink-0"
                >
                  Join Sender Waiting List
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* D. DIVERSE ACTIVE ROUTES & SVG ROUTE MAPS (UPGRADES 1, 5) */}
      <RouteMapAndCards language={language} />

      {/* E. TRUST AND SAFETY SECTION (UPGRADE 4) */}
      <TrustSection language={language} />

      {/* F. STATS METRICS SECTION WITH LIVE TICKERS (UPGRADE 3) */}
      <StatsCounterSection language={language} />

      {/* G. WHAT CAN BE SENT SECTION */}
      <section className="py-20 bg-white text-[#0A0F1E] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">Item Guidelines</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] tracking-tight">
              What Can You Send?
            </h2>
            <p className="text-sm text-gray-500 mt-2">Clear rules of engagement to keep flights secure and compliant</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Accepted Column */}
            <div className="bg-[#F0F4FF] border border-[#0052CC]/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-[#0052CC] border-b border-gray-200 pb-4">
                <span className="w-8 h-8 rounded-full bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center font-bold">✓</span>
                <h3 className="font-display font-extrabold text-xl text-[#0A0F1E]">Generally Accepted Items</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm text-gray-700">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">📄</span>
                  <div>
                    <div className="font-bold text-gray-900">Documents & Papers</div>
                    <div className="text-xs text-gray-500">Transcripts, letters, contracts</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">📚</span>
                  <div>
                    <div className="font-bold text-gray-900">Books & Novels</div>
                    <div className="text-xs text-gray-500">Study guides, magazines</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">💻</span>
                  <div>
                    <div className="font-bold text-gray-900">Laptops & Tablets</div>
                    <div className="text-xs text-gray-500">Verified working electronics</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">👕</span>
                  <div>
                    <div className="font-bold text-gray-900">Clothes & Shoes</div>
                    <div className="text-xs text-gray-500">Unused apparel, gifts</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">🌶️</span>
                  <div>
                    <div className="font-bold text-gray-900">African Spices</div>
                    <div className="text-xs text-gray-500">Packaged dry foods, penja pepper</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl">
                  <span className="text-lg">🧴</span>
                  <div>
                    <div className="font-bold text-gray-900">Cosmetics & Beauty</div>
                    <div className="text-xs text-gray-500">Creams, hair oils, toiletries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forbidden Column */}
            <div className="bg-red-50 border border-red-100 rounded-3xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-red-600 border-b border-red-100 pb-4">
                <AlertTriangle className="w-6 h-6 shrink-0" />
                <h3 className="font-display font-extrabold text-xl text-[#0A0F1E]">Strictly Forbidden</h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <div>
                    <span className="font-bold text-gray-900">Narcotics & Drugs:</span> Any chemical medications without legal medical prescriptions or local customs approvals.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <div>
                    <span className="font-bold text-gray-900">Weapons & Powders:</span> Firearm accessories, ammunition, fireworks, or flammable matches.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <div>
                    <span className="font-bold text-gray-900">Bulk Commercial Resales:</span> Sacks of items clearly intended for retail shop inventory (not personal use).
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <div>
                    <span className="font-bold text-gray-900">Cash Exceeding 1000€:</span> Paper bills or banknotes violating international monetary limits are banned.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H. TESTIMONIALS SECTION (UPGRADE 6) */}
      <TestimonialsSection language={language} />

      {/* I. FAQ SECTION */}
      <section id="faq" className="py-20 bg-white text-[#0A0F1E] px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">Answers</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {faqs.slice(0, 2).map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-display font-bold text-sm sm:text-base text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF6B35]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 font-sans leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              {faqs.slice(2, 4).map((faq, idx) => {
                const actualIdx = idx + 2;
                const isOpen = activeFaq === actualIdx;
                return (
                  <div key={actualIdx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : actualIdx)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-display font-bold text-sm sm:text-base text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF6B35]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 font-sans leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* J. WAITLIST SECTION WITH SCROLLING SIGNUPS (UPGRADE 9) */}
      <WaitlistSection language={language} />

      {/* K. PRE-FOOTER SECTION WITH STRIKETHROUGH DHL vs RC (UPGRADE 10) */}
      <PreFooterSection language={language} />

      {/* UPGRADE 7: Floating Pulse-expanding WhatsApp Button */}
      <a
        href="https://wa.me/237651234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:shadow-emerald-500/20 group hover:max-w-xs max-w-16 overflow-hidden transition-all duration-500 ease-out animate-bounce-subtle"
        title="Chat on WhatsApp"
      >
        <div className="flex items-center gap-3 whitespace-nowrap">
          <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.996 0 2.007.593 3.868 1.613 5.435L2.012 22l4.711-1.545a9.923 9.923 0 005.281 1.541c5.518 0 9.996-4.477 9.996-9.996 0-5.519-4.478-9.996-9.996-9.996zm0 1.5c4.685 0 8.496 3.812 8.496 8.496 0 4.685-3.811 8.496-8.496 8.496a8.411 8.411 0 01-4.498-1.294l-.323-.191-2.969.974.992-2.887-.21-.336a8.417 8.417 0 01-1.303-4.432c0-4.684 3.812-8.496 8.496-8.496zm-3.646 3.491c-.19 0-.395.035-.559.183-.243.218-.788.771-.788 1.884 0 1.112.809 2.186.921 2.338.112.152 1.558 2.378 3.775 3.336 2.217.958 2.217.638 2.614.598.396-.04.1.18.396-.04.397-.04 1.282-.524 1.462-1.029.18-.505.18-.938.126-1.029-.054-.091-.2-.145-.47-.28-.27-.135-1.282-.633-1.48-.705-.198-.072-.342-.108-.487.108-.144.217-.559.705-.685.849-.126.144-.253.163-.523.027-.27-.135-1.14-.42-2.172-1.34-.803-.716-1.345-1.6-1.503-1.87-.157-.27-.017-.417.118-.552.122-.121.27-.315.406-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.473-.068-.135-.559-1.347-.766-1.848-.202-.49-.408-.423-.559-.431-.144-.008-.309-.008-.475-.008z"/>
          </svg>
          <div className="flex flex-col pr-4 text-left">
            <span className="font-extrabold text-sm tracking-tight leading-none">Chat with us</span>
            <span className="text-[10px] text-emerald-100 font-medium mt-0.5">reply in 12 min</span>
          </div>
        </div>
      </a>

    </div>
  );
}
