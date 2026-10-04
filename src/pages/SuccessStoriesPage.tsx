import React from 'react';
import { PageId } from '../types';
import { SUCCESS_STORIES } from '../data/content';
import { Target, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface SuccessStoriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({
  onNavigate,
  onOpenWhatsApp,
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>Illustrative Case Studies</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Real Scenarios, Disciplined Financial Outcomes
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Examine how structured goal planning, risk assessment, and hands-on claim assistance
            helped real Pune families bring calm and predictability to their financial lives.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {SUCCESS_STORIES.map((story, idx) => (
          <div
            key={story.id}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Case Study {idx + 1} · {story.category}
                </span>
                <h2 className="font-display text-2xl font-bold text-stone-900 mt-1">
                  {story.title}
                </h2>
              </div>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full self-start sm:self-auto">
                {story.clientProfile}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Challenge */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                  The Initial Challenge:
                </span>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
                  {story.initialChallenge}
                </p>
              </div>

              {/* Advisory Approach */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Our Advisory Approach:
                </span>
                <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 space-y-2 text-xs sm:text-sm text-stone-700">
                  {story.advisoryApproach.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  Structured Outcome:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                  {story.outcome}
                </p>
              </div>
            </div>

            {/* Mandatory Regulatory Disclaimer per Case Study */}
            <div className="p-3.5 bg-stone-50 rounded-xl text-[11px] text-stone-500 flex items-start gap-2 border border-stone-200/70">
              <AlertCircle className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Disclaimer:</strong> {story.disclaimer}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Structure a Case Study for Your Own Life Goals
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Let’s build a personalized investment and protection plan tailored to your family.
            </p>
          </div>
          <button
            onClick={() => onNavigate('book-appointment')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Start Your Plan
          </button>
        </div>
      </section>
    </div>
  );
};
