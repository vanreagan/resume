import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section>
      <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-6 pb-2">
        Key Projects
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group ">
            {/* Header: Title & Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                {project.name}
              </h3>

              {/* Links (Repo / Live) */}
              <div className="flex gap-4 mt-1 sm:mt-0">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-violet-600 font-medium"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-violet-600 font-medium"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3 text-justify">
              {project.description}
            </p>

            {/* Tech Stack Pills - Smaller and cleaner than the Skills section */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.keywords?.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-violet-600 bg-violet-50 px-2 py-0.5 rounded border border-violet-100"
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
