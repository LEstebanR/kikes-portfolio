export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  pricing: string;
}

export interface Consultant {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  yearsOfExperience: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  testimonial: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  outcome: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}