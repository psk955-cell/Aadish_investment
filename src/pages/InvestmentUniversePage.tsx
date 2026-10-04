import React, { useState } from 'react';
import { PageId, UniverseCategory } from '../types';
import { UNIVERSE_CATEGORIES } from '../data/content';
import {
  Compass,
  ArrowRight,
  MessageCircle,
  Shield,
  Layers,
  Sparkles,
  Info,
  X,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

interface InvestmentUniversePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const InvestmentUniversePage: React.FC<InvestmentUniversePageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<UniverseCategory | null>(UNIVERSE_CATEGORIES[0]);

  const groups = [
    { id: 'all', label: 'All Instruments (18)' },
    { id: 'wealth', label: 'Wealth & Equity' },
    { id: 'protection', label: 'Family Protection' },
    { id: 'fixed-income', label: 'Fixed Income & Debt' },
    { id: 'specialized', label: 'Specialized & HNI / NRI' },
  ];

  const filteredItems = UNIVERSE_CATEGORIES.filter(
    (item) => selectedGroup === 'all' || item.group === selectedGroup
  );

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'Conservative':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Moderate':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Aggressive':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      default:
        return 'text-stone-700 bg-stone-100 border-stone-200';
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Financial Ecosystem</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            The Aadish Investment Universe
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Explore 18 distinct financial solutions spanning protection, disciplined wealth
            creation, tax efficiency, and specialized vehicles for high-net-worth families.
          </p>

          {/* Group Filter Bar */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            {groups.map((grp) => (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedGroup === grp.id
                    ? 'bg-amber-400 text-stone-950'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Suitability Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Mandatory Investor Suitability Notice:</strong> Product suitability depends on
            individual financial goals, risk profile, investment horizon, eligibility, and applicable
            regulations. Not every financial instrument is appropriate for every investor.
          </p>
        </div>
      </div>

      {/* Interactive Universe Grid & Detail Drawer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid of Universe Badges / Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isSelected = activeCategory?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCategory(item)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left space-y-3 ${
                    isSelected
                      ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                      : 'bg-white border-stone-200 hover:border-amber-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded border ${getRiskBadge(
                        item.riskProfile
                      )}`}
                    >
                      {item.riskProfile}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {item.timeHorizon}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-stone-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 text-xs font-semibold text-amber-700 flex items-center justify-between">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Category Detail Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 sticky top-28">
            {activeCategory ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="uppercase font-semibold tracking-wider text-amber-700">
                      Product Specification
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded border ${getRiskBadge(
                        activeCategory.riskProfile
                      )}`}
                    >
                      {activeCategory.riskProfile} Risk
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-stone-900">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {activeCategory.summary}
                  </p>
                </div>

                {/* Horizon & Eligibility */}
                <div className="space-y-3 pt-2 border-t border-stone-100 text-xs">
                  <div>
                    <span className="font-bold text-stone-800 block">Recommended Time Horizon:</span>
                    <span className="text-stone-600">{activeCategory.timeHorizon}</span>
                  </div>

                  <div>
                    <span className="font-bold text-stone-800 block">Who Should Consider:</span>
                    <span className="text-stone-600 leading-relaxed">{activeCategory.whoShouldConsider}</span>
                  </div>

                  <div>
                    <span className="font-bold text-stone-800 block">Regulatory Governance:</span>
                    <span className="text-stone-500 text-[11px] leading-relaxed block mt-0.5">
                      {activeCategory.regulatoryScope}
                    </span>
                  </div>
                </div>

                {/* Common Product Types */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-xs font-bold text-stone-800 block">
                    Typical Instruments & Structures:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCategory.keyProducts.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      onPreFillAppointment(`Inquiry regarding Universe Category: ${activeCategory.title}`);
                      onNavigate('book-appointment');
                    }}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      onOpenWhatsAppWithText(
                        `Hello Shrinivas / Prachi, I would like to know if "${activeCategory.title}" is suitable for my financial profile.`
                      )
                    }
                    className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer border border-emerald-200"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-stone-500 text-xs">
                Select an instrument from the universe to view suitability and compliance guidelines.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
