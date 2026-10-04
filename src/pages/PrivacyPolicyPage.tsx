import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Information Security & Data Protection</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Your trust is our cornerstone. Learn how Aadish Investments protects your contact details,
            respects confidentiality, and enforces strict data safeguarding standards.
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl text-stone-900">
              1. Information We Collect on This Website
            </h2>
            <p>
              When you submit a consultation request, contact inquiry, or client service request, we collect minimal, necessary contact data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Full Name, Mobile Number, and Email Address</li>
              <li>City / State of Residence</li>
              <li>Age group, approximate occupation, and stated service interest</li>
              <li>Preferred consultation method (Phone, Office, Video, or WhatsApp)</li>
            </ul>
          </div>

          <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-2xl space-y-2 text-xs text-rose-950">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <EyeOff className="w-4 h-4 text-rose-700" />
              <span>Sensitive Financial Data Protection Policy</span>
            </div>
            <p>
              We NEVER request or collect confidential financial credentials—such as bank account passwords, net banking MPINs, Aadhaar numbers, PAN cards, detailed hospital medical records, or confidential investment account passwords—through generic public website contact forms.
            </p>
            <p>
              Statutory KYC documents required for mutual fund folio creation or insurance policy proposals are collected only through secure, official SEBI / AMFI-registered digital platforms (BSE Star MF, NSE NMF II, AMC direct portals, or licensed insurer portals) after direct client consent.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h2 className="font-display font-bold text-xl text-stone-900">
              2. How We Use Your Contact Information
            </h2>
            <p>
              Your contact details are used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>Respond to your requested appointment, SIP goal discussion, or insurance review.</li>
              <li>Facilitate direct WhatsApp or phone communication with founders Shrinivas or Prachi Kulkarni.</li>
              <li>Assist existing policyholders with claim guidance and policy servicing.</li>
            </ul>
            <p className="font-semibold text-stone-900 pt-1">
              We do NOT sell, rent, or trade your personal information to third-party telemarketing agencies, commercial brokers, or automated robo-dialers.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h2 className="font-display font-bold text-xl text-stone-900">
              3. Cookies and Analytics
            </h2>
            <p>
              This website uses standard functional cookies and privacy-respecting analytics to evaluate page navigation, ensure form delivery, and improve site loading performance. You may disable cookies in your browser settings at any time.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h2 className="font-display font-bold text-xl text-stone-900">
              4. Data Retention & Privacy Officer
            </h2>
            <p>
              If at any point you wish to withdraw consent or request deletion of your inquiry details from our internal correspondence records, you may email us at:
            </p>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono text-stone-800">
              Email: {COMPANY_INFO.email} (Attention: Privacy Officer, Aadish Investments, Pune)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
