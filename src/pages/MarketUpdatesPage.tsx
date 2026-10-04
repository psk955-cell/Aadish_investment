import React, { useState } from 'react';
import { PageId, MarketUpdate } from '../types';
import { MARKET_UPDATES } from '../data/content';
import {
  TrendingUp,
  Search,
  Calendar,
  User,
  ArrowRight,
  AlertTriangle,
  X,
  MessageCircle,
} from 'lucide-react';

interface MarketUpdatesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const MarketUpdatesPage: React.FC<MarketUpdatesPageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUpdate, setSelectedUpdate] = useState<MarketUpdate | null>(null);

  const categories = [
    'All',
    'Market Updates',
    'Mutual Fund Updates',
    'NFO Updates',
    'IPO Updates',
    'Insurance Updates',
    'Tax Updates',
    'Retirement Planning',
    'Investor Education',
  ];

  const filteredUpdates = MARKET_UPDATES.filter((up) => {
    const matchesCat = selectedCategory === 'All' || up.category === selectedCategory;
    const matchesQuery =
      up.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      up.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      up.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Educational Commentary & Bulletins</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Market, NFO, IPO & Regulatory Updates
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Factual, objective analysis of Indian market trends, New Fund Offers, IPO due diligence,
            and IRDAI / AMFI regulatory developments.
          </p>

          {/* Search Input */}
          <div className="pt-4 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search updates, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-800 border border-stone-700 rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredUpdates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
            <p className="text-sm font-semibold text-stone-700">No updates match your search.</p>
            <p className="text-xs text-stone-500">
              Try adjusting your keywords or clearing the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-amber-700 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUpdates.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      <span>{item.publishDate}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">By {item.author}</span>
                  <button
                    onClick={() => setSelectedUpdate(item)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Detail Reader Modal */}
      {selectedUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  {selectedUpdate.category}
                </span>
                <span>·</span>
                <span>{selectedUpdate.publishDate}</span>
                <span>·</span>
                <span>Author: {selectedUpdate.author}</span>
              </div>
              <button
                onClick={() => setSelectedUpdate(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                {selectedUpdate.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium bg-stone-50 p-4 rounded-xl border border-stone-200">
                {selectedUpdate.summary}
              </p>

              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 pt-2">
                <p>{selectedUpdate.fullContent}</p>
              </div>

              {/* Disclaimer */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-stone-600 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-stone-900">Disclaimer:</strong> {selectedUpdate.disclaimer}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  onPreFillAppointment(`Inquiry regarding: ${selectedUpdate.title}`);
                  setSelectedUpdate(null);
                  onNavigate('book-appointment');
                }}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Discuss With Advisor
              </button>

              <button
                onClick={() => {
                  onOpenWhatsAppWithText(
                    `Hello Shrinivas / Prachi, I read your update on "${selectedUpdate.title}" and would like to ask a question.`
                  );
                  setSelectedUpdate(null);
                }}
                className="px-4 py-2 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
