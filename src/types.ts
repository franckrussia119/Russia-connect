export type ViewType = 'home' | 'about' | 'safety' | 'pricing' | 'contact' | 'legal';

export interface RouteInfo {
  id: string;
  from: string;
  fromFlag: string;
  to: string;
  toFlag: string;
  price: string;
  transit: string;
  active: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
  badge?: string;
  deliveries?: number;
  accent: 'blue' | 'orange' | 'green';
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  cityCountry: string;
  role: 'traveller' | 'sender' | 'both';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
}
