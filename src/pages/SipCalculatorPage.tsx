import React from 'react';
import { PageId } from '../types';
import { SipCalculatorWidget } from '../components/calculators/SipCalculatorWidget';
import { TrendingUp, Sparkles, ShieldAlert, Target, Clock, ArrowRight, MessageCircle } from 'lucide-react';

interface SipCalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const SipCalculatorPage: React.FC<SipCalculatorPageProps> = ({
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
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Disciplined Compounding Engine</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Systematic Investment Plan (SIP) Calculator
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Estimate your potential wealth creation by investing a fixed amount regularly into
            diversified mutual funds. Discover the compounding power of disciplined Step-Up SIPs.
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SipCalculatorWidget
          onDiscussGoal={(summary) => {
            onPreFillAppointment(summary);
            onNavigate('book-appointment');
          }}
          onNavigate={onNavigate}
          onOpenWhatsAppWithText={onOpenWhatsAppWithText}
        />
      </section>

      {/* Educational Compounding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              The Math Behind Compounding
            </span>
            <h2 className="font-display text-2xl font-bold text-stone-900">
              Understanding the Compounding Formula
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              Mutual fund SIPs compound on a monthly cycle. The future value formula applied above is:
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 font-mono text-xs sm:text-sm text-stone-800 space-y-2 overflow-x-auto">
            <div className="font-bold text-amber-800">
              FV = P × [ ((1 + r)^n - 1) / r ] × (1 + r)
            </div>
            <div className="text-xs text-stone-500 font-sans space-y-1 pt-1">
              <div><strong>P</strong> = Monthly investment amount in Rupees</div>
              <div><strong>r</strong> = Monthly assumed return rate (Annual return % / 12 / 100)</div>
              <div><strong>n</strong> = Total number of monthly installments (Years × 12)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-600" />
                <span>Rupee-Cost Averaging</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                When markets decline, your fixed SIP buys more mutual fund units. When markets rise,
                it buys fewer units. This eliminates the futile stress of trying to time market tops and bottoms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>The Power of Time</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                In compounding, the final 5 years often generate more wealth than the first 15 years combined.
                Starting early with a modest amount yields more than starting late with a large amount.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Step-Up Advantage</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Increasing your monthly SIP by just 10% each year (matching annual salary increments) can
                nearly double your final corpus over a 15 to 20-year horizon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500/10 border border-amber-300/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900">
              Map Your Calculated Target to Real Portfolios
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Schedule a 1-on-1 consultation with Shrinivas or Prachi Kulkarni to select AMFI-regulated
              funds matching your specific risk capacity and timeline.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Discuss My SIP Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
