import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  HeartHandshake,
  Car,
  Plane,
  FileCheck2,
  AlertCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Award,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface InsuranceSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const InsuranceSolutionsPage: React.FC<InsuranceSolutionsPageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>10 Consecutive Years MDRT Recognition (LIC)</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Protection & Insurance Solutions
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Protecting what matters most: human life value, family health, motor, travel, and dedicated
            claim-support assistance when you need it most.
          </p>
        </div>
      </section>

      {/* 5 Distinct Insurance Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section 1: Life Insurance & LIC */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Second-Generation Advisory Legacy
                </span>
                <h2 className="font-display text-2xl font-bold text-stone-900">
                  Life Insurance & LIC Solutions
                </h2>
              </div>
            </div>
            <span className="text-xs font-semibold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full self-start md:self-auto">
              10-Year MDRT Recognition
            </span>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
            With over a decade of dedicated advisory in Pune, we help primary breadwinners calculate
            their Human Life Value (HLV) to secure sufficient pure term cover (15–20x annual income),
            alongside sovereign-backed traditional LIC plans that provide disciplined capital protection
            for children’s milestones and guaranteed lifetime pensions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Pure Term Cover</span>
              <p className="text-stone-600">
                High financial cover at minimal premium to eliminate mortgage and education risk for dependents.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">LIC Savings & Pension</span>
              <p className="text-stone-600">
                Sovereign-backed endowment, child education, and guaranteed immediate/deferred annuity plans.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Policy Servicing</span>
              <p className="text-stone-600">
                Assistance with revival of lapsed policies, nominee updates, NEFT registration, and maturity claims.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => {
                onPreFillAppointment('Consultation: Life Insurance & LIC Planning');
                onNavigate('book-appointment');
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Discuss Life Cover</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() =>
                onOpenWhatsAppWithText(
                  'Hello Shrinivas, I would like to review my family life insurance coverage and LIC policies.'
                )
              }
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Shrinivas</span>
            </button>
          </div>
        </div>

        {/* Section 2: Health & Mediclaim */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Hospitalization Defense
              </span>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Health & Mediclaim Insurance
              </h2>
            </div>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
            Healthcare inflation in India exceeds 12% annually. We analyze and structure family health
            coverage to ensure you avoid hidden clauses: auditing room-rent sub-limits, co-payments,
            waiting periods for declared pre-existing diseases, and hospital network cashless access.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">No Room-Rent Limits</span>
              <p className="text-stone-600">
                Policies that do not trigger proportionate deductions on doctors, ICU, or surgeries.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Super Top-Up Synergy</span>
              <p className="text-stone-600">
                Cost-effective expansion to ₹50 Lakhs or ₹1 Crore cover using high-deductible super top-ups.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Emergency Cashless Support</span>
              <p className="text-stone-600">
                Real-time guidance during hospital TPA desk interactions and discharge paperwork.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => {
                onPreFillAppointment('Consultation: Health & Mediclaim Review');
                onNavigate('book-appointment');
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Review Family Mediclaim</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() =>
                onOpenWhatsAppWithText(
                  'Hello Prachi, I would like to review our family mediclaim and super top-up coverage.'
                )
              }
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Prachi</span>
            </button>
          </div>
        </div>

        {/* Section 3: General & Motor Insurance */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Asset & Liability Cover
              </span>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                General & Motor Insurance
              </h2>
            </div>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
            Protect your motor vehicles, residential properties, commercial establishments, and
            personal liabilities through comprehensive general insurance solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Motor Insurance</span>
              <p className="text-stone-600">
                Comprehensive own-damage, zero-depreciation, engine protect, and third-party liability covers.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Home & Commercial Property</span>
              <p className="text-stone-600">
                Safeguard against fire, burglary, natural calamities, and equipment breakdown.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
              <span className="font-bold text-stone-900 block">Personal Accident & Disability</span>
              <p className="text-stone-600">
                Coverage for accidental death, permanent total disability, and temporary income loss.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Travel Insurance */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Global Travel
              </span>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Overseas Travel Insurance
              </h2>
            </div>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
            International healthcare costs can easily exceed tens of thousands of dollars. We provide
            comprehensive overseas travel protection covering emergency medical hospitalization,
            emergency medical evacuation, loss of passport, baggage delay, and trip cancellation.
          </p>
        </div>

        {/* Section 5: Compliant Claim Support Assistance */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Client Service First
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Claim-Support Assistance
              </h2>
            </div>
          </div>

          <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700 text-xs text-stone-300 leading-relaxed">
            <strong className="text-white block mb-1">Mandatory IRDAI Compliance Statement:</strong>
            “We help clients understand the documentation and claim-submission process. Claim acceptance,
            assessment, and settlement are decided by the insurer as per policy terms and conditions.”
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-300">
            <div className="space-y-1">
              <span className="font-semibold text-white block">1. Immediate Notification</span>
              <p className="text-stone-400">
                Call our Pune office as soon as hospitalization or an event occurs for step-by-step intimation.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-white block">2. Document Verification</span>
              <p className="text-stone-400">
                We assist in verifying discharge summaries, pharmacy bills, investigation reports, and KYC.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-white block">3. Submission & Follow-up</span>
              <p className="text-stone-400">
                Facilitating smooth transmission to the insurer or TPA grievance channels without delays.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('client-service')}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Open Claim Service Request
            </button>
            <a
              href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Emergency Claim Line: +91 99606 88388</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
