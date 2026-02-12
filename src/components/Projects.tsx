import { ExternalLink } from "lucide-react";
import { AiFillGithub as Github } from "react-icons/ai";
import type { Project } from "../types";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="flex flex-col gap-4 pb-2 break-inside-avoid">
      <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800 mt-2">
        Key Projects
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <div className="flex gap-4 mt-1 sm:mt-0">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-accent font-medium"
                  >
                    <ExternalLink size={14} />
                    <span>Visit Site</span>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-accent font-medium"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-3 text-justify">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1 mb-4 marker:text-gray-400 text-justify">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="pl-1">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {project.keywords?.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-accent bg-violet-50 px-2 py-0.5 rounded border border-violet-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
