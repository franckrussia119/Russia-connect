import { TeamMember } from "../types";
import { CheckCircle, Award, Target, Eye, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function AboutView() {
  const { language } = useLanguage();

  const team: TeamMember[] = [
    {
      name: "Franck Mbarga",
      role: "CEO & Co-Founder",
      description: "Former student in Moscow who experienced the problem firsthand and wanted to connect African students and diaspora.",
      initials: "FM",
      color: "bg-gradient-to-tr from-[#0052CC] to-[#2E82FF]"
    },
    {
      name: "Elena Sorokina",
      role: "CTO & Co-Founder",
      description: "Expert software engineer who built the secure trust and matching algorithm that pairs luggage capacity with senders.",
      initials: "ES",
      color: "bg-gradient-to-tr from-[#FF6B35] to-[#FFA06E]"
    },
    {
      name: "Jean-Baptiste Nkeng",
      role: "COO & Co-Founder",
      description: "Logistics specialist with over 8 years of experience in cross-border African freight and cargo handling.",
      initials: "JN",
      color: "bg-gradient-to-tr from-[#00C853] to-[#2eff82]"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Idea is Born",
      description: "In a student dormitory in Moscow, African students brainstormed a way to send spices, medicine, and letters home without DHL prices."
    },
    {
      year: "2024",
      title: "Beta Testing Completed",
      description: "Successfully carried out over 100 beta deliveries between Moscow, Douala, and Yaounde with 100% success rate."
    },
    {
      year: "Early 2025",
      title: "Network Expansion",
      description: "Registered 500+ verified travellers and expanded our regular routes to cover Paris, London, and Brussels."
    },
    {
      year: "Mid 2025",
      title: "Official App Launch",
      description: "Launched the RussiaConnect mobile application on iOS and Android to streamline custom matchings."
    },
    {
      year: "Late 2025",
      title: "Milestone Deliveries",
      description: "Surpassed 2,500 successful peer-to-peer package handovers with escrow payouts completed securely."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0A0F1E] text-white">
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Our Journey</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
            The Story Behind <span className="text-[#0052CC]">Russia</span><span className="text-[#FF6B35]">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            How a community of international students transformed global shipping through the power of collective trust.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block">The Spark</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {"It started with a real problem..."}
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed text-base">
              {language === "fr" 
                ? "En tant qu'étudiants africains en Russie, nos fondateurs ont été confrontés à un défi permanent. L'envoi de documents essentiels, d'effets personnels ou de denrées alimentaires du pays était presque impossible. Les services de courrier traditionnels comme DHL demandaient plus de 130 000 FCFA par colis, une somme dépassant largement nos budgets d'étudiants."
                : language === "ru"
                ? "Будучи африканскими студентами, обучающимися в России, наши основатели постоянно сталкивались с серьезной проблемой. Отправить важные документы, посылки семьям или традиционные продукты было практически невозможно. Известные курьерские службы, такие как DHL, требовали более 20 000 ₽ за посылку, что существенно превышало студенческий бюджет."
                : "As African students studying in Russia, our founders experienced a persistent challenge. Sending critical documents, family items, or native African goods was nearly impossible. Mainstream courier services like DHL demanded over 130,000 FCFA (20,000 ₽) per package, a sum far exceeding student budgets."}
            </p>
            <p className="text-gray-300 font-sans leading-relaxed text-base">
              {language === "fr"
                ? "Pourtant, des centaines d'étudiants, d'hommes d'affaires et de proches voyageaient chaque semaine entre Douala, Yaoundé, Paris et Moscou, souvent avec des valises à moitié vides."
                : language === "ru"
                ? "В то же время сотни студентов, предпринимателей и родственников летали между Дуалой, Яунде, Парижем и Москвой каждую неделю, зачастую путешествуя с полупустыми чемоданами."
                : "Meanwhile, hundreds of students, businesspeople, and relatives were flying between Douala, Yaounde, Paris, and Moscow every week, often traveling with half-empty suitcases."}
            </p>
            <p className="text-gray-300 font-sans leading-relaxed text-base">
              {language === "fr"
                ? "Nous nous sommes dit : pourquoi ne pas créer un réseau sécurisé qui connecte ceux qui ont des bagages vides avec ceux qui ont besoin d'envoyer des colis ? En transformant l'espace libre des valises en ressource, nous pouvions rendre les livraisons abordables tout en aidant les voyageurs à amortir le coût de leur billet d'avion. C'est ainsi que RussiaConnect est né."
                : language === "ru"
                ? "Мы спросили себя: почему бы не создать защищенную сеть, которая объединит тех, у кого есть свободное место в багаже, с теми, кому нужно отправить вещи? Превратив свободный вес чемоданов в полезный ресурс, мы могли сделать доставку доступной, одновременно помогая путешественникам частично компенсировать покупку дорогих авиабилетов. Так родился проект RussiaConnect."
                : "We asked ourselves: why not build a secure network that connects those who have empty luggage space with those who need to send items? By turning empty luggage into a resource, we could make shipping affordable while helping travellers offset their expensive plane tickets. That is how RussiaConnect was born."}
            </p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0052CC]/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0052CC]/15 flex items-center justify-center text-[#2E82FF] shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    Our mission is to make international delivery accessible and affordable for everyone, starting with the underserved Africa-Russia-Europe corridor. We believe connection should not be restricted by expensive freight tariffs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/15 flex items-center justify-center text-[#FF6B35] shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    We envision a world where every traveller can contribute to their community by carrying packages, and every family can stay connected regardless of the geographical distances separating them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-[#070b16] px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Our Core Pillars</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Values That Guide Every Connection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 hover:border-[#0052CC]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0052CC]/10 flex items-center justify-center text-[#2E82FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Unwavering Trust</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                We place trust at the center of everything we do. From passport verification to secure escrows, our platform guarantees transparency.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Community First</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                RussiaConnect is powered by real people. We support student collectives, business startups, and diasporic families.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 hover:border-[#00C853]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#00C853]/10 flex items-center justify-center text-[#00C853] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">True Affordability</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                By removing middlemen, we provide premium courier-speed shipping services at a tiny fraction of conventional carrier prices.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Active Safety</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                We inspect list of prohibited materials, require photo logs, and insure high-value deliveries against physical cargo damages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">Our Leadership</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Meet Our Founders
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-2 text-sm font-sans">
            A diverse group of technologists, logistics experts, and community leaders driven to connect the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((founder, idx) => (
            <div key={idx} className="bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className={`w-24 h-24 rounded-full ${founder.color} flex items-center justify-center text-2xl font-display font-extrabold text-white shadow-lg shadow-black/40`}>
                  {founder.initials}
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-display font-bold text-xl text-white">{founder.name}</h3>
                <span className="font-mono text-xs text-[#FF6B35] uppercase font-semibold block">{founder.role}</span>
                <p className="text-sm text-gray-400 font-sans leading-relaxed pt-2">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-20 bg-[#070b16] px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Our Evolution</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              RussiaConnect Milestones
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Year Badge */}
                <div className="absolute -left-4 top-1.5 md:-left-32 md:w-24 md:text-right font-display font-extrabold text-[#FF6B35] text-lg">
                  {m.year}
                </div>
                {/* Visual marker dot */}
                <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-[#0052CC] border-2 border-white" />
                
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-white">{m.title}</h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press/Media Placeholder Section */}
      <section id="press" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/5">
        <span className="font-mono text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-6">As Featured In</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 hover:opacity-75 transition-opacity duration-300">
          <div className="font-display font-black text-xl tracking-wider text-white">AFRICA TECH</div>
          <div className="font-display font-extrabold text-xl italic text-white">RUSSIA TODAY</div>
          <div className="font-display font-mono text-lg text-white">Le Messager</div>
          <div className="font-display font-semibold text-lg tracking-widest text-white">CAMEROON TRIBUNE</div>
        </div>
      </section>
    </div>
  );
}
