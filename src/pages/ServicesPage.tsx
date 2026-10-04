import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_LIST } from '../data/content';
import {
  TrendingUp,
  Target,
  CalendarClock,
  PieChart,
  ShieldCheck,
  HeartHandshake,
  Globe,
  Layers,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'investment' | 'insurance' | 'specialized'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const filteredServices = SERVICES_LIST.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  const getIcon = (name: string) => {
    switch (name) {
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

  const handleConsultService = (title: string) => {
    onPreFillAppointment(`Inquiry regarding: ${title}`);
    onNavigate('book-appointment');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <span>Holistic Advisory & Distribution</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Financial Services Tailored to Your Life Horizon
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            From systematic equity mutual funds and pure term protection to comprehensive family
            health coverage and HNI/NRI wealth desks.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'investment', label: 'Investment & Planning' },
              { id: 'insurance', label: 'Insurance & Protection' },
              { id: 'specialized', label: 'HNI, NRI & Specialized' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-stone-950 shadow-xs'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6 hover:border-amber-400/80 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                    {getIcon(srv.icon)}
                  </div>
                  {srv.badge && (
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900">
                    {srv.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {srv.fullDesc}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                    Key Advisory Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitability */}
                <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700">
                  <strong className="text-stone-900">Who Should Consider:</strong>{' '}
                  {srv.suitability}
                </div>

                {/* Regulatory Disclosure */}
                <div className="text-[11px] text-stone-500 bg-stone-100/60 p-3 rounded-xl border border-stone-200/60 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{srv.regulatoryNote}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleConsultService(srv.title)}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() =>
                    onOpenWhatsAppWithText(
                      `Hello Shrinivas / Prachi, I am interested in learning more about your "${srv.title}" services.`
                    )
                  }
                  className="px-4 py-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Statutory Risk Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 border border-stone-200 rounded-2xl p-6 text-xs text-stone-600 space-y-2">
          <p className="font-semibold text-stone-800">
            Mandatory Regulatory Notice:
          </p>
          <p>
            Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
            Aadish Investments operates as an AMFI-registered Mutual Fund Distributor. We do not promise fixed,
            guaranteed, or assured returns. Insurance is the subject matter of solicitation; claims are assessed
            and disbursed exclusively by the respective licensed insurer in accordance with approved policy wording.
          </p>
        </div>
      </section>
    </div>
  );
};
