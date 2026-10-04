export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'investment-universe'
  | 'insurance-solutions'
  | 'sip-calculator'
  | 'market-updates'
  | 'blog'
  | 'testimonials'
  | 'success-stories'
  | 'book-appointment'
  | 'contact'
  | 'privacy-policy'
  | 'disclosures'
  | 'client-service';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'investment' | 'insurance' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  suitability: string;
  regulatoryNote: string;
  icon: string;
  badge?: string;
}

export interface UniverseCategory {
  id: string;
  title: string;
  group: 'wealth' | 'protection' | 'fixed-income' | 'specialized';
  summary: string;
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive' | 'Tailored';
  timeHorizon: string;
  whoShouldConsider: string;
  regulatoryScope: string;
  keyProducts: string[];
}

export interface MarketUpdate {
  id: string;
  title: string;
  category:
    | 'Market Updates'
    | 'Mutual Fund Updates'
    | 'NFO Updates'
    | 'IPO Updates'
    | 'Insurance Updates'
    | 'Tax Updates'
    | 'Retirement Planning'
    | 'Investor Education';
  publishDate: string;
  summary: string;
  fullContent: string;
  author: string;
  disclaimer: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishDate: string;
  reviewDate: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  contentParagraphs: string[];
  disclaimer: string;
}

export interface Testimonial {
  id: string;
  clientIdentifier: string; // "Rajesh P., Software Architect" or "Verified Client (Pune)"
  category: 'Life Insurance' | 'Mutual Funds & SIP' | 'Health Insurance' | 'Retirement Planning' | 'NRI Advisory';
  city: string;
  experienceYear: string;
  quote: string;
  serviceFocus: string;
  hasPhoto?: boolean;
}

export interface SuccessStory {
  id: string;
  title: string;
  clientProfile: string;
  initialChallenge: string;
  advisoryApproach: string[];
  outcome: string;
  category: string;
  disclaimer: string;
}

export interface AppointmentFormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  ageGroup: string;
  occupation: string;
  serviceRequired: string;
  meetingMode: 'Phone Call' | 'Office Meeting (Pune)' | 'Google Meet / Video' | 'WhatsApp';
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

export interface ClientServiceFormData {
  fullName: string;
  mobile: string;
  email: string;
  existingClient: 'Yes' | 'No';
  serviceType:
    | 'Claim Support Assistance'
    | 'Policy Renewal Guidance'
    | 'Nominee / Address Change Help'
    | 'Capital Gains / Tax Statement'
    | 'Portfolio Review Consultation'
    | 'Other Policy Service';
  policyOrFolioHint: string;
  message: string;
  consent: boolean;
}
