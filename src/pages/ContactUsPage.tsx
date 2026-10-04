import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Linkedin,
  Instagram,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate, onOpenWhatsApp }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !consent) return;
    setSent(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Narayan Peth, Pune Office</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Contact Aadish Investments
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Reach out directly to founders Shrinivas and Prachi Kulkarni. Visit our office in Pune,
            call us, or initiate a secure WhatsApp conversation.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-stone-900">Pune Office</h3>
                  <p className="text-xs text-stone-500">Narayan Peth Historic Hub</p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-stone-600 space-y-1 pl-1">
                <p className="font-semibold text-stone-800">{COMPANY_INFO.name}</p>
                <p>580, Narayan Peth</p>
                <p>Pune, Maharashtra, India – 411030</p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-amber-700 font-semibold">
                <Navigation className="w-3.5 h-3.5" />
                <a
                  href="https://maps.google.com/?q=Narayan+Peth+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Open in Google Maps / Get Directions
                </a>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-lg text-stone-900">
                Direct Founder Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900 block">Shrinivas Kulkarni</span>
                    <span className="text-[11px] text-stone-500">Co-Founder & Financial Advisor</span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.contacts.shrinivas.phone}</span>
                  </a>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900 block">Prachi Kulkarni</span>
                    <span className="text-[11px] text-stone-500">Co-Founder & Financial Advisor</span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.contacts.prachi.phone}</span>
                  </a>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900 block">General Inquiries</span>
                    <span className="text-[11px] text-stone-500">Email Correspondence</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Social */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs text-stone-700">
                <Clock className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="font-bold block">Business Hours:</span>
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center gap-4 text-xs font-medium text-stone-600">
                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-700"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-pink-600"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-sm">
            {sent ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-stone-900">
                  Message Transmitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {name}. Shrinivas or Prachi Kulkarni will review your
                  inquiry and contact you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-amber-700 font-semibold hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-stone-900">
                    Send an In-Office Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fill out this form and our founders will connect back with you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Joshi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Service Requirement
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option>General Financial Guidance</option>
                      <option>Mutual Funds & Systematic Investment (SIP)</option>
                      <option>Life Insurance & LIC Solutions</option>
                      <option>Health Insurance / Family Mediclaim</option>
                      <option>Tax & Retirement Planning</option>
                      <option>HNI / NRI India Investment Desk</option>
                      <option>Existing Policy Claim Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message or Query
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you would like to explore or discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="contactConsent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 accent-amber-600 cursor-pointer"
                  />
                  <label htmlFor="contactConsent" className="text-xs text-stone-600 leading-normal">
                    I consent to being contacted by Aadish Investments. We strictly protect your privacy
                    and never share client information with external brokers or aggregators.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!consent}
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Team</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct WhatsApp Callout */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">Need instant clarification?</span>
              <button
                onClick={onOpenWhatsApp}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Quick WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Pune Office Embed/Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-lg text-stone-900">
              Visiting Us in Narayan Peth, Pune?
            </h4>
            <p className="text-xs text-stone-600">
              Located in the central historic commerce precinct of Narayan Peth, easily accessible from
              Deccan Gymkhana, Shivaji Nagar, and Swargate. Advance appointment recommended.
            </p>
          </div>
          <button
            onClick={() => onNavigate('book-appointment')}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl shrink-0 cursor-pointer"
          >
            Schedule Office Visit
          </button>
        </div>
      </section>
    </div>
  );
};
