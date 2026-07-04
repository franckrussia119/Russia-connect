import { ViewType } from "../types";
import { MessageSquare, Mail, ShieldCheck, Globe, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

interface FooterProps {
  setCurrentView: (view: ViewType) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ setCurrentView, onScrollToSection }: FooterProps) {
  const { t } = useLanguage();

  const handleFooterLink = (view: ViewType, sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0A0F1E] border-t border-white/5 pt-16 pb-8 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => handleFooterLink("home")}
              className="flex items-center space-x-3 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#FF6B35] flex items-center justify-center font-bold text-white">
                RC
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Russia<span className="text-[#FF6B35]">Connect</span>
              </span>
            </button>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              {t.footer.tagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-200 text-white/70 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-200 text-white/70 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-200 text-white/70 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-200 text-white/70 hover:text-white"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* App Badges */}
            <div className="pt-2">
              <span className="text-xs text-gray-500 block mb-2 font-mono uppercase tracking-widest">{t.app.subtitle}</span>
              <div className="flex flex-col space-y-2">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center space-x-2 w-48 opacity-75">
                  <div className="w-6 h-6 flex items-center justify-center">🍎</div>
                  <div>
                    <span className="text-xs font-semibold text-white leading-tight">{t.app.appStore}</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center space-x-2 w-48 opacity-75">
                  <div className="w-6 h-6 flex items-center justify-center">🤖</div>
                  <div>
                    <span className="text-xs font-semibold text-white leading-tight">{t.app.playStore}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base">{t.footer.product}</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button
                  onClick={() => handleFooterLink("home", "how-it-works")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLink("safety")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.nav.safety}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLink("pricing")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLink("home", "faq")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.faq.title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLink("home", "waitlist")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.nav.joinWaitlist}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base">{t.footer.company}</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button
                  onClick={() => handleFooterLink("about")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.about.subtitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterLink("contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <h3 className="font-display font-bold text-white text-base">{t.footer.legal}</h3>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <button
                    onClick={() => handleFooterLink("legal")}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {t.legal.tabTerms}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("legal")}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {t.legal.tabPrivacy}
                  </button>
                </li>
              </ul>
            </div>

            {/* WhatsApp Integration Call to Action */}
            <div>
              <a
                href="https://wa.me/237600000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#00C853] hover:bg-[#00b048] text-white px-4 py-3 rounded-xl font-sans font-semibold text-sm shadow-md transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between font-sans text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#00C853]" />
            <span>{t.footer.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
