export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  className: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export interface TimelineItem {
  duration: string;
  title: string;
  institution: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink: string;
}