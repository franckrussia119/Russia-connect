import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  Plane, 
  MessageSquare, 
  Handshake, 
  Camera, 
  CheckCircle, 
  Package, 
  ShieldCheck, 
  Search,
  Check,
  UserCheck,
  Coins,
  ArrowRight
} from "lucide-react";

interface InteractiveHowItWorksProps {
  language: string;
}

export default function InteractiveHowItWorks({ language }: InteractiveHowItWorksProps) {
  const [activeTab, setActiveTab] = useState<"traveller" | "sender">("traveller");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const isFr = language === "fr";
  const isRu = language === "ru";

  // Translate labels
  const titleText = isFr 
    ? "Simple. Sûr. Intelligent." 
    : isRu 
    ? "Просто. Безопасно. Умно." 
    : "Simple. Safe. Smart.";

  const sectionSubtitle = isFr 
    ? "Comment fonctionne RussiaConnect" 
    : isRu 
    ? "Как работает RussiaConnect" 
    : "How RussiaConnect Works";

  const tabTravellerText = isFr 
    ? "🎒 Je Voyage" 
    : isRu 
    ? "🎒 Я путешествую" 
    : "🎒 I Am Travelling";

  const tabSenderText = isFr 
    ? "📦 J'envoie un Colis" 
    : isRu 
    ? "📦 Мне нужно отправить" 
    : "📦 I Need to Send";

  // Data for Traveller Steps
  const travellerSteps = [
    {
      id: 1,
      title: isFr ? "Enregistrez votre voyage" : isRu ? "Зарегистрируйте поездку" : "Register Your Trip",
      desc: isFr 
        ? "Saisissez votre itinéraire, date de voyage et espace bagage libre en kilogrammes." 
        : isRu 
        ? "Укажите маршрут рейса, дату вылета и доступный свободный вес багажа." 
        : "Enter your flight route, travel date, and available luggage space in kilograms.",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      extraIcon: <Plane className="w-5 h-5 text-[#FF6B35] animate-bounce" />,
      graphicLabel: "1",
      color: "border-blue-500 text-blue-600",
      accentBg: "bg-blue-50",
      actionLabel: isFr ? "Saisir un vol" : isRu ? "Добавить рейс" : "Post a Flight"
    },
    {
      id: 2,
      title: isFr ? "Recevez des demandes" : isRu ? "Получайте заявки" : "Receive Requests",
      desc: isFr 
        ? "Les expéditeurs recherchent votre trajet et proposent des colis correspondants à votre espace." 
        : isRu 
        ? "Отправители найдут ваш маршрут и предложат подходящие посылки." 
        : "Senders along your exact flight corridor will search profiles and offer matched packages.",
      icon: <MessageSquare className="w-6 h-6 text-teal-600" />,
      extraIcon: <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>,
      graphicLabel: "2",
      color: "border-teal-500 text-teal-600",
      accentBg: "bg-teal-50",
      actionLabel: isFr ? "Voir les colis" : isRu ? "Посмотреть посылки" : "Browse Parcels"
    },
    {
      id: 3,
      title: isFr ? "Discutez & Récupérez" : isRu ? "Обсудите и заберите" : "Agree & Collect",
      desc: isFr 
        ? "Discutez en sécurité sur la messagerie intégrée, vérifiez le contenu et prenez une photo de contrôle." 
        : isRu 
        ? "Безопасно общайтесь во встроенном чате, проверяйте содержимое и делайте фото при приеме." 
        : "Message securely inside the app, inspect contents for safety, and snap a timestamped pickup photo.",
      icon: <Handshake className="w-6 h-6 text-[#FF6B35]" />,
      extraIcon: <Camera className="w-4 h-4 text-gray-500" />,
      graphicLabel: "3",
      color: "border-[#FF6B35] text-[#FF6B35]",
      accentBg: "bg-orange-50",
      actionLabel: isFr ? "Discuter" : isRu ? "Начать чат" : "Open Chat"
    },
    {
      id: 4,
      title: isFr ? "Livrez & Gagnez" : isRu ? "Доставьте и заработайте" : "Deliver & Get Paid",
      desc: isFr 
        ? "Remettez le colis à destination, validez le code PIN sécurisé et débloquez vos gains instantanément." 
        : isRu 
        ? "Передайте посылку получателю, подтвердите уникальный PIN-код и сразу заберите оплату." 
        : "Hand over the package to the recipient, verify the secure PIN code, and withdraw escrow earnings instantly.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      extraIcon: <Coins className="w-4 h-4 text-emerald-600" />,
      graphicLabel: "4",
      color: "border-emerald-500 text-emerald-600",
      accentBg: "bg-emerald-50",
      actionLabel: isFr ? "Encaisser" : isRu ? "Получить выплату" : "Withdraw Funds"
    }
  ];

  // Data for Sender Steps
  const senderSteps = [
    {
      id: 1,
      title: isFr ? "Publiez votre colis" : isRu ? "Разместите посылку" : "Post Your Package",
      desc: isFr 
        ? "Ajoutez les dimensions, le poids, la nature du paquet ainsi que votre budget de transport." 
        : isRu 
        ? "Загрузите данные о посылке, вес, фото содержимого и ваш бюджет на доставку." 
        : "Upload parcel details, total weight, description, and your delivery budget parameters.",
      icon: <Package className="w-6 h-6 text-[#FF6B35]" />,
      extraIcon: <Calendar className="w-4 h-4 text-gray-500" />,
      graphicLabel: "1",
      color: "border-[#FF6B35] text-[#FF6B35]",
      accentBg: "bg-orange-50",
      actionLabel: isFr ? "Créer un colis" : isRu ? "Создать посылку" : "Publish Parcel"
    },
    {
      id: 2,
      title: isFr ? "Trouvez un voyageur" : isRu ? "Найдите попутчика" : "Browse Travellers",
      desc: isFr 
        ? "Parcourez et filtrez les profils des voyageurs vérifiés volant sur votre trajet exact." 
        : isRu 
        ? "Ищите проверенных путешественников, летящих по вашему точному направлению." 
        : "Browse and filter verified traveller profiles flying your exact corridor on scheduled dates.",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      extraIcon: <UserCheck className="w-4 h-4 text-blue-600" />,
      graphicLabel: "2",
      color: "border-blue-500 text-blue-600",
      accentBg: "bg-blue-50",
      actionLabel: isFr ? "Chercher des voyageurs" : isRu ? "Найти путешественников" : "Search Flights"
    },
    {
      id: 3,
      title: isFr ? "Discutez & Concluez" : isRu ? "Свяжитесь и договоритесь" : "Connect & Agree",
      desc: isFr 
        ? "Convenez des points de rendez-vous et des tarifs via notre chat de messagerie sécurisé." 
        : isRu 
        ? "Согласуйте условия и удобное место встречи в нашем защищенном чате." 
        : "Coordinate meeting handovers and confirm specific transit costs via our built-in messenger.",
      icon: <MessageSquare className="w-6 h-6 text-teal-600" />,
      extraIcon: <Handshake className="w-4 h-4 text-teal-600" />,
      graphicLabel: "3",
      color: "border-teal-500 text-teal-600",
      accentBg: "bg-teal-50",
      actionLabel: isFr ? "Ouvrir le chat" : isRu ? "Открыть чат" : "Start Chat"
    },
    {
      id: 4,
      title: isFr ? "Suivez & Confirmez" : isRu ? "Отслеживайте и подтверждайте" : "Track & Confirm",
      desc: isFr 
        ? "Le paiement en séquestre sécurisé n'est versé au voyageur qu'après saisie du code secret PIN à la livraison." 
        : isRu 
        ? "Оплата хранится в безопасном эскроу и переводится только после ввода секретного PIN-кода получателем." 
        : "Escrow funds are safely held and only released when your recipient shares the verification PIN.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      extraIcon: <Check className="w-4 h-4 text-emerald-600" />,
      graphicLabel: "4",
      color: "border-emerald-500 text-emerald-600",
      accentBg: "bg-emerald-50",
      actionLabel: isFr ? "Suivre colis" : isRu ? "Отслеживать" : "Track Parcel"
    }
  ];

  const currentSteps = activeTab === "traveller" ? travellerSteps : senderSteps;
  const currentActiveStepData = currentSteps.find(s => s.id === selectedStep) || currentSteps[0];

  return (
    <section id="how-it-works" className="py-24 bg-white text-[#0A0F1E] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Grid Pattern to add visual premium depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* Decorative Blur Spheres */}
      <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">
            {sectionSubtitle}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0A0F1E] tracking-tight">
            Simple. <span className="text-[#FF6B35]">Safe.</span> Smart.
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto font-sans">
            {isFr 
              ? "Découvrez l'enchaînement d'étapes sécurisées et transparentes qui propulse notre réseau d'entraide."
              : isRu
              ? "Ознакомьтесь с простым, безопасным и прозрачным процессом доставки посылок."
              : "Discover the safe, secure, and intuitive milestone route powering our global peer-to-peer transport network."}
          </p>
          
          {/* Enhanced Dual Toggle Tabs */}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 p-1.5 rounded-full flex gap-1 shadow-sm border border-gray-200/50">
              <button
                onClick={() => {
                  setActiveTab("traveller");
                  setSelectedStep(1);
                }}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "traveller"
                    ? "bg-[#0052CC] text-white shadow-md"
                    : "text-gray-500 hover:text-[#0A0F1E]"
                }`}
              >
                {tabTravellerText}
              </button>
              <button
                onClick={() => {
                  setActiveTab("sender");
                  setSelectedStep(1);
                }}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "sender"
                    ? "bg-[#0052CC] text-white shadow-md"
                    : "text-gray-500 hover:text-[#0A0F1E]"
                }`}
              >
                {tabSenderText}
              </button>
            </div>
          </div>
        </div>

        {/* 1. MAIN DESKTOP INTERACTIVE ROAD GRAPHIC (Hidden on mobile for optimal vertical layout) */}
        <div className="hidden lg:block relative min-h-[460px] mb-12">
          
          {/* Animated Curved S-Road Pathway */}
          <div className="absolute inset-x-0 top-36 h-40">
            <svg className="w-full h-full" viewBox="0 0 1000 160" fill="none" preserveAspectRatio="none">
              {/* Backglow layer for Roadway */}
              <path
                d="M 50,80 Q 250,5 500,80 T 950,80"
                stroke="url(#roadGlowGrad)"
                strokeWidth="24"
                strokeLinecap="round"
                opacity="0.12"
              />
              
              {/* Core Road Gray Concrete */}
              <path
                d="M 50,80 Q 250,5 500,80 T 950,80"
                stroke="#E5E7EB"
                strokeWidth="16"
                strokeLinecap="round"
              />
              
              {/* Interactive Segment Progress Colored Overlay */}
              <path
                d="M 50,80 Q 250,5 500,80 T 950,80"
                stroke="url(#roadColoredGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset={1000 - (selectedStep * 250)}
                className="transition-all duration-700 ease-out"
              />

              {/* Central White Dashed Lanes */}
              <path
                d="M 50,80 Q 250,5 500,80 T 950,80"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="10, 8"
                strokeLinecap="round"
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="roadGlowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="50%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="roadColoredGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="45%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* GLIDING PACKAGE that travels along the road to the active step (improvement) */}
          <motion.div
            className="absolute z-30 pointer-events-none"
            initial={false}
            animate={{ left: selectedStep === 1 ? "6%" : selectedStep === 2 ? "31%" : selectedStep === 3 ? "61%" : "88%", top: selectedStep === 2 || selectedStep === 4 ? "118px" : "150px" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="w-11 h-11 rounded-full bg-white shadow-xl border-2 border-[#FF6B35] flex items-center justify-center">
              <Package className="w-5 h-5 text-[#FF6B35]" />
            </div>
          </motion.div>

          {/* FLYING PLANE ACCENT on Step 1 or moving dynamically */}
          <div className="absolute top-2 left-[12%] animate-pulse pointer-events-none">
            <span className="flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-blue-100 text-xs text-[#0052CC] font-bold font-mono">
              <Plane className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
              {isFr ? "En Vol" : isRu ? "В пути" : "In Flight"}
            </span>
          </div>

          {/* DELIVERED CHECKMARK ACCENT on Step 4 */}
          <div className="absolute top-28 right-[4%] pointer-events-none">
            <span className="flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full shadow-md border border-emerald-200 text-xs text-emerald-700 font-bold">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              {isFr ? "Arrivé" : isRu ? "Доставлено" : "Arrived"}
            </span>
          </div>

          {/* ROAD NODES & FLOATING GRAPHICS */}
          <div className="absolute inset-0 flex justify-between items-start px-24">
            
            {currentSteps.map((step) => {
              // Custom horizontal position calculation corresponding to curved road layout peaks/valleys
              let leftOffset = "0%";
              let topOffset = "0px";
              
              if (step.id === 1) { leftOffset = "4%"; topOffset = "40px"; }
              if (step.id === 2) { leftOffset = "29%"; topOffset = "10px"; }
              if (step.id === 3) { leftOffset = "59%"; topOffset = "44px"; }
              if (step.id === 4) { leftOffset = "86%"; topOffset = "12px"; }

              const isActive = selectedStep === step.id;
              const isHovered = hoveredStep === step.id;

              return (
                <div
                  key={step.id}
                  style={{ left: leftOffset, top: topOffset }}
                  className="absolute flex flex-col items-center transition-all duration-300"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setSelectedStep(step.id)}
                >
                  
                  {/* Floating Graphic bubble based on upload image */}
                  <div className="mb-6 relative cursor-pointer group">
                    <motion.div
                      animate={{ 
                        y: isActive ? [0, -6, 0] : isHovered ? -4 : 0,
                        scale: isActive ? 1.08 : 1
                      }}
                      transition={{ 
                        y: isActive ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { duration: 0.2 },
                        scale: { duration: 0.2 }
                      }}
                      className={`w-20 h-20 rounded-2xl bg-white shadow-xl border-2 flex items-center justify-center relative transition-all duration-300 ${
                        isActive 
                          ? "border-[#FF6B35] scale-110 shadow-[#FF6B35]/15" 
                          : "border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      {/* Interactive graphic elements inside bubble */}
                      <div className="p-3 relative">
                        {step.icon}
                        {step.extraIcon && (
                          <div className="absolute -top-1.5 -right-1.5 bg-white p-1 rounded-full shadow border border-gray-100">
                            {step.extraIcon}
                          </div>
                        )}
                      </div>

                      {/* Tail indicating speech-bubble style pointer */}
                      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100 group-hover:border-gray-300" />
                    </motion.div>
                  </div>

                  {/* Interactive Roadway Node Button */}
                  <button
                    onClick={() => setSelectedStep(step.id)}
                    className={`w-10 h-10 rounded-full border-4 flex items-center justify-center font-display font-extrabold text-sm z-20 cursor-pointer shadow-md transition-all duration-300 ${
                      isActive 
                        ? "bg-[#FF6B35] text-white border-white scale-115 ring-4 ring-[#FF6B35]/25" 
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#0052CC]/50"
                    }`}
                  >
                    {step.graphicLabel}
                  </button>

                  {/* Tiny floating title label */}
                  <span className={`mt-3 font-display font-bold text-xs tracking-tight transition-colors duration-200 ${
                    isActive ? "text-[#FF6B35]" : "text-gray-500 group-hover:text-gray-800"
                  }`}>
                    {step.title}
                  </span>

                </div>
              );
            })}

          </div>
        </div>

        {/* 2. DYNAMIC DESCRIPTION CARDS PANEL */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden shadow-sm">
            
            {/* Colorful progress glow top bar */}
            <div className={`absolute top-0 inset-x-0 h-1.5 transition-all duration-500 ${
              selectedStep === 1 ? "bg-blue-500" :
              selectedStep === 2 ? "bg-teal-500" :
              selectedStep === 3 ? "bg-[#FF6B35]" : "bg-emerald-500"
            }`} />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Dynamic Left Column Graphic representation */}
              <div className="md:col-span-4 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${selectedStep}`}
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`w-32 h-32 rounded-3xl ${currentActiveStepData.accentBg} border border-gray-100 shadow-inner flex items-center justify-center relative`}
                  >
                    {/* Floating large icon */}
                    <div className="p-4 scale-150">
                      {currentActiveStepData.icon}
                    </div>

                    {/* Step tag */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0A0F1E] text-white flex items-center justify-center font-display font-black text-xs">
                      {selectedStep}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column Text Detail Info */}
              <div className="md:col-span-8 text-center md:text-left space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${selectedStep}`}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider block">
                      {isFr ? `Étape ${selectedStep} sur 4` : isRu ? `Шаг ${selectedStep} из 4` : `Step ${selectedStep} of 4`}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#0A0F1E]">
                      {currentActiveStepData.title}
                    </h3>
                    <p className="text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
                      {currentActiveStepData.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Indicator Nav bullets inside card for easier navigation */}
                <div className="flex justify-center md:justify-start gap-2 pt-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedStep(num)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        selectedStep === num 
                          ? "w-8 bg-[#0052CC]" 
                          : "w-2.5 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to step ${num}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3. MOBILE VERTICAL TIMELINE ROAD (Visible only on mobile screen widths) */}
        <div className="block lg:hidden space-y-6">
          <div className="border-l-2 border-dashed border-gray-200 ml-5 space-y-10 py-2 relative">
            
            {currentSteps.map((step) => {
              const isActive = selectedStep === step.id;
              
              return (
                <div 
                  key={step.id} 
                  className="relative pl-10 cursor-pointer group"
                  onClick={() => setSelectedStep(step.id)}
                >
                  
                  {/* Glowing Node Marker */}
                  <div className={`absolute left-[-11px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center font-display font-black text-[9px] transition-all duration-300 ${
                    isActive 
                      ? "bg-[#FF6B35] border-white text-white scale-110 shadow-lg shadow-[#FF6B35]/20 ring-4 ring-[#FF6B35]/15" 
                      : "bg-white border-gray-300 text-gray-500 group-hover:border-gray-400"
                  }`}>
                    {step.graphicLabel}
                  </div>

                  {/* Content Stack */}
                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? "bg-gray-50 border-[#FF6B35]/30 shadow-md translate-x-1" 
                      : "bg-white border-gray-100 hover:border-gray-200"
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gray-100">
                        {step.icon}
                      </div>
                      <h4 className="font-display font-bold text-base text-[#0A0F1E]">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* CALL TO ACTION INTEGRATED CONTAINER */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const waitlistSec = document.getElementById("waitlist");
              if (waitlistSec) waitlistSec.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#0052CC] hover:bg-[#0040A3] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide shadow-lg cursor-pointer transition-all inline-flex items-center gap-2"
          >
            <span>
              {activeTab === "traveller" 
                ? (isFr ? "Rejoindre en tant que Voyageur" : isRu ? "Присоединиться как попутчик" : "Register as verified Traveller")
                : (isFr ? "Publier mon premier colis" : isRu ? "Разместить мою посылку" : "Post my parcel")}
            </span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
