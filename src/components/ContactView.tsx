import React, { useState } from "react";
import { MessageSquare, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle, Sparkles } from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "General question",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          subject: "General question",
          message: ""
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-mono text-[#FF6B35] text-xs font-semibold uppercase tracking-widest block mb-3">Support Center</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
            Get in <span className="text-gradient-blue">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {"We are here to answer your questions, resolve cargo concerns, and build relationships. Reach out to our founders or local teams."}
          </p>
        </div>
      </section>

      {/* Main Content split */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Support Channels & Addresses (Bento Col 5) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Primary WhatsApp Channel CTA */}
              <div className="bg-[#00C853]/10 border border-[#00C853]/30 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-3 text-[#00C853]">
                  <MessageSquare className="w-6 h-6 animate-pulse-ring" />
                  <h3 className="font-display font-extrabold text-lg text-white">Instant WhatsApp Support</h3>
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {"Most requests, questions, and safety verifications are answered in minutes via our WhatsApp line. Ideal for travellers or senders currently in transit."}
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/237600000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-3 bg-[#00C853] hover:bg-[#00b048] text-white px-5 py-3.5 rounded-xl font-sans font-bold text-sm shadow-md transition-transform hover:-translate-y-0.5 duration-200"
                  >
                    <span>💬</span>
                    <span>+237 600 000 000 — Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-2">
                  <Mail className="w-5 h-5 text-[#2E82FF]" />
                  <div className="text-xs text-gray-400 font-mono">Email Address</div>
                  <a href="mailto:contact@russiaconnect.com" className="text-sm font-semibold text-white hover:underline block">
                    contact@russiaconnect.com
                  </a>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-2">
                  <Clock className="w-5 h-5 text-[#FF6B35]" />
                  <div className="text-xs text-gray-400 font-mono">Response Time</div>
                  <div className="text-sm font-semibold text-white">Within 2 Hours</div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#FF6B35]" />
                <h3 className="font-display font-bold text-base text-white">Our Offices</h3>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="border-b border-white/5 pb-3">
                  <div className="font-bold text-white mb-1">Douala, Cameroon Office</div>
                  <p className="text-gray-400 leading-relaxed">
                    Rue de la Joie, Akwa, Douala. Near the student travel bureau.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Moscow, Russia Office</div>
                  <p className="text-gray-400 leading-relaxed">
                    Ulitsa Miklukho-Maklaya, Building 6, Moscow. Near RUDN University campus.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Container (Bento Col 7) */}
          <div className="lg:col-span-7 bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-6">Send Us a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-[#00C853]/10 border border-[#00C853]/30 rounded-2xl p-8 text-center space-y-4 my-8">
                <CheckCircle className="w-12 h-12 text-[#00C853] mx-auto animate-bounce" />
                <h3 className="font-display font-extrabold text-xl text-white">Message Dispatched!</h3>
                <p className="text-sm text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
                  {"Thank you for reaching out to RussiaConnect. Your message has been routed to our founding team through Telegram. We will reply to your email within 2 hours."}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Jean-Baptiste Mbarga"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. jean@example.com"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +237 612 345 678"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
                    />
                  </div>

                  {/* City field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">City / Country</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Douala, Cameroon"
                      className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none"
                    />
                  </div>
                </div>

                {/* Subject dropdown */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">Inquiry Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none cursor-pointer"
                  >
                    <option value="General question">General Question / Feedback</option>
                    <option value="I am a traveller">I am a Traveller (Luggage space seller)</option>
                    <option value="I want to send">I want to Send (Package poster)</option>
                    <option value="Safety concern">Safety or Verification Question</option>
                    <option value="Partnership">Partnership Proposal</option>
                    <option value="Press inquiry">Press or Media Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message text area */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your request in detail. Mention weight, specific routes, or travel schedules if applicable..."
                    className="w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFA06E] hover:from-[#e55924] hover:to-[#ff8d50] text-white py-3.5 rounded-xl font-display font-bold text-center text-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
