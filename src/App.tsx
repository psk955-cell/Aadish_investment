/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppModal, FloatingWhatsAppTrigger } from './components/layout/WhatsAppModal';
import { CookieBanner } from './components/layout/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { InvestmentUniversePage } from './pages/InvestmentUniversePage';
import { InsuranceSolutionsPage } from './pages/InsuranceSolutionsPage';
import { SipCalculatorPage } from './pages/SipCalculatorPage';
import { MarketUpdatesPage } from './pages/MarketUpdatesPage';
import { BlogPage } from './pages/BlogPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclosuresPage } from './pages/DisclosuresPage';
import { ClientServicePage } from './pages/ClientServicePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState<boolean>(false);
  const [whatsAppDefaultTopic, setWhatsAppDefaultTopic] = useState<string>('SIP Investment & Financial Planning');
  const [appointmentInitialNote, setAppointmentInitialNote] = useState<string>('');

  // Handle URL hash sync for direct links & back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'investment-universe',
        'insurance-solutions',
        'sip-calculator',
        'market-updates',
        'blog',
        'testimonials',
        'success-stories',
        'book-appointment',
        'contact',
        'privacy-policy',
        'disclosures',
        'client-service',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsAppWithTopic = (topic: string) => {
    setWhatsAppDefaultTopic(topic);
    setWhatsAppModalOpen(true);
  };

  const handleOpenWhatsAppDirectText = (text: string) => {
    const url = `https://wa.me/919960688388?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePreFillAppointment = (note: string) => {
    setAppointmentInitialNote(note);
    navigateTo('book-appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenWhatsApp={() => openWhatsAppWithTopic('Financial Advisory & Planning')}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenWhatsApp={() => openWhatsAppWithTopic('Financial Consultation')}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenWhatsApp={() => openWhatsAppWithTopic('Founder Story & Advisory Guidance')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'investment-universe' && (
          <InvestmentUniversePage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'insurance-solutions' && (
          <InsuranceSolutionsPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'sip-calculator' && (
          <SipCalculatorPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'market-updates' && (
          <MarketUpdatesPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            onPreFillAppointment={handlePreFillAppointment}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={navigateTo}
            onOpenWhatsApp={() => openWhatsAppWithTopic('Client Stories & Advisory')}
          />
        )}

        {currentPage === 'success-stories' && (
          <SuccessStoriesPage
            onNavigate={navigateTo}
            onOpenWhatsApp={() => openWhatsAppWithTopic('Goal Planning Case Studies')}
          />
        )}

        {currentPage === 'book-appointment' && (
          <BookAppointmentPage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
            initialNote={appointmentInitialNote}
          />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage
            onNavigate={navigateTo}
            onOpenWhatsApp={() => openWhatsAppWithTopic('Contacting Aadish Investments')}
          />
        )}

        {currentPage === 'disclosures' && <DisclosuresPage onNavigate={navigateTo} />}

        {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={navigateTo} />}

        {currentPage === 'client-service' && (
          <ClientServicePage
            onNavigate={navigateTo}
            onOpenWhatsAppWithText={handleOpenWhatsAppDirectText}
          />
        )}
      </main>

      {/* Footer with Compliance Links and Disclaimers */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Quick-Launcher */}
      <FloatingWhatsAppTrigger
        onOpen={() => openWhatsAppWithTopic('General Inquiry')}
      />

      {/* WhatsApp Modal with Founder Selection */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        defaultTopic={whatsAppDefaultTopic}
      />

      {/* Cookie & Privacy Banner */}
      <CookieBanner onNavigate={navigateTo} />
    </div>
  );
}
