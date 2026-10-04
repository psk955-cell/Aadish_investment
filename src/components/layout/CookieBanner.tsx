import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const hasConsented = localStorage.getItem('aadish_cookie_consent');
    if (!hasConsented) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aadish_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-stone-900 text-stone-200 p-4 rounded-xl border border-stone-800 shadow-xl text-xs space-y-3 animate-in slide-in-from-bottom-4">
      <div className="flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="flex-1 leading-relaxed">
          <p className="font-medium text-white">Privacy & Transparency</p>
          <p className="text-stone-400 mt-0.5">
            We use essential cookies to provide secure browsing and appointment booking. We do not sell your personal data or collect sensitive financial credentials.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="text-stone-400 hover:text-white p-1"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-stone-800">
        <button
          onClick={() => onNavigate('privacy-policy')}
          className="text-amber-400 hover:underline text-[11px]"
        >
          Read Privacy Policy
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs transition-colors cursor-pointer"
        >
          Acknowledge & Accept
        </button>
      </div>
    </div>
  );
};
