import React, { useState, useMemo } from 'react';
import { PageId } from '../../types';
import { IndianRupee, TrendingUp, Calendar, ArrowRight, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface SipCalculatorWidgetProps {
  onDiscussGoal?: (summary: string) => void;
  onNavigate?: (page: PageId) => void;
  onOpenWhatsAppWithText?: (text: string) => void;
  compact?: boolean;
}

export const SipCalculatorWidget: React.FC<SipCalculatorWidgetProps> = ({
  onDiscussGoal,
  onNavigate,
  onOpenWhatsAppWithText,
  compact = false,
}) => {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(12);
  const [durationYears, setDurationYears] = useState<number>(15);
  const [stepUpPercent, setStepUpPercent] = useState<number>(0);
  const [showYearlyTable, setShowYearlyTable] = useState<boolean>(false);

  // Formatting helpers
  const formatINR = (val: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatLakhCrore = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return formatINR(val);
  };

  // Calculation logic
  const calculation = useMemo(() => {
    const monthlyRate = expectedReturnRate / 12 / 100;
    const yearlyBreakdown: {
      year: number;
      monthlySip: number;
      yearInvested: number;
      cumulativeInvested: number;
      corpusEnd: number;
      interestEarned: number;
    }[] = [];

    let currentMonthly = monthlyAmount;
    let totalInvested = 0;
    let currentCorpus = 0;

    for (let yr = 1; yr <= durationYears; yr++) {
      let yearInvestedThisYear = 0;
      for (let m = 1; m <= 12; m++) {
        currentCorpus = (currentCorpus + currentMonthly) * (1 + monthlyRate);
        yearInvestedThisYear += currentMonthly;
        totalInvested += currentMonthly;
      }

      yearlyBreakdown.push({
        year: yr,
        monthlySip: currentMonthly,
        yearInvested: yearInvestedThisYear,
        cumulativeInvested: totalInvested,
        corpusEnd: Math.round(currentCorpus),
        interestEarned: Math.round(currentCorpus - totalInvested),
      });

      // Apply annual step up for subsequent years
      if (stepUpPercent > 0) {
        currentMonthly = Math.round(currentMonthly * (1 + stepUpPercent / 100));
      }
    }

    const futureValue = Math.round(currentCorpus);
    const wealthGained = Math.max(0, futureValue - totalInvested);
    const investedRatio = futureValue > 0 ? (totalInvested / futureValue) * 100 : 50;
    const gainRatio = 100 - investedRatio;

    return {
      totalInvested,
      futureValue,
      wealthGained,
      investedRatio,
      gainRatio,
      yearlyBreakdown,
    };
  }, [monthlyAmount, expectedReturnRate, durationYears, stepUpPercent]);

  const handleDiscussClick = () => {
    const summary = `SIP Goal Discussion: Monthly Investment ₹${monthlyAmount.toLocaleString('en-IN')}, Duration: ${durationYears} Years, Assumed Return: ${expectedReturnRate}%, Step-Up: ${stepUpPercent}%. Estimated Target Value: ${formatLakhCrore(calculation.futureValue)}`;
    if (onDiscussGoal) {
      onDiscussGoal(summary);
    } else if (onNavigate) {
      onNavigate('book-appointment');
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Shrinivas / Prachi, I used the SIP Calculator on your website. I am looking to invest ₹${monthlyAmount.toLocaleString('en-IN')}/month for ${durationYears} years (assumed ${expectedReturnRate}% return, estimated future value ${formatLakhCrore(calculation.futureValue)}). I would like to discuss suitable mutual fund portfolios for this goal.`;
    if (onOpenWhatsAppWithText) {
      onOpenWhatsAppWithText(message);
    } else {
      const url = `https://wa.me/919960688388?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-100 pb-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                Systematic Investment Plan (SIP) Calculator
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Simulate disciplined monthly investing and compound wealth creation
              </p>
            </div>
          </div>
          <span className="text-xs text-stone-500 font-medium px-2.5 py-1 bg-stone-100 rounded-md">
            Monthly Compounding Formula
          </span>
        </div>
      </div>

      {/* Main Grid: Controls vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Investment Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="font-semibold text-stone-800">Monthly SIP Amount</label>
              <div className="flex items-center bg-stone-50 border border-stone-200 rounded-lg px-3 py-1 font-mono font-bold text-stone-900">
                <span className="text-stone-400 mr-1">₹</span>
                <span>{monthlyAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <input
              type="range"
              min="500"
              max="200000"
              step="500"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>₹500</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          {/* Expected Return Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="font-semibold text-stone-800">
                Expected Annual Rate of Return (%)
              </label>
              <div className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-1 font-mono font-bold text-stone-900">
                <span>{expectedReturnRate}%</span>
              </div>
            </div>
            <input
              type="range"
              min="6"
              max="18"
              step="0.5"
              value={expectedReturnRate}
              onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>6% (Conservative)</span>
              <span>12% (Balanced/Equity Avg)</span>
              <span>18% (High Growth)</span>
            </div>
          </div>

          {/* Duration Years Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="font-semibold text-stone-800">Investment Period (Years)</label>
              <div className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-1 font-mono font-bold text-stone-900">
                <span>{durationYears} Years</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>1 Yr</span>
              <span>10 Yrs</span>
              <span>20 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>

          {/* Optional Step-up Slider */}
          <div className="space-y-2 p-4 bg-amber-50/50 rounded-xl border border-amber-100">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <label className="font-semibold text-stone-900">Annual SIP Step-Up (%)</label>
              </div>
              <span className="bg-white border border-amber-200 rounded-lg px-2.5 py-0.5 font-mono font-bold text-xs text-amber-800">
                {stepUpPercent > 0 ? `+${stepUpPercent}% per year` : 'No Step-Up'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="5"
              value={stepUpPercent}
              onChange={(e) => setStepUpPercent(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-100 rounded-lg"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              A 10% annual step-up aligns your investment with yearly salary appraisals and significantly increases your final corpus.
            </p>
          </div>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 space-y-6 shadow-md border border-stone-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Projected Investment Summary
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1">
              {formatLakhCrore(calculation.futureValue)}
            </div>
            <div className="text-xs text-stone-400 mt-0.5">
              Estimated Future Value after {durationYears} years
            </div>
          </div>

          {/* Metrics Split */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-800">
            <div>
              <span className="text-xs text-stone-400">Total Invested</span>
              <div className="text-base sm:text-lg font-bold text-stone-200 mt-0.5 font-mono">
                {formatINR(calculation.totalInvested)}
              </div>
              <span className="text-[11px] text-stone-500">
                {calculation.investedRatio.toFixed(1)}% of total
              </span>
            </div>
            <div>
              <span className="text-xs text-emerald-400">Estimated Wealth Gained</span>
              <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5 font-mono">
                +{formatINR(calculation.wealthGained)}
              </div>
              <span className="text-[11px] text-emerald-400/80">
                {calculation.gainRatio.toFixed(1)}% compounded gain
              </span>
            </div>
          </div>

          {/* Visual Bar Ratio */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] text-stone-400 font-medium">
              <span>Invested Capital</span>
              <span>Compounded Growth</span>
            </div>
            <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden flex">
              <div
                style={{ width: `${calculation.investedRatio}%` }}
                className="bg-stone-500 h-full transition-all duration-300"
              />
              <div
                style={{ width: `${calculation.gainRatio}%` }}
                className="bg-amber-400 h-full transition-all duration-300"
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleDiscussClick}
              className="w-full py-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <span>Discuss Your SIP Goal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer border border-stone-700"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Share Calculation on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory Disclaimer directly below calculator */}
      <div className="flex items-start gap-2.5 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
        <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-stone-800">Statutory Notice:</strong> This calculator provides an illustration only. It does not predict or guarantee future returns. Actual investment returns may be higher or lower than the illustration and are subject to market risks. Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
        </p>
      </div>

      {/* Toggle Year-by-Year Schedule */}
      {!compact && (
        <div className="border-t border-stone-100 pt-4">
          <button
            onClick={() => setShowYearlyTable(!showYearlyTable)}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>{showYearlyTable ? 'Hide Year-by-Year Schedule' : 'View Year-by-Year Growth Table'}</span>
            <span className="text-[10px] bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">
              {durationYears} Years
            </span>
          </button>

          {showYearlyTable && (
            <div className="mt-4 overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-50 text-stone-700 font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-2.5 px-4">Year</th>
                    <th className="py-2.5 px-4">Monthly SIP</th>
                    <th className="py-2.5 px-4">Annual Deposit</th>
                    <th className="py-2.5 px-4">Total Invested</th>
                    <th className="py-2.5 px-4">Est. Corpus Value</th>
                    <th className="py-2.5 px-4">Wealth Gained</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono">
                  {calculation.yearlyBreakdown.map((row) => (
                    <tr key={row.year} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-2 px-4 font-sans font-semibold text-stone-900">Year {row.year}</td>
                      <td className="py-2 px-4 text-stone-700">{formatINR(row.monthlySip)}</td>
                      <td className="py-2 px-4 text-stone-700">{formatINR(row.yearInvested)}</td>
                      <td className="py-2 px-4 text-stone-700">{formatINR(row.cumulativeInvested)}</td>
                      <td className="py-2 px-4 font-bold text-stone-900">{formatINR(row.corpusEnd)}</td>
                      <td className="py-2 px-4 text-emerald-600 font-semibold">+{formatINR(row.interestEarned)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
