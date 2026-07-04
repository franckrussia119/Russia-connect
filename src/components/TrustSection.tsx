import React from "react";
import { Shield, Camera, Lock, Star, Headphones, Award } from "lucide-react";

interface TrustSectionProps {
  language: string;
}

export default function TrustSection({ language }: TrustSectionProps) {
  const isFr = language === "fr";
  const isRu = language === "ru";

  const trustCards = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: isFr ? "Vérification d'identité" : isRu ? "Верификация личности" : "Identity Verification",
      stat: isFr ? "0 cas de fraude sur 2 500+ livraisons" : isRu ? "0 случаев мошенничества на 2500+ сделок" : "0 fraud cases in 2,500+ deliveries",
      desc: isFr
        ? "Chaque voyageur valide son passeport, son selfie biométrique et son numéro de téléphone."
        : isRu
        ? "Каждый попутчик проверяет паспорт, делает биометрическое селфи и подтверждает телефон."
        : "Every single traveller verifies their identity with passport checks, face selfie match, and phone verification."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: isFr ? "Documentation Photos" : isRu ? "Фотофиксация посылок" : "Photo Documentation",
      stat: isFr ? "Moyenne de 6 photos par envoi" : isRu ? "В среднем 6 фотографий на посылку" : "Average 6 photos uploaded per package",
      desc: isFr
        ? "Photos obligatoires de haute qualité lors de la collecte et de la remise pour protéger vos biens."
        : isRu
        ? "Обязательные качественные снимки при приеме и передаче посылки для подтверждения сохранности."
        : "Mandatory high-resolution photographs at pickup and destination hand-off protect items transparently."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: isFr ? "Séquestre de paiement sécurisé" : isRu ? "Безопасные эскроу-платежи" : "Escrow Payment Security",
      stat: isFr ? "100% sécurisé, 0 litige de séquestre" : isRu ? "100% безопасность средств, 0 споров" : "100% funds secured, 0 escrow issues",
      desc: isFr
        ? "Les fonds sont bloqués de manière sécurisée et libérés uniquement après confirmation de livraison par code PIN."
        : isRu
        ? "Средства надежно удерживаются платформой и переводятся только после ввода получателем PIN-кода."
        : "Your funds are held securely in our escrow vault and released only when recipient registers the unique PIN."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: isFr ? "Évaluation de la communauté" : isRu ? "Рейтинг сообщества" : "Community Rating System",
      stat: isFr ? "Note moyenne de 4.95/5 (1 800+ avis)" : isRu ? "Средняя оценка 4.95/5 (1800+ отзывов)" : "4.95/5 average rating across 1,800 reviews",
      desc: isFr
        ? "Consultez les notes authentiques de la diaspora et des étudiants pour choisir votre voyageur en toute confiance."
        : isRu
        ? "Смотрите прозрачные отзывы студентов и участников диаспоры для выбора надежного попутчика."
        : "After every handover, both parties rate. See transparent feedback records on member profiles."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: isFr ? "Support dédié 24h/24" : isRu ? "Поддержка 24/7" : "24/7 Dedicated Support",
      stat: isFr ? "Réponse moyenne : moins de 12 minutes" : isRu ? "Средний ответ: менее 12 минут" : "Average response: under 12 minutes",
      desc: isFr
        ? "Des équipes basées à Douala et à Moscou vous assistent à chaque étape par WhatsApp ou téléphone."
        : isRu
        ? "Местные команды поддержки в Дуале и Москве оперативно ответят на вопросы в WhatsApp."
        : "Local support teams based in Douala (Cameroon) and Moscow (Russia) coordinate questions instantly."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: isFr ? "Garantie RussiaConnect" : isRu ? "Гарантия RussiaConnect" : "RussiaConnect Guarantee",
      stat: isFr ? "Couverture de 325 000 FCFA, 0 refus de réclamation" : isRu ? "Покрытие до 50 000 ₽, 0 отказов" : "Up to 325,000 FCFA coverage, 0 claims denied",
      desc: isFr
        ? "Nous assurons vos envois jusqu'à 500 € en cas de problème de vol aérien imprévu."
        : isRu
        ? "Мы предоставляем премиум-страхование грузов до 500 евро на случай непредвиденных проблем с рейсом."
        : "To prevent unexpected cargo risks, we provide item insurance covering up to 500 euros in claims."
    }
  ];

  return (
    <section className="py-20 bg-[#0A0F1E] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">
            {isFr ? "PASSAGES SÉCURISÉS" : isRu ? "БЕЗОПАСНОСТЬ ПРЕВЫШЕ ВСЕГО" : "SAFE PASSAGES"}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isFr ? "Bâti sur la confiance. Porté par la communauté." : isRu ? "Построено на доверии. Создано сообществом." : "Built on Trust. Powered by Community."}
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            {isFr ? "Chaque fonctionnalité est conçue pour protéger vos colis et garantir votre sérénité." : isRu ? "Каждое решение создано для защиты вашей посылки и вашего душевного спокойствия." : "Every feature is designed to protect your package and peace of mind"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:-translate-y-1 hover:border-[#FF6B35]/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0052CC]/10 flex items-center justify-center text-[#2E82FF] mb-6">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1">
                  {card.title}
                </h3>
                
                {/* Specific Credibility Stat (UPGRADE 4) */}
                <div className="text-[#00C853] font-mono text-xs font-extrabold mb-3">
                  ★ {card.stat}
                </div>
                
                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
