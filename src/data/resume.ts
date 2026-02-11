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
        "Worked according to the size and scope of the project, avoiding overengineering and focusing on function and simplicity.",
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
      institution: "Autonomus University of Ciudad Juarez",
      area: "Digital Systems and Communications Engineering",
      studyType: "Incomplete Bachelor's Degree",
      startDate: "2015-08-01",
      endDate: "2021-05-01",
    },
  ],
};
