import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { ShieldAlert, FileText, AlertTriangle, Scale, CheckCircle2 } from 'lucide-react';

interface DisclosuresPageProps {
  onNavigate: (page: PageId) => void;
}

export const DisclosuresPage: React.FC<DisclosuresPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Statutory Compliance & Legal Notices</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Regulatory Disclosures & Disclaimers
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Aadish Investments operates with transparency and adherence to applicable AMFI,
            SEBI, and IRDAI regulations. Read our statutory disclosures below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-stone-700 leading-relaxed">
        {/* 1. Mutual Fund Risk Disclosure */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-amber-800 font-bold text-base">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h3>1. AMFI Mutual Fund Risk Warning & Regulatory Status</h3>
          </div>
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl font-semibold text-stone-900">
            “Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.”
          </div>
          <p>
            Aadish Investments operates as an <strong>AMFI-registered Mutual Fund Distributor</strong> (ARN / EUIN details displayed upon final verification and launch). In accordance with AMFI regulations:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-600">
            <li>
              Aadish Investments acts in the capacity of a <strong>distributor</strong> of mutual fund products and facilitates client execution.
            </li>
            <li>
              Under SEBI (Investment Advisers) Regulations, 2013, an MFD cannot provide fee-based investment advice unless separately registered as a SEBI Investment Adviser.
            </li>
            <li>
              We receive distributor trail commissions from Asset Management Companies (AMCs) as permitted under SEBI regulations. A detailed commission disclosure is available upon client request.
            </li>
            <li>
              Past performance of any mutual fund scheme is not an indicator of future results. NAVs fluctuate with market conditions.
            </li>
          </ul>
        </div>

        {/* 2. Insurance Solicitation Notice */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-stone-900 font-bold text-base">
            <FileText className="w-5 h-5 text-amber-600" />
            <h3>2. IRDAI Insurance Solicitation & Licensing Disclosure</h3>
          </div>
          <p>
            Insurance products displayed on this website are the subject matter of solicitation. Policy issuance, underwriting, and claim settlements are strictly determined by the respective licensed insurer (such as Life Insurance Corporation of India, standalone health insurers, and general insurers) as per policy terms and conditions approved by IRDAI.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-600">
            <li>
              Aadish Investments and its designated partners act as licensed insurance intermediaries / agents under IRDAI.
            </li>
            <li>
              <strong>No Claim Settlement Guarantees:</strong> We assist clients with proposal completion, premium calculation, documentation, and claim filings. Claim approval, quantum, and settlement are decided exclusively by the insurer as per Section 45 of the Insurance Act.
            </li>
            <li>
              Pre-existing disease declarations, waiting periods, room-rent sub-limits, and co-payment conditions govern health insurance claims.
            </li>
          </ul>
        </div>

        {/* 3. No Guaranteed Returns Prohibition */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-stone-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h3>3. Prohibition on Assured / Guaranteed Returns</h3>
          </div>
          <p>
            Aadish Investments never claims, promises, or indicates “guaranteed returns,” “risk-free returns,” or “highest returns” on market-linked securities.
          </p>
          <p>
            Any illustrative projections (such as the SIP Calculator on this website) are mathematical demonstrations of compounding based on user-selected assumed annual percentages. They do not constitute a prediction, guarantee, or assurance of future performance.
          </p>
        </div>

        {/* 4. PMS, AIF, SIF and Stock Broking */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-stone-900 font-bold text-base">
            <Scale className="w-5 h-5 text-amber-600" />
            <h3>4. PMS, AIF, SIF & Stock Broking Facilitation</h3>
          </div>
          <p>
            Information provided regarding Portfolio Management Services (PMS), Alternative Investment Funds (AIF), Specialized Investment Funds (SIF), NFOs, and IPOs is strictly educational and for informational reference:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-600">
            <li>
              <strong>PMS Regulations:</strong> PMS investments require a statutory minimum ticket size of ₹50 Lakhs as mandated by the SEBI (Portfolio Managers) Regulations. Aadish Investments operates strictly in a distributor / referral capacity.
            </li>
            <li>
              <strong>AIF Guidelines:</strong> Alternative Investment Funds (Cat I, II, III) require accredited investor certification and a statutory minimum commitment of ₹1 Crore.
            </li>
            <li>
              <strong>Stock Broking Facilitation:</strong> Demat and trading facilities are facilitated through authorized, registered corporate stock broking partners.
            </li>
          </ul>
        </div>

        {/* 5. Grievance Redressal Mechanism */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 space-y-4">
          <h3 className="font-display font-bold text-xl text-amber-400">
            5. Grievance Redressal Mechanism
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            In compliance with customer protection frameworks, Aadish Investments has established a
            structured grievance redressal procedure. If you have an inquiry or unresolved service
            issue regarding mutual fund processing or insurance policy assistance:
          </p>

          <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700 text-xs space-y-2">
            <div>
              <strong className="text-white block">Step 1: Contact Principal Officer / Grievance Officer:</strong>
              <span className="text-stone-300">Shrinivas Kulkarni · Co-Founder & Partner</span>
            </div>
            <div>
              <strong className="text-white block">Grievance Desk Email:</strong>
              <span className="text-amber-400">grievance@aadishinvestments.com / aadishinvestment@gmail.com</span>
            </div>
            <div>
              <strong className="text-white block">Physical Redressal Desk:</strong>
              <span className="text-stone-300">580, Narayan Peth, Pune, Maharashtra – 411030</span>
            </div>
            <div>
              <strong className="text-white block">Statutory Escalation:</strong>
              <span className="text-stone-400">
                If your grievance remains unaddressed within 30 days, investors may lodge a complaint on SEBI SCORES portal (scores.gov.in) for mutual funds, or IRDAI Bima Bharosa portal for insurance policies.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
