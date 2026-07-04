import { useState } from "react";
import { ShieldAlert, Key, FileText, CheckCircle } from "lucide-react";

export default function LegalView() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="pt-24 min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Regulatory Compliance</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
            Legal & <span className="text-gradient-blue">Trust Center</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {"We believe in building a platform that protects our community. Read our full Terms of Service and Privacy Policy details below."}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 border-b border-white/5 bg-[#070b16]">
        <div className="max-w-3xl mx-auto px-4 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-display font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#0052CC] text-white shadow-md'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-display font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#0052CC] text-white shadow-md'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
        </div>
      </section>

      {/* Text block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 sm:p-12 font-sans text-sm text-gray-300 space-y-8 leading-relaxed">
          
          {activeTab === 'terms' ? (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-[#FF6B35] mb-4">
                <ShieldAlert className="w-6 h-6 animate-pulse-ring" />
                <h2 className="font-display font-extrabold text-2xl text-white">Terms of Service</h2>
              </div>
              
              <p className="font-mono text-xs text-gray-500">Last Revised: July 4, 2026</p>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">1. Description of the Service</h3>
                <p>
                  {"RussiaConnect is an online platform that coordinates peer-to-peer parcel matching services. We provide communication modules, escrow account management, and identity verification utilities. Senders agree that packages are carried inside the personal hand luggage or checked luggage of travellers flying major airline routes."}
                </p>
                <p>
                  {"We do not act as a common carrier, customs broker, or licensed freight forwarding operator. Our responsibility is solely that of matching and escrow platform managers."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">2. Safety and Inspection Mandates</h3>
                <p>
                  {"All users agree that travellers must inspect every single physical package before hand-off, booking, or airline check-in. Senders must keep packages in transparent or easily openable containers. Senders represent and warrant that items do not violate any aviation security policies, regional customs acts, or agricultural prohibitions of origin and destination regions."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">3. Escrow and Platform Fee Policies</h3>
                <p>
                  {"Senders pay the package fee into our secure transaction vault during booking. Senders pay a non-refundable 10% platform fee. These funds remain locked in escrow until the recipient enters their verification code at destination, signifying successful handover. If a flight is delayed beyond deadlines, full transaction refunds are issued to the original payment mechanism."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">4. Delivery Guarantee Coverage</h3>
                <p>
                  {"RussiaConnect provides a physical cargo delivery warranty of up to 325,000 FCFA (50,000 ₽), depending on the selected protection level. This guarantee applies exclusively if the parcel fails to arrive or suffers physical damages due to verified traveller negligence. Items of commercial resale values, illegal goods, and contraband do not qualify for compensation."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">5. Regional Regulatory compliance</h3>
                <p>
                  {"Both Senders and Travellers are solely responsible for declaring items to customs at regional entry points (such as SVO, DLA, CDG, NSI) when needed. RussiaConnect is not responsible for items seized or delayed by international border force departments or agricultural inspectors."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-[#0052CC] mb-4">
                <Key className="w-6 h-6 animate-pulse-ring" />
                <h2 className="font-display font-extrabold text-2xl text-white">Privacy Policy</h2>
              </div>

              <p className="font-mono text-xs text-gray-500">Last Revised: July 4, 2026</p>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">1. Information We Collect</h3>
                <p>
                  {"We collect your basic identity elements (Name, Email, Phone number, Regional city), digital passport and selfie files (for Traveller identity screening and face matching), geographic coordinates during active in-app mapping, flight schedule timetables, and transaction logs."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">2. How We Store Your Documents</h3>
                <p>
                  {"To safeguard your private verification materials, all passport files, national IDs, and biometric face profiles are encrypted in transit and at rest using military-grade AES-256 standard algorithms. Only authorized support specialists can access verification photos to approve user statuses."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">3. GDPR & African Privacy Act Compliance</h3>
                <p>
                  {"We adhere to strict GDPR standards regarding the retention of your personal credentials. Users retain absolute ownership of their files: you can request immediate profile deletions or document removals by sending a notice to our compliance desk."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">4. In-App Messaging logs</h3>
                <p>
                  {"To defend users against potential platform circumvention or safety hazards, our servers log chat interactions, item photo logs, and hand-off coordinates. This data remains locked and is never shared with third-party marketing companies."}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-white text-base">5. Third-Party API Proxies</h3>
                <p>
                  {"We integrate with certain transaction pipelines and notification integrations (including the Telegram API for waitlist alerts). These modules are handled safely through secure server-side wrappers ensuring no private keys are exposed."}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
