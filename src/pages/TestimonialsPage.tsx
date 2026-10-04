import React, { useState } from 'react';
import { PageId } from '../types';
import { TESTIMONIALS } from '../data/content';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate, onOpenWhatsApp }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Mutual Funds & SIP', 'Life Insurance', 'Health Insurance', 'NRI Advisory'];

  const filteredTestimonials = TESTIMONIALS.filter(
    (t) => filter === 'All' || t.category === filter
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Feedback & Testimonials</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Trusted by Families Across Pune & Beyond
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Our client relationships are measured in decades, not quarters. Here is what families,
            professionals, and business owners say about our discipline, transparency, and claim support.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filter === c
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                    {t.category}
                  </span>
                  <span className="text-stone-400 font-mono">{t.experienceYear}</span>
                </div>

                <p className="text-stone-700 text-sm sm:text-base italic leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="pt-2 text-xs text-stone-500">
                  <span className="font-semibold text-stone-700">Area of Engagement:</span>{' '}
                  {t.serviceFocus}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-stone-900">{t.clientIdentifier}</h4>
                  <p className="text-xs text-stone-500">{t.city}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Written Consent on File</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-2xl p-5 border border-stone-200 text-xs text-stone-600 space-y-1.5">
          <p className="font-semibold text-stone-800">Compliance & Privacy Notice Regarding Testimonials:</p>
          <p>
            Client feedback reflects individual experiences and service impressions. Testimonials do not represent or guarantee future investment performance, policy acceptance, or claim settlement outcomes. To protect client confidentiality under IRDAI and SEBI disclosure frameworks, certain client identities are presented with initials or anonymous city descriptors with documented consent.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Experience the Aadish Advisory Difference
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Schedule an introductory conversation with Shrinivas or Prachi Kulkarni.
            </p>
          </div>
          <button
            onClick={() => onNavigate('book-appointment')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
