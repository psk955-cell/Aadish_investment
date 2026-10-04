import React, { useState } from 'react';
import { PageId } from '../../types';
import { Logo } from '../common/Logo';
import { Phone, MessageCircle, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'investment-universe', label: 'Universe' },
    { id: 'sip-calculator', label: 'SIP Calculator' },
    { id: 'market-updates', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-shadow">
      {/* Utility Micro-Banner for Office & Direct Founders Line */}
      <div className="hidden lg:block bg-stone-900 text-stone-300 text-xs py-1.5 px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-normal">
          <div className="flex items-center gap-4 text-stone-400">
            <span>580, Narayan Peth, Pune, Maharashtra</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2014</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-medium">10 Yrs MDRT Recognition (LIC)</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Shrinivas: +91 99606 88388</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Prachi: +91 99607 88388</span>
            </a>
            <button
              onClick={() => handleLinkClick('client-service')}
              className="text-stone-300 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Client Service Request
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single element brand title / Logo lockup */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -ml-1"
        >
          <Logo variant="horizontal" />
        </button>

        {/* Zone 2: 4-6 Clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-2 transition-colors relative whitespace-nowrap cursor-pointer hover:text-amber-700 ${
                  isActive ? 'text-amber-700 font-semibold' : 'text-stone-700'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>
            );
          })}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center gap-1 py-2 text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
            >
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {servicesDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick('insurance-solutions')}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  Insurance Solutions
                </button>
                <button
                  onClick={() => handleLinkClick('blog')}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  Educational Blog
                </button>
                <button
                  onClick={() => handleLinkClick('testimonials')}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  Client Testimonials
                </button>
                <button
                  onClick={() => handleLinkClick('success-stories')}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  Case Studies
                </button>
                <div className="border-t border-stone-100 my-1"></div>
                <button
                  onClick={() => handleLinkClick('client-service')}
                  className="w-full text-left px-4 py-2 text-sm text-amber-700 font-medium hover:bg-amber-50 transition-colors"
                >
                  Client Service Desk
                </button>
                <button
                  onClick={() => handleLinkClick('disclosures')}
                  className="w-full text-left px-4 py-2 text-xs text-stone-500 hover:bg-stone-50 transition-colors"
                >
                  Regulatory Disclosures
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1-2 Primary Action Points */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWhatsApp}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleLinkClick('book-appointment')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-stone-900" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            <a
              href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-stone-800 bg-stone-100 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call Shrinivas</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-stone-800 bg-stone-100 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call Prachi</span>
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('insurance-solutions')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-50 font-medium"
            >
              Insurance Solutions
            </button>
            <button
              onClick={() => handleLinkClick('blog')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-50 font-medium"
            >
              Investor Blog
            </button>
            <button
              onClick={() => handleLinkClick('testimonials')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-50 font-medium"
            >
              Client Testimonials & Stories
            </button>
            <button
              onClick={() => handleLinkClick('client-service')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-amber-700 bg-amber-50/60"
            >
              Existing Client Service Request
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenWhatsApp();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (Shrinivas or Prachi)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
