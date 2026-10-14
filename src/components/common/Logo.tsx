import React, { useState, useEffect } from 'react';
import { OFFICIAL_LOGO_DATA_URI } from '../../assets/logoBase64';
import officialLogoImg from '../../assets/images/aadish_official_logo_1790592123149.jpg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  inverted = false,
}) => {
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    const custom = localStorage.getItem('aadish_custom_logo');
    // If custom logo was a legacy relative /src/ path, discard it and use the bundled data URI
    if (custom && !custom.startsWith('/src/')) {
      return custom;
    }
    return OFFICIAL_LOGO_DATA_URI || officialLogoImg;
  });

  useEffect(() => {
    // Clean up any stale /src/... path in localStorage
    const stored = localStorage.getItem('aadish_custom_logo');
    if (stored && stored.startsWith('/src/')) {
      localStorage.removeItem('aadish_custom_logo');
      setLogoSrc(OFFICIAL_LOGO_DATA_URI);
    }

    const handleStorageChange = () => {
      const updated = localStorage.getItem('aadish_custom_logo');
      if (updated && !updated.startsWith('/src/')) {
        setLogoSrc(updated);
      } else {
        setLogoSrc(OFFICIAL_LOGO_DATA_URI);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.src !== OFFICIAL_LOGO_DATA_URI) {
      img.src = OFFICIAL_LOGO_DATA_URI;
    } else {
      img.src = '/logo.jpg';
    }
  };

  const textColor = inverted ? 'text-white' : 'text-stone-900';
  const subtextColor = inverted ? 'text-amber-300' : 'text-stone-600';

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-xs border border-stone-200/80 p-0.5 shrink-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Aadish Investments Official Logo"
            className="w-full h-full object-contain aspect-square select-none block"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="sync"
            onError={handleImageError}
          />
        </div>
        <div className="flex flex-col">
          <span className={`font-display text-base font-extrabold tracking-wider leading-none ${textColor}`}>
            AADISH
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-amber-600 uppercase">
            Investments
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Brand Logo Emblem with Eggshell, Golden Rupee & 'Our Opinion Counts' */}
      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden bg-white shadow-xs border border-stone-200 p-0.5 shrink-0 flex items-center justify-center transition-all duration-200">
        <img
          src={logoSrc}
          alt="Aadish Investments Official Logo"
          className="w-full h-full object-contain aspect-square select-none block filter drop-shadow-xs"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="sync"
          onError={handleImageError}
        />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display text-lg sm:text-xl font-extrabold tracking-wider leading-none ${textColor}`}
          >
            AADISH
          </span>
          <span className="font-display text-xs sm:text-sm font-semibold tracking-widest text-amber-600 uppercase">
            INVESTMENTS
          </span>
        </div>
        <span
          className={`italic font-serif text-[11px] sm:text-xs tracking-wide mt-1 ${subtextColor}`}
        >
          Our Opinion Counts
        </span>
      </div>
    </div>
  );
};
