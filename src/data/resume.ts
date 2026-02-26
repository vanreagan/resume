import type { ResumeData } from "../types";

// .env variables for privacy
const NAME = import.meta.env.VITE_NAME || "Someone";
const LEGAL_NAME = import.meta.env.VITE_LEGAL_NAME || "Someone Jr.";
const PRONOUNS = import.meta.env.VITE_PRONOUNS || "they/them";
const EMAIL = import.meta.env.VITE_EMAIL || "someone@example.com";
const SECONDARY_EMAIL =
  import.meta.env.VITE_SECONDARY_EMAIL || "someone.else@example.com";
const PHONE = import.meta.env.VITE_PHONE || "123-456-7890";
const CITY = import.meta.env.VITE_CITY || "Somewhere";
const REGION = import.meta.env.VITE_REGION || "Some Region";
const COUNTRY = import.meta.env.VITE_COUNTRY || "Some Country";

export const resumeData: ResumeData = {
  basics: {
    name: NAME,
    legalName: LEGAL_NAME,
    pronouns: PRONOUNS,
    email: EMAIL,
    secondaryEmail: SECONDARY_EMAIL,
    phone: PHONE,
    label: "Web Developer",
    summary:
      "Web developer focused on user-centric design across the full stack. Passionate about automation and code-first infrastructure. Combines creative UI development with robust backend engineering to build scalable solutions.",
    location: {
      city: CITY,
      country: COUNTRY,
      region: REGION,
    },
    profiles: [
      {
        network: "GitHub",
        username: "vanreagan",
        url: "https://github.com/vanreagan",
      },
      {
        network: "LinkedIn",
        username: "ivanreagan",
        url: "https://www.linkedin.com/in/ivanreagan/",
      },
      // {
      //   network: "Website",
      //   username: "vanreagan.dev",
      //   url: "https://vanreagan.dev",
      // },
    ],
    languages: [
      {
        language: "English",
        fluency: "Fluent",
      },
      {
        language: "Spanish",
        fluency: "Native",
      },
    ],
  },
  skills: [
    {
      name: "Frontend",
      keywords: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "HTML",
        "CSS",
        "JavaScript",
        "Tanstack Query",
      ],
    },
    {
      name: "Backend",
      keywords: [
        "Node.js",
        "PostgreSQL",
        "Drizzle",
        "REST",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      name: "Frameworks & Tools",
      keywords: [
        "Next.js",
        "Git",
        "Vite",
        "GitHub",
        "GitHub Actions",
        "Docker",
        "Coolify",
      ],
    },
  ],
  projects: [
    {
      name: "Wedding Event Platform",
      description:
        "A custom full-stack wedding website and guest management portal handling RSVP logic for 100+ guests.",
      highlights: [
        "Engineered a secure authentication system using JWT and HttpOnly cookies, allowing passwordless guest identification via proxy.",
        "Designed a type-safe relational database schema using PostgreSQL and Drizzle ORM to manage complex guest relationships.",
        "Built a responsive, theme-aware UI with Next.js and Tailwind CSS, prioritizing mobile accessibility for non-technical users.",
        "Deployed via Docker containers to a custom VPS, managing Nginx reverse proxy configurations.",
      ],
      keywords: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "JWT",
        "Docker",
      ],
      startDate: "2025-10-15",
      endDate: "2026-02-20",
      url: "https://www.feryangel.com",
    },
    {
      name: "Internal Document Management System",
      description:
        "An enterprise-grade platform for digitizing and managing secure internal company workflows.",
      highlights: [
        "Architected a scalable MERN stack solution (MongoDB, Express, React, Node.js) to replace legacy manual file tracking.",
        "Implemented Mongoose schemas for strict data validation and efficient document indexing.",
        "Developed a reusable UI component library using Shadcn UI and TypeScript to standardize internal tooling.",
      ],
      keywords: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TypeScript",
        "Shadcn UI",
      ],

      startDate: "2024-06-01",
    },
    {
      name: "Dockerization of Legacy Applications",
      description:
        "A DevOps initiative to containerize and stabilize legacy PHP/MySQL infrastructure.",
      highlights: [
        "Migrated monolithic legacy PHP applications to Docker Compose environments, eliminating environment-parity issues.",
        "Wrote optimized Dockerfiles for multi-stage builds, reducing image sizes and deployment times.",
        "Established a reproducible local development environment for the engineering team.",
      ],
      keywords: ["Docker", "Linux", "Bash", "PHP", "MySQL"],
      startDate: "2024-11-01",
      endDate: "2025-02-28",
    },
    // {
    //   name: "Personal Portfolio Website",
    //   description:
    //     "Developed a personal portfolio website to showcase my projects and skills using React and Tailwind CSS. The website features a clean, responsive design and includes sections for my resume, project highlights, and contact information.",
    //   keywords: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    //   highlights: [
    //     "Created a visually appealing and responsive portfolio website to effectively showcase my skills and projects.",
    //     "Implemented modern web design principles using React and Tailwind CSS for a seamless user experience.",
    //     "Optimized website performance and accessibility to ensure a positive experience across all devices.",
    //   ],
    //   startDate: "2026-02-20",
    //   url: "https://vanreagan.dev",
    // },
  ],
  work: [
    {
      company: "BEPC, Inc.",
      position: "Software Developer II",
      startDate: "2023-08",
      highlights: [
        "Spearheaded the greenfield development of a modular SaaS audit platform, prioritizing UX and scalable microservices architecture.",
        "Established comprehensive CI/CD pipelines and DevOps practices, reducing deployment friction and improving code quality standards.",
        "Collaborated within a cross-functional Agile team to deliver critical features, ensuring alignment between product requirements and technical implementation.",
        "Mentored junior developers and led technical onboarding, including conducting code reviews and technical interviews.",
        "Optimized production application performance and resolved critical issues for client-facing systems.",
      ],
      techStack: [
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "TypeScript",
        "PostgreSQL",
        "Microservices",
      ],
    },
    {
      company: "Aptiv",
      position: "Quality Systems Technician",
      startDate: "2021-05",
      endDate: "2023-08",
      highlights: [
        "Developed and maintained a central internal portal using JavaScript/HTML/CSS, streamlining access to department resources.",
        "Automated manual data workflows using Python and Bash scripting, significantly reducing human error and processing time.",
        "Provided Tier-2 technical support for global enterprise applications, managing change requests and user documentation.",
      ],
      techStack: ["JavaScript", "Python", "Bash", "HTML/CSS", "Git"],
    },
    {
      company: "Aptiv",
      position: "Software Engineering Co-op",
      startDate: "2019-09",
      endDate: "2021-05",
      highlights: [
        "Executed Integration Testing and Software Qualification Testing for safety-critical automotive software.",
        "Maintained automation scripts for build compilation and testing pipelines.",
        "Configured development environments and managed version control workflows using Plastic SCM as the Version Control System and JIRA.",
      ],
      techStack: ["Bash", "JIRA", "VCS", "Testing"],
    },
  ],
  education: [
    {
      institution: "Autonomous University of Ciudad Juarez",
      area: "Digital Systems and Communications Engineering",
      studyType: "Coursework towards Bachelor's Degree",
      startDate: "2015-08-01",
      endDate: "2021-05-01",
    },
  ],
};
