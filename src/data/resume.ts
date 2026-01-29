import type { ResumeData } from "../types";

// .env variables for privacy
const NAME = import.meta.env.VITE_NAME;
const LEGAL_NAME = import.meta.env.VITE_LEGAL_NAME;
const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE = import.meta.env.VITE_PHONE;
const CITY = import.meta.env.VITE_CITY;
const COUNTRY = import.meta.env.VITE_COUNTRY;

export const resumeData: ResumeData = {
  basics: {
    name: NAME,
    legalName: LEGAL_NAME,
    email: EMAIL,
    label: "Web Developer",
    phone: PHONE,
    summary:
      "Web developer with a focus on user-centric design across the whole stack. Passionate about technology, data, improvement and automation. Learning something new every day is what keeps me going. Creativity is my word of choice.",
    location: {
      city: CITY,
      country: COUNTRY,
    },
  },
  skills: [],
  projects: [],
  work: [],
  education: [],
};
