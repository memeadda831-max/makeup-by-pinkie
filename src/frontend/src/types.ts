export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  includes: string[];
  icon: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  occasion: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CelebrityWork {
  id: string;
  name: string;
  description: string;
  occasion: string;
  compliment: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
