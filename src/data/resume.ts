import type { ResumeData } from "../types";

// .env variables for privacy
const NAME = import.meta.env.VITE_NAME || "Someone";
const LEGAL_NAME = import.meta.env.VITE_LEGAL_NAME || "Someone Jr.";
const PRONOUNS = import.meta.env.VITE_PRONOUNS || "they/them";
const EMAIL = import.meta.env.VITE_EMAIL || "someone@example.com";
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
      startDate: "2023-08-01",
      highlights: [
        "Joined the development of a new SaaS product from the ground up offered by the company intended for audits. The application was built to be modular, customizable and user friendly, having a focus on User Experience and modern design.",
        "Worked in a multi-disciplinary team, with developers of different backgrounds, designers, product managers and quality assurance specialists. The team followed Agile methodologies and had a strong focus on communication and collaboration.",
        "Proposed and implemented improvements to the whole development process, including code reviews, testing, CI/CD pipelines, documentation, DevOps practices and more all while learning new technologies and best practices on the way.",
        "Provided direct support to applications owned by the company's clients, including troubleshooting, bug fixes and feature development. This required good communication skills and the ability to understand and solve problems quickly and efficiently on a production environment for both critical and non-critical issues.",
        "Led the development of a new internal tool.",
        "Participated in the hiring process for new developers, including resume screening, technical interviews and onboarding of new hires.",
        "Participated in presentations for the dev team about new technologies, best practices and other relevant topics to the development process.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Microservices",
        "AWS",
        "Docker",
        "Git",
        "GitHub",
        "JIRA",
        "MongoDB",
        "PostgreSQL",
        "Mongoose",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "REST API",
        "Express",
      ],
    },
    {
      company: "Aptiv",
      position: "Quality Systems Technician",
      startDate: "2021-05-01",
      endDate: "2023-08-01",
      highlights: [
        "Tasked with creating a central hub for in-department documentation, resources, tools and contact information using web technologies such as JavaScript, HTML, CSS and jQuery. Essentially working as the frontend developer.",
        "Provided technical support for global applications used across the whole company, including troubleshooting, bug fixes, user training, change management and documentation.",
        "Gained experience working with cross-functional teams across different time zones and departments, improving communication and collaboration skills.",
        "Gained a lot of experience in problem solving and critical thinking in the context of software development and IT support.",
        "Provided IT solutions for the department, including automation of manual tasks using scripting languages such as Bash and Python, improving efficiency and reducing errors.",
      ],
      techStack: ["JavaScript", "HTML", "CSS", "jQuery", "Bash", "Git"],
    },
    {
      company: "Aptiv",
      position: "Software Engineering Co-op",
      startDate: "2019-09-01",
      endDate: "2021-05-01",
      highlights: [
        "Worked under the Agile project management framework.",
        "Helped senior devs with Integration Testing, Software Qualification Testing, document redaction and modification of automation scripts used in the compilation and testing of software for automotive applications.",
        "Gained experience with JIRA, Confluence, Software Version Control and scripting languages such as Bash.",
        "Learnt about problem solving in the context of software development.",
        "Gained experience in setting up development environments down to hardware and OS level.",
      ],
      techStack: ["JIRA", "Confluence", "Git", "Bash"],
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
