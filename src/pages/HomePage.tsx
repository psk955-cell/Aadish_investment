import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES_LIST, GOALS_LIST, TESTIMONIALS, MARKET_UPDATES, BLOG_POSTS } from '../data/content';
import { SipCalculatorWidget } from '../components/calculators/SipCalculatorWidget';
import heroFamilyImg from '../assets/images/hero_family_planning_1790590921036.jpg';
import {
  ShieldCheck,
  TrendingUp,
  Target,
  CalendarClock,
  PieChart,
  HeartHandshake,
  Globe,
  Layers,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Calendar,
  Award,
  BookOpen,
  Send,
  Building2,
  ChevronRight,
  Camera,
  Upload,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsApp,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  // Quick Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadMobile, setLeadMobile] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCity, setLeadCity] = useState('Pune');
  const [leadService, setLeadService] = useState('Mutual Funds & SIP Planning');
  const [leadMethod, setLeadMethod] = useState<'Phone Call' | 'Office Meeting' | 'WhatsApp'>('WhatsApp');
  const [leadMessage, setLeadMessage] = useState('');
  const [leadConsent, setLeadConsent] = useState(true);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Founder photo state with localStorage persistence
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

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-amber-600" />;
      case 'CalendarClock':
        return <CalendarClock className="w-5 h-5 text-amber-600" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadMobile) return;
    setLeadSubmitted(true);
  };

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-100/70 border border-amber-200/80 px-3.5 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>Founder-Led Financial Guidance in Pune Since 2012</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
                Plan Today. Protect Tomorrow.{' '}
                <span className="text-amber-600">Build Wealth for Life.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
                Aadish Investments has been helping individuals, families, professionals,
                business owners, NRIs, and HNIs make informed financial decisions since 2012.
                From life protection and health cover to disciplined investments and retirement planning.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-stone-950 font-bold rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Calendar className="w-4 h-4 text-stone-900" />
                  <span>Book a Consultation</span>
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Secondary Navigation Anchors */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-stone-600 font-medium">
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-700 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Investment Solutions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('insurance-solutions')}
                  className="hover:text-amber-700 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Insurance Solutions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-200/80 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Zero High-Pressure Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Goal-Oriented Portfolios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Dedicated Claim Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 group">
                <img
                  src={heroFamilyImg}
                  alt="Trusted financial planning consultation with Indian family in Pune"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    Personalized Advisory
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-1">
                    “Our Opinion Counts”
                  </h3>
                  <p className="text-xs text-stone-300 mt-0.5 line-clamp-2">
                    Protecting family futures and structuring wealth through life stages across Pune and Maharashtra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST-STAT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? 'pt-4 md:pt-0' : ''
                }`}
              >
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-stone-400 mt-0.5">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Mandatory Footnote Disclaimer */}
          <div className="mt-6 pt-4 border-t border-stone-800 text-[11px] text-stone-400 text-center leading-relaxed">
            {COMPANY_INFO.disclaimerFootnote}
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION: FINANCIAL GUIDANCE BUILT AROUND YOUR GOALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100/60 rounded-3xl p-8 sm:p-12 border border-stone-200">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Our Advisory Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900">
              Financial Guidance Built Around Your Goals
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At Aadish Investments, we believe financial planning is not only about choosing a
              product. It is about understanding your life goals, protecting what matters most to your
              family, and creating a disciplined, mathematical plan for the future.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Know Our Story
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Meet Our Founders
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE CATEGORIES (8 ICON CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Solutions & Expertise
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 mt-1">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              From systematic mutual funds to family mediclaim, explore curated services backed by
              regulatory compliance and transparent suitability.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onNavigate('services')}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    {getServiceIcon(srv.icon)}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-stone-900 group-hover:text-amber-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1.5 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700">
                <span>Learn Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Callout */}
        <div className="text-center text-xs text-stone-500">
          Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
        </div>
      </section>

      {/* 5. GOAL-BASED PLANNING SECTION (6 CARDS) */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Milestone Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              Your Goals Deserve a Plan
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              We translate life milestones into mathematical savings targets so you stay calm
              through every market cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOALS_LIST.map((goal) => (
              <div
                key={goal.id}
                className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 hover:border-amber-400/80 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-white">{goal.title}</h3>
                  <span className="text-[11px] font-mono font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                    {goal.timeHorizon}
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">{goal.description}</p>

                <div className="pt-3 border-t border-stone-700 text-[11px] text-stone-400">
                  <span className="text-stone-300 font-semibold block mb-0.5">
                    Suggested Asset Vehicles:
                  </span>
                  {goal.recommendedVehicles}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Discuss Your Financial Goals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER-LED TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Founder-Led Excellence
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900">
            Guidance You Can Speak To
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Aadish Investments combines long-term client relationships, second-generation
            experience in life-insurance protection, and a goal-oriented approach to investments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shrinivas Kulkarni Card */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col sm:flex-row">
            <div className="sm:w-5/12 bg-stone-100 relative group">
              <img
                src={shrinivasPhoto}
                alt="Shrinivas Kulkarni, Co-Founder of Aadish Investments"
                className="w-full h-64 sm:h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <label className="absolute bottom-2 left-2 right-2 bg-stone-900/85 hover:bg-stone-900 text-white text-[11px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 backdrop-blur-xs cursor-pointer opacity-95 hover:opacity-100 transition-all shadow-sm">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Upload Original Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomPhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="sm:w-7/12 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-semibold text-xs uppercase tracking-wider">
                    Co-Founder & Advisor
                  </span>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-500 text-xs">Est. 2012</span>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mt-1">
                  Shrinivas Kulkarni
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md mt-2 font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>10 Consecutive Years MDRT (LIC)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mt-3">
                  Leading second-generation life insurance advisory, systematic wealth creation,
                  and goal-planning for families and professionals across Pune.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
                  className="text-xs font-semibold text-stone-800 hover:text-amber-700 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{COMPANY_INFO.contacts.shrinivas.phone}</span>
                </a>
                <button
                  onClick={() =>
                    onOpenWhatsAppWithText(
                      'Hello Shrinivas, I would like to schedule a consultation regarding financial planning.'
                    )
                  }
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Prachi Kulkarni Card */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col sm:flex-row">
            <div className="sm:w-5/12 bg-stone-100 relative group">
              <img
                src={prachiPhoto}
                alt="Prachi Kulkarni, Co-Founder of Aadish Investments"
                className="w-full h-64 sm:h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <label className="absolute bottom-2 left-2 right-2 bg-stone-900/85 hover:bg-stone-900 text-white text-[11px] font-medium py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 backdrop-blur-xs cursor-pointer opacity-95 hover:opacity-100 transition-all shadow-sm">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Upload Original Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomPrachiPhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="sm:w-7/12 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-semibold text-xs uppercase tracking-wider">
                    Co-Founder & Advisor
                  </span>
                  <span className="text-stone-300">·</span>
                  <span className="text-stone-500 text-xs">Aadish Team</span>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mt-1">
                  Prachi Kulkarni
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md mt-2 font-medium">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Health, Mediclaim & Systematic Advisory</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mt-3">
                  Spearheading family health insurance restructuring, policyholder claim support,
                  and disciplined monthly SIP execution for growing households.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
                  className="text-xs font-semibold text-stone-800 hover:text-amber-700 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{COMPANY_INFO.contacts.prachi.phone}</span>
                </a>
                <button
                  onClick={() =>
                    onOpenWhatsAppWithText(
                      'Hello Prachi, I would like to discuss family health insurance and systematic investments.'
                    )
                  }
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Award Showcase Banner */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-700 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-stone-900">
                10 Consecutive Years of MDRT Recognition Connected with LIC
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                The Million Dollar Round Table (MDRT) is an internationally recognized standard of
                excellence in life insurance advisory. Achieved through decade-long client trust.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm rounded-xl shrink-0 cursor-pointer"
          >
            Read Our Legacy
          </button>
        </div>
      </section>

      {/* 7. INTERACTIVE SIP CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Interactive Planning Tool
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900">
            Calculate Your SIP Potential
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Experience how regular monthly investments compound over 5, 10, 15, and 20 years.
          </p>
        </div>

        <SipCalculatorWidget
          onDiscussGoal={(summary) => {
            onPreFillAppointment(summary);
            onNavigate('book-appointment');
          }}
          onNavigate={onNavigate}
          onOpenWhatsAppWithText={onOpenWhatsAppWithText}
        />
      </section>

      {/* 8. INSURANCE SECTION: PROTECTION FOR EVERY STAGE OF LIFE */}
      <section className="bg-stone-50 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Risk Management
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 mt-1">
                Protection for Every Stage of Life
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
                Protection forms the unbreakable foundation of any financial pyramid. We help
                families evaluate pure risk coverage without confusing features.
              </p>
            </div>
            <button
              onClick={() => onNavigate('insurance-solutions')}
              className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Insurance Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900">
                Term Life & LIC Savings Plans
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Adequate Human Life Value (HLV) coverage replaces family income. Sovereign-backed LIC
                endowment plans provide predictable milestone safety.
              </p>
              <div className="text-[11px] text-amber-700 font-semibold pt-2">
                10-Year MDRT Advisory Experience
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900">
                Health, Mediclaim & Super Top-Up
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Protect your savings from hospital bills. Zero room-rent caps, critical illness
                riders, and cashless hospital access in Pune and nationwide.
              </p>
              <div className="text-[11px] text-amber-700 font-semibold pt-2">
                Room-rent & co-pay clause auditing
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900">
                Claim-Support Assistance
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We assist families with documentation, revival of lapsed policies, nominee updates,
                and claim submission guidance during difficult times.
              </p>
              <div className="text-[11px] text-stone-500 pt-2">
                *Claim decisions decided by insurer per policy terms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS PREVIEW (APPROVED CLIENT STORIES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Verified Client Feedback
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 mt-1">
              Client Experiences Built on Discipline
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              We focus on planning discipline, claim support, and long-term relationships—never
              unrealistic return promises.
            </p>
          </div>
          <button
            onClick={() => onNavigate('testimonials')}
            className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Read All Client Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    {t.category}
                  </span>
                  <span>{t.experienceYear}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <div className="font-bold text-xs sm:text-sm text-stone-900">
                  {t.clientIdentifier}
                </div>
                <div className="text-[11px] text-stone-500">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. INSIGHTS PREVIEW (MARKET UPDATE & BLOG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Investor Education
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-900 mt-1">
              Latest Market Updates & Articles
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              Factual, educational commentary to keep you informed on market fundamentals and regulatory changes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('market-updates')}
            className="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Market Update */}
          <div
            onClick={() => onNavigate('market-updates')}
            className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 transition-all cursor-pointer space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                {MARKET_UPDATES[0].category} · {MARKET_UPDATES[0].publishDate}
              </span>
              <h3 className="font-display font-bold text-base text-stone-900 hover:text-amber-700 transition-colors">
                {MARKET_UPDATES[0].title}
              </h3>
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {MARKET_UPDATES[0].summary}
              </p>
            </div>
            <div className="text-xs font-semibold text-amber-700 flex items-center gap-1 pt-2">
              <span>Read Update</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: NFO / IPO Article */}
          <div
            onClick={() => onNavigate('market-updates')}
            className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 transition-all cursor-pointer space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                {MARKET_UPDATES[2].category} · {MARKET_UPDATES[2].publishDate}
              </span>
              <h3 className="font-display font-bold text-base text-stone-900 hover:text-amber-700 transition-colors">
                {MARKET_UPDATES[2].title}
              </h3>
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {MARKET_UPDATES[2].summary}
              </p>
            </div>
            <div className="text-xs font-semibold text-amber-700 flex items-center gap-1 pt-2">
              <span>Read Analysis</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Educational Blog */}
          <div
            onClick={() => onNavigate('blog')}
            className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 transition-all cursor-pointer space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                {BLOG_POSTS[0].category} · {BLOG_POSTS[0].readTime}
              </span>
              <h3 className="font-display font-bold text-base text-stone-900 hover:text-amber-700 transition-colors">
                {BLOG_POSTS[0].title}
              </h3>
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {BLOG_POSTS[0].summary}
              </p>
            </div>
            <div className="text-xs font-semibold text-amber-700 flex items-center gap-1 pt-2">
              <span>Read Full Guide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CONVERSION & APPOINTMENT / WHATSAPP SECTION */}
      <section className="bg-stone-900 text-white rounded-3xl max-w-7xl mx-auto px-6 py-12 sm:p-14 border border-stone-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Start The Conversation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Let’s Start With Your Financial Goals
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Whether you need to review your family’s insurance portfolio, start a disciplined SIP,
              or discuss retirement preparedness, our founders are ready to guide you.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300">
                  <span className="font-semibold text-white block">Pune Office:</span>
                  {COMPANY_INFO.location.address}, {COMPANY_INFO.location.city}, Maharashtra
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300">
                  <span className="font-semibold text-white block">Direct Phones:</span>
                  Shrinivas: +91 99606 88388 · Prachi: +91 99607 88388
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quick WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-2xl p-6 sm:p-8 border border-stone-700">
            {leadSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Consultation Request Received
                </h3>
                <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Aadish Investments, {leadName}. Shrinivas or Prachi Kulkarni
                  will reach out to you via {leadMethod} shortly.
                </p>
                <button
                  onClick={() => setLeadSubmitted(false)}
                  className="text-xs text-amber-400 hover:underline pt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-white mb-2">
                  Request a Personalized Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={leadMobile}
                      onChange={(e) => setLeadMobile(e.target.value)}
                      className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pune / Mumbai / Overseas"
                      value={leadCity}
                      onChange={(e) => setLeadCity(e.target.value)}
                      className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      Service Needed
                    </label>
                    <select
                      value={leadService}
                      onChange={(e) => setLeadService(e.target.value)}
                      className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option>Mutual Funds & SIP Planning</option>
                      <option>Life Insurance & LIC Solutions</option>
                      <option>Health & Mediclaim Review</option>
                      <option>Goal-Based Financial Planning</option>
                      <option>Tax & Retirement Planning</option>
                      <option>HNI / NRI Wealth Advisory</option>
                      <option>PMS / AIF / SIF Briefing</option>
                      <option>Existing Policy Claim Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">
                      Preferred Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['WhatsApp', 'Phone Call', 'Office Meeting'] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setLeadMethod(m)}
                          className={`py-2 px-1 text-[11px] font-medium rounded-lg border transition-colors cursor-pointer text-center truncate ${
                            leadMethod === m
                              ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                              : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-stone-600'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-300 mb-1">
                    Brief Note or Goal (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us a little about your goal, horizon, or question..."
                    value={leadMessage}
                    onChange={(e) => setLeadMessage(e.target.value)}
                    className="w-full text-xs bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="homeConsent"
                    checked={leadConsent}
                    onChange={(e) => setLeadConsent(e.target.checked)}
                    className="mt-0.5 accent-amber-500 cursor-pointer"
                  />
                  <label htmlFor="homeConsent" className="text-[11px] text-stone-400 leading-tight">
                    I authorize Aadish Investments to contact me regarding my financial inquiry.
                    We never share personal details with third-party telemarketers.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!leadConsent}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
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
