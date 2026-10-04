import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  Linkedin,
  Phone,
  Mail,
  Clock,
  Compass,
  Camera,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenWhatsApp }) => {
  const [shrinivasPhoto, setShrinivasPhoto] = useState<string>(() => {
    return (
      localStorage.getItem('aadish_shrinivas_custom_photo') ||
      COMPANY_INFO.contacts.shrinivas.image
    );
  });

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setShrinivasPhoto(reader.result);
          localStorage.setItem('aadish_shrinivas_custom_photo', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const [prachiPhoto, setPrachiPhoto] = useState<string>(() => {
    return (
      localStorage.getItem('aadish_prachi_custom_photo') ||
      COMPANY_INFO.contacts.prachi.image
    );
  });

  const handleCustomPrachiPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPrachiPhoto(reader.result);
          localStorage.setItem('aadish_prachi_custom_photo', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const steps = [
    {
      num: '01',
      title: 'Understand Your Needs',
      desc: 'We start by listening: understanding your family structure, cash flows, current commitments, and existing insurance or investment holdings.',
    },
    {
      num: '02',
      title: 'Identify Financial Goals',
      desc: 'We define and quantify life milestones—from children’s education and house purchases to retirement and contingency reserves.',
    },
    {
      num: '03',
      title: 'Assess Risk Profile & Timelines',
      desc: 'We map how much volatility you can comfortably handle, pairing each goal with an appropriate time horizon and asset allocation.',
    },
    {
      num: '04',
      title: 'Create a Suitable Plan',
      desc: 'We recommend transparent, regulated instruments (mutual funds, term cover, health floaters) aligned with your profile and AMFI/IRDAI guidelines.',
    },
    {
      num: '05',
      title: 'Review & Long-Term Support',
      desc: 'Financial planning is never static. We conduct regular reviews to rebalance portfolios, assist with claims, and adapt to life changes.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <span>Our Journey · Narayan Peth, Pune</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            A Legacy of Trust, Protection & Disciplined Wealth Creation
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Founded in 2014, Aadish Investments was built on the core belief that financial
            guidance must be transparent, long-term, and deeply anchored in family security.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              Rooted in Pune, Built for Generations
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Founded in 2014 by Shrinivas Kulkarni and Prachi Kulkarni, Aadish Investments
                originated from a proud second-generation involvement in life-insurance protection
                and family financial guidance.
              </p>
              <p>
                Over the past decade, the firm has expanded from its historic Narayan Peth office
                into a multi-faceted financial consultancy serving salaried professionals, business
                founders, retirees, and Non-Resident Indians (NRIs) across Maharashtra and India.
              </p>
              <p>
                Rather than treating clients as transaction numbers, we operate on the principle
                that “Our Opinion Counts”—delivering candid, conservative, and mathematically
                disciplined guidance that protects wealth through all market phases.
              </p>
            </div>

            {/* Verification Milestones */}
            <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-amber-900">
                Key Business Milestones*
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-base text-stone-900 block">₹100 Cr+</span>
                  <span className="text-stone-600">Assets Under Management (AUM)*</span>
                </div>
                <div>
                  <span className="font-bold text-base text-stone-900 block">2,000+</span>
                  <span className="text-stone-600">Life Insurance Policyholders*</span>
                </div>
                <div>
                  <span className="font-bold text-base text-stone-900 block">1,000+</span>
                  <span className="text-stone-600">Wealth-Creation Client Journeys*</span>
                </div>
                <div>
                  <span className="font-bold text-base text-stone-900 block">10 Years</span>
                  <span className="text-stone-600">Consecutive MDRT Recognition (LIC)*</span>
                </div>
              </div>
              <p className="text-[10px] text-stone-500 pt-1 leading-normal">
                *Figures and recognitions are based on internal business records and are subject to periodic updates and verification.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
              <img
                src="/src/assets/images/pune_narayan_peth_office_1790590983109.jpg"
                alt="Aadish Investments Pune Office in Narayan Peth"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-stone-500 px-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>580, Narayan Peth, Pune, Maharashtra</span>
              </span>
              <span>Welcoming clients since 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet The Founders */}
      <section className="bg-stone-50 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Leadership
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900">
              Meet the Founders
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Hands-on leadership with decades of cumulative experience in life protection and
              wealth structuring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shrinivas Kulkarni */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200 shadow-xs relative group">
                    <img
                      src={shrinivasPhoto}
                      alt="Shrinivas Kulkarni, Co-Founder"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <label className="absolute inset-0 bg-stone-900/60 text-white text-[10px] font-medium flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-center p-1">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>Change Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCustomPhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Co-Founder & Financial Advisor
                    </div>
                    <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                      Shrinivas Kulkarni
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md mt-2 font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>10 Consecutive Years MDRT (LIC)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                  <p>{COMPANY_INFO.contacts.shrinivas.bio}</p>
                  <p>
                    His focus areas include term life planning, long-term equity compounding,
                    retirement roadmaps, and providing family claim support during critical
                    life events.
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-stone-100 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-semibold text-stone-800">{COMPANY_INFO.contacts.shrinivas.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{COMPANY_INFO.contacts.shrinivas.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                    <a
                      href={COMPANY_INFO.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-700 hover:text-amber-700 underline"
                    >
                      Shrinivas Kulkarni on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Connect with Shrinivas on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Prachi Kulkarni */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200 shadow-xs relative group">
                    <img
                      src={prachiPhoto}
                      alt="Prachi Kulkarni, Co-Founder"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <label className="absolute inset-0 bg-stone-900/60 text-white text-[10px] font-medium flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-center p-1">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>Change Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCustomPrachiPhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Co-Founder & Financial Advisor
                    </div>
                    <h3 className="font-display text-2xl font-bold text-stone-900 mt-1">
                      Prachi Kulkarni
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md mt-2 font-medium">
                      <HeartHandshake className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Health & Systematic Planning Specialist</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                  <p>{COMPANY_INFO.contacts.prachi.bio}</p>
                  <p>
                    She is recognized for her empathetic, detail-oriented approach to reviewing
                    hospitalization fine print, assisting clients with cashless claims, and
                    structuring disciplined monthly SIP programs.
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-stone-100 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-semibold text-stone-800">{COMPANY_INFO.contacts.prachi.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{COMPANY_INFO.contacts.prachi.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Available Mon–Sat: 10:00 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Connect with Prachi on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our 5-Step Advisory Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Methodology
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900">
            Our 5-Step Advisory Approach
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            We follow a structured, objective process designed around your goals rather than pushing
            isolated products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-amber-500/80">
                  {st.num}
                </span>
                <h3 className="font-display font-bold text-base text-stone-900 mt-2">
                  {st.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-100 rounded-xl p-4 text-center text-xs text-stone-500">
          <strong>Regulatory Framework Notice:</strong> Aadish Investments provides financial planning frameworks and mutual fund distribution under AMFI registration guidelines. We do not provide fee-based investment advice unless provided under a separate, valid SEBI Investment Adviser registration.
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
              Ready to Discuss Your Financial Roadmap?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
              Meet Shrinivas or Prachi Kulkarni at our Narayan Peth office or schedule a video call from the comfort of your home.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Schedule Consultation
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
