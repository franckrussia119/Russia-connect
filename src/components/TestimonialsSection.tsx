import React from "react";
import { Star } from "lucide-react";

// @ts-ignore
import happyTravellerAirport from "../assets/images/happy_traveller_airport_1783165966913.jpg";
// @ts-ignore
import happyStudentFood from "../assets/images/happy_student_food_1783165940937.jpg";
// @ts-ignore
import happyFamilyGadget from "../assets/images/happy_family_gadget_1783165953208.jpg";

interface TestimonialsSectionProps {
  language: string;
}

export default function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  const testimonials = [
    {
      id: "celine",
      image: happyStudentFood,
      badge: isFr ? "Étudiante à Moscou" : isRu ? "Студентка в Москве" : "Student in Moscow",
      quote: isFr
        ? "« Grâce à RussiaConnect, j'ai reçu mes épices africaines préférées directement de Douala en seulement 4 jours ! Mon voyageur était super sympa et m'a livré au dortoir universitaire de l'Université RUDN. C'est magique ! »"
        : isRu
        ? "«Благодаря RussiaConnect я получила любимые африканские специи прямо из Дуалы всего за 4 дня! Мой попутчик был очень вежлив и доставил посылку прямо в общежитие РУДН. Это настоящее чудо!»"
        : "“Thanks to RussiaConnect, I received my favorite African spices directly from Douala in just 4 days! My traveler was extremely polite and delivered it right to my RUDN university dorm. Absolute magic!”",
      author: "Celine Fotso",
      role: isFr ? "Étudiante (RUDN)" : isRu ? "Студентка (РУДН)" : "Student (RUDN)",
      stars: 5,
      goldValue: isFr ? "Gagné 387 € ce mois-ci" : isRu ? "Заработано 387 € за этот месяц" : "Earned 387 euros this month",
      goldDesc: isFr ? "En partageant son poids libre en avion" : isRu ? "Продавая свободное место в багаже" : "By sharing free airline suitcase space"
    },
    {
      id: "patrick",
      image: happyFamilyGadget,
      badge: isFr ? "Envoyeur à Douala" : isRu ? "Отправитель в Дуале" : "Sender in Douala",
      quote: isFr
        ? "« J'avais besoin d'envoyer d'urgence un ordinateur portable de rechange à mon frère à Moscou pour son projet de recherche. Les messageries classiques demandaient des fortunes et des semaines de formalités. RussiaConnect l'a fait en un temps record pour un prix dérisoire. »"
        : isRu
        ? "«Мне нужно было срочно отправить брату в Москву запасной ноутбук для его научной работы. Обычные службы требовали огромные деньги и недели проверок. RussiaConnect доставили в рекордные сроки и за копейки!»"
        : "“I needed to urgently send a spare laptop to my brother in Moscow for his research paper. Traditional couriers demanded fortunes and weeks of bureaucracy. RussiaConnect got it done in record time for a fraction of the cost.”",
      author: "Patrick Nguema",
      role: isFr ? "Entrepreneur" : isRu ? "Предприниматель" : "Entrepreneur",
      stars: 5,
      goldValue: isFr ? "Économisé 103 € sur l'envoi" : isRu ? "Сэкономлено 103 € на отправке" : "Saved 103 euros",
      goldDesc: isFr ? "Par rapport aux tarifs exorbitants de DHL" : isRu ? "По сравнению с завышенными ценами курьеров" : "Compared to overpriced commercial couriers"
    },
    {
      id: "marie-claire",
      image: happyTravellerAirport,
      badge: isFr ? "Voyageuse Fréquente" : isRu ? "Частый путешественник" : "Frequent Traveller",
      quote: isFr
        ? "« J'effectue régulièrement le trajet Yaoundé-Moscou. En enregistrant mes voyages sur la plateforme, je finance intégralement mes billets d'avion en transportant de petits colis pour d'autres membres de la diaspora. Tout est sécurisé ! »"
        : isRu
        ? "«Я регулярно летаю по маршруту Яунде-Москва. Регистрируя поездки на платформе, я полностью окупаю билеты на самолет, перевозя небольшие посылки для соотечественников. Все абсолютно безопасно!»"
        : "“I regularly fly the Yaounde-Moscow corridor. By registering my flights on the platform, I fully offset my airline tickets by carrying small parcels for other diaspora members. Everything is secure!”",
      author: "Marie-Claire Essono",
      role: isFr ? "Ingénieure Télécom" : isRu ? "Телеком-инженер" : "Telecom Engineer",
      stars: 5,
      goldValue: isFr ? "Livré en 4 jours chrono" : isRu ? "Доставлено за 4 дня" : "Arrived in 4 days",
      goldDesc: isFr ? "Une rapidité inégalable de main à main" : isRu ? "Невероятная скорость из рук в руки" : "Unbeatable speed hand-to-hand"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-[#0A0F1E] px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block">
            {isFr ? "RECOURS DU DIASPORA" : isRu ? "ОТЗЫВЫ НАШЕГО СООБЩЕСТВА" : "DIASPORA SUCCESS STORIES"}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0F1E] tracking-tight">
            {isFr ? "Des histoires vraies, de vraies personnes" : isRu ? "Реальные отзывы реальных людей" : "Real Stories from Real People"}
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            {isFr 
              ? "Découvrez comment les étudiants, les parents et les voyageurs profitent déjà de colis livrés en toute sérénité."
              : isRu 
              ? "Узнайте, как наши соотечественники, студенты и частые путешественники экономят и зарабатывают на доставке."
              : "Discover how students, parents, and frequent flyers are transforming shipping across continents."}
          </p>
        </div>

        {/* Vertical List of horizontal full-bleed Cards (UPGRADE 6) */}
        <div className="space-y-12">
          {testimonials.map((t, idx) => (
            <div 
              key={t.id} 
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
            >
              {/* Left Side: Large Full-Bleed Image */}
              <div className="md:w-2/5 min-h-[280px] md:min-h-auto relative">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur border border-gray-100 text-[#0052CC] font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {t.badge}
                </div>
              </div>

              {/* Right Side: Content Area */}
              <div className="md:w-3/5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                
                {/* Quote and Stars */}
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed font-sans">
                    {t.quote}
                  </p>
                </div>

                {/* Big Gold Savings Number Block */}
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-display font-black text-amber-600 text-lg sm:text-2xl tracking-tight block">
                      {t.goldValue}
                    </span>
                    <span className="text-xs text-gray-500 font-sans block">
                      {t.goldDesc}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold shrink-0">
                    💰
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-mono">
                      {t.role}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {isFr ? "Profil Vérifié" : isRu ? "Профиль проверен" : "Verified Profile"}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
