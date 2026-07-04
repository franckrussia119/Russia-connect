import { useState, useEffect } from "react";
import { ViewType } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SafetyView from "./components/SafetyView";
import PricingView from "./components/PricingView";
import ContactView from "./components/ContactView";
import LegalView from "./components/LegalView";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Handle scroll to a particular element ID
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0F1E] text-white selection:bg-[#FF6B35] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Header / Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Routed Content View */}
      <main className="flex-grow">
        {currentView === 'home' && <HomeView />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'safety' && <SafetyView />}
        {currentView === 'pricing' && <PricingView />}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'legal' && <LegalView />}
      </main>

      {/* Shared Footer component */}
      <Footer
        setCurrentView={setCurrentView}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}
