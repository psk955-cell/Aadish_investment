import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  inverted?: boolean;
}

const DEFAULT_OFFICIAL_LOGO = '/src/assets/images/aadish_official_logo_1790592123149.jpg';

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  inverted = false,
}) => {
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    return localStorage.getItem('aadish_custom_logo') || DEFAULT_OFFICIAL_LOGO;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('aadish_custom_logo');
      if (stored) setLogoSrc(stored);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const textColor = inverted ? 'text-white' : 'text-stone-900';
  const subtextColor = inverted ? 'text-amber-300' : 'text-stone-600';

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-xs border border-stone-200/80 p-0.5 shrink-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Aadish Investments Official Logo"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
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
      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden bg-white shadow-xs border border-stone-200 p-0.5 shrink-0 flex items-center justify-center">
        <img
          src={logoSrc}
          alt="Aadish Investments Official Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
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
