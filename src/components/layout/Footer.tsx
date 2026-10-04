import React from 'react';
import { PageId } from '../../types';
import { Logo } from '../common/Logo';
import { COMPANY_INFO } from '../../data/content';
import { Phone, Mail, MapPin, ShieldAlert, Award, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <Logo inverted variant="horizontal" />
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Founded in 2012, Aadish Investments provides disciplined financial planning,
              mutual fund distribution, life and health insurance protection, and long-term
              wealth advisory in Pune, Maharashtra.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400/90 font-medium">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>10 Consecutive Years of MDRT Recognition Connected with LIC</span>
            </div>
            <div className="text-xs text-stone-500 pt-1">
              Office: {COMPANY_INFO.location.address}, {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state} – {COMPANY_INFO.location.pincode}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  About Us & Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Financial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('investment-universe')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Investment Universe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('insurance-solutions')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Insurance Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sip-calculator')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  SIP Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Insights & Clients */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Insights & Clients
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('market-updates')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Market & NFO Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Investor Education Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('success-stories')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Case Studies & Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('client-service')}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors text-left"
                >
                  Client Service Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('book-appointment')}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors text-left"
                >
                  Book a Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contacts.shrinivas.phoneRaw}`}
                  className="hover:text-white flex items-start gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-stone-200">Shrinivas Kulkarni</div>
                    <div className="text-xs text-stone-400">{COMPANY_INFO.contacts.shrinivas.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contacts.prachi.phoneRaw}`}
                  className="hover:text-white flex items-start gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-stone-200">Prachi Kulkarni</div>
                    <div className="text-xs text-stone-400">{COMPANY_INFO.contacts.prachi.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white flex items-center gap-2 text-xs text-stone-300 break-all"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1.5 pt-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Pune Office Location</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Mandatory Compliance Strip */}
        <div className="py-8 border-b border-stone-800 text-xs text-stone-400 space-y-3 leading-relaxed">
          <div className="flex items-start gap-2 bg-stone-950/60 p-4 rounded-xl border border-stone-800/80">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-200">
                Statutory Risk Notice: Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
              </p>
              <p className="text-stone-400 mt-1">
                Aadish Investments operates as an AMFI-registered Mutual Fund Distributor (ARN verification and EUIN details displayed upon final regulatory publication). An MFD distributes financial products and facilitates transactions; we do not provide fee-based investment advice unless separately registered as a SEBI Investment Adviser. Past performance is no guarantee of future returns.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[11px] text-stone-500">
            <div>
              <span className="font-semibold text-stone-400">AMFI / ARN Registration:</span>{' '}
              [ARN Verification In Progress - Displayed Compliantly Upon Launch]
            </div>
            <div>
              <span className="font-semibold text-stone-400">IRDAI Insurance License:</span>{' '}
              [Authorized Corporate Agent / Solicitation License Details In Verification]
            </div>
            <div>
              <span className="font-semibold text-stone-400">Grievance Redressal Officer:</span>{' '}
              Shrinivas Kulkarni · grievance@aadishinvestments.com (Pune)
            </div>
          </div>

          <p className="text-[11px] text-stone-500">
            *Milestone statistics (₹100 Cr+ AUM, 2,000+ Life Insurance Customers, 1,000+ Wealth Clients, 10 Years MDRT) are based on internal business management records from 2012 onwards, subject to audit and periodic verification. Insurance is the subject matter of solicitation; policy issuance and claim decisions are exclusively decided by the respective insurance companies.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Aadish Investments. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('disclosures')}
              className="hover:text-stone-300 transition-colors"
            >
              Terms of Use & Disclaimers
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('disclosures')}
              className="hover:text-stone-300 transition-colors"
            >
              Risk Disclosures & Grievance
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('client-service')}
              className="hover:text-stone-300 transition-colors"
            >
              Client Service Request
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
