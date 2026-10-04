import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/content';
import { MessageCircle, X, ExternalLink, UserCheck } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'SIP Investment & Financial Planning',
}) => {
  const [selectedContact, setSelectedContact] = useState<'shrinivas' | 'prachi'>('shrinivas');
  const [topic, setTopic] = useState(defaultTopic);
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');

  if (!isOpen) return null;

  const topicsList = [
    'SIP Investment & Financial Planning',
    'Life Insurance & LIC Plan Inquiry',
    'Health Insurance & Mediclaim Review',
    'Retirement Planning & SWP Guidance',
    'NRI / HNI Wealth Solutions',
    'Existing Client Service / Claim Assistance',
  ];

  const handleLaunchWhatsApp = () => {
    const contact =
      selectedContact === 'shrinivas'
        ? COMPANY_INFO.contacts.shrinivas
        : COMPANY_INFO.contacts.prachi;

    const greeting = userName ? `Hello ${contact.name}, my name is ${userName}` : `Hello ${contact.name}`;
    const cityText = userCity ? ` from ${userCity}` : '';
    const textMessage = `${greeting}${cityText}. I would like to inquire about "${topic}" through the Aadish Investments website. Please let me know a suitable time to connect.`;

    const encoded = encodeURIComponent(textMessage);
    const url = `https://wa.me/${contact.phoneRaw}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in">
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-emerald-700 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Direct WhatsApp Advisory</h3>
              <p className="text-xs text-emerald-100">Connect directly with Aadish Founders</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-600/50 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Choose Advisor */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              Select Advisor
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedContact('shrinivas')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedContact === 'shrinivas'
                    ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-stone-900">Shrinivas Kulkarni</span>
                  {selectedContact === 'shrinivas' && (
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">Co-Founder & Advisor</p>
                <p className="text-[10px] text-amber-700 font-medium mt-1">10 Yrs MDRT (LIC)</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedContact('prachi')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedContact === 'prachi'
                    ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-stone-900">Prachi Kulkarni</span>
                  {selectedContact === 'prachi' && (
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">Co-Founder & Advisor</p>
                <p className="text-[10px] text-amber-700 font-medium mt-1">Health & Systematic Inv.</p>
              </button>
            </div>
          </div>

          {/* Quick Topic Selection */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              Topic / Inquiry
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {topicsList.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Name & City */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-stone-600 font-medium mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-600 font-medium mb-1">
                Your City (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Pune"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleLaunchWhatsApp}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>
                Start WhatsApp with {selectedContact === 'shrinivas' ? 'Shrinivas' : 'Prachi'}
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
            <p className="text-[10px] text-center text-stone-500 mt-2">
              Opens WhatsApp directly with pre-composed query. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FloatingWhatsAppTrigger: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
      aria-label="Chat with Aadish Investments founders on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
      <span className="text-xs font-semibold hidden sm:inline whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse hidden sm:inline"></span>
    </button>
  );
};
