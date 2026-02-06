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
      "I'm a web developer with a focus on user-centric design across the whole stack. Passionate about technology, data, improvement and automation. Learning something new every day is what keeps me going. Creativity is my word of choice. I love using a code-first approach as coding is what I consider my best tool, from infrastructure to UI development.",
    location: {
      city: CITY,
      country: COUNTRY,
    },
  },
  skills: [
    {
      name: "Frontend",
      keywords: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Tanstack Query",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "Backend",
      keywords: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Drizzle",
        "Mongoose",
        "REST",
      ],
    },
    {
      name: "Frameworks & Tools",
      keywords: [
        "Vite",
        "Git",
        "Docker",
        "Next.js",
        "Coolify",
        "Hetzner",
        "Supabase",
        "GitHub",
        "GitHub Actions",
      ],
    },
  ],
  projects: [
    {
      name: "Wedding Event Website + Guest Management App",
      description:
        "Designed and developed a custom wedding website using Next.js for client 'F&A' featuring dynamic guest management built with a simple REST API. Used JWT for authentication and guest identification through cookies handled by proxy to let the couple identify responses without requiring each guest to log in. A PostgreSQL database was used and interfaced with Drizzle ORM.",
      keywords: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Drizzle ORM",
        "JWT",
        "REST API",
        "UX/UI Design",
      ],
      highlights: [
        "Developed a full-stack web application with a focus on user experience and responsive design.",
        "Implemented secure guest authentication and management features using JWT and cookies.",
        "Designed a visually appealing and user-friendly interface tailored to the client's wedding theme.",
      ],
      startDate: "2025-10-15",
      endDate: "2026-02-20",
      url: "https://www.feryangel.com",
    },
    {
      name: "Document Management System",
      description:
        "Built the basis of a system used to manage documents internally for the company I work for currently. The complete process was done by me except for wireframing and mockups. The tech stack was MERN with TypeScript, Shadcn UI, Mongoose as the ORM. Data modelling and documentation was done by me. Project was scrapped since the company ran out of budget for internal software projects.",
      keywords: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TypeScript",
        "Mongoose",
        "REST API",
        "Shadcn UI",
      ],
      highlights: [
        "Designed and implemented a full-stack document management system using the MERN stack.",
        "Created a user-friendly interface with Shadcn UI to enhance user experience and accessibility.",
        "Developed robust backend services with Express and Mongoose for efficient data handling and storage.",
      ],
      startDate: "2024-06-01",
    },
    {
      name: "Dockerization of Legacy Applications",
      description:
        "Containerized legacy applications built with PHP and MySQL to improve deployment efficiency and scalability using Docker. Created Dockerfiles and Docker Compose configurations to streamline the setup process for development and production environments.",
      keywords: ["Docker", "Docker Compose", "DevOps", "Legacy Systems"],
      highlights: [
        "Successfully containerized legacy PHP applications, enhancing deployment speed and consistency across environments.",
        "Developed Dockerfiles and Docker Compose configurations to simplify the setup process for both development and production.",
        "Improved application scalability and maintainability through containerization, reducing downtime during updates.",
      ],
      startDate: "2023-11-01",
      endDate: "2024-02-28",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "Developed a personal portfolio website to showcase my projects and skills using React and Tailwind CSS. The website features a clean, responsive design and includes sections for my resume, project highlights, and contact information.",
      keywords: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      highlights: [
        "Created a visually appealing and responsive portfolio website to effectively showcase my skills and projects.",
        "Implemented modern web design principles using React and Tailwind CSS for a seamless user experience.",
        "Optimized website performance and accessibility to ensure a positive experience across all devices.",
      ],
      startDate: "2023-05-01",
      endDate: "2023-06-15",
      url: "https://vanreagan.dev",
    },
  ],
  work: [],
  education: [],
};
