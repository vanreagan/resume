/**
 * Root object for the Resume data
 */
export interface ResumeData {
  basics: Basics;
  work: WorkExperience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  languages?: Language[];
  volunteering?: Volunteer[];
}

/**
 * Basic personal information
 * mostly pulled from .env for privacy
 */
export interface Basics {
  name: string;
  legalName?: string;
  pronouns?: string;
  label: string;
  email: string;
  phone?: string;
  url?: string;
  summary: string;
  location: {
    city: string;
    country: string;
    region?: string;
  };
  profiles?: SocialProfile[];
}

export interface SocialProfile {
  network: "GitHub" | "LinkedIn" | "Twitter" | "Website" | string;
  username: string;
  url: string;
}

/**
 * Work Experience
 * Tip: Use 'highlights' for bullet points
 */
export interface WorkExperience {
  company: string;
  position: string;
  url?: string;
  startDate: string; // ISO 8601 format (YYYY-MM-DD)
  endDate?: string; // If undefined, assume "Present"
  summary?: string; // A high-level overview of the role (optional)
  highlights: string[]; // Bullet points (STAR method)
  techStack?: string[]; // Specific tech used in this role.
}

/**
 * Education
 */
export interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

/**
 * Grouped Skills
 * Better than a flat list for layout control
 */
export interface SkillGroup {
  name: string; // e.g. "Frontend", "Backend", "Tools"
  keywords: string[]; // e.g. ["React", "Tailwind"]
}

/**
 * Projects
 * Critical for your pivot to Web Dev
 */
export interface Project {
  name: string;
  description: string;
  highlights?: string[]; // Bullet points for what I specifically did
  keywords?: string[]; // Tech stack used
  startDate?: string;
  endDate?: string;
  url?: string; // Live demo link
  repo?: string; // GitHub link
}

export interface Language {
  language: string;
  fluency: "Native" | "Fluent" | "Professional" | "Intermediate" | "Basic";
}

export interface Volunteer {
  organization: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
}
