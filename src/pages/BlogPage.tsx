import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/content';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWhatsAppWithText: (text: string) => void;
  onPreFillAppointment: (note: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenWhatsAppWithText,
  onPreFillAppointment,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Mutual Funds', 'Life Insurance', 'Health Insurance', 'Wealth Creation', 'Retirement', 'NRI Solutions', 'Goal-Based Planning'];

  const filteredPosts = BLOG_POSTS.filter(
    (p) => filterCategory === 'All' || p.category === filterCategory
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Investor Education & Guides</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Aadish Financial Learning Center
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Written by founders Shrinivas & Prachi Kulkarni. Practical, plain-language guides to help
            you understand protection, avoid expensive insurance traps, and build wealth systematically.
          </p>

          {/* Filter Categories */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterCategory === cat
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

      {/* Grid of Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="font-display font-bold text-lg text-stone-900 leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Key takeaway preview */}
                <div className="pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Key Highlight:
                  </span>
                  <div className="flex items-start gap-1.5 text-[11px] text-stone-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{post.keyTakeaways[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="text-[11px] text-stone-400">
                  <span>By {post.author}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-10 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  {selectedPost.category}
                </span>
                <span>·</span>
                <span>By {selectedPost.author}</span>
                <span>·</span>
                <span>Published: {selectedPost.publishDate}</span>
                <span>·</span>
                <span>Reviewed: {selectedPost.reviewDate}</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-6">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Key Takeaways Box */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                  Core Investor Takeaways:
                </span>
                <ul className="space-y-2 text-xs text-stone-700">
                  {selectedPost.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prose Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {selectedPost.contentParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Mandatory Regulatory Disclaimer */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-stone-600 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-stone-900">Regulatory Disclaimer:</strong>{' '}
                  {selectedPost.disclaimer}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  onPreFillAppointment(`Inquiry regarding article: "${selectedPost.title}"`);
                  setSelectedPost(null);
                  onNavigate('book-appointment');
                }}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Schedule Consultation on This Goal
              </button>

              <button
                onClick={() => {
                  onOpenWhatsAppWithText(
                    `Hello, I was reading your article on "${selectedPost.title}" and would like to ask a related financial question.`
                  );
                  setSelectedPost(null);
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
