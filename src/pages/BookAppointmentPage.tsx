import React, { useState, useEffect } from 'react';
import { PageId, AppointmentFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

interface BookAppointmentPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  initialNote?: string;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  initialNote = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Pune',
    ageGroup: '26–35',
    occupation: 'Salaried Professional',
    serviceRequired: 'Mutual Funds / SIP',
    meetingMode: 'Phone Call',
    preferredDate: '',
    preferredTime: '11:00 AM – 1:00 PM',
    message: initialNote,
    consent: true,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialNote) {
      setFormData((prev) => ({ ...prev, message: initialNote }));
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.consent) return;
    setSubmitted(true);
  };

  const handleSendWhatsAppConfirmation = () => {
    const text = `Hello Shrinivas / Prachi, I have requested a consultation on your website for "${formData.serviceRequired}" via ${formData.meetingMode} on ${formData.preferredDate || 'next available slot'}. My name is ${formData.fullName} (${formData.city}).`;
    onOpenWhatsAppWithText(text);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Founder Consultation</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Book a Financial Consultation
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Schedule a confidential, no-obligation conversation with Shrinivas or Prachi Kulkarni.
            Available at our Narayan Peth office in Pune, over phone, video call, or WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Context & Trust Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-stone-900">
                What to Expect in Your Consultation
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-stone-900 block">No Pressure, Objective Review</strong>
                    <span>We never push products or demand on-the-spot decisions. We listen to your goals first.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Mathematical Goal Sizing</strong>
                    <span>Understand exactly how much monthly SIP or term insurance coverage matches your dependents’ needs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Regulated & Compliant Recommendations</strong>
                    <span>Every fund or policy recommended strictly adheres to AMFI & IRDAI guidelines.</span>
                  </div>
                </div>
              </div>

              {/* Direct Founders Contact */}
              <div className="pt-4 border-t border-stone-100 space-y-3 text-xs">
                <span className="font-bold uppercase tracking-wider text-stone-700 block">
                  Office & Contact Details:
                </span>
                <div className="flex items-start gap-2.5 text-stone-600">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>580, Narayan Peth, Pune, Maharashtra – 411030</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Shrinivas: +91 99606 88388 · Prachi: +91 99607 88388</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-600">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 bg-stone-100 rounded-2xl text-[11px] text-stone-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                Your privacy is rigorously protected. We never collect sensitive banking passwords,
                Aadhaar numbers, or medical history through unencrypted web forms.
              </span>
            </div>
          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-stone-900">
                    Consultation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Aadish Investments. Our team will contact you shortly to
                    understand your requirement and schedule a suitable consultation.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl text-left text-xs text-stone-700 max-w-md mx-auto space-y-1.5 border border-stone-200">
                  <div className="font-semibold text-stone-900 border-b border-stone-200 pb-1 mb-2">
                    Request Summary:
                  </div>
                  <div><strong>Name:</strong> {formData.fullName}</div>
                  <div><strong>Mobile:</strong> {formData.mobile}</div>
                  <div><strong>Service:</strong> {formData.serviceRequired}</div>
                  <div><strong>Mode:</strong> {formData.meetingMode}</div>
                  {formData.preferredDate && <div><strong>Preferred Date:</strong> {formData.preferredDate}</div>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsAppConfirmation}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Quick Confirmation on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Edit / Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-stone-900">
                    Schedule Your Appointment
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Please provide your contact details and preferred meeting format.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pune, Mumbai, Dubai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Age & Occupation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Age Group
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option>18–25</option>
                      <option>26–35</option>
                      <option>36–50</option>
                      <option>50+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Occupation
                    </label>
                    <select
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option>Salaried Professional (IT / Corporate)</option>
                      <option>Business Owner / Entrepreneur</option>
                      <option>Self-Employed (Doctor, CA, Consultant)</option>
                      <option>Retired</option>
                      <option>Non-Resident Indian (NRI)</option>
                    </select>
                  </div>
                </div>

                {/* Service Requirement */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Choose Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Mutual Funds / SIP</option>
                    <option>Insurance (Term Life / LIC)</option>
                    <option>Health Insurance / Mediclaim</option>
                    <option>Goal-Based Financial Planning</option>
                    <option>Tax Planning</option>
                    <option>Retirement Planning</option>
                    <option>HNI / NRI Investment Solutions</option>
                    <option>PMS / AIF / SIF Briefing</option>
                    <option>NFO / IPO Due Diligence</option>
                    <option>Existing Policy Claim Support / Servicing</option>
                    <option>Other Financial Query</option>
                  </select>
                </div>

                {/* Preferred Meeting Mode */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Meeting Mode *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(
                      [
                        'Phone Call',
                        'Office Meeting (Pune)',
                        'Google Meet / Video',
                        'WhatsApp',
                      ] as const
                    ).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, meetingMode: mode })}
                        className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer truncate ${
                          formData.meetingMode === mode
                            ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option>10:30 AM – 1:00 PM (Morning)</option>
                      <option>2:00 PM – 4:30 PM (Afternoon)</option>
                      <option>5:00 PM – 7:30 PM (Evening)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Specific Goal, Query, or Existing Portfolio Context (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Planning my child's education corpus, looking to review my LIC policies, or setting up a 15-year SIP..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="appointmentConsent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-amber-600 cursor-pointer"
                  />
                  <label htmlFor="appointmentConsent" className="text-xs text-stone-600 leading-normal">
                    I consent to being contacted by the Aadish Investments team regarding this consultation
                    request. I acknowledge that Mutual Fund investments are subject to market risks.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.consent}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
