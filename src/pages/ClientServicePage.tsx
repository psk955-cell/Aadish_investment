import React, { useState } from 'react';
import { PageId, ClientServiceFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  FileText,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Send,
  HelpCircle,
  MessageCircle,
  FileCheck2,
  RefreshCw,
  UserCheck,
} from 'lucide-react';

interface ClientServicePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
}

export const ClientServicePage: React.FC<ClientServicePageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
}) => {
  const [formData, setFormData] = useState<ClientServiceFormData>({
    fullName: '',
    mobile: '',
    email: '',
    existingClient: 'Yes',
    serviceType: 'Claim Support Assistance',
    policyOrFolioHint: '',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.consent) return;
    setSubmitted(true);
  };

  const handleWhatsAppQuickService = () => {
    const text = `Hello Shrinivas / Prachi, I have raised a Client Service Request on your website for "${formData.serviceType}". My name is ${formData.fullName} (Ref/Folio: ${formData.policyOrFolioHint || 'N/A'}). Please guide me.`;
    onOpenWhatsAppWithText(text);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Dedicated Policyholder & Client Desk</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Client Service & Policy Assistance Desk
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Are you an existing insurance or investment client of Aadish Investments?
            Submit your servicing request below for claim guidance, policy renewals, nominee updates,
            or capital gains statements.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Service Features & Help (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-stone-900">
                Service Capabilities Available
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Claim Documentation Guidance</strong>
                    <span className="text-xs text-stone-500">
                      Step-by-step assistance with cashless hospital authorizations, TPA paperwork, and LIC maturity or death claims.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Policy Renewal & Revival</strong>
                    <span className="text-xs text-stone-500">
                      Timely premium alerts and revival procedures for lapsed LIC or health mediclaim plans.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Nominee & Address Modifications</strong>
                    <span className="text-xs text-stone-500">
                      Guidance on statutory endorsement forms for updating bank NEFT mandates, nominees, and residential addresses.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Capital Gains & ITR Tax Statements</strong>
                    <span className="text-xs text-stone-500">
                      Consolidated mutual fund statement generation for annual income tax returns.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Assistance */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                  Urgent Hospital Claim Support:
                </span>
                <p className="text-xs text-stone-500 leading-normal">
                  In case of an ongoing emergency hospitalization, call our founders immediately:
                </p>
                <div className="pt-1 flex flex-col gap-1.5 text-xs font-semibold">
                  <a
                    href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
                    className="text-stone-800 hover:text-amber-700 flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Shrinivas Kulkarni: +91 99606 88388</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
                    className="text-stone-800 hover:text-amber-700 flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Prachi Kulkarni: +91 99607 88388</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-100 rounded-2xl text-[11px] text-stone-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                <strong>Transparency Note:</strong> Aadish Investments does not operate an unverified
                mock client login. Client requests are handled personally by our verified advisory team.
              </span>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-stone-900">
                    Service Request Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your request for “{formData.serviceType}” has been
                    logged. The Aadish Investments client servicing desk will follow up with you.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppQuickService}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Notify Advisor on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-stone-900">
                    Submit a Client Servicing Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Our team will assist with documentation and insurer follow-ups.
                  </p>
                </div>

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
                      Registered Mobile Number *
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
                      Existing Aadish Client?
                    </label>
                    <select
                      value={formData.existingClient}
                      onChange={(e) =>
                        setFormData({ ...formData, existingClient: e.target.value as 'Yes' | 'No' })
                      }
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Yes">Yes, Existing Client</option>
                      <option value="No">No, New Client Seeking Policy Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Service Type Required *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceType: e.target.value as ClientServiceFormData['serviceType'],
                      })
                    }
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Claim Support Assistance</option>
                    <option>Policy Renewal Guidance</option>
                    <option>Nominee / Address Change Help</option>
                    <option>Capital Gains / Tax Statement</option>
                    <option>Portfolio Review Consultation</option>
                    <option>Other Policy Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Policy Number or Folio Hint (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. LIC Policy No. or Mutual Fund AMC Folio"
                    value={formData.policyOrFolioHint}
                    onChange={(e) => setFormData({ ...formData, policyOrFolioHint: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <span className="text-[11px] text-stone-400 mt-1 block">
                    Please do NOT share sensitive net-banking passwords or OTPs.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Detailed Notes or Hospital/Insurer Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the request, hospital name (if applicable), or statement date range..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="serviceConsent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-amber-600 cursor-pointer"
                  />
                  <label htmlFor="serviceConsent" className="text-xs text-stone-600 leading-normal">
                    I authorize Aadish Investments to review this servicing request. I acknowledge that
                    claim assessments are decided by the respective insurance company as per policy terms.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!formData.consent}
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Service Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
