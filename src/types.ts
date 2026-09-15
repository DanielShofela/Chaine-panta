export interface FoodKit {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  idealFor: string;
  estimatedPriceRange: string;
  items: string[];
  features: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  kitsOrdered: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
