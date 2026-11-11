export type NavSection = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'what-we-do' 
  | 'execution' 
  | 'work' 
  | 'programs' 
  | 'clients' 
  | 'why-us' 
  | 'approach' 
  | 'presence' 
  | 'contact';

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CapabilityItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExecutionStage {
  stage: string;
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WhyUsPoint {
  badge: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

export interface PresenceRegion {
  id: string;
  state: string;
  status: string;
  description: string;
  keyCenters: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 
    | 'Corporate Events'
    | 'Intellectual Properties'
    | 'School Engagement Activities'
    | 'Brand Promotions'
    | 'Product Marketing'
    | 'Award Ceremonies'
    | 'Competitions'
    | 'CSR / Community Engagement'
    | 'Experiential Marketing';
  subtitle?: string;
  concept?: string;
  description: string;
  outcome?: string;
  highlights?: string[];
  year?: string;
  date?: string;
  location?: string;
  image: string;
  images?: string[];
  logo?: string;
}

export interface HeldProgramItem {
  name: string;
  logo: string;
  projectId?: string;
  category?: string;
  clientOrOrganizer?: string;
  highlight?: string;
}

export interface ClientPartnerItem {
  name: string;
  category: string;
  description?: string;
  logo?: string;
}
