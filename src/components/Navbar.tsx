import { useState, useEffect } from "react";
import { ViewType } from "../types";
import { Menu, X, ArrowRight, Download, Calendar, Globe } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import CountryFlag from "./CountryFlag";

interface NavbarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ currentView, setCurrentView, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const [activeTravellers, setActiveTravellers] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTravellers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const nextVal = prev + change;
        return nextVal >= 6 && nextVal <= 13 ? nextVal : prev;
      });
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLink = (view: ViewType, sectionId?: string) => {
    setIsMobileMenuOpen(false);
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
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentView !== "home"
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Live Badge */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleNavLink("home")}
              className="flex items-center space-x-3 group cursor-pointer"
              id="nav-logo"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#FF6B35] flex items-center justify-center font-bold text-white shadow-md shadow-[#0052CC]/20 group-hover:scale-105 transition-transform duration-300">
                RC
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#0052CC] transition-colors duration-300">
                Russia<span className="text-[#FF6B35]">Connect</span>
              </span>
            </button>

            {/* UPGRADE 8: Small Live Travellers Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold font-sans animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>
                {activeTravellers} {language === "fr" ? "voyageurs actifs" : language === "ru" ? "попутчиков онлайн" : "travellers active now"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavLink("home", "how-it-works")}
              className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                currentView === "home" ? "text-white/80 hover:text-[#FF6B35]" : "text-white/60 hover:text-white"
              }`}
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavLink("about")}
              className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                currentView === "about" ? "text-[#0052CC] font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavLink("safety")}
              className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                currentView === "safety" ? "text-[#0052CC] font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              {t.nav.safety}
            </button>
            <button
              onClick={() => handleNavLink("pricing")}
              className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                currentView === "pricing" ? "text-[#0052CC] font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => handleNavLink("contact")}
              className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                currentView === "contact" ? "text-[#0052CC] font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Switcher Pills + Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Elegant Language Switcher Pills */}
            <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs">
              {(["en", "fr", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 uppercase font-mono font-bold cursor-pointer flex items-center gap-1.5 ${
                    language === lang
                      ? "bg-[#FF6B35] text-white shadow-sm"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-label={`Switch to ${lang}`}
                >
                  <CountryFlag code={lang === "en" ? "gb" : lang} className="w-4.5 h-3 object-cover rounded-sm" />
                  <span>{lang}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => handleNavLink("home", "app-screenshots")}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#0052CC] to-[#0041a8] hover:from-[#0041a8] hover:to-[#003387] text-white px-4 py-2.5 rounded-full font-sans font-semibold text-sm shadow-md shadow-[#0052CC]/20 hover:shadow-lg hover:shadow-[#0052CC]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.downloadApp}</span>
              </button>
              <button
                onClick={() => handleNavLink("home", "waitlist")}
                className="flex items-center space-x-2 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-4 py-2.5 rounded-full font-sans font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.joinWaitlist}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Elegant Mobile Language Switcher Pills */}
            <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 text-[10px]">
              {(["en", "fr", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase font-mono font-bold cursor-pointer flex items-center gap-1 ${
                    language === lang
                      ? "bg-[#FF6B35] text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <CountryFlag code={lang === "en" ? "gb" : lang} className="w-3.5 h-2.5 object-cover rounded-[1px]" />
                  <span>{lang}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF6B35] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#0A0F1E]/98 z-40 md:hidden flex flex-col justify-between p-6 border-t border-white/5 animate-fade-in animate-duration-300">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => handleNavLink("home", "how-it-works")}
              className="text-left font-display font-bold text-lg text-white hover:text-[#FF6B35] transition-colors py-2 cursor-pointer border-b border-white/5"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavLink("about")}
              className={`text-left font-display font-bold text-lg hover:text-[#FF6B35] transition-colors py-2 cursor-pointer border-b border-white/5 ${
                currentView === "about" ? "text-[#FF6B35]" : "text-white"
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavLink("safety")}
              className={`text-left font-display font-bold text-lg hover:text-[#FF6B35] transition-colors py-2 cursor-pointer border-b border-white/5 ${
                currentView === "safety" ? "text-[#FF6B35]" : "text-white"
              }`}
            >
              {t.nav.safety}
            </button>
            <button
              onClick={() => handleNavLink("pricing")}
              className={`text-left font-display font-bold text-lg hover:text-[#FF6B35] transition-colors py-2 cursor-pointer border-b border-white/5 ${
                currentView === "pricing" ? "text-[#FF6B35]" : "text-white"
              }`}
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => handleNavLink("contact")}
              className={`text-left font-display font-bold text-lg hover:text-[#FF6B35] transition-colors py-2 cursor-pointer border-b border-white/5 ${
                currentView === "contact" ? "text-[#FF6B35]" : "text-white"
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex flex-col space-y-4 pt-6">
            <button
              onClick={() => handleNavLink("home", "app-screenshots")}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0052CC] to-[#0041a8] text-white py-3.5 rounded-xl font-semibold text-base shadow-md cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>{t.nav.downloadApp}</span>
            </button>
            <button
              onClick={() => handleNavLink("home", "waitlist")}
              className="flex items-center justify-center space-x-2 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/5 py-3.5 rounded-xl font-semibold text-base cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.nav.joinWaitlist}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
