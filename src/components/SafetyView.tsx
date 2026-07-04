import { useState } from "react";
import { Shield, Eye, Lock, Camera, Star, Users, CheckCircle2, AlertTriangle, AlertCircle, PhoneCall, HelpCircle } from "lucide-react";

export default function SafetyView() {
  const [activeTab, setActiveTab] = useState<'all' | 'travellers' | 'senders'>('all');

  const layers = [
    {
      icon: <Users className="w-6 h-6 text-[#2E82FF]" />,
      title: "1. Identity Verification",
      description: "Every traveller must verify their identity by uploading their passport or national ID card and completing a real-time face matching selfie. This ensures accountability."
    },
    {
      icon: <Camera className="w-6 h-6 text-[#2E82FF]" />,
      title: "2. Photo Documentation",
      description: "At package hand-off and delivery, the traveller is required to take detailed photos of the items. These timestamped records protect both parties in case of disputes."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#2E82FF]" />,
      title: "3. Escrow Payment Security",
      description: "Payment is processed and held securely by RussiaConnect before the trip begins. Senders hold the power: funds are released to the traveller only after delivery confirmation."
    },
    {
      icon: <Star className="w-6 h-6 text-[#FF6B35]" />,
      title: "4. Peer Review Network",
      description: "Every completion triggers an mandatory rating. Senders can browse traveller profiles, complete history logs, and reviews from past senders before making requests."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FF6B35]" />,
      title: "5. Delivery Guarantee",
      description: "For complete peace of mind, we cover up to 500 euros per shipment in the rare event of damage or loss caused by verified traveller fault."
    }
  ];

  const prohibitedItems = [
    "Narcotics, illegal substances, and controlled drugs",
    "Weapons, firearms, ammunition, and explosives",
    "Counterfeit luxury goods and brand replicas",
    "Physical cash exceeding 1,000 euros in equivalent value",
    "Perishable fresh food products (unless specifically approved)",
    "Flammable materials, aerosol cans, and hazardous chemicals",
    "Stolen property or items obtained through illegal means",
    "Commercial quantities of items intended for business resale"
  ];

  const flowSteps = [
    { title: "Booking", desc: "Sender reserves space & completes secure escrow payment." },
    { title: "Hand-off", desc: "Items inspected. Photo log uploaded to the server." },
    { title: "Transit", desc: "Traveller carries package securely on flight." },
    { title: "Delivery", desc: "Recipient receives package, confirms with code." },
    { title: "Payout", desc: "Escrow funds released instantly to traveller." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0A0F1E] text-white">
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Trust and Security</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
            Our Number One Priority is <span className="text-gradient-orange">Your Safety</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {"We have engineered a rigorous 5-layer safety net to ensure that peer-to-peer package delivery is safer than standard parcel shipping."}
          </p>
        </div>
      </section>

      {/* Safety Process Flow Diagram */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">The Secure Delivery Journey</h2>
            <p className="text-sm text-gray-400 mt-2">How we safeguard your items from initial match to final release</p>
          </div>

          {/* CSS Drawn Flowchart */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-6 bg-[#0A0F1E] border border-white/5 rounded-2xl">
                {/* Arrow connector for desktop */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <span className="text-[#FF6B35] font-bold text-xl">→</span>
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-full bg-[#0052CC]/25 border border-[#0052CC]/50 flex items-center justify-center font-display font-bold text-[#2E82FF] text-lg mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Layer System Grid */}
      <section className="py-16 bg-[#070b16] px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[#0052CC] text-xs font-semibold uppercase tracking-widest block mb-3">Security Features</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Our 5-Layer Safety System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layers.map((layer, idx) => (
              <div key={idx} className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-8 hover:border-[#2E82FF]/40 transition-all duration-300">
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5">
                  {layer.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{layer.title}</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}

            {/* Custom Support Assist Card */}
            <div className="bg-[#0A0F1E] border border-dashed border-[#FF6B35]/30 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35]">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">24/7 Dedicated Support</h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  {"Our support teams operate in both Douala (Cameroon) and Moscow (Russia) time zones to handle transit assistance or dispute mediation within minutes."}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://wa.me/237600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#FF6B35] hover:underline"
                >
                  <span>Chat with Support Team</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senders vs Travellers Safety Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">Best Practices for Our Members</h2>
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${activeTab === 'all' ? 'bg-[#0052CC] text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
            >
              All Guidelines
            </button>
            <button
              onClick={() => setActiveTab('travellers')}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${activeTab === 'travellers' ? 'bg-[#0052CC] text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
            >
              For Travellers
            </button>
            <button
              onClick={() => setActiveTab('senders')}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${activeTab === 'senders' ? 'bg-[#0052CC] text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
            >
              For Senders
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Senders Tips */}
          {(activeTab === 'all' || activeTab === 'senders') && (
            <div className="bg-gradient-to-b from-[#0052CC]/5 to-transparent border border-[#0052CC]/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-[#2E82FF]">
                <HelpCircle className="w-6 h-6" />
                <h3 className="font-display font-bold text-xl text-white">Guidelines for Senders</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300 font-sans">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Always pack items in clean, inspectable containers. Be ready to show the traveller the items before sealing.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Provide accurate value statements. If you are sending electronics, include original receipts to help customs evaluation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Communicate solely through the RussiaConnect app. Payments made outside of escrow are not covered by our 325,000 FCFA (50,000 ₽) guarantee.</span>
                </li>
              </ul>
            </div>
          )}

          {/* Travellers Tips */}
          {(activeTab === 'all' || activeTab === 'travellers') && (
            <div className="bg-gradient-to-b from-[#FF6B35]/5 to-transparent border border-[#FF6B35]/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center space-x-3 text-[#FF6B35]">
                <HelpCircle className="w-6 h-6" />
                <h3 className="font-display font-bold text-xl text-white">Guidelines for Travellers</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300 font-sans">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Always inspect every package personally before accepting it into your luggage. Never carry locked or unsealed boxes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Take high-resolution photos of the items during pick-up. Upload them immediately using our app log utility.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
                  <span>Ensure your flight schedule is up to date. Notify the sender immediately of any airline delays or terminal changes.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Prohibited Items Section */}
      <section className="py-16 bg-[#070b16] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 sm:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display font-extrabold text-2xl text-white">Strictly Prohibited Items</h2>
                <p className="text-sm text-gray-400 mt-1">Carrying any of the following items will lead to account termination and legal referrals</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedItems.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-red-500/5 rounded-xl border border-red-500/5">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 font-sans leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center italic font-sans">
              {"Unsure if your package is permitted? Drop us a WhatsApp message before matching with a traveller."}
            </p>
          </div>
        </div>
      </section>

      {/* Disputes and Claims */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-2xl text-white mb-4">Dispute Resolution Process</h2>
        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8 max-w-2xl mx-auto">
          {"In the extremely rare event of a dispute, our moderation team acts swiftly. Senders or travellers can raise a claim in-app. We evaluate photo documentation and escrow logs to distribute refunds or release payments within 48 hours."}
        </p>
      </section>
    </div>
  );
}
